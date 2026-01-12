# A11y Devkit Deploy

A cross-platform CLI for deploying accessibility skills and MCP servers across Claude Code, Cursor, Codex, and VSCode. Automatically clones the a11y-skills repo and all required MCP server repositories.

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

1. **Cloning the a11y-skills repository** - Contains IDE skills for accessibility workflows
2. **Cloning and building MCP server repositories** - Installs 5 accessibility-focused MCP servers:
   - **wcag-mcp** - WCAG 2.2 guidelines, success criteria, and techniques
   - **aria-mcp** - WAI-ARIA roles, states, properties, and patterns
   - **magentaa11y** - Component accessibility acceptance criteria
   - **a11y-personas-mcp** - Accessibility personas for diverse user needs
   - **a11y-issues-template-mcp** - Format AxeCore violations into standardized issue templates
3. **Installing skills** - Copies skills to IDE-specific directories based on scope (local/global)
4. **Installing MCP servers** - Copies built MCP servers to home directory:
   - Single IDE: `~/.{ide}/mcp/servers/` (e.g., `~/.claude/mcp/servers/`)
   - Multiple IDEs: `~/.mcp/servers/` (shared location)
5. **Configuring MCP servers** - Updates each IDE's MCP config to enable the accessibility tools
6. **Cleanup** - Removes temporary build directory after installation

## Configuration

Edit `config/a11y.json` to customize the deployment:

- `repo.url` - Main skills repository to clone
- `mcpRepos` - Array of MCP repositories to clone and build
- `skillsSearchPaths` - Directories to search for skills in the cloned repo
- `ideSkillsPaths` - IDE-specific skills directories (configurable per IDE)
- `mcpServers` - MCP server definitions with placeholders:
  - `{mcpRepoDir}` - Path to the MCP servers directory (e.g., `~/.mcp/servers/` or `~/.claude/mcp/servers/`)

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

### MCP Server Locations
MCP servers are always installed to the home directory:

**Single IDE Selection:**
```
~/.claude/mcp/servers/       # If only Claude Code is selected
│   ├── wcag-mcp/
│   ├── aria-mcp/
│   ├── magentaa11y-mcp/
│   ├── a11y-personas-mcp/
│   └── a11y-issues-template-mcp/
```

**Multiple IDE Selection:**
```
~/.mcp/servers/              # Shared location for all selected IDEs
│   ├── wcag-mcp/
│   ├── aria-mcp/
│   ├── magentaa11y-mcp/
│   ├── a11y-personas-mcp/
│   └── a11y-issues-template-mcp/
```

MCP configurations are written to each IDE's OS-specific config path:
- **macOS**: `~/Library/Application Support/{IDE}/mcp.json`
- **Windows**: `%APPDATA%\{IDE}\mcp.json`
- **Linux**: `~/.config/{IDE}/mcp.json`

### Temporary Build Directory
During installation, repos are cloned and built in a temporary directory (OS temp folder) which is automatically cleaned up after completion.