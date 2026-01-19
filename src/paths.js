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

function getIdePaths(projectRoot, platformInfo = getPlatform(), ideConfigs = []) {
  const home = os.homedir();
  const paths = {};

  for (const ide of ideConfigs) {
    // Use custom paths from config, or fall back to default pattern: ~/.{id}/
    const skillsFolder = ide.skillsFolder || `.${ide.id}/skills`;
    const mcpConfigFile = ide.mcpConfigFile || `.${ide.id}/mcp.json`;

    paths[ide.id] = {
      name: ide.displayName,
      mcpConfig: path.join(home, mcpConfigFile),
      localMcpConfig: path.join(projectRoot, mcpConfigFile),
      mcpServerKey: ide.mcpServerKey,
      skillsDir: path.join(home, skillsFolder),
      localSkillsDir: path.join(projectRoot, skillsFolder)
    };
  }

  return paths;
}

export {
  getPlatform,
  getAppSupportDir,
  getIdePaths,
  getTempDir
};