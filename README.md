# A11y Skills Deploy

A cross-platform CLI for deploying the a11y-skills repo, installing skills, and configuring MCP servers across Claude Code, Cursor, Codex, and VSCode.

## Install

```bash
npm install -g a11y-skills-deploy
# or
npx a11y-skills-deploy
```

## Usage

```bash
a11y-skills
```

### Flags

- `--local` / `--global`: Skip the scope prompt.
- `--yes`: Use defaults (local scope, all IDEs, install skills).

## Configuration

Edit `config/a11y.json` to match the MCP server entrypoints in the `a11y-skills` repo.

- `repo.url`: Repo to clone/pull.
- `skillsSearchPaths`: Where skills are stored in the repo.
- `mcpServers`: MCP server definitions. Use `{repoDir}` to reference the cloned repo.

## Notes

- Local installs place skills in `.github/skills` and clone the repo into `.a11y-skills` in the current project.
- Global installs clone the repo into `~/.a11y-skills` and place skills in each IDE's global skills directory.
- MCP configs are written to each IDE's OS-specific config path.