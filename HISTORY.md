# Change History

## 2026-04-03: SEO P3 fixes — JSON-LD structured data, expanded Wallet page

**What was done:**
- Added JSON-LD structured data via PageMeta component:
  - **Organization schema** on every page (name, logo, social profiles, founding date, employee count)
  - **BreadcrumbList schema** auto-generated from URL path on every page
  - **Article schema** on blog, press, podcast, and case study detail pages (headline, date, author, publisher, image)
- Added `article` prop to PageMeta for content pages (Blog, Press, Podcasts articles + BR Blog, Cases)
- Expanded WalletAsAService from ~150 words to ~500 words with 6 capability cards, 4 value props, 3 use case segments

**Files changed:** `src/shared/components/PageMeta.tsx`, `src/na/pages/Blog.tsx`, `src/na/pages/Press.tsx`, `src/na/pages/Podcasts.tsx`, `src/na/pages/WalletAsAService.tsx`, `src/br/pages/Blog.tsx`, `src/br/pages/Cases.tsx`

---

## 2026-04-03: SEO P2 fixes — hreflang, html lang, lazy loading, form labels, CTA link

**What was done:**
- Added `hreflang` tags (en, pt-BR, x-default) via PageMeta component — all pages now declare language alternates
- Dynamic `<html lang>` — EN pages set `lang="en"`, BR pages set `lang="pt-BR"` automatically
- Added `loading="lazy"` to below-fold images: listing thumbnails (Blog, Press, Whitepapers, Podcasts), client logos (TrustBanner), dropdown menu images (Header)
- Fixed form label/input associations in ContactUs.tsx and Whitepapers.tsx — added `htmlFor`/`id`/`name` attributes
- Fixed CTA broken link — changed `href="#"` to `href="/en/contact-us"` in CTA.tsx

**Files changed:** `src/shared/components/PageMeta.tsx`, `src/na/components/CTA.tsx`, `src/na/components/Header.tsx`, `src/na/components/TrustBanner.tsx`, `src/na/pages/ContactUs.tsx`, `src/na/pages/Whitepapers.tsx`, `src/na/pages/Blog.tsx`, `src/na/pages/Press.tsx`, `src/na/pages/Podcasts.tsx`

---

## 2026-04-03: SEO P1 fixes — sitemap, robots.txt, 404 page, duplicate routes

**What was done:**
- Generated `public/sitemap.xml` with 256 URLs (all static routes + blog/press/whitepaper/podcast/case slugs from index.json)
- Created `public/robots.txt` with sitemap reference
- Added 404 catch-all route (`<Route path="*">`) with branded error page showing links to EN and BR sites
- Removed duplicate route `/` (was identical to `/en` — `_worker.js` already handles root redirect)
- Removed duplicate route `/en/solutions/digital-twin-stablecoins` (was identical to `/en/stablecoin`)
- Added `scripts/generate-sitemap.mjs` for regenerating sitemap when content changes

**Files changed:** `src/App.tsx`, `src/shared/components/NotFound.tsx` (new), `public/robots.txt` (new), `public/sitemap.xml` (new), `scripts/generate-sitemap.mjs` (new), `SEO-ANALYSIS.md`

---

## 2026-04-03: SEO P0 fixes — dynamic titles, meta descriptions, OG tags, server-side meta injection

**Problem:** Every page showed `<title>Matera</title>` with no meta descriptions, no OG tags, and no Twitter cards. Social media crawlers saw blank previews.

**What was done:**
- Installed `react-helmet-async` for client-side meta tag management
- Created `src/shared/components/PageMeta.tsx` — shared component for title, description, OG, and Twitter tags
- Added PageMeta to all 30+ pages across EN and BR markets (static pages with hand-written descriptions, content pages with dynamic data from JSON)
- Updated `public/_worker.js` to inject meta tags server-side at the Cloudflare edge — social crawlers (LinkedIn, Twitter, Facebook) now see full meta without JS execution
- Worker handles both static routes (hardcoded meta) and dynamic routes (reads index.json to look up slug → title/description)

**Files changed:** `package.json`, `src/main.tsx`, `src/shared/components/PageMeta.tsx` (new), all page components in `src/na/pages/` and `src/br/pages/`, `public/_worker.js`

---

## 2026-04-03: Update QR Code payment count to 3.6 billion/year

**Files fixed:**
- `src/na/components/WhyMatera.tsx` — 300M+ QR Code payments/month → 3.6B+ QR Code payments/year

---

## 2026-04-03: Update Pix transaction count to 7.2 billion/year

**Problem:** All pages showed "6 BI" (6 billion) Pix transactions per year. Updated to 7.2 billion. RegTech showed "4,5 BI+ transações processadas" — also updated to 7.2 BI. EN WhyMatera showed "600M+ instant payments per month" — updated to "7.2B+ Pix transactions per year".

