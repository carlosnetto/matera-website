#!/usr/bin/env node
/**
 * Fetches BR blog posts and case studies from matera.com and writes JSON files.
 * Extracts structured data from Next.js RSC payload and OG meta tags.
 *
 * Usage: node scripts/fetch-br-content.mjs [blog|cases]
 */

import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const BASE = process.argv[2] || 'blog'; // 'blog' or 'cases'
const OUT_DIR = join(import.meta.dirname, '..', 'public', 'data', 'br', BASE);
mkdirSync(OUT_DIR, { recursive: true });

const BLOG_SLUGS = [
  'reforma-tributaria-impactos-setor-financeiro',
  'score-de-principalidade-bancaria',
  'stablecoins-para-instituicoes-financeiras',
  'analise-de-dados',
  'regras-de-adesao-pix-automatico',
  'correspondente-bancario',
  'conta-de-pagamento',
  'tudo-sobre-e-financeira',
  'spsav-impactos-operacionais-novas-normas',
  'ia-no-mercado-financeiro',
  'organizacao-de-dados-para-ia',
  'credito-privado-com-garantia',
  'dados-transacionais',
  'med-mecanismo-especial-de-devolucao',
  'resolucoes-bcb-538-cmn-5274-seguranca-cibernetica',
  'entenda-agenda-evolutiva-do-pix',
  'spsavs-nova-regulacao-bc-psav-vasps',
  'conformidade-fiscal-instituicoes-financeiras',
  'apis-credit-as-a-service-vs-desenvolvimento-in-house',
  'tokenizacao',
  'pix-automatico-pequenos-negocios',
  'requisitos-participacao-conectividade-spb',
  'como-funciona-usdc',
  'embedded-finance',
  'como-usar-a-semelhanca-entre-clientes-para-tomar-melhores-decisoes',
  'plataforma-de-credito-digital',
  'derivacao-para-mesa-de-credito',
  'meios-de-pagamento',
  'geolocalizacao-granularizacao-dados-financeiros',
  'predicao-de-churn',
  'behavior-score',
  'experiencia-do-cliente-no-setor-financeiro',
  'tudo-sobre-o-pix',
  'plataforma-para-banco-digital',
  'medida-provisoria-credito-do-trabalhador',
  'como-evitar-vieses-na-analise-de-credito',
  'nova-operacao-ativos-virtuais-spsav-autorizacao-bc',
  'novo-limite-minimo-capital-social-integralizado-e-de-patrimonio-liquido',
  'tipos-de-empresas-do-setor-financeiro',
  'pix-parcelado',
  'dados-sinteticos',
  'pix-cobranca',
  'inteligencia-em-credito',
  'chave-pix',
  'como-criar-um-banco-digital',
  'operacoes-de-credito',
  'analise-de-series-temporais-no-credito',
  'abrir-scd-sociedade-credito-direto',
  'fintech-o-que-e-como-criar',
  'credito-para-trabalhadores-informais',
  'o-que-e-spb',
  'cadoc-3044',
  'fidelizacao-de-clientes',
  'cartao-consignado-inss',
  'pix-as-a-service',
  'pix-em-garantia',
  'credito-pessoal-com-fgts',
  'descoberta-de-propensao-a-recuperacao-de-credito',
  'autorizacao-banco-central',
  'sistema-de-informacoes-de-creditos-scr',
  'analise-de-credito',
  'credito-do-trabalhador',
  'desafios-da-modelagem-de-dados-no-credito',
  'sistema-de-pagamentos-instantaneos-spi',
  'solucoes-de-analise-de-credito-para-cooperativas',
  'inclusao-financeira',
  'dro-dlo-integrados-para-liberar-capital',
  'digital-twin-o-que-e',
  'mudancas-requerimento-capital-risco-operacional-s3',
  'risco-operacional-capital-regulatorio-instituicoes-s3',
  'governanca-de-dados',
  // 'pix-automatico', // already fetched manually
  'novo-requerimento-de-capital-para-risco-operacional-em-basileia-III',
  'regras-bc-sistema-pagamentos',
  'cadoc-3040',
  'gestao-da-carteira-de-emprestimos-nas-efpc',
  'oportunidades-de-credito-para-fundos-de-pensao',
  'predicao-de-inadimplencia',
  'baas-x-saas-como-comecar-oferecer-servicos-financeiros',
  'agentes-autonomos-ia',
  'pix-internacional',
  'regulatory-technology-o-que-e',
  'cadoc-o-que-e',
  'pix-por-aproximacao',
  'gerenciamento-dados-setor-financeiro',
  'pix-pdv',
  'cosif-padrao-contabil-instituicoes-financeiras',
  'analise-preditiva',
  'escalabilidade-na-concessao-de-credito',
  'ajuste-de-produtos-com-base-no-perfil-do-cliente',
  'oportunidades-de-negocio-atraves-da-oferta-de-credito',
  'bancos-s3-resolucao-356-circular-3979',
  'emprestimo-com-garantia-fgts-como-funciona',
  'capacidade-de-pagamento-no-credito',
  'cadoc-4111-saldos-contabeis-diarios',
  'prompt-banking',
  'nbo-next-best-offer',
  'smart-banking',
  'resolucao-bcb-429',
];

const CASES_SLUGS = [
  'stonex', 'travelex', 'pefisa', 'banco-xp', 'cielo',
  'digio', 'valia', 'c6-bank', 'alesta', 'olx', 'pagol',
];

const slugs = BASE === 'cases' ? CASES_SLUGS : BLOG_SLUGS;
const urlPrefix = BASE === 'cases'
  ? 'https://www.matera.com/br/cases/'
  : 'https://www.matera.com/br/blog/';

function htmlToMarkdown(html) {
  if (!html) return '';
  let md = html;
  // Remove inline styles from spans but keep content
  md = md.replace(/<span[^>]*>/gi, '');
  md = md.replace(/<\/span>/gi, '');
  // Headings
  md = md.replace(/<h1[^>]*>(.*?)<\/h1>/gi, '# $1\n\n');
  md = md.replace(/<h2[^>]*>(.*?)<\/h2>/gi, '## $1\n\n');
  md = md.replace(/<h3[^>]*>(.*?)<\/h3>/gi, '### $1\n\n');
  md = md.replace(/<h4[^>]*>(.*?)<\/h4>/gi, '#### $1\n\n');
  // Bold/strong
  md = md.replace(/<strong[^>]*>(.*?)<\/strong>/gi, '**$1**');
  md = md.replace(/<b[^>]*>(.*?)<\/b>/gi, '**$1**');
  // Italic/em
  md = md.replace(/<em[^>]*>(.*?)<\/em>/gi, '*$1*');
  md = md.replace(/<i[^>]*>(.*?)<\/i>/gi, '*$1*');
  // Links
  md = md.replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gi, '[$2]($1)');
  // Images
  md = md.replace(/<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*\/?>/gi, '![$2]($1)');
  md = md.replace(/<img[^>]*src="([^"]*)"[^>]*\/?>/gi, '![]($1)');
  // Lists
  md = md.replace(/<ul[^>]*>/gi, '\n');
  md = md.replace(/<\/ul>/gi, '\n');
  md = md.replace(/<ol[^>]*>/gi, '\n');
  md = md.replace(/<\/ol>/gi, '\n');
  md = md.replace(/<li[^>]*>(.*?)<\/li>/gi, '- $1\n');
  // Paragraphs and breaks
  md = md.replace(/<br\s*\/?>/gi, '\n');
  md = md.replace(/<p[^>]*>/gi, '');
  md = md.replace(/<\/p>/gi, '\n\n');
  // Remove underline tags
  md = md.replace(/<\/?u>/gi, '');
  // Remove remaining HTML tags
  md = md.replace(/<[^>]+>/g, '');
  // Decode HTML entities
  md = md.replace(/&amp;/g, '&');
  md = md.replace(/&lt;/g, '<');
  md = md.replace(/&gt;/g, '>');
  md = md.replace(/&quot;/g, '"');
  md = md.replace(/&#39;/g, "'");
  md = md.replace(/&nbsp;/g, ' ');
  // Clean up whitespace
  md = md.replace(/\n{3,}/g, '\n\n');
  md = md.trim();
  return md;
}

function sanitizeFilename(title) {
  return title
    .replace(/[:"'?!@#$%^&*()+=\[\]{}<>|\\\/~`]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .substring(0, 80);
}

function extractImages(html) {
  const imgs = [];
  const re = /src="(https:\/\/d2lq74zxbg4jiz\.cloudfront\.net\/[^"]+)"/g;
  let match;
  while ((match = re.exec(html)) !== null) {
    imgs.push(match[1]);
  }
  return [...new Set(imgs)];
}

