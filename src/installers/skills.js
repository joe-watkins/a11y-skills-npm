import fs from "fs/promises";
import path from "path";
import { spawn } from "child_process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
    const child = spawn(command, args, { stdio: "pipe", shell: true, ...options });
    let stdout = "";
    let stderr = "";
    
    child.stdout?.on("data", (data) => { stdout += data; });
    child.stderr?.on("data", (data) => { stderr += data; });
    
    child.on("error", reject);
    child.on("close", (code) => {
      if (code === 0) {
        resolve({ stdout, stderr });
        return;
      }
      reject(new Error(`${command} ${args.join(" ")} failed with code ${code}: ${stderr}`));
    });
  });
}

async function cleanupTemp(tempDir) {
  if (await pathExists(tempDir)) {
    await fs.rm(tempDir, { recursive: true, force: true });
  }
}

/**
 * Install skills from npm packages into IDE skills directories.
 * 
 * 1. Creates temp directory with package.json listing skills as dependencies
 * 2. Runs npm install in temp directory
 * 3. Copies installed skill packages (SKILL.md files) to target directories
 * 4. Returns temp directory path for cleanup
 * 
 * @param {string[]} skills - Array of npm package names
 * @param {string[]} targetDirs - Array of target directories to install skills to
 * @param {string} tempDir - Temporary directory for npm install
 * @returns {Promise<{installed: number, tempDir: string}>}
 */
async function installSkillsFromNpm(skills, targetDirs, tempDir) {
  // Create temp directory
  await fs.mkdir(tempDir, { recursive: true });

  // Create package.json with skills as dependencies
  const packageJson = {
    name: "a11y-skills-temp",
    version: "1.0.0",
    private: true,
    dependencies: {}
  };

  for (const skill of skills) {
    packageJson.dependencies[skill] = "latest";
  }

  await fs.writeFile(
    path.join(tempDir, "package.json"),
    JSON.stringify(packageJson, null, 2)
  );

  // Run npm install
  await run("npm", ["install", "--production"], { cwd: tempDir });

  // Copy SKILL.md files from installed packages to target directories
  const nodeModulesDir = path.join(tempDir, "node_modules");
  let installedCount = 0;

  for (const targetDir of targetDirs) {
    await fs.mkdir(targetDir, { recursive: true });

    for (const skill of skills) {
      const skillPackageDir = path.join(nodeModulesDir, skill);
      const skillMdPath = path.join(skillPackageDir, "SKILL.md");

      if (await pathExists(skillMdPath)) {
        // Create skill directory in target (use package name without -skill suffix)
        const skillDirName = skill.replace(/-skill$/, "");
        const targetSkillDir = path.join(targetDir, skillDirName);
        await fs.mkdir(targetSkillDir, { recursive: true });

        // Copy SKILL.md
        await fs.copyFile(skillMdPath, path.join(targetSkillDir, "SKILL.md"));
        installedCount++;
      }
    }

    // Copy the comprehensive README template to the skills directory
    const readmeTemplatePath = path.join(__dirname, "..", "templates", "skills-README.md");
    const targetReadmePath = path.join(targetDir, "README.md");
    if (await pathExists(readmeTemplatePath)) {
      await fs.copyFile(readmeTemplatePath, targetReadmePath);
    }
  }

  return { 
    installed: installedCount / targetDirs.length, 
    tempDir 
  };
}

export {
  installSkillsFromNpm,
  cleanupTemp
};