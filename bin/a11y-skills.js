#!/usr/bin/env node

const { run } = require("../src/cli");

run().catch((error) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`\n[Error] ${message}`);
  process.exitCode = 1;
});