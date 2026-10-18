#!/usr/bin/env node
/**
 * sistem drift audit — zero dependencies.
 *
 *   node audit.mjs src [--allow color:#0b6b3a]
 *
 * Fails (exit 1) when UI code bypasses the token layer:
 *   1. raw hex colors outside tokens.css
 *   2. arbitrary px/rem values in spacing properties
 *   3. !important
 *
 * These are the checks worth automating. Everything else stays judgement.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, extname, basename } from "node:path";

const target = process.argv[2] || "src";
const allowArg = process.argv.includes("--allow") ? process.argv[process.argv.indexOf("--allow") + 1] : "";
const allow = new Set(allowArg ? allowArg.split(",") : []);

const EXTS = new Set([".css", ".scss", ".tsx", ".jsx", ".ts", ".js", ".html"]);
const SKIP = new Set(["tokens.css", "node_modules", "dist", "build"]);

const files = [];
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    if (SKIP.has(name)) continue;
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) walk(full);
    else if (EXTS.has(extname(name))) files.push(full);
  }
};
walk(target);

const findings = [];
const HEX = /#[0-9a-fA-F]{3,8}\b/g;
const SPACING = /(?:margin|padding|gap|inset|top|right|bottom|left)(?:-[a-z]+)?\s*:\s*([^;]+);/g;
const RAW_LEN = /(?:^|[\s(])(-?\d*\.?\d+)(px|rem|em)\b/g;

for (const file of files) {
  const text = readFileSync(file, "utf8");
  const lines = text.split("\n");
  lines.forEach((line, i) => {
    for (const m of line.matchAll(HEX)) {
      if (allow.has(`color:${m[0].toLowerCase()}`)) continue;
      findings.push(`${file}:${i + 1}  raw color ${m[0]}`);
    }
    if (/!important/.test(line)) findings.push(`${file}:${i + 1}  !important`);
  });

  if (file.endsWith(".css")) {
    for (const block of text.matchAll(SPACING)) {
      const value = block[1];
      if (value.includes("var(--")) continue;
      for (const m of value.matchAll(RAW_LEN)) {
        if (m[1] === "0") continue;
        findings.push(`${file}  raw spacing ${m[1]}${m[2]} in "${block[0].trim().slice(0, 60)}"`);
      }
    }
  }
}

if (findings.length) {
  console.error(`sistem audit: ${findings.length} finding(s)\n`);
  for (const f of findings) console.error("  " + f);
  console.error("\nUse tokens (var(--color-*), var(--space-*)) or declare an exception in the contract.");
  process.exit(1);
}
console.log(`sistem audit: clean (${files.length} files)`);
