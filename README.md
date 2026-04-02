# Matera NA Website

Static copy of **matera.com/en** — no CMS, no database, no server. Built with React + Vite + TypeScript, deployed to Cloudflare Pages.

## Architecture

```
matera-na-website/          <-- repo root (source code, docs, configs)
├── src/                    <-- React components, pages, CSS
│   ├── components/         <-- shared components (Header, Footer, PageHero, etc.)
│   └── pages/              <-- page components (Home, Blog, Press, Podcasts, etc.)
├── public/                 <-- static assets (fonts, logos, JSON data, favicon)
│   └── data/               <-- blog, press, podcasts, whitepapers as static JSON
├── dist/                   <-- build output (ONLY this goes to Cloudflare)
├── CLAUDE.md               <-- project context for Claude Code
├── ADR.md                  <-- architecture decision records
├── README.md               <-- this file
├── package.json
└── vite.config.ts
```

**Only `dist/` is deployed.** Everything else (source code, docs, ADRs, READMEs) stays in the repo and never reaches Cloudflare.

## Pages

| Route | Description |
|-------|-------------|
| `/` `/en` | Homepage (hero, trust banner, solutions, features, stats, why matera, CTA) |
| `/en/contact-us` | Contact form + office locations |
| `/en/stablecoin` | Digital Twin for Stablecoins product page |
| `/en/solutions/digital-twin` | Digital Twin for Real-Time Payments product page |
| `/en/solutions/qr-code-solutions` | QR Code Solutions product page |
| `/en/solutions/wallet-as-a-service` | Wallet as a Service product page |
| `/en/about-us` | Company info, stats, timeline (1987-2022) |
| `/en/blog` | Blog listing (35 posts, JSON-driven) |
| `/en/blog/:slug` | Individual blog article |
| `/en/press` | Press listing (56 articles, JSON-driven) |
| `/en/press/:slug` | Individual press article |
| `/en/whitepapers` | Whitepapers listing (12 papers, JSON-driven) |
| `/en/whitepapers/:slug` | Whitepaper detail with gated HubSpot form + PDF download |
| `/en/podcasts` | Podcasts listing (11 episodes, JSON-driven) |
| `/en/podcasts/:slug` | Podcast episode with Spotify + Apple Podcasts links |
| `/en/privacy-policy` | Privacy policy |

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

All content is stored as static JSON files in `public/data/`:

| Content type | Count | Directory | HubSpot integration |
|-------------|-------|-----------|---------------------|
| Blog | 35 posts | `public/data/blog/` | No |
| Press | 56 articles | `public/data/press/` | No |
| Podcasts | 11 episodes | `public/data/podcasts/` | No |
| Whitepapers | 12 papers | `public/data/whitepapers/` | Yes (gated form → HubSpot API) |

No CMS — content is managed through Claude Code. See [ADR.md](./ADR.md) for the full architecture.

## Stack

- React 19 + TypeScript + Vite 8
- react-router-dom (client-side routing)
- Wrangler 4 (Cloudflare Pages deploy)
- Poppins font (bundled locally, no CDN dependency)
- HubSpot Forms API (whitepaper lead capture)
