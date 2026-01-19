import os from "os";
import path from "path";

function getPlatform() {
  const platform = os.platform();
  return {
    platform,
    isWindows: platform === "win32",
    isMac: platform === "darwin",
    isLinux: platform === "linux"
  };
}

function getTempDir() {
  return os.tmpdir();
}

function getAppSupportDir(platformInfo = getPlatform()) {
  if (platformInfo.isWindows) {
    return (
      process.env.APPDATA ||
      path.join(os.homedir(), "AppData", "Roaming")
    );
  }

  if (platformInfo.isMac) {
    return path.join(os.homedir(), "Library", "Application Support");
  }

  return process.env.XDG_CONFIG_HOME || path.join(os.homedir(), ".config");
}

function getIdePaths(projectRoot, platformInfo = getPlatform(), ideSkillsPaths = null, ideMcpPaths = null) {
  const appSupport = getAppSupportDir(platformInfo);
  const home = os.homedir();

  // Default paths if not provided via config
  const skillsPaths = ideSkillsPaths || {
    claude: ".claude/skills",
    cursor: ".cursor/skills",
    codex: ".codex/skills",
    vscode: ".vscode/skills",
    local: ".github/skills"
  };

  const mcpPaths = ideMcpPaths || {
    claude: ".claude/mcp.json",
    cursor: ".cursor/mcp.json",
    codex: ".codex/mcp.json",
    vscode: ".vscode/mcp.json"
  };

  return {
    claude: {
      name: "Claude Code",
      mcpConfig: path.join(appSupport, "Claude", "mcp.json"),
      localMcpConfig: path.join(projectRoot, mcpPaths.claude),
      mcpServerKey: "servers",
      skillsDir: path.join(home, skillsPaths.claude),
      localSkillsDir: path.join(projectRoot, skillsPaths.claude)
    },
    cursor: {
      name: "Cursor",
      mcpConfig: path.join(appSupport, "Cursor", "mcp.json"),
      localMcpConfig: path.join(projectRoot, mcpPaths.cursor),
      mcpServerKey: "mcpServers",
      skillsDir: path.join(home, skillsPaths.cursor),
      localSkillsDir: path.join(projectRoot, skillsPaths.cursor)
    },
    codex: {
      name: "Codex",
      mcpConfig: path.join(home, ".codex", "mcp.json"),
      localMcpConfig: path.join(projectRoot, mcpPaths.codex),
      mcpServerKey: "servers",
      skillsDir: path.join(home, skillsPaths.codex),
      localSkillsDir: path.join(projectRoot, skillsPaths.codex)
    },
    vscode: {
      name: "VSCode",
      mcpConfig: path.join(appSupport, "Code", "User", "mcp.json"),
      localMcpConfig: path.join(projectRoot, mcpPaths.vscode),
      mcpServerKey: "servers",
      skillsDir: path.join(home, skillsPaths.vscode),
      localSkillsDir: path.join(projectRoot, skillsPaths.vscode)
    }
  };
}

export {
  getPlatform,
  getAppSupportDir,
  getIdePaths,
  getTempDir
};