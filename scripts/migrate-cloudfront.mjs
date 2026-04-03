#!/usr/bin/env node
/**
 * Migrate Cloudfront images to local /assets/ directory.
 * 1. Finds all unique Cloudfront URLs (excluding .mp4 and .pdf)
 * 2. Downloads each to public/assets/
 * 3. Generates clean English filenames
 * 4. Replaces all references in source files
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import https from 'https';

const ROOT = path.resolve(import.meta.dirname, '..');
const ASSETS_DIR = path.join(ROOT, 'public', 'assets');

// Step 1: Extract all unique Cloudfront URLs (skip mp4/pdf)
console.log('Extracting Cloudfront URLs...');
const raw = execSync(
  `grep -roh 'https://d2lq74zxbg4jiz\\.cloudfront\\.net/[^")*\\\\ ]*' src/ public/data/ --include='*.tsx' --include='*.json' --include='*.ts'`,
  { cwd: ROOT, encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 }
);

const allUrls = [...new Set(raw.trim().split('\n').filter(Boolean))];
const imageUrls = allUrls.filter(u => !u.match(/\.(mp4|pdf)['"]?$/i));
console.log(`Found ${imageUrls.length} unique image/SVG URLs (skipping ${allUrls.length - imageUrls.length} video/PDF URLs)`);

// Step 2: Generate clean filenames
// Portuguese translations for common words in filenames
const ptToEn = {
  'copia_de_': '',
  'captura_de_tela_': 'screenshot-',
  'imagem_de_': '',
  'foto_de_': 'photo-',
  'pagamento': 'payment',
  'pagamentos': 'payments',
  'solucoes': 'solutions',
  'solucao': 'solution',
  'credito': 'credit',
  'gestao': 'management',
  'riscos': 'risks',
  'banco': 'bank',
  'cliente': 'client',
  'clientes': 'clients',
  'empresa': 'company',
  'sobre': 'about',
  'tecnologia': 'technology',
  'financeiro': 'financial',
  'servicos': 'services',
  'como': 'how',
  'para': 'for',
  'novo': 'new',
  'nova': 'new',
};

function cleanFilename(url) {
  // Extract filename from URL
  let name = url.split('/').pop();
  // Remove trailing quotes if any
  name = name.replace(/['"]$/, '');

  // Get extension
  const extMatch = name.match(/\.(jpg|jpeg|png|webp|svg|gif)$/i);
  if (!extMatch) return name;
  const ext = extMatch[1].toLowerCase();
  let base = name.slice(0, -(ext.length + 1));

  // Lowercase
  base = base.toLowerCase();

  // Remove CMS hash suffixes (10-char hex at the end, possibly chained)
  // Pattern: name_hash or name_hash_hash
  base = base.replace(/(_[a-f0-9]{8,12})+$/g, '');

  // Translate Portuguese words
  for (const [pt, en] of Object.entries(ptToEn)) {
    base = base.replace(new RegExp(pt, 'gi'), en);
  }

  // Clean up
  base = base
    .replace(/_+/g, '-')      // underscores to hyphens
    .replace(/-+/g, '-')      // collapse multiple hyphens
    .replace(/^-|-$/g, '')    // trim leading/trailing hyphens
    .replace(/[^a-z0-9-]/g, '-') // remove special chars
    .replace(/-+/g, '-')      // collapse again
    .replace(/^-|-$/g, '');   // trim again

  return `${base}.${ext}`;
}

// Resolve collisions
const nameMap = new Map(); // url -> local filename
const usedNames = new Map(); // filename -> count

for (const url of imageUrls) {
  let name = cleanFilename(url);

  if (usedNames.has(name)) {
    const count = usedNames.get(name) + 1;
    usedNames.set(name, count);
    const ext = name.split('.').pop();
    const base = name.slice(0, -(ext.length + 1));
    name = `${base}-${count}.${ext}`;
  } else {
    usedNames.set(name, 1);
  }

  nameMap.set(url, name);
}

console.log(`Generated ${nameMap.size} clean filenames`);

// Step 3: Download all images
function download(url, dest) {
  return new Promise((resolve, reject) => {
    const cleanUrl = url.replace(/['"]$/, '');
    const file = fs.createWriteStream(dest);
    https.get(cleanUrl, response => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        download(response.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      if (response.statusCode !== 200) {
        reject(new Error(`HTTP ${response.statusCode} for ${cleanUrl}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', reject);
  });
}

console.log('Downloading images...');
let downloaded = 0;
let failed = 0;
const BATCH_SIZE = 20;
const entries = [...nameMap.entries()];

for (let i = 0; i < entries.length; i += BATCH_SIZE) {
  const batch = entries.slice(i, i + BATCH_SIZE);
  await Promise.all(batch.map(async ([url, filename]) => {
    const dest = path.join(ASSETS_DIR, filename);
    if (fs.existsSync(dest)) {
      downloaded++;
      return;
    }
    try {
      await download(url, dest);
      downloaded++;
    } catch (err) {
      console.error(`  FAILED: ${url} -> ${err.message}`);
      failed++;
    }
  }));
  process.stdout.write(`\r  ${downloaded}/${entries.length} downloaded (${failed} failed)`);
}
console.log(`\n  Done: ${downloaded} downloaded, ${failed} failed`);

// Step 4: Replace all references in source files
console.log('Replacing references in source files...');

const fileExtensions = ['.tsx', '.ts', '.json'];
function getFiles(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules') {
      results.push(...getFiles(full));
    } else if (entry.isFile() && fileExtensions.some(ext => entry.name.endsWith(ext))) {
      results.push(full);
    }
  }
  return results;
}

const srcFiles = [
  ...getFiles(path.join(ROOT, 'src')),
  ...getFiles(path.join(ROOT, 'public', 'data')),
];

let filesChanged = 0;
let replacements = 0;

for (const file of srcFiles) {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  for (const [url, filename] of nameMap) {
    if (content.includes(url)) {
      content = content.replaceAll(url, `/assets/${filename}`);
      changed = true;
      replacements++;
    }
  }

  if (changed) {
    fs.writeFileSync(file, content);
    filesChanged++;
  }
}

console.log(`  ${replacements} replacements across ${filesChanged} files`);

// Write mapping for reference
const mapping = Object.fromEntries(nameMap);
fs.writeFileSync(path.join(ROOT, 'scripts', 'cloudfront-mapping.json'), JSON.stringify(mapping, null, 2));
console.log('  Mapping saved to scripts/cloudfront-mapping.json');

console.log('\nMigration complete!');
