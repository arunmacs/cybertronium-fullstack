/**
 * plesk-build.js — Rock-solid build script for Plesk deployment.
 *
 * This script is the SINGLE entry point for building on Plesk.
 * It handles every known issue automatically:
 *
 *   1. Wipes the .next cache (prevents stale-build crashes)
 *   2. Removes global-error.tsx if present (Next.js 16 workStore bug)
 *   3. Runs prisma generate
 *   4. Runs next build (Turbopack — no --webpack flag)
 *
 * Usage (package.json):
 *   "build": "node scripts/plesk-build.js"
 */

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();

// ── Helpers ──────────────────────────────────────────────────────────

function log(emoji, msg) {
  console.log(`\n${emoji}  ${msg}`);
}

function run(cmd) {
  log("▶", `Running: ${cmd}`);
  execSync(cmd, { stdio: "inherit", cwd: ROOT });
}

function removeIfExists(relPath, label) {
  const abs = path.join(ROOT, relPath);
  if (fs.existsSync(abs)) {
    const stat = fs.statSync(abs);
    if (stat.isDirectory()) {
      fs.rmSync(abs, { recursive: true, force: true });
    } else {
      fs.unlinkSync(abs);
    }
    log("🗑️", `Removed ${label}: ${relPath}`);
  } else {
    log("✅", `${label} already absent: ${relPath}`);
  }
}

// ── Step 1: Clean stale caches ───────────────────────────────────────

log("🧹", "STEP 1 — Cleaning stale build caches");
removeIfExists(".next", ".next cache");
removeIfExists(".turbo", ".turbo cache");

// ── Step 2: Remove problematic files ─────────────────────────────────
//    Next.js 16 has an internal bug where prerendering /_global-error
//    crashes with "Expected workStore to be initialized". The safest
//    fix is to ensure the custom global-error file does not exist.

log("🔍", "STEP 2 — Removing problematic files");
removeIfExists("src/app/global-error.tsx", "global-error.tsx");
removeIfExists("src/app/global-error.jsx", "global-error.jsx");
removeIfExists("src/app/global-error.js", "global-error.js");
removeIfExists("src/app/global-error.tsx.disabled", "global-error.tsx.disabled");

// ── Step 3: Generate Prisma client ───────────────────────────────────

log("⚙️", "STEP 3 — Generating Prisma client");
run("npx prisma generate");

// ── Step 4: Run Next.js build (Turbopack) ────────────────────────────

log("🏗️", "STEP 4 — Building with Next.js (Turbopack)");
run("npx next build");

// ── Done ─────────────────────────────────────────────────────────────

log("🎉", "BUILD COMPLETE — Ready to start with: npm start");
