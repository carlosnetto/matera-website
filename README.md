# Matera NA Website

Static copy of **matera.com/en** — no CMS, no database, no server. Built with React + Vite + TypeScript, deployed to Cloudflare Pages.

## Architecture

```
matera-na-website/          <-- repo root (source code, docs, configs)
├── src/                    <-- React components, pages, CSS
├── public/                 <-- static assets (fonts, logos, JSON data, favicon)
│   └── data/               <-- blog, press, podcasts as static JSON
├── dist/                   <-- build output (ONLY this goes to Cloudflare)
├── CLAUDE.md               <-- project context for Claude Code
├── ADR-001-*.md            <-- architecture decision records
├── README.md               <-- this file
├── package.json
└── vite.config.ts
```

**Only `dist/` is deployed.** Everything else (source code, docs, ADRs, READMEs) stays in the repo and never reaches Cloudflare.

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

Blog (35 posts), Press (56 articles), and Podcasts (11 episodes) are stored as static JSON files in `public/data/`. No CMS — content is managed through Claude Code. See [ADR.md](./ADR.md) for architecture decisions.

## Stack

- React 19 + TypeScript + Vite 8
- react-router-dom (client-side routing)
- Wrangler 4 (Cloudflare Pages deploy)
- Poppins font (bundled locally, no CDN dependency)
