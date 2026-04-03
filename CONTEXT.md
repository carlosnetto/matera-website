# BR Market — Build Context & Progress

> **Source of truth:** Live site `matera.com/br` always wins over `site-matera-main` (old Next.js + Strapi source).
> `site-matera-main` at `$HOME/Git/site-matera-main/frontend/` is useful for page structure reference only.

---

## Architecture (ADR-003)

- `src/br/` — Brazil market (Portuguese), URL prefix `/br/*`
- `src/shared/` — Design system shared across all markets
- Content DB: `public/data/br/{blog,cases}/` — same JSON schema as EN

**Design tokens:** `--matera-blue: #010025`, `--matera-green: #5CFF4D`, `--matera-purple: #461CDC`
**Font:** Poppins (local woff2, weights 400/600/700 only)

---

## ✅ DONE

| File | Description |
|------|-------------|
| `src/br/BrLayout.tsx` | Shell: Header + Outlet + Footer |
| `src/br/components/Header.tsx` | Full mega-menu in Portuguese (Soluções, Empresa, News & Insights) |
| `src/br/components/Footer.tsx` | Full footer (5 link columns + social + copyright) |
| `src/br/pages/Home.tsx` | Complete home page (Hero, Solutions tabs, Cases, Stats, Blog preview, About, CTA) |
| `src/App.tsx` | BR route wired: `/br` → BrHome under BrLayout |
| `public/data/br/blog/` | Directory created (empty — needs population) |
| `public/data/br/cases/` | Directory created (empty — needs population) |

---

## ❌ MISSING — Execution Order

### Phase 1 — Content Database (do first, everything else depends on it)

**Blog:** ~99 posts from `sitemap-blog-pt.xml` → `public/data/br/blog/`

Script to run: `/tmp/fetch-br-blog.js` (written, ready to execute)

All slugs:
```
cosif-padrao-contabil-instituicoes-financeiras
reforma-tributaria-impactos-setor-financeiro
score-de-principalidade-bancaria
stablecoins-para-instituicoes-financeiras
analise-de-dados
regras-de-adesao-pix-automatico
correspondente-bancario
conta-de-pagamento
tudo-sobre-e-financeira
spsav-impactos-operacionais-novas-normas
ia-no-mercado-financeiro
organizacao-de-dados-para-ia
credito-privado-com-garantia
dados-transacionais
med-mecanismo-especial-de-devolucao
resolucoes-bcb-538-cmn-5274-seguranca-cibernetica
entenda-agenda-evolutiva-do-pix
spsavs-nova-regulacao-bc-psav-vasps
conformidade-fiscal-instituicoes-financeiras
apis-credit-as-a-service-vs-desenvolvimento-in-house
tokenizacao
pix-automatico-pequenos-negocios
requisitos-participacao-conectividade-spb
como-funciona-usdc
embedded-finance
como-usar-a-semelhanca-entre-clientes-para-tomar-melhores-decisoes
plataforma-de-credito-digital
derivacao-para-mesa-de-credito
meios-de-pagamento
geolocalizacao-granularizacao-dados-financeiros
predicao-de-churn
behavior-score
experiencia-do-cliente-no-setor-financeiro
tudo-sobre-o-pix
plataforma-para-banco-digital
medida-provisoria-credito-do-trabalhador
como-evitar-vieses-na-analise-de-credito
nova-operacao-ativos-virtuais-spsav-autorizacao-bc
novo-limite-minimo-capital-social-integralizado-e-de-patrimonio-liquido
tipos-de-empresas-do-setor-financeiro
pix-parcelado
dados-sinteticos
pix-cobranca
inteligencia-em-credito
chave-pix
como-criar-um-banco-digital
operacoes-de-credito
analise-de-series-temporais-no-credito
abrir-scd-sociedade-credito-direto
fintech-o-que-e-como-criar
credito-para-trabalhadores-informais
o-que-e-spb
cadoc-3044
fidelizacao-de-clientes
cartao-consignado-inss
pix-as-a-service
pix-em-garantia
credito-pessoal-com-fgts
descoberta-de-propensao-a-recuperacao-de-credito
autorizacao-banco-central
sistema-de-informacoes-de-creditos-scr
analise-de-credito
credito-do-trabalhador
desafios-da-modelagem-de-dados-no-credito
sistema-de-pagamentos-instantaneos-spi
solucoes-de-analise-de-credito-para-cooperativas
inclusao-financeira
dro-dlo-integrados-para-liberar-capital
digital-twin-o-que-e
mudancas-requerimento-capital-risco-operacional-s3
risco-operacional-capital-regulatorio-instituicoes-s3
governanca-de-dados
pix-automatico
novo-requerimento-de-capital-para-risco-operacional-em-basileia-III
regras-bc-sistema-pagamentos
cadoc-3040
gestao-da-carteira-de-emprestimos-nas-efpc
oportunidades-de-credito-para-fundos-de-pensao
predicao-de-inadimplencia
baas-x-saas-como-comecar-oferecer-servicos-financeiros
agentes-autonomos-ia
pix-internacional
regulatory-technology-o-que-e
cadoc-o-que-e
pix-por-aproximacao
gerenciamento-dados-setor-financeiro
pix-pdv
analise-preditiva
escalabilidade-na-concessao-de-credito
ajuste-de-produtos-com-base-no-perfil-do-cliente
oportunidades-de-negocio-atraves-da-oferta-de-credito
bancos-s3-resolucao-356-circular-3979
emprestimo-com-garantia-fgts-como-funciona
capacidade-de-pagamento-no-credito
cadoc-4111-saldos-contabeis-diarios
prompt-banking
nbo-next-best-offer
smart-banking
resolucao-bcb-429
```

