#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import https from 'https';

const ROOT = path.resolve(import.meta.dirname, '..');
const ASSETS_DIR = path.join(ROOT, 'public', 'assets');

// Find all 0-byte files with trailing quotes
const brokenFiles = fs.readdirSync(ASSETS_DIR)
  .filter(f => f.endsWith("'"))
  .filter(f => fs.statSync(path.join(ASSETS_DIR, f)).size === 0);

console.log(`Found ${brokenFiles.length} broken files with trailing quotes`);

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

// Step 1: Download each file properly and save without the trailing quote
let fixed = 0;
let failed = 0;

for (const broken of brokenFiles) {
  const cleanName = broken.slice(0, -1); // remove trailing '
  const url = `https://d2lq74zxbg4jiz.cloudfront.net/${cleanName.split('/').pop()}`;

  // Map the local filename back to the original Cloudfront filename
  // Read the mapping to find the original URL
  const mappingPath = path.join(ROOT, 'scripts', 'cloudfront-mapping.json');
  const mapping = JSON.parse(fs.readFileSync(mappingPath, 'utf8'));

  // Find the original URL that maps to this broken filename
  let originalUrl = null;
  for (const [cfUrl, localName] of Object.entries(mapping)) {
    if (localName === `/assets/${broken}`) {
      // The original URL had a trailing quote too - strip it
      originalUrl = cfUrl.replace(/'$/, '');
      break;
    }
  }

  if (!originalUrl) {
    console.log(`  SKIP ${broken} - no mapping found`);
    failed++;
    continue;
  }

  const destClean = path.join(ASSETS_DIR, cleanName);

  process.stdout.write(`  ${cleanName}...`);
  try {
    await download(originalUrl, destClean);
    const size = fs.statSync(destClean).size;
    if (size > 0) {
      // Remove the broken file with quote
      fs.unlinkSync(path.join(ASSETS_DIR, broken));
      console.log(` OK (${(size/1024).toFixed(1)}KB)`);
      fixed++;
    } else {
      fs.unlinkSync(destClean);
      console.log(` STILL EMPTY`);
      failed++;
    }
  } catch (err) {
    console.log(` FAILED: ${err.message}`);
    failed++;
  }
}

console.log(`\nDownloaded: ${fixed}, Failed: ${failed}`);

// Step 2: Fix all source references - remove trailing quotes from asset paths
console.log('\nFixing source references...');
function getFiles(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules') {
      results.push(...getFiles(full));
    } else if (entry.isFile() && /\.(tsx?|json|css)$/.test(entry.name)) {
      results.push(full);
    }
  }
  return results;
}

const srcFiles = [...getFiles(path.join(ROOT, 'src')), ...getFiles(path.join(ROOT, 'public', 'data'))];
let replacements = 0;

for (const file of srcFiles) {
  let content = fs.readFileSync(file, 'utf8');
  // Match paths like /assets/filename.ext' and remove the trailing quote
  const regex = /(\/assets\/[^"'\s]+)\'/g;
  if (regex.test(content)) {
    content = content.replace(/(\/assets\/[^"'\s]+)\'/g, '$1');
    fs.writeFileSync(file, content);
    replacements++;
  }
}

console.log(`Fixed ${replacements} files with trailing quote references`);
console.log('Done!');
