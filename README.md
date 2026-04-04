# Matera Website

Static copies of **matera.com** — no CMS, no database, no server. Built with React + Vite + TypeScript, deployed to Cloudflare Pages.

## Architecture

```
matera-website/
├── src/
│   ├── shared/             ← design system, brand assets, layout primitives
│   │   ├── components/     ← PageHero, ScrollToTop (locale-agnostic)
│   │   └── utils/          ← markdownToHtml (shared utility)
│   ├── na/                 ← US & Canada market (/en)
│   │   ├── NaLayout.tsx    ← NA Header + <Outlet /> + NA Footer
│   │   ├── components/     ← NA-specific: Header, Footer, Hero, CTA, etc.
│   │   └── pages/          ← NA pages (Home, Blog, Stablecoin, etc.)
│   ├── br/                 ← Brazil market (/br)
│   │   ├── BrLayout.tsx    ← BR Header + <Outlet /> + BR Footer
│   │   ├── components/     ← BR-specific: Header, Footer
│   │   └── pages/          ← BR pages (Home, Blog, Cases, 9 solution pages, etc.)
│   ├── App.tsx             ← router with market-based layout nesting
│   ├── main.tsx
│   └── index.css           ← shared design tokens, typography, buttons
├── public/
│   ├── data/
│   │   ├── en/             ← EN content JSON (blog, press, podcasts, whitepapers)
│   │   └── br/             ← BR content JSON (blog, cases)
│   ├── fonts/              ← Poppins woff2 (400, 600, 700)
│   ├── logos/              ← client logos
│   └── (brand assets)      ← logo SVGs, favicon, images
├── dist/                   ← build output (ONLY this goes to Cloudflare)
├── CLAUDE.md               ← project context
├── ADR.md                  ← architecture decision records
├── LESSONS-LEARNED.md      ← pitfalls encountered and their solutions
└── README.md               ← this file
```

**Only `dist/` is deployed.** Everything else stays in the repo.

## Markets

| Market | URL | Language | Source code | Content data |
|--------|-----|----------|-------------|--------------|
| US & Canada | `/en` | English | `src/na/` | `public/data/en/` |
| Brazil | `/br` | Brazilian Portuguese | `src/br/` | `public/data/br/` |

These are separate markets with different products and content — not translations of each other.

## Pages (EN)

| Route | Description |
|-------|-------------|
| `/` `/en` | Homepage (hero, trust banner, solutions, features, stats, why matera, CTA) |
| `/en/contact-us` | Contact form + office locations |
| `/en/stablecoin` | Digital Twin for Stablecoins product page |
| `/en/solutions/digital-twin` | Digital Twin for Real-Time Payments product page |
| `/en/solutions/qr-code-solutions` | QR Code Solutions product page (9 use cases, Finovate demo, X9 standard) |
| `/en/solutions/wallet-as-a-service` | Wallet as a Service product page |
| `/en/about-us` | Company info, stats, timeline (1987-2022) |
| `/en/blog` | Blog listing (35 posts, tag filters, infinite scroll) |
| `/en/blog/:slug` | Individual blog article |
| `/en/press` | Press listing (56 articles, tag filters, infinite scroll) |
| `/en/press/:slug` | Individual press article |
| `/en/whitepapers` | Whitepapers listing (12 papers, tag filters, infinite scroll) |
| `/en/whitepapers/:slug` | Whitepaper detail with gated HubSpot form + PDF download |
| `/en/podcasts` | Podcasts listing (11 episodes, tag filters, infinite scroll) |
| `/en/podcasts/:slug` | Podcast episode with Spotify + Apple Podcasts links |
| `/en/privacy-policy` | Privacy policy |

## Pages (BR)