async function fetchAndParse(slug) {
  const url = `${urlPrefix}${slug}/`;
  let html;
  try {
    const resp = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)' }
    });
    if (!resp.ok) {
      console.error(`  SKIP ${slug}: HTTP ${resp.status}`);
      return null;
    }
    html = await resp.text();
  } catch (e) {
    console.error(`  SKIP ${slug}: ${e.message}`);
    return null;
  }

  // Extract OG meta tags
  const ogTitle = html.match(/property="og:title"\s+content="([^"]*)"/)?.[1]
    || html.match(/content="([^"]*)"\s+property="og:title"/)?.[1] || '';
  const ogDesc = html.match(/property="og:description"\s+content="([^"]*)"/)?.[1]
    || html.match(/content="([^"]*)"\s+property="og:description"/)?.[1] || '';
  const ogImage = html.match(/property="og:image"\s+content="([^"]*)"/)?.[1]
    || html.match(/content="([^"]*)"\s+property="og:image"/)?.[1] || '';

  // Extract title from RSC payload (more accurate, handles escaped quotes)
  const titleMatch = html.match(/title\\?":\\?"([^"\\]+?)\\?",\\?"publishedDateTime/);
  const title = titleMatch ? titleMatch[1] : ogTitle;

  // Decode unicode escapes in title
  const decodedTitle = title.replace(/\\u([0-9a-fA-F]{4})/g, (_, hex) =>
    String.fromCharCode(parseInt(hex, 16))
  );

  // Extract date from RSC payload (quotes may be escaped as \")
  const dateMatch = html.match(/publishedDateTime\\?":\\?"(\d{4}-\d{2}-\d{2})T/);
  const date = dateMatch ? dateMatch[1] : '2024-01-01';

  // Extract author from RSC payload
  const authorMatch = html.match(/"fullName":"([^"]+)"/);
  const author = authorMatch ? authorMatch[1] : 'Matera';

  // Extract body HTML from server-rendered cms-rich-text divs
  // Blog pages have one large div; case pages have many smaller divs
  let bodyHtml = '';
  const richTextRegex = /<div class="cms-rich-text[^"]*"[^>]*>([\s\S]*?)<\/div>\s*(?:<script|<\/section|<\/div>\s*<\/div>\s*<\/section|<\/div>\s*<\/div>\s*<\/div>|$)/g;
  let match;
  const richTexts = [];
  while ((match = richTextRegex.exec(html)) !== null) {
    const content = match[1].trim();
    // Skip boilerplate (footer newsletter, thank-you messages, etc.)
    if (content.length > 20 && !content.includes('Obrigado, email cadastrado') && !content.includes('Não fique de fora dessa')) {
      richTexts.push(content);
    }
  }
  bodyHtml = richTexts.join('\n\n');

  // Fallback: find the largest block of <p> tags in the HTML
  if (!bodyHtml) {
    const allP = html.match(/<p>[\s\S]*?<\/p>/g) || [];
    if (allP.length > 3) {
      bodyHtml = allP.join('\n');
    }
  }

  const body = htmlToMarkdown(bodyHtml);
  const excerpt = (ogDesc || body.substring(0, 160)).substring(0, 160);
  const images = extractImages(bodyHtml);

  // For cases, extract client name from slug
  const client = BASE === 'cases' ? slug.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ') : undefined;

  const article = {
    title: decodedTitle,
    slug,
    date,
    ...(BASE === 'cases' ? { client } : { author }),
    thumbnail: ogImage,
    excerpt,
    body,
    images,
  };

  return article;
}

async function processBatch(slugBatch, batchNum) {
  const results = await Promise.all(
    slugBatch.map(slug => fetchAndParse(slug))
  );

  let written = 0;
  for (const article of results) {
    if (!article) continue;
    const safeName = sanitizeFilename(article.title);
    const filename = `${article.date} - ${safeName}.json`;
    const filepath = join(OUT_DIR, filename);
    writeFileSync(filepath, JSON.stringify(article, null, 2));
    written++;
  }
  console.log(`Batch ${batchNum}: ${written}/${slugBatch.length} written`);
  return written;
}

// Process in batches of 10 with a small delay between batches
const BATCH_SIZE = 10;
let total = 0;
for (let i = 0; i < slugs.length; i += BATCH_SIZE) {
  const batch = slugs.slice(i, i + BATCH_SIZE);
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  console.log(`Processing batch ${batchNum} (${batch.length} items)...`);
  const count = await processBatch(batch, batchNum);
  total += count;
  // Small delay to avoid hammering the server
  if (i + BATCH_SIZE < slugs.length) {
    await new Promise(r => setTimeout(r, 1000));
  }
}

console.log(`\nDone! ${total}/${slugs.length} ${BASE} articles written to ${OUT_DIR}`);
