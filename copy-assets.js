// Runs after the Eleventy build (see package.json). Copies every static asset
// straight into _site using plain Node file operations — no Eleventy-specific
// passthrough-copy behaviour involved at all, so nothing here can be affected
// by however Eleventy's own template/permalink system behaves.
const fs = require("fs");
const path = require("path");

// Non-image assets: small, stable list — these basically never change.
const otherFiles = [
  "shared.css",
  "consent.js",
  "gallery-data.json",
  "robots.txt",
  "llms.txt",
];

// Images: found automatically by extension, not hardcoded. This is the part
// that matters most — any photo uploaded through the CMS (gallery or a blog
// post's card image) needs to show up here with zero code changes, ever.
const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"];
const imageFiles = fs
  .readdirSync(__dirname)
  .filter((f) => imageExtensions.includes(path.extname(f).toLowerCase()));

const files = [...otherFiles, ...imageFiles];

const outDir = path.join(__dirname, "_site");
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

let missing = [];
files.forEach((f) => {
  const src = path.join(__dirname, f);
  const dest = path.join(outDir, f);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log("[copy-assets] Copied:", f);
  } else {
    missing.push(f);
    console.log("[copy-assets] MISSING SOURCE FILE (not in repo):", f);
  }
});

function copyDir(src, dest) {
  if (!fs.existsSync(src)) {
    console.log("[copy-assets] MISSING SOURCE FOLDER (not in repo):", src);
    return;
  }
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}
copyDir(path.join(__dirname, "admin"), path.join(outDir, "admin"));

console.log(
  `[copy-assets] Done. ${files.length - missing.length}/${files.length} files copied ` +
  `(${imageFiles.length} images found automatically).` +
  (missing.length ? ` MISSING: ${missing.join(", ")}` : "")
);