| Route | Description |
|-------|-------------|
| `/br` | Homepage (hero with autoplay video, solutions grid, stats, trust banner) |
| `/br/blog` | Blog listing (99 posts, tag filters, infinite scroll) |
| `/br/blog/:slug` | Individual blog article |
| `/br/cases` | Case studies listing (12 structured cases, dark card design) |
| `/br/cases/:slug` | Case detail (challenges, quotes, solution, partnership sections) |
| `/br/solucoes` | Solutions overview (9 solution cards) |
| `/br/solucoes/core-banking` | Core Banking |
| `/br/solucoes/pagamentos` | Pagamentos (Pix, instant payments) |
| `/br/solucoes/cash-management` | Cash Management |
| `/br/solucoes/credito` | Crédito |
| `/br/solucoes/gestao-de-riscos` | Gestão de Riscos |
| `/br/solucoes/reg-tech` | RegTech |
| `/br/solucoes/insights` | Insights (Dados & IA) |
| `/br/solucoes/matera-digital-twin` | Digital Twin |
| `/br/solucoes/tesouraria-avancada` | Tesouraria Avançada |
| `/br/sobre-nos` | Sobre Nós (company info, stats, clients) |
| `/br/fale-conosco` | Fale Conosco (contact form) |
| `/br/carreiras` | Carreiras |
| `/br/esg` | ESG |
| `/br/politica-de-privacidade` | Política de Privacidade |
| `/br/relatorio-de-transparencia-...` | Relatório de Transparência e Igualdade Salarial |
| `/br/tendencias-mercado-financeiro-2026` | Tendências do Mercado Financeiro 2026 |

## Commands

```bash
npm run dev       # dev server at localhost:5173
npm run build     # TypeScript check + Vite build → dist/
npm run preview   # serve dist/ locally at localhost:4173
npm run deploy    # build + wrangler pages deploy dist/
```

## How deploy works

1. `npm run build` compiles TypeScript and bundles React into `dist/`
2. Everything in `public/` (fonts, images, JSON data) is copied into `dist/` as-is
3. `wrangler pages deploy dist/` uploads only the `dist/` folder to Cloudflare Pages
4. Cloudflare serves it as a static site from its CDN edge

## Content management

All content is stored as static JSON files under `public/data/`:

**EN (US & Canada)**

| Content type | Count | Directory |
|-------------|-------|-----------|
| Blog | 35 posts | `public/data/en/blog/` |
| Press | 56 articles | `public/data/en/press/` |
| Podcasts | 11 episodes | `public/data/en/podcasts/` |
| Whitepapers | 12 papers | `public/data/en/whitepapers/` |

**BR (Brazil)**

| Content type | Count | Directory |
|-------------|-------|-----------|
| Blog | 99 posts | `public/data/br/blog/` |
| Cases | 12 studies | `public/data/br/cases/` |

All content entries include a `tags` array for filtering (e.g. `qr-code`, `pix`, `stablecoin`, `credito`). Listing pages show tag filter pills and use infinite scroll.

No CMS — content is managed through Claude Code. See [ADR.md](./ADR.md) for the full architecture.

## Development tools

### Chrome DevTools MCP (Antigravity)

Claude Code uses the [chrome-devtools-mcp](https://www.npmjs.com/package/chrome-devtools-mcp) server by Antigravity to inspect the running site in Chrome — taking screenshots, reading console logs, and inspecting DOM elements directly from the conversation.

The MCP server configuration is checked into the repo at `.mcp.json`, so Claude Code picks it up automatically when you open the project — no manual setup needed.

**To use it:**

1. Launch Chrome with remote debugging enabled:
   ```bash
   /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222
   ```

2. Run the dev server (`npm run dev`) and open `http://localhost:5173` in the debugging-enabled Chrome instance.

3. Start a Claude Code session in this project — the MCP server connects automatically.

## Stack

- React 19 + TypeScript + Vite 8
- react-router-dom (client-side routing)
- Wrangler 4 (Cloudflare Pages deploy)
- Poppins font (bundled locally, no CDN dependency)
- HubSpot Forms API (whitepaper lead capture)