**Cases:** 12 cases from `sitemap-cases-pt.xml` → `public/data/br/cases/`

Slugs: `stonex`, `chg-meridian`, `travelex`, `pefisa`, `banco-xp`, `cielo`, `digio`, `valia`, `c6-bank`, `alesta`, `olx`, `pagol`

JSON schema for cases (add `client` field):
```json
{ "title": "", "slug": "", "date": "", "client": "", "thumbnail": "", "excerpt": "", "body": "", "images": [] }
```

---

### Phase 2 — Blog + Cases React Pages

| File | Route |
|------|-------|
| `src/br/pages/Blog.tsx` | `/br/blog` + `/br/blog/:slug` |
| `src/br/pages/Cases.tsx` | `/br/cases` + `/br/cases/:slug` |

Pattern: mirrors `src/na/pages/Blog.tsx` / `src/na/pages/Press.tsx` but reads from `/data/br/`.
Export: `{ BrBlogList, BrBlogArticle }` and `{ BrCasesList, BrCaseDetail }`.

---

### Phase 3 — Solution Pages (9 pages)

From `sitemap-solucoes-pt.xml`. Each page fetched from live `matera.com/br/solucoes/{slug}`.

| File | Route |
|------|-------|
| `src/br/pages/solucoes/CoreBanking.tsx` | `/br/solucoes/core-banking` |
| `src/br/pages/solucoes/Pagamentos.tsx` | `/br/solucoes/pagamentos` |
| `src/br/pages/solucoes/CashManagement.tsx` | `/br/solucoes/cash-management` |
| `src/br/pages/solucoes/Credito.tsx` | `/br/solucoes/credito` |
| `src/br/pages/solucoes/GestaoDeRiscos.tsx` | `/br/solucoes/gestao-de-riscos` |
| `src/br/pages/solucoes/RegTech.tsx` | `/br/solucoes/reg-tech` |
| `src/br/pages/solucoes/Insights.tsx` | `/br/solucoes/insights` |
| `src/br/pages/solucoes/DigitalTwin.tsx` | `/br/solucoes/matera-digital-twin` |
| `src/br/pages/solucoes/TesourariaAvancada.tsx` | `/br/solucoes/tesouraria-avancada` |

---

### Phase 4 — Static Pages (8 pages)

From `sitemap-geral-pt.xml`. Fetch from live site.

| File | Route |
|------|-------|
| `src/br/pages/Solucoes.tsx` | `/br/solucoes` (overview, links to 9 solution pages) |
| `src/br/pages/SobreNos.tsx` | `/br/sobre-nos` |
| `src/br/pages/FaleConosco.tsx` | `/br/fale-conosco` |
| `src/br/pages/Esg.tsx` | `/br/esg` |
| `src/br/pages/Carreiras.tsx` | `/br/carreiras` |
| `src/br/pages/PoliticaDePrivacidade.tsx` | `/br/politica-de-privacidade` |
| `src/br/pages/RelatorioTransparencia.tsx` | `/br/relatorio-de-transparencia-e-igualdade-salarial` |
| `src/br/pages/Tendencias2026.tsx` | `/br/tendencias-mercado-financeiro-2026` |

---

### Phase 5 — Router Wiring

Add all routes to `src/App.tsx` inside the `<Route element={<BrLayout />}>` block.

Approximate final route count: **~25 BR routes** (currently only 1: `/br`).

---

## Content JSON Schema Reference

### Blog / Cases
```json
{
  "title": "Full article title",
  "slug": "url-slug",
  "date": "YYYY-MM-DD",
  "author": "Author Name",
  "thumbnail": "https://...",
  "excerpt": "First ~160 chars",
  "body": "Full content in markdown",
  "images": ["https://..."]
}
```

### Index (auto-generated by Node one-liner)
```json
[{ "title": "", "slug": "", "date": "", "thumbnail": "", "excerpt": "", "file": "YYYY-MM-DD - Title.json" }]
```

### Index regeneration command
```bash
cd public/data/br/blog && node -e "
const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.json') && f !== 'index.json').sort().reverse();
const index = files.map(f => { const d = JSON.parse(fs.readFileSync(f,'utf8')); return { title: d.title, slug: d.slug, date: d.date, thumbnail: d.thumbnail||'', excerpt: d.excerpt||'', file: f }; });
fs.writeFileSync('index.json', JSON.stringify(index, null, 2));
console.log('index.json:', index.length, 'entries');
"
```

---

## Commands
```bash
npm run dev      # localhost:5173
npm run build    # TypeScript check + Vite build
npm run deploy   # build + wrangler deploy to Cloudflare Pages
```
