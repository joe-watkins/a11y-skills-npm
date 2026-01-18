# A11y Devkit Deploy

A cross-platform CLI for deploying accessibility skills and MCP servers across Claude Code, Cursor, Codex, and VSCode.

## Install

```bash
npm install -g a11y-devkit-deploy
# or
npx a11y-devkit-deploy
```

## Usage

```bash
a11y-devkit-deploy
```

### Flags

- `--local` / `--global`: Skip the scope prompt.
- `--yes`: Use defaults (local scope, all IDEs, install skills).

## What It Does

This CLI automates the setup of accessibility tooling by:

1. **Installing skills from npm** - Downloads and installs 7 accessibility skill packages
2. **Configuring MCP servers** - Updates each IDE's MCP config to enable 5 accessibility-focused MCP servers:
   - **wcag** - WCAG 2.2 guidelines, success criteria, and techniques
   - **aria** - WAI-ARIA roles, states, properties, and patterns
   - **magentaa11y** - Component accessibility acceptance criteria
   - **a11y-personas** - Accessibility personas for diverse user needs
   - **arc-issues** - Format AxeCore violations into standardized issue templates

### Skills Installed

The following skill packages are installed from npm:

| Skill | Package | Description |
|-------|---------|-------------|
| a11y-base-web | `a11y-base-web-skill` | Foundational accessibility patterns for web code |
| a11y-issue-writer | `a11y-issue-writer-skill` | Write clear accessibility issue reports |
| a11y-tester | `a11y-tester-skill` | Automated testing with axe-core and Playwright |
| a11y-remediator | `a11y-remediator-skill` | Fix accessibility issues in code |
| a11y-validator | `a11y-validator-skill` | Validate accessibility compliance |
| web-standards | `web-standards-skill` | Web standards and best practices |
| a11y-audit-fix-agent-orchestrator | `a11y-audit-fix-agent-orchestrator-skill` | Orchestrate full audit and fix workflows |

### No Local MCP Installation Required!

MCP servers are configured to use `npx`, which means:
- **No cloning** of MCP server repositories
- **No building** or `npm install` steps
- **No disk space** used for local copies
- **Always up-to-date** - npx fetches the latest version automatically

The generated MCP config looks like this:

```json
{
  "mcpServers": {
    "wcag": {
      "command": "npx",
      "args": ["-y", "wcag-mcp"]
    },
    "aria": {
      "command": "npx",
      "args": ["-y", "aria-mcp"]
    }
  }
}
```

## Configuration

Edit `config/a11y.json` to customize the deployment:

- `skills` - Array of npm package names to install as skills
- `ideSkillsPaths` - IDE-specific skills directories (configurable per IDE)
- `mcpServers` - MCP server definitions using npx

## Directory Structure

### Local Install (Project-Specific)
```
your-project/
├── .claude/skills/          # Skills copied to Claude Code (if selected)
├── .cursor/skills/          # Skills copied to Cursor (if selected)
├── .codex/skills/           # Skills copied to Codex (if selected)
└── .github/skills/          # Skills copied here for version control
```

### Global Install (User-Wide)
```
~/.claude/skills/            # Claude Code skills
~/.cursor/skills/            # Cursor skills
~/.codex/skills/             # Codex skills
~/.vscode/skills/            # VSCode skills
```

### MCP Configuration Locations

MCP configurations are written to each IDE's OS-specific config path:
- **macOS**: `~/Library/Application Support/{IDE}/mcp.json`
- **Windows**: `%APPDATA%\{IDE}\mcp.json`
- **Linux**: `~/.config/{IDE}/mcp.json`

## MCP Servers Included

| Server | Package | Description |
|--------|---------|-------------|
| wcag | `wcag-mcp` | WCAG 2.2 guidelines, success criteria, techniques |
| aria | `aria-mcp` | WAI-ARIA roles, states, properties |
| magentaa11y | `magentaa11y-mcp` | Component accessibility acceptance criteria |
| a11y-personas | `a11y-personas-mcp` | Accessibility personas for diverse users |
| arc-issues | `arc-issues-mcp` | AxeCore violation formatting |
