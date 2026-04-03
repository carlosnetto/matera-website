# Matera Website

Static copies of **matera.com** — no CMS, no database, no server. Built with React + Vite + TypeScript, deployed to Cloudflare Pages.

## Architecture

```
matera-na-website/
├── src/
│   ├── shared/             ← design system, brand assets, layout primitives
│   │   ├── components/     ← PageHero, ScrollToTop (locale-agnostic)
│   │   └── utils/          ← markdownToHtml (shared utility)
│   ├── na/                 ← North America market (serves /en, future /es, /fr)
│   │   ├── NaLayout.tsx    ← NA Header + <Outlet /> + NA Footer
│   │   ├── components/     ← NA-specific: Header, Footer, Hero, CTA, etc.
│   │   └── pages/          ← NA pages (Home, Blog, Stablecoin, etc.)
│   ├── App.tsx             ← router with market-based layout nesting
│   ├── main.tsx
│   └── index.css           ← shared design tokens, typography, buttons
├── public/
│   ├── data/
│   │   └── en/             ← English content JSON (blog, press, podcasts, whitepapers)
│   ├── fonts/              ← Poppins woff2 (400, 600, 700)
│   ├── logos/              ← client logos
│   └── (brand assets)      ← logo SVGs, favicon, images
├── dist/                   ← build output (ONLY this goes to Cloudflare)
├── CLAUDE.md               ← project context
├── ADR.md                  ← architecture decision records
└── README.md               ← this file
```

**Only `dist/` is deployed.** Everything else stays in the repo.

## Multi-Region Strategy

The site is organized by **market**, not language:

| Market | URL prefix | Source code | Content data |
|--------|-----------|-------------|--------------|
| North America | `/en` (English) | `src/na/` | `public/data/en/` |
| North America | `/es` (Spanish, future) | `src/na/` | `public/data/es/` |
| North America | `/fr` (French, future) | `src/na/` | `public/data/fr/` |
| Brazil | `/br` (Portuguese, future) | `src/br/` | `public/data/br/` |

NA and BR are different markets with different products and content. `/es` and `/fr` are translations of the NA market, not separate markets.

## Pages (EN)

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

All content is stored as static JSON files in `public/data/en/`:

| Content type | Count | Directory | HubSpot integration |
|-------------|-------|-----------|---------------------|
| Blog | 35 posts | `public/data/en/blog/` | No |
| Press | 56 articles | `public/data/en/press/` | No |
| Podcasts | 11 episodes | `public/data/en/podcasts/` | No |
| Whitepapers | 12 papers | `public/data/en/whitepapers/` | Yes (gated form → HubSpot API) |

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
