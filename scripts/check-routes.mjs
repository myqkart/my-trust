#!/usr/bin/env node
/**
 * Static integrity checks for routes, pages, and internal links.
 * Usage: node scripts/check-routes.mjs
 */
import { readdir, readFile, access } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const failures = [];

async function exists(relPath) {
  try {
    await access(path.join(ROOT, relPath));
    return true;
  } catch {
    return false;
  }
}

async function collectFiles(dir, matcher) {
  const entries = await readdir(path.join(ROOT, dir), { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const rel = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name === ".next") continue;
      files.push(...(await collectFiles(rel, matcher)));
    } else if (matcher.test(entry.name)) {
      files.push(rel);
    }
  }
  return files;
}

function routeToAppPath(routePath) {
  if (routePath === "/") return "app/page.tsx";
  return `app${routePath}/page.tsx`;
}

async function main() {
  const routesModule = await readFile(
    path.join(ROOT, "constants/routes.ts"),
    "utf8",
  );
  const routePaths = [...routesModule.matchAll(/:\s*"(\/[^"]*)"/g)].map(
    (match) => match[1],
  );

  console.log(`\nRoute coverage (${routePaths.length} routes)`);
  for (const routePath of routePaths) {
    if (routePath.includes("[")) continue;
    const pageFile = routeToAppPath(routePath);
    const ok = await exists(pageFile);
    console.log(`  ${ok ? "✓" : "✗"} ${routePath} → ${pageFile}`);
    if (!ok) failures.push(`Missing page for ${routePath}`);
  }

  const dynamicPages = [
    "app/programs/[slug]/page.tsx",
    "app/blog/[slug]/page.tsx",
  ];
  for (const file of dynamicPages) {
    const ok = await exists(file);
    console.log(`  ${ok ? "✓" : "✗"} dynamic ${file}`);
    if (!ok) failures.push(`Missing ${file}`);
  }

  const sourceFiles = await collectFiles("app", /\.(tsx|ts)$/);
  sourceFiles.push(...(await collectFiles("components", /\.(tsx|ts)$/)));

  const known = new Set([
    ...routePaths,
    "/programs/food-distribution",
    "/programs/education",
    "/programs/cow-welfare",
    "/programs/environment",
  ]);

  const hrefPattern = /href=["'`](\/[^"'`?#]*)/g;
  const broken = new Map();

  for (const file of sourceFiles) {
    const content = await readFile(path.join(ROOT, file), "utf8");
    for (const match of content.matchAll(hrefPattern)) {
      const href = match[1];
      if (
        href.startsWith("/api") ||
        href.startsWith("/#") ||
        href.includes("${") ||
        href.includes("[")
      ) {
        continue;
      }
      const base = href.replace(/\/$/, "") || "/";
      const isBlog = base.startsWith("/blog/");
      const isProgram = base.startsWith("/programs/");
      if (known.has(base) || known.has(href) || isBlog || isProgram) continue;
      if (!(await exists(routeToAppPath(base)))) {
        broken.set(href, file);
      }
    }
  }

  console.log(`\nInternal href scan`);
  if (broken.size === 0) {
    console.log("  ✓ No unknown internal href targets found");
  } else {
    for (const [href, file] of broken) {
      console.log(`  ✗ ${href} (from ${file})`);
      failures.push(`Unknown href ${href} in ${file}`);
    }
  }

  if (failures.length) {
    console.error(`\n${failures.length} check(s) failed.`);
    process.exit(1);
  }

  console.log("\nAll route integrity checks passed.\n");
}

main();
