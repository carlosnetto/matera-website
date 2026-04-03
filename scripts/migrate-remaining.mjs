#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import https from 'https';
import { execSync } from 'child_process';

const ROOT = path.resolve(import.meta.dirname, '..');
const ASSETS_DIR = path.join(ROOT, 'public', 'assets');

const files = [
  // Videos
  ['https://d2lq74zxbg4jiz.cloudfront.net/anim_matera_V2_82378a33e4.mp4', 'matera-hero-animation.mp4'],
  ['https://d2lq74zxbg4jiz.cloudfront.net/Core_Integration_Animation_Updated_e7a6ae776a.mp4', 'core-integration-animation.mp4'],
  ['https://d2lq74zxbg4jiz.cloudfront.net/DTW_Animation_for_webpage_V1_1mbps_697793d95d.mp4', 'digital-twin-animation.mp4'],
  ['https://d2lq74zxbg4jiz.cloudfront.net/Matera_Digital_Twin_Explainer_402d1651a0_c842e5c0c1.mp4', 'digital-twin-explainer.mp4'],
  ['https://d2lq74zxbg4jiz.cloudfront.net/Matera_Digital_Twin_Hero_V2_400kbps_5a7e796539_9fae38d584_120ce253c1.mp4', 'digital-twin-hero.mp4'],
  ['https://d2lq74zxbg4jiz.cloudfront.net/Matera_Stablecoin_Transaction_Process_Updated_dfc6644ea4.mp4', 'stablecoin-transaction-process.mp4'],
  // PDFs
  ['https://d2lq74zxbg4jiz.cloudfront.net/Code_of_Ethics_and_Conduct_6f42d645c7.pdf', 'code-of-ethics-and-conduct.pdf'],
  ['https://d2lq74zxbg4jiz.cloudfront.net/PT_BR_Codigo_de_Etica_e_Conduta_Atualizado_24_10_2024_727d52bfb7.pdf', 'codigo-de-etica-e-conduta.pdf'],
  ['https://d2lq74zxbg4jiz.cloudfront.net/Filial_CNPJ_57_040_040_0003_46_24_03_2025_3420d7d2bc.pdf', 'relatorio-filial-2025.pdf'],
  ['https://d2lq74zxbg4jiz.cloudfront.net/Matriz_CNPJ_57_040_040_0001_84_24_03_2025_69bf790b81.pdf', 'relatorio-matriz-2025.pdf'],
  ['https://d2lq74zxbg4jiz.cloudfront.net/Relatorio_de_Transparencia_outubro2025_a6fb38203e.pdf', 'relatorio-transparencia-outubro-2025.pdf'],
  ['https://d2lq74zxbg4jiz.cloudfront.net/Relatorio_Igualdade_Salarial_Lote_2026_1_57040040000184_1_1_f566f1424e.pdf', 'relatorio-igualdade-salarial-2026.pdf'],
];

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
        reject(new Error(`HTTP ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', reject);
  });
}

for (const [url, filename] of files) {
  const dest = path.join(ASSETS_DIR, filename);
  if (fs.existsSync(dest)) {
    console.log(`  SKIP ${filename} (exists)`);
    continue;
  }
  process.stdout.write(`  Downloading ${filename}...`);
  try {
    await download(url, dest);
    const size = (fs.statSync(dest).size / 1024 / 1024).toFixed(1);
    console.log(` ${size}MB`);
  } catch (err) {
    console.log(` FAILED: ${err.message}`);
  }
}

// Replace all references in source files
console.log('\nReplacing references...');
const mapping = Object.fromEntries(files.map(([url, name]) => [url, `/assets/${name}`]));

function getFiles(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules') {
      results.push(...getFiles(full));
    } else if (entry.isFile() && /\.(tsx?|json)$/.test(entry.name)) {
      results.push(full);
    }
  }
  return results;
}

const srcFiles = [...getFiles(path.join(ROOT, 'src')), ...getFiles(path.join(ROOT, 'public', 'data'))];
let replacements = 0;

for (const file of srcFiles) {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  for (const [url, local] of Object.entries(mapping)) {
    if (content.includes(url)) {
      content = content.replaceAll(url, local);
      changed = true;
      replacements++;
    }
  }
  if (changed) fs.writeFileSync(file, content);
}

console.log(`  ${replacements} replacements done`);
console.log('Done!');
