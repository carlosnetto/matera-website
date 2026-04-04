# Matera Website — Project Context

## Goal
Static copies of **matera.com** — React + Vite + TypeScript, deployed via Wrangler to Cloudflare Pages. No CMS, no database, no server.

## Multi-Region Architecture (ADR-003)
The site is organized by **market**, not language:
- `src/na/` — North America market (different products from Brazil)
- `src/br/` — Brazil market (future, different products from NA)
- `src/shared/` — design system shared across all markets

URL prefixes map to markets + languages:
- `/en` → NA market, English
- `/es` → NA market, Spanish (future)
- `/fr` → NA market, French (future)
- `/br` → BR market, Portuguese (future)

NA and BR have different products and content. `/es` and `/fr` are translations of NA, not separate markets.

## Stack
- React 19 + TypeScript + Vite 8
- react-router-dom (client-side routing, 40+ routes across EN and BR)
- react-helmet-async (dynamic SEO meta tags per page)
- Wrangler 4 (deploy: `npm run deploy`)
- Poppins font — **bundled locally** in `public/fonts/` (400, 600, 700 woff2)
- HubSpot Forms API (whitepaper lead capture, portal ID: 20392958)
- No external font CDN dependency

## Source Structure
```
src/
├── shared/                  ← design system (all markets share this)
│   ├── components/          ← PageHero, PageMeta, ScrollToTop, TerritorySelector, NotFound
│   └── utils/               ← markdownToHtml
├── na/                      ← North America market
│   ├── NaLayout.tsx         ← NA Header + Outlet + NA Footer
│   ├── components/          ← Header (mobile menu), Footer, Hero, Solutions, etc.
│   └── pages/               ← Home, Blog, Stablecoin, QrCodeSolutions, etc.
├── br/                      ← Brazil market
│   ├── BrLayout.tsx         ← BR Header + Outlet + BR Footer
│   ├── components/          ← Header (mobile menu), Footer
│   └── pages/               ← Home, Blog, Cases, Solucoes, 9 solution pages, etc.
├── App.tsx                  ← router (market-based layout nesting, 40+ routes)
├── main.tsx                 ← HelmetProvider wraps App
└── index.css                ← design tokens, responsive breakpoints, mobile overrides
```

## Real Site Source Code
The real matera.com source is at `$HOME/Git/site-matera-main` (Next.js + Strapi CMS + Tailwind). Use it to extract exact styles, assets, and structure. Navigation/content is CMS-driven so check the rendered HTML from matera.com/en for actual menu items. **The live site always wins** over the source code when there's a conflict.

## Content Architecture (ADR-001)
Blog, Press, Podcasts, and Whitepapers use static JSON files — one JSON per article, one `index.json` per content type. Content is organized by language under `public/data/`:

```
public/data/
├── en/              ← English content (NA market)
│   ├── blog/        35 posts    (index.json + individual JSONs)
│   ├── press/       56 articles (index.json + individual JSONs)
│   ├── podcasts/    11 episodes (index.json + individual JSONs, Spotify + Apple URLs)
│   └── whitepapers/ 12 papers   (index.json + individual JSONs, HubSpot form IDs + PDF URLs)
└── br/              ← Portuguese content (BR market)
    ├── blog/        99 posts    (index.json + individual JSONs)
    └── cases/       11 studies  (index.json + individual JSONs)
```

### Content sourcing process
1. Find URLs via `matera.com/sitemap.xml`
2. Fetch each page via WebFetch
3. Write individual JSONs to `public/data/en/{type}/`
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
- Territory selector: small flag button (US/CA/BR) with dropdown, replaces old "English" button
- Mobile (< 1024px): hamburger menu with accordion-style nav drawer, body scroll lock

## Pages (16 EN routes)
1. `/` — Redirects to `/en` (production: geo-redirect via `_worker.js`)
2. `/en` — Home (Hero, TrustBanner, Solutions, Features, Stats, WhyMatera, CTA)
3. `/en/contact-us` — Contact form + offices
4. `/en/stablecoin` — Digital Twin for Stablecoins (Circle partnership, USDC, video demo)
5. `/en/solutions/digital-twin` — Digital Twin for Real-Time Payments (hero video, capabilities, core integration)
6. `/en/solutions/qr-code-solutions` — QR Code Payments (10 sections: hero, value prop, 3-col why, 9 use cases, Finovate demo, how it works, advanced tools, X9 standard, resources, CTA)
7. `/en/solutions/wallet-as-a-service` — Wallet as a Service (capabilities, value props, use cases)
8. `/en/about-us` — Company, stats, timeline (1987-2022)
9. `/en/blog` + `/en/blog/:slug` — Blog listing + article (JSON-driven)
10. `/en/press` + `/en/press/:slug` — Press listing + article (JSON-driven)
11. `/en/whitepapers` + `/en/whitepapers/:slug` — Whitepapers with gated HubSpot form
12. `/en/podcasts` + `/en/podcasts/:slug` — Podcasts with Spotify + Apple links
13. `/en/privacy-policy` — Privacy policy
14. `*` — 404 catch-all with branded error page

## Local Assets
All assets are self-hosted — **zero Cloudfront dependency**.

- `public/assets/` — 365+ images, icons, SVGs, PDFs, and small videos (migrated from Cloudfront)
- `public/logos/` — 15 client logo PNGs (trust banner)
- `public/matera-logo.svg`, `public/matera-logo-notag.svg` — brand logos
- `public/fonts/` — Poppins woff2 (400, 600, 700)
- `public/favicon.ico`, `public/icon.png`
- Gitignored (large videos): `digital-twin-explainer.mp4` (38MB), `br-hero-video.mp4` (28MB)

## SEO Infrastructure
- `react-helmet-async` — dynamic `<title>`, meta descriptions, OG/Twitter tags, hreflang, JSON-LD per page
- `public/_worker.js` — Cloudflare Pages worker: geo-redirect `/` → `/en` or `/br`, server-side meta injection for crawlers, `cf-country` cookie
- `public/sitemap.xml` — 256 URLs (regenerate with `node scripts/generate-sitemap.mjs`)
- `public/robots.txt` — allows all, points to sitemap
- JSON-LD schemas: Organization, WebSite, BreadcrumbList, Article, VideoObject
- `src/shared/components/PageMeta.tsx` — centralized SEO component used by all pages

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
- Do not put NA-specific components in `src/shared/` — only truly locale-agnostic code goes there
- Do not use images depicting card payments (credit cards, debit cards, plastic) for payment visuals — Matera's payment products are **QR Code payments and instant payments (Pix, FedNow, RTP)**, not card-based. Always use QR code imagery or instant payment visuals instead. Card references in text are acceptable only when describing supported payment rails (e.g., "push-to-card") or account types, never as the primary payment method.
