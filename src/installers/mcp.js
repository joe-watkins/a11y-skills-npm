import fs from "fs/promises";
import path from "path";

async function pathExists(target) {
  try {
    await fs.access(target);
    return true;
  } catch {
    return false;
  }
}

async function loadJson(filePath) {
  if (!(await pathExists(filePath))) {
    return {};
  }

  try {
    const raw = await fs.readFile(filePath, "utf8");
    return raw.trim() ? JSON.parse(raw) : {};
  } catch (error) {
    const backupPath = `${filePath}.bak`;
    await fs.copyFile(filePath, backupPath);
    return {};
  }
}

function mergeServers(existing, incoming, serverKey = "servers") {
  const existingServers = existing[serverKey] && typeof existing[serverKey] === "object"
    ? existing[serverKey]
    : {};

  const merged = { ...existing, [serverKey]: { ...existingServers } };

  for (const server of incoming) {
    const serverConfig = {
      command: server.command,
      args: server.args || []
    };

    // Include type if provided
    if (server.type) {
      serverConfig.type = server.type;
    }

    merged[serverKey][server.name] = serverConfig;
  }

  return merged;
}

function removeServers(existing, removeNames, serverKey = "servers") {
  const existingServers = existing[serverKey] && typeof existing[serverKey] === "object"
    ? existing[serverKey]
    : null;

  if (!existingServers) {
    return { updated: existing, removed: 0 };
  }

  const updatedServers = { ...existingServers };
  let removed = 0;

  for (const name of removeNames) {
    if (Object.prototype.hasOwnProperty.call(updatedServers, name)) {
      delete updatedServers[name];
      removed++;
    }
  }

  if (removed === 0) {
    return { updated: existing, removed: 0 };
  }

  const updated = { ...existing };
  if (Object.keys(updatedServers).length === 0) {
    delete updated[serverKey];
  } else {
    updated[serverKey] = updatedServers;
  }

  return { updated, removed };
}

async function installMcpConfig(configPath, servers, serverKey = "servers") {
  await fs.mkdir(path.dirname(configPath), { recursive: true });
  const existing = await loadJson(configPath);
  const updated = mergeServers(existing, servers, serverKey);
  await fs.writeFile(configPath, `${JSON.stringify(updated, null, 2)}\n`, "utf8");
}

async function removeMcpConfig(configPath, serverNames, serverKey = "servers") {
  if (!(await pathExists(configPath))) {
    return { removed: 0, changed: false };
  }

  const existing = await loadJson(configPath);
  const { updated, removed } = removeServers(existing, serverNames, serverKey);

  if (removed === 0) {
    return { removed: 0, changed: false };
  }

  await fs.writeFile(configPath, `${JSON.stringify(updated, null, 2)}\n`, "utf8");
  return { removed, changed: true };
}

export {
  installMcpConfig,
  removeMcpConfig
};
