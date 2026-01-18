import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import prompts from "prompts";

import { header, info, warn, success, startSpinner, formatPath } from "./ui.js";
import { getPlatform, getIdePaths, getTempDir } from "./paths.js";
import { installSkillsFromNpm, cleanupTemp } from "./installers/skills.js";
import { installMcpConfig } from "./installers/mcp.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function loadConfig() {
  const configPath = path.join(__dirname, "..", "config", "a11y.json");
  const raw = await fs.readFile(configPath, "utf8");
  return JSON.parse(raw);
}

function parseArgs(argv) {
  const args = new Set(argv.slice(2));
  return {
    autoYes: args.has("--yes") || args.has("-y"),
    scope: args.has("--global") ? "global" : args.has("--local") ? "local" : null
  };
}

function formatOs(platformInfo) {
  if (platformInfo.isWindows) return "Windows";
  if (platformInfo.isMac) return "macOS";
  if (platformInfo.isLinux) return "Linux";
  return platformInfo.platform;
}

async function run() {
  const projectRoot = process.cwd();
  const platformInfo = getPlatform();
  const config = await loadConfig();
  const idePaths = getIdePaths(projectRoot, platformInfo, config.ideSkillsPaths);
  const args = parseArgs(process.argv);

  header("A11y Devkit Deploy", "Install skills + MCP servers across IDEs");
  info(`Detected OS: ${formatOs(platformInfo)}`);

  const ideChoices = [
    { title: "Claude Code", value: "claude" },
    { title: "Cursor", value: "cursor" },
    { title: "Codex", value: "codex" },
    { title: "VSCode", value: "vscode" }
  ];

  let scope = args.scope;
  let ideSelection = ["claude", "cursor", "codex", "vscode"];
  let installSkills = true;

  if (!args.autoYes) {
    const response = await prompts(
      [
        {
          type: scope ? null : "select",
          name: "scope",
          message: "Install skills + repo locally or globally?",
          choices: [
            { title: "Local to this project", value: "local" },
            { title: "Global for this user", value: "global" }
          ],
          initial: 0
        },
        {
          type: "multiselect",
          name: "ides",
          message: "Configure MCP for which IDEs?",
          choices: ideChoices,
          initial: ideChoices.map((_, index) => index)
        },
        {
          type: "toggle",
          name: "installSkills",
          message: "Install skills into IDE skills folders?",
          active: "yes",
          inactive: "no",
          initial: true
        }
      ],
      {
        onCancel: () => {
          warn("Setup cancelled.");
          process.exit(0);
        }
      }
    );

    scope = scope || response.scope;
    ideSelection = response.ides || ideSelection;
    installSkills = response.installSkills;
  }

  if (!scope) {
    scope = "local";
  }

  if (!ideSelection.length) {
    warn("No IDEs selected. MCP installation requires at least one IDE.");
    process.exit(1);
  }

  info(`Install scope: ${scope === "local" ? "Local" : "Global"}`);

  // Create temp directory for npm install
  const tempDir = path.join(getTempDir(), `.a11y-devkit-${Date.now()}`);

  if (installSkills) {
    const skillsSpinner = startSpinner("Installing skills from npm...");

    try {
      const skillTargets = scope === "local"
        ? ideSelection.map((ide) => idePaths[ide].localSkillsDir)
        : ideSelection.map((ide) => idePaths[ide].skillsDir);

      const result = await installSkillsFromNpm(config.skills, skillTargets, tempDir);
      skillsSpinner.succeed(`${result.installed} skills installed to ${skillTargets.length} IDE location(s).`);
    } catch (error) {
      skillsSpinner.fail(`Failed to install skills: ${error.message}`);
    }
  } else {
    warn("Skipping skills install to IDE folders.");
  }

  // Configure MCP servers using npx (no local installation needed!)
  const mcpSpinner = startSpinner("Updating MCP configurations...");
  for (const ide of ideSelection) {
    await installMcpConfig(idePaths[ide].mcpConfig, config.mcpServers, idePaths[ide].mcpServerKey);
  }
  mcpSpinner.succeed(`MCP configs updated for ${ideSelection.length} IDE(s).`);

  // Clean up temporary directory
  const cleanupSpinner = startSpinner("Cleaning up temporary files...");
  await cleanupTemp(tempDir);
  cleanupSpinner.succeed("Temporary files removed");

  success("All done. Your skills and MCP servers are ready.");
  info("Skills installed from npm packages.");
  info("MCP servers use npx - no local installation needed!");
  info("You can re-run this CLI any time to update skills and configs.");
}

export {
  run
};
