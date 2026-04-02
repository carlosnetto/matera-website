# Matera NA Website — Project Context

## Goal
Static copy of **matera.com/en** — a React + Vite + TypeScript site that matches the real site visually, deployed via Wrangler to Cloudflare Pages. No CMS, no database, no server.

## Stack
- React 19 + TypeScript + Vite 8
- react-router-dom (client-side routing, 16 routes)
- Wrangler 4 (deploy: `npm run deploy`)
- Poppins font — **bundled locally** in `public/fonts/` (400, 600, 700 woff2)
- HubSpot Forms API (whitepaper lead capture, portal ID: 20392958)
- No external font CDN dependency

## Real Site Source Code
The real matera.com source is at `$HOME/Git/site-matera-main` (Next.js + Strapi CMS + Tailwind). Use it to extract exact styles, assets, and structure. Navigation/content is CMS-driven so check the rendered HTML from matera.com/en for actual menu items. **The live site always wins** over the source code when there's a conflict.

## Content Architecture (ADR-001)
Blog, Press, Podcasts, and Whitepapers use static JSON files — one JSON per article, one `index.json` per content type. See [ADR.md](./ADR.md) for full details.

```
public/data/
├── blog/        35 posts    (index.json + individual JSONs)
├── press/       56 articles (index.json + individual JSONs)
├── podcasts/    11 episodes (index.json + individual JSONs, Spotify + Apple URLs)
└── whitepapers/ 12 papers   (index.json + individual JSONs, HubSpot form IDs + PDF URLs)
```

### Content sourcing process
1. Find URLs via `matera.com/sitemap.xml`
2. Fetch each page via WebFetch
3. Write individual JSONs to `public/data/{type}/`
4. Regenerate index with Node one-liner (see ADR.md)

### Filename convention
`YYYY-MM-DD - Title.json` — special chars removed, truncated to 80 chars max.

## Key Design Tokens (from real site Tailwind config)
```
--matera-blue:   #010025   (dark navy, primary bg)
--matera-green:  #5CFF4D   (accent green)
--matera-purple: #461CDC   (secondary accent, CTA bg)
--matera-black:  #000000   (real site uses #000023)
--matera-white:  #FFFFFF
--matera-gray:   #F5F5F5   (section backgrounds)
Hero bg:         #000023   (near-black, from real site matera-black)
```

## Typography (exact from real site)
- **Font**: Poppins everywhere. Real site loads weights **400, 600, 700** (NO 800).
- **CSS variable**: `--font-poppins: 'Poppins', ui-sans-serif, system-ui, sans-serif`
- **Heading line-height**: `1.2em`
- **PageHero headings**: fontWeight 400 (thin/regular, not bold)
- **Body text**: `1rem / 1.5rem` mobile → `1.125rem / 1.75rem` at 1024px+

## Header
- Height: `4rem` (64px)
- Background: **transparent** at top, transitions to `rgba(1, 0, 37, 0.97)` on scroll
- Logo: **SVG image** at `/matera-logo.svg`
- Nav: plain text links with chevrons, **mega menu dropdowns** on hover for Solutions/News/Company
- Mega menu has invisible hover bridge to prevent dropdown from closing when mouse travels down
- "Contact us" is a plain text link (no button)
- "English" is an outline button with chevron

## Pages (16 routes)
1. `/` `/en` — Home (Hero, TrustBanner, Solutions, Features, Stats, WhyMatera, CTA)
2. `/en/contact-us` — Contact form + offices
3. `/en/stablecoin` — Stablecoin product page (9 sections)
4. `/en/solutions/digital-twin` — Digital Twin product page (12 sections)
5. `/en/solutions/qr-code-solutions` — QR Code product page
6. `/en/solutions/wallet-as-a-service` — Wallet page
7. `/en/about-us` — Company, stats, timeline (1987-2022)
8. `/en/blog` + `/en/blog/:slug` — Blog listing + article (JSON-driven)
9. `/en/press` + `/en/press/:slug` — Press listing + article (JSON-driven)
10. `/en/whitepapers` + `/en/whitepapers/:slug` — Whitepapers with gated HubSpot form
11. `/en/podcasts` + `/en/podcasts/:slug` — Podcasts with Spotify + Apple links
12. `/en/privacy-policy` — Privacy policy

## Local Assets
- Logo: `public/matera-logo.svg` and `public/matera-logo-notag.svg`
- Client logos: `public/logos/` (15 PNG files)
- Why Matera bg: `public/why-matera-bg.webp`
- Menu images: `public/header-menu-image.jpg`, `public/news-menu-image.jpg`
- Favicon: `public/favicon.ico`, `public/icon.png` (from matera.com)

## Cloudfront Assets
- Video: `d2lq74zxbg4jiz.cloudfront.net/anim_matera_V2_82378a33e4.mp4`
- Stablecoin icon: `d2lq74zxbg4jiz.cloudfront.net/stablecoin_2abb4b6254.svg`
- RTP icon: `d2lq74zxbg4jiz.cloudfront.net/real_time_payments_f333b57894.svg`
- QR icon: `d2lq74zxbg4jiz.cloudfront.net/qr_code_e9a72b7bb1.svg`

## Commands
```bash
npm run dev      # dev server at localhost:5173
npm run build    # TypeScript check + Vite build → dist/
npm run preview  # serve dist/ at localhost:4173
npm run deploy   # build + wrangler deploy to Cloudflare Pages
```

## What NOT To Do
- Do not use `var(--font-heading)` or `var(--font-body)` — these variables don't exist
- Do not load fonts from Google Fonts — use local woff2 files in public/fonts/
- Do not use `font-family` inline overrides on components — Poppins is set globally on body
- Do not use fontWeight: 800 for headings — real site only uses 400/600/700
- Do not link content pages to external insight.matera.com — use local `/en/whitepapers/:slug` routes
