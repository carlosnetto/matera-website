#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import https from 'https';

const ROOT = path.resolve(import.meta.dirname, '..');
const ASSETS_DIR = path.join(ROOT, 'public', 'assets');

// Get all missing files
const { execSync } = await import('child_process');
const missing = execSync(
  `grep -roh "'/assets/[^']*'" src/ --include='*.tsx' | sed "s/^'//;s/'$//" | sort -u`,
  { cwd: ROOT, encoding: 'utf8' }
).trim().split('\n').filter(f => {
  const p = path.join(ROOT, 'public', f);
  return !fs.existsSync(p) || fs.statSync(p).size === 0;
});

console.log(`${missing.length} missing assets to download`);

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, response => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        file.close();
        fs.unlinkSync(dest);
        return download(response.headers.location, dest).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        file.close();
        reject(new Error(`HTTP ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', reject);
  });
}

let ok = 0, fail = 0;

for (const assetPath of missing) {
  // The filename in /assets/ is the Cloudfront filename
  const filename = path.basename(assetPath);
  const url = `https://d2lq74zxbg4jiz.cloudfront.net/${filename}`;
  const dest = path.join(ROOT, 'public', assetPath);

  process.stdout.write(`  ${filename}...`);
  try {
    // Remove empty file if exists
    if (fs.existsSync(dest)) fs.unlinkSync(dest);
    await download(url, dest);
    const size = fs.statSync(dest).size;
    console.log(` ${(size/1024).toFixed(1)}KB`);
    ok++;
  } catch (err) {
    console.log(` FAILED: ${err.message}`);
    fail++;
  }
}

// Also clean up any remaining files with trailing quotes
const quotedFiles = fs.readdirSync(ASSETS_DIR).filter(f => f.endsWith("'"));
for (const qf of quotedFiles) {
  fs.unlinkSync(path.join(ASSETS_DIR, qf));
  console.log(`  Removed quoted file: ${qf}`);
}

console.log(`\nDone: ${ok} downloaded, ${fail} failed, ${quotedFiles.length} quoted files removed`);