**Files fixed:**
- `src/br/pages/Home.tsx` — 6BI+ → 7,2BI+ (two occurrences)
- `src/br/pages/SobreNos.tsx` — 6 BI+ → 7,2 BI+
- `src/br/pages/solucoes/CoreBanking.tsx` — 6 BI → 7,2 BI
- `src/br/pages/solucoes/Pagamentos.tsx` — 6 BI → 7,2 BI
- `src/br/pages/solucoes/RegTech.tsx` — 4,5 BI+ → 7,2 BI+
- `src/na/components/WhyMatera.tsx` — 600M+ instant payments/month → 7.2B+ Pix transactions/year

---

## 2026-04-03: Fix inconsistent account count (60M → 90M)

**Problem:** Some pages showed "60 MI de contas" while others showed "90+ Million accounts". The correct figure is 90M.

**Files fixed:**
- `src/br/pages/solucoes/CoreBanking.tsx` — changed "60 MI" to "90 MI"
- `src/br/pages/solucoes/Pagamentos.tsx` — changed "60 MI" to "90 MI"

**Already correct:** `src/na/components/Stats.tsx` (90+ Million), `src/na/pages/AboutUs.tsx` (90+ M), `src/br/pages/Home.tsx` (+90MM), `src/br/pages/SobreNos.tsx` (+90 MM)

---

## 2026-04-03: SEO fixes for /en site

**Problem:** SEO analysis flagged Portuguese content on English pages, particularly in image attributes.

**What was found:**
- All content images (blog, press, whitepapers, podcasts) had empty `alt=""` — search engines and screen readers saw no description (HIGH impact)
- 14 Cloudfront image URLs contained Portuguese filenames like `Copia_de_shutterstock_...` (LOW impact, resolved by Cloudfront migration below)
- 4 press articles linked to Portuguese-language external sources (acceptable — proper nouns)
- BR homepage had a purple announcement banner that didn't exist on the real matera.com/br

**What was fixed:**
- Added descriptive `alt` text (article titles) to all content thumbnails across Blog, Press, Whitepapers, Podcasts, DigitalTwin, Stablecoin, and AboutUs pages
- Removed the non-existent announcement banner from BR homepage

**Files changed:** `src/na/pages/Blog.tsx`, `Press.tsx`, `Whitepapers.tsx`, `Podcasts.tsx`, `DigitalTwin.tsx`, `Stablecoin.tsx`, `AboutUs.tsx`, `src/br/pages/Home.tsx`

**Full audit:** See `BADSEO.md`

---

## 2026-04-03: Migrate all assets from Cloudfront to local

**Problem:** 377 images, videos, and PDFs were served from `d2lq74zxbg4jiz.cloudfront.net` (Matera's old Strapi CMS CDN). Since the site deploys to Cloudflare Pages, having a second CDN dependency was unnecessary and created risks: Cloudfront could go down, URLs could change, and Portuguese filenames in image URLs hurt SEO.

**What was done:**
- Downloaded 289 images + 5 small videos + 6 PDFs to `public/assets/` (18MB images + 6MB videos + 8MB PDFs)
- Renamed all files with clean English names (stripped CMS hashes, translated Portuguese words)
- Replaced 621 URL references across 247+ source files (`src/` and `public/data/`)
- 1 large video (38MB `digital-twin-explainer.mp4`) downloaded locally but gitignored

**What remains on Cloudfront:** Nothing. Zero references in source code. One legacy `/_next/image/` encoded URL in a BR case study body (StoneX) — inert, from old Next.js site.

**Scripts:** `scripts/migrate-cloudfront.mjs` (images), `scripts/migrate-remaining.mjs` (videos + PDFs), `scripts/cloudfront-mapping.json` (full URL-to-filename mapping)

---

## 2026-04-03: Territory selector and geo-redirect

**What was done:**
- Replaced the "English"/"Portugues" language button in both NA and BR headers with a compact flag-based territory selector (US, Canada, Brazil)
- Added `public/_worker.js` — Cloudflare Pages worker that redirects `/` to `/br` for visitors from Brazil, `/en` for everyone else (uses `request.cf.country`, no external API)
- Worker also sets a `cf-country` cookie so the frontend shows the correct flag (US visitors see US flag, Canadians see Canadian flag, Brazilians see Brazilian flag)
- Territory selector navigates to market root (`/en` or `/br`), not equivalent pages

**Files changed:** `src/shared/components/TerritorySelector.tsx` (new), `src/na/components/Header.tsx`, `src/br/components/Header.tsx`, `public/_worker.js` (new)

---

## 2026-04-03: Multi-region architecture and BR market migration

**What was done:**
- Reorganized codebase from flat `src/components/` + `src/pages/` to market-based `src/na/`, `src/br/`, `src/shared/`
- Moved EN content from `public/data/` to `public/data/en/`
- Built complete BR market: 22 routes, 99 blog posts, 11 case studies, 9 solution pages, 7 static pages
- Added `.mcp.json` for Chrome DevTools MCP auto-configuration
- Added project docs: `ADR.md` (ADR-003), `CONTEXT.md`, `STRUCTURE.md`, `IMPLEMENTATION-PLAN.md`

**See:** `ADR.md` (ADR-003), `IMPLEMENTATION-PLAN.md`
