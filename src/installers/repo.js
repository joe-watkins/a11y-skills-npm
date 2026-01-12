import fs from "fs/promises";
import path from "path";
import { spawn } from "child_process";

async function pathExists(target) {
  try {
    await fs.access(target);
    return true;
  } catch {
    return false;
  }
}

function run(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: "inherit", ...options });
    child.on("error", reject);
    child.on("close", (code) => {
      if (code === 0) {
        resolve();
        return;
      }
      reject(new Error(`${command} ${args.join(" ")} failed with code ${code}`));
    });
  });
}

async function ensureRepo({ url, dir }) {
  const hasDir = await pathExists(dir);
  const gitDir = path.join(dir, ".git");

  if (hasDir) {
    const isGitRepo = await pathExists(gitDir);
    if (!isGitRepo) {
      throw new Error(`Target exists but is not a git repo: ${dir}`);
    }

    await run("git", ["-C", dir, "pull", "--ff-only"]);
    return { action: "updated", dir };
  }

  await run("git", ["clone", "--depth", "1", url, dir]);
  return { action: "cloned", dir };
}

async function buildMcp({ dir, buildCommands }) {
  if (!buildCommands || buildCommands.length === 0) {
    return;
  }

  for (const command of buildCommands) {
    const parts = command.split(" ");
    const cmd = parts[0];
    const args = parts.slice(1);
    await run(cmd, args, { cwd: dir, shell: true });
  }
}

async function copyDirectory(source, dest) {
  await fs.mkdir(dest, { recursive: true });
  const entries = await fs.readdir(source, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(source, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      await copyDirectory(srcPath, destPath);
    } else {
      await fs.copyFile(srcPath, destPath);
    }
  }
}

async function copyMcpServers(tempMcpDir, finalMcpDir) {
  if (!(await pathExists(tempMcpDir))) {
    return;
  }

  await fs.mkdir(finalMcpDir, { recursive: true });
  const entries = await fs.readdir(tempMcpDir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const srcPath = path.join(tempMcpDir, entry.name);
      const destPath = path.join(finalMcpDir, entry.name);
      await copyDirectory(srcPath, destPath);
    }
  }
}

async function cleanupTemp(tempDir) {
  if (await pathExists(tempDir)) {
    await fs.rm(tempDir, { recursive: true, force: true });
  }
}

export {
  ensureRepo,
  buildMcp,
  copyMcpServers,
  cleanupTemp
};