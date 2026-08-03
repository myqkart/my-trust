#!/usr/bin/env node
/**
 * Summarize production JS chunk sizes after `npm run build`.
 * Usage: node scripts/report-bundle.mjs
 */
import { readdir, stat } from "node:fs/promises";
import path from "node:path";

const ROOT = path.join(process.cwd(), ".next", "static", "chunks");

function formatKb(bytes) {
  return `${(bytes / 1024).toFixed(1)} KB`;
}

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(full)));
    } else if (entry.name.endsWith(".js")) {
      const info = await stat(full);
      files.push({ name: path.relative(ROOT, full), size: info.size });
    }
  }
  return files;
}

async function main() {
  try {
    const files = await walk(ROOT);
    files.sort((a, b) => b.size - a.size);
    const total = files.reduce((sum, file) => sum + file.size, 0);
    console.log(`\nBundle report (.next/static/chunks)`);
    console.log(`Total JS: ${formatKb(total)} across ${files.length} chunks\n`);
    console.log("Top 15 chunks:");
    for (const file of files.slice(0, 15)) {
      console.log(`  ${formatKb(file.size).padStart(10)}  ${file.name}`);
    }
    console.log("");
  } catch {
    console.error("No build output found. Run `npm run build` first.");
    process.exit(1);
  }
}

main();
