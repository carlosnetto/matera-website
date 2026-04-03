#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const ROOT = path.resolve(import.meta.dirname, '..');
const BASE = 'https://matera.com';

// Static routes
const staticRoutes = [
  '/en',
  '/en/contact-us',
  '/en/stablecoin',
  '/en/solutions/digital-twin',
  '/en/solutions/qr-code-solutions',
  '/en/solutions/wallet-as-a-service',
  '/en/about-us',
  '/en/privacy-policy',
  '/en/blog',
  '/en/press',
  '/en/whitepapers',
  '/en/podcasts',
  '/br',
  '/br/blog',
  '/br/cases',
  '/br/solucoes',
  '/br/solucoes/core-banking',
  '/br/solucoes/pagamentos',
  '/br/solucoes/cash-management',
  '/br/solucoes/credito',
  '/br/solucoes/gestao-de-riscos',
  '/br/solucoes/reg-tech',
  '/br/solucoes/insights',
  '/br/solucoes/matera-digital-twin',
  '/br/solucoes/tesouraria-avancada',
  '/br/sobre-nos',
  '/br/fale-conosco',
  '/br/carreiras',
  '/br/esg',
  '/br/politica-de-privacidade',
  '/br/relatorio-de-transparencia-e-igualdade-salarial',
  '/br/tendencias-mercado-financeiro-2026',
];

// Dynamic routes from content indexes
const contentIndexes = [
  { index: 'public/data/en/blog/index.json', prefix: '/en/blog' },
  { index: 'public/data/en/press/index.json', prefix: '/en/press' },
  { index: 'public/data/en/whitepapers/index.json', prefix: '/en/whitepapers' },
  { index: 'public/data/en/podcasts/index.json', prefix: '/en/podcasts' },
  { index: 'public/data/br/blog/index.json', prefix: '/br/blog' },
  { index: 'public/data/br/cases/index.json', prefix: '/br/cases' },
];

const urls = [...staticRoutes];

for (const { index, prefix } of contentIndexes) {
  const filePath = path.join(ROOT, index);
  if (fs.existsSync(filePath)) {
    const entries = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    for (const entry of entries) {
      if (entry.slug) urls.push(`${prefix}/${entry.slug}`);
    }
  }
}

const today = new Date().toISOString().split('T')[0];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${BASE}${u}</loc>
    <lastmod>${today}</lastmod>
  </url>`).join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(ROOT, 'public', 'sitemap.xml'), xml);
console.log(`Generated sitemap.xml with ${urls.length} URLs`);
