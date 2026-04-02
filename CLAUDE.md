# Matera NA Website — Project Context

## Goal
Static copy of **matera.com/en** — a React + Vite + TypeScript site that matches the real site visually, deployed via Wrangler to Cloudflare Pages. No CMS.

## Stack
- React 19 + TypeScript + Vite 8
- Wrangler 4 (deploy: `npm run deploy`)
- Poppins font — **bundled locally** in `public/fonts/` (400, 600, 700, 800 woff2)
- No external font CDN dependency

## Real Site Source Code
The real matera.com source is at `$HOME/Git/site-matera-main` (Next.js + Strapi CMS + Tailwind). Use it to extract exact styles, assets, and structure. Navigation/content is CMS-driven so check the rendered HTML from matera.com/en for actual menu items.

## Chrome DevTools MCP
Installed (`chrome-devtools-mcp` via npm). Chrome must be running with `--remote-debugging-port=9222`:
```bash
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222
```
Use MCP tools to navigate, screenshot, and compare local vs real site.

## Key Design Tokens (from real site Tailwind config)
```
--matera-blue:   #010025   (dark navy, primary bg — real site uses #0A0A40 / #000023)
--matera-green:  #5CFF4D   (accent green — real site uses #6BFF50)
--matera-purple: #461CDC   (secondary accent, CTA bg)
--matera-black:  #000000
--matera-white:  #FFFFFF
--matera-gray:   #F5F5F5   (section backgrounds — real site #F2F2F2)
Hero bg:         #000012   (near-black)
```

## Typography (exact from real site)
- **Font**: Poppins everywhere. Real site loads weights **400, 600, 700** (NO 800).
- **CSS variable**: `--font-poppins: 'Poppins', ui-sans-serif, system-ui, sans-serif`
- **Heading line-height**: `1.2em` (from `*[class*='heading-']`)
- **Hero heading** (exact from real site HTML):
  - `font-bold text-[2.4rem] leading-[3.4rem]`
  - `lg:text-[3rem] lg:leading-[3.6rem]`
  - `xl:text-[3.75rem] xl:leading-[4.4rem]`
- **Body text**: `1rem / 1.5rem` mobile → `1.125rem / 1.75rem` at 1024px+
- **Heading scale** (exact from real site):
  - `.heading-5xl`: 2.5rem → 3rem (768px+)
  - `.heading-6xl`: 3rem → 3.875rem (768px+)
  - `.heading-7xl`: 3.875rem → 4.75rem (768px+)
  - `.heading-8xl`: 4rem → 6rem (768px+)

## Header
- Height: `4rem` (64px)
- Background: **transparent** at top, transitions to `rgba(1, 0, 37, 0.97)` on scroll
- Logo: **SVG image** at `/matera-logo.svg` (downloaded from cloudfront)
- Nav: plain text links with chevrons, **mega menu dropdowns** on hover for Solutions/News/Company
- "Contact us" is a plain text link (no button)
- "English" is an outline button with chevron

## Mega Menu Structure (from real site HTML)
- **Solutions** → "Get to know our solutions": Digital Twin for Stablecoins, Digital Twin for Real-Time Payments, QR Code Payments, Wallet as a Service + header image
- **News** → "News & Insights": Blog, Press, Whitepaper, Podcasts + news image
- **Company** → "About us": About us, Timeline + header image
- **Contact us** → Direct link (no dropdown)

## Hero Section
- Two-column grid: text left, video right
- Hero bg: `#000012`
- Video: `https://d2lq74zxbg4jiz.cloudfront.net/anim_matera_V2_82378a33e4.mp4`
- Video height: `100vh`, width: auto
- Heading uses custom `.hero-heading` class with exact real site sizes (see Typography above)

## Section Order
1. Hero
2. TrustBanner (dark blue, centered inline stats, scrolling client logo carousel with real PNGs)
3. Solutions (light gray bg, 3 **dark navy** cards with cloudfront SVG icons)
4. Features (black bg, **2x2 grid**: API-First, Unified Payments, Modern Infrastructure, 24x7 Banking)
5. Stats (dark blue bg, 1100+, 280+, 90M+)
6. WhyMatera (dark blue bg, real photo on right `/why-matera-bg.webp`, vertical text on left with green underlines)
7. CTA (solid purple `#461CDC` rounded card, two-column layout)
8. Footer (dark blue #010025, SVG logo, email signup, columns: Solutions/About us/Contact us/Policies)

## Local Assets (downloaded from cloudfront)
- Logo: `public/matera-logo.svg` and `public/matera-logo-notag.svg`
- Client logos: `public/logos/` (15 PNG files — BofA, Santander, Bradesco, etc.)
- Why Matera bg: `public/why-matera-bg.webp` and `public/why-matera-bg-mobile.webp`
- Menu images: `public/header-menu-image.jpg`, `public/news-menu-image.jpg`
- Solution icons: cloudfront URLs (stablecoin, RTP, QR code SVGs)

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
- Do not use `var(--font-heading)` or `var(--font-body)` — these variables are removed
- Do not load fonts from Google Fonts — use local woff2 files in public/fonts/
- Do not use `font-family` inline overrides on components — Poppins is set globally on body
- Do not use fontWeight: 800 for headings — real site only uses 400/600/700

## Recent Changes (April 2, 2026)
- Replaced text "MATERA" logo with real SVG logo image everywhere
- Added mega menu dropdowns for Solutions/News/Company with images
- Changed Solutions cards from white to dark navy backgrounds
- Changed Features layout from 3+1 to 2x2 grid
- Rebuilt WhyMatera: dark bg + real photo + vertical text with green underlines
- Rebuilt CTA: solid purple rounded card, two-column layout
- Rebuilt Footer: SVG logo, email signup, reorganized columns
- Updated Trust Banner: centered inline stats + scrolling real logo carousel
- Fixed hero heading to exact real site font sizes (2.4rem → 3rem → 3.75rem)
- Fixed heading weight from 800 → 700 across the board
- Installed Chrome DevTools MCP server for browser automation
