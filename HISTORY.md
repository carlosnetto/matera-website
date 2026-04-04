# Change History

Reverse-chronological log of improvements to the Matera website.

---

## 2026-04-03: Fix mobile hero spacing + trust banner logos

- Mobile hero `padding-top` CSS selector changed from `section:first-child` to `section:first-of-type` — the old selector never matched because Helmet injects `<script>` tags as the actual first child of `<main>`
- Adjusted mobile hero padding to `6rem` for comfortable spacing below the fixed header
- Trust banner logos: 8 of 15 had opaque white backgrounds causing gray rectangles with the `brightness(0) invert(1)` CSS filter
- Re-downloaded all 15 logos, upscaled 4x via ImageMagick, pre-rendered as white-on-transparent PNGs (320-668px wide)
- Removed CSS `brightness(0) invert(1)` filter from TrustBanner — logos are now pre-rendered white, no runtime filter needed

---

## 2026-04-03: Content tagging, infinite scroll, tag filters across all listing pages

- 8 of 15 client logos had solid white backgrounds (no alpha channel)
- The CSS `brightness(0) invert(1)` filter turned the white backgrounds into visible gray rectangles
- Used ImageMagick to make white pixels transparent on: Bank of America, Bradesco, C6 Bank, Cielo, Fiserv, Mizuho, Nupay, Western Union
- All 15 logos now have proper alpha transparency and render correctly on the dark navy background

---

## 2026-04-03: Content tagging, infinite scroll, tag filters across all listing pages

Tagged all content across EN and BR markets with topic-based tags for filtering and cross-referencing.

**EN tags** (12): `qr-code`, `pix`, `instant-payments`, `stablecoin`, `fednow`, `rtp`, `digital-twin`, `core-banking`, `x9`, `baas`, `fraud`, `cross-border`
- Blog: 35 posts tagged
- Whitepapers: 12 papers tagged
- Podcasts: 11 episodes tagged
- Press: 56 articles tagged

**BR tags** (8): `pix`, `credito`, `regtech`, `dados-ia`, `core-banking`, `stablecoin`, `digital-twin`, `pagamentos`
- Blog: 99 posts tagged

**Listing page improvements** (Blog, Press, Whitepapers, Podcasts — EN and BR):
- Replaced "Load More" buttons with **infinite scroll** (IntersectionObserver, 12 items per batch, 200px lookahead)
- Added **tag filter pills** — single row above content, pill-shaped buttons, AND logic when multiple selected, white/blue/green color scheme
- Portuguese "Limpar" (clear) button for BR pages

**QR Code Solutions page** (`/en/solutions/qr-code-solutions`):
- "Relevant Resources" section now dynamically fetches from blog, whitepapers, and podcasts indexes
- Filters by `qr-code` tag, sorted newest-first — shows all matching content, not just 3 hardcoded items
- Podcast cards show Spotify and Apple Podcasts icons with direct links

**Other fixes:**
- Fixed pre-existing TypeScript error in `Cases.tsx` (`c.name` → `c.title`)
- Updated README.md to reflect current two-market architecture (US & Canada + Brazil)

---

## 2026-04-03: Fix mobile hero spacing + replace card image in QR Code page

- Added global CSS rule: first section in `<main>` gets `padding-top: 7rem` on mobile to clear fixed header
- Replaced card payment image in QR Code "Smarter Payments" section with QR code scanning image (per CONSTITUTION.md: no card imagery)

---

## 2026-04-03: Update CLAUDE.md to reflect current project state

- Updated source structure to include `br/`, shared components (PageMeta, TerritorySelector, NotFound)
- Updated page list: 14 EN routes + 22 BR routes + 404 catch-all
- Replaced Cloudfront Assets section with Local Assets (365+ files in `public/assets/`)
- Added SEO Infrastructure section (react-helmet-async, _worker.js, sitemap, robots.txt, JSON-LD schemas)
- Updated Stack section: added react-helmet-async, 40+ routes
- Updated Content Architecture: added BR content (99 blog, 11 cases)
- Updated Header section: territory selector, mobile hamburger menu

---

## 2026-04-03: Rebuild QR Code Solutions page from Sarah Hoisington's brief

Requested by **Sarah Hoisington** (GM, Matera North America) — this was in her backlog for 6+ months. Complete rewrite of `/en/solutions/qr-code-solutions` based on her product brief:

- **Hero**: "QR Codes: Modern Tech for Faster Payments" with 4 key attributes
- **Smarter Payments section**: value prop with 3 bullet points + demo image
- **Why QR Codes**: 3-column layout — Financial Institutions, Businesses & Billers, Consumers
- **Real-World Applications**: 9 use cases (Bill Pay, E-Commerce, In-Store, Bank as Biller, Events, Cash-Intensive, Fuel, Freight, Donations)
- **Finovate Demo**: showcase section linking to blog post
- **The Matera Solution**: "How It Works" (5 features) + "Advanced Tools" (5 features)
- **X9 Standard**: section with webinar link
- **Resources**: 3 cards (whitepaper, blog, podcast)
- **CTA**: "Get Started with Matera's QR Code Payments Solution"

---

## 2026-04-03: BR hero video + Digital Twin ledger icon

- Replaced static image in BR homepage hero with autoplay video from matera.com/br (`br-hero-video.mp4`, 28MB, gitignored)
- Changed Digital Twin emoji from ⚡ to 📒 (ledger — better represents the product)
- Video plays inside purple card with rounded corners, matching real site design

---

## 2026-04-03: Replace card/globe icons with QR code/lightning per brand guidelines

- Replaced Pagamentos card icon (💳) with mobile icon (📱) on BR Home
- Replaced Pagamentos card SVG icon with QR code SVG on BR Soluções page
- Replaced Digital Twin globe icon (🌐) with lightning (⚡) on BR Home — conveys speed/real-time
- Replaced Digital Twin globe SVG with real-time payments SVG on BR Soluções page
- Updated Digital Twin description to emphasize speed and real-time ledger
- Fixed mobile section padding — hero sections no longer squished by global CSS override

---

## 2026-04-03: Fix 75 broken asset files + corrupted string literals

- The original Cloudfront migration script failed to download 76 files (trailing quote in URL extraction)
- These files existed as 0-byte placeholders, causing broken images across the site
- Downloaded all 75 missing files from Cloudfront (icons, logos, hero images)
- Fixed 15+ source files where the fix script accidentally ate closing quotes from JS string literals
- Fixed broken `url()` CSS path in DigitalTwin.tsx backgroundImage
- Fixed broken PDF paths in RelatorioTransparencia.tsx

---

## 2026-04-03: Payment imagery guideline + fix Pagamentos hero

- Added `CONSTITUTION.md` — brand guidelines for imagery, stats, navigation order
- Key rule: always use QR code / instant payment imagery, never card/POS imagery
- Replaced Pagamentos solution page hero from card-at-POS image to QR code image
- Added guidance to `CLAUDE.md` "What NOT to Do" section
- Created `TODO.md` with hero carousel personalization backlog

---

## 2026-04-03: Update BR homepage hero to match real matera.com/br

- Replaced generic "Transforme seu banco com tecnologia de ponta" hero with current real site content: "Opere Ativos Virtuais em Conformidade com o Bacen"
- Added two-column layout with purple card + photo on the right (matching real site design)
- Updated subtitle and CTA to match: "Saiba mais →"
- Purple card hidden on mobile via existing `.hero-video` CSS class

---

## 2026-04-03: Hide hero video on mobile

- Hero video was overflowing/clipping on small screens
- Hidden below 768px via `.hero-video { display: none }` CSS class
- Reduced hero padding on mobile for tighter layout
- Text fills full width on mobile without the video competing for space

---

## 2026-04-03: Mobile responsive layout + BR nav order fix

- Built fully functional **mobile hamburger menu** for both NA and BR headers with accordion-style dropdowns, body scroll lock, and close-on-navigate
- Added global **responsive CSS** — all grid layouts stack to single column on mobile (< 768px), 3-col becomes 2-col on tablet (768-1023px)
- Prevented horizontal overflow on mobile
- Shrunk logo and flag selector on small screens for proper spacing
- Fixed **BR header nav order** to match EN: Soluções → News & Insights → Empresa → Fale conosco (was: Soluções → Empresa → News & Insights)
- Added root `/` redirect to `/en` via `<Navigate>` for local dev (production uses `_worker.js` geo-redirect)
- Allowed `*.trycloudflare.com` hosts in Vite config for tunnel testing

---

## 2026-04-03: SEO technical enhancements — Canonical links, Video schema, Social expansion

- Added `<link rel="canonical" />` to `PageMeta` component to consolidate link equity and prevent duplicate content
- Implemented **VideoObject JSON-LD schema** support in `PageMeta.tsx` to enable rich results for embedded videos
- Added video structured data to high-value pages: **Digital Twin** (4 videos) and **Stablecoin** (1 video)
- Expanded **Organization schema** with additional social profiles: X (Twitter), Facebook
- Improved **internal linking** between core solution pages (Digital Twin ↔ Stablecoin, Wallet as a Service → QR Code Solutions)
- Fixed missing/empty `alt` text for content thumbnails in the **Brazil (/br)** market pages
- Enriched content on **Stablecoin** and **Digital Twin** pages with more descriptive benefit sections

---

## 2026-04-03: SEO cross-check against old site report

Cross-referenced against the SEO report from the previous Next.js + Strapi site. Issues flagged in that report and their status:

| Old site issue | Status |
|---|---|
| Missing `x-default` hreflang | Already fixed (P2) |
| Organization JSON-LD | Already fixed (P3), enhanced with office addresses + contact points |
| Twitter cards | Already fixed (P0) |
| BreadcrumbList | Already fixed (P3) |
| **WebSite schema** | Added — name, url, inLanguage |
| **"Image without alt" fallback** | Fixed 7 instances in StoneX BR case study |
| Noindex for tags/categories | N/A (no tag pages) |
| Metadata length warnings | N/A (no CMS) |

---

## 2026-04-03: SEO — full audit and all fixes (P0 through P3)

**Scope:** Full site — `/en` (NA market) and `/br` (BR market). Source code analysis + live Chrome DevTools inspection.

16 issues found. All 16 resolved in one session.

### P0 — Critical (all fixed)

| Issue | Fix |
|---|---|
| Every page showed `<title>Matera</title>` | Installed `react-helmet-async`, added `PageMeta` component with unique titles to all 30+ pages |
| No `<meta name="description">` | Hand-written descriptions for static pages, `excerpt` field for content pages |
| No Open Graph / Twitter cards | Added `og:title`, `og:description`, `og:image`, `twitter:card` to every page |
| Social crawlers saw blank page (CSR-only) | `_worker.js` injects meta tags server-side at Cloudflare edge — static routes hardcoded, dynamic routes read index.json |

### P1 — High (all fixed)

| Issue | Fix |
|---|---|
| No `sitemap.xml` | Generated with 256 URLs. Script: `scripts/generate-sitemap.mjs` |
| No `robots.txt` | Created with sitemap reference |
| No 404 page (blank + HTTP 200) | Added `<Route path="*">` catch-all with branded error page |
| Duplicate content (`/` = `/en`, stablecoin alias) | Removed duplicate routes. Worker handles `/` geo-redirect |

### P2 — Medium (all fixed)

| Issue | Fix |
|---|---|
| No hreflang tags | Added `en`, `pt-BR`, `x-default` via PageMeta |
| `<html lang>` hardcoded to `en` | Dynamic: `lang="en"` for /en, `lang="pt-BR"` for /br |
| No `loading="lazy"` on images | Added to listing thumbnails, client logos, dropdown images |
| Form labels missing `for`/`id` | Added `htmlFor`/`id`/`name` in ContactUs + Whitepapers |
| CTA broken link (`href="#"`) | Changed to `href="/en/contact-us"` |

### P3 — Low (all fixed)

| Issue | Fix |
|---|---|
| No JSON-LD structured data | Organization (with addresses + contacts), WebSite, BreadcrumbList (auto from URL), Article (on content pages) |
| Thin content (WalletAsAService ~150 words) | Expanded to ~500 words with 6 capabilities, 4 value props, 3 use case segments |

### What was already good

URL structure, heading hierarchy, semantic HTML (`<main>`, `<header>`, `<nav>`, `<section>`), internal linking from header/footer, external link `rel` attributes, font loading (`font-display: swap`), HTTPS via Cloudflare.

### Live verification (before/after)

```
BEFORE:
  /en          → title: "Matera" | description: MISSING | og:title: MISSING
  /nonexistent → blank page, HTTP 200

AFTER:
  /en          → title: "Modern Banking Meets Digital Currency | Matera"
                 description, og:title, og:description, twitter:card all present
  /br          → title: "Tecnologia para Instituições Financeiras | Matera"
                 lang="pt-BR", hreflang tags present
  /nonexistent → branded 404 page
```

---

## 2026-04-03: Update stats — Pix 7.2B/year, QR Code 3.6B/year, accounts 90M

- Pix transactions updated from 6 BI to 7.2 BI on all BR pages (Home, SobreNos, CoreBanking, Pagamentos, RegTech) and EN WhyMatera (600M/month → 7.2B/year)
- QR Code payments updated from 300M/month to 3.6B/year on EN WhyMatera
- Account count fixed from 60 MI to 90 MI on BR CoreBanking and Pagamentos (was already correct on Home, SobreNos, EN Stats, EN AboutUs)

---

## 2026-04-03: SEO fixes for /en site — image alt text, Portuguese content audit

- All content images had empty `alt=""` → added descriptive alt text (article titles) to Blog, Press, Whitepapers, Podcasts, DigitalTwin, Stablecoin, AboutUs
- Removed non-existent purple announcement banner from BR homepage
- Audited Portuguese content on EN pages: only CDN filenames (fixed by Cloudfront migration) and 4 press articles linking to Brazilian publications (acceptable, proper nouns)
- Full audit in `BADSEO.md`

---

## 2026-04-03: Migrate all assets from Cloudfront to local

377 images, videos, and PDFs moved from `d2lq74zxbg4jiz.cloudfront.net` to `public/assets/`:

- 289 images downloaded with clean English filenames (Portuguese words translated, CMS hashes stripped)
- 5 small videos + 6 PDFs downloaded locally
- 1 large video (38MB `digital-twin-explainer.mp4`) gitignored
- 621 URL replacements across 247+ source files
- Zero Cloudfront references remain in source code
- Scripts: `scripts/migrate-cloudfront.mjs`, `scripts/migrate-remaining.mjs`, `scripts/cloudfront-mapping.json`

---

## 2026-04-03: Territory selector and geo-redirect

- Replaced "English"/"Portugues" language button with compact flag-based territory selector (US, Canada, Brazil) in both headers
- Added `public/_worker.js` — Cloudflare Pages worker that redirects `/` → `/br` for Brazil, `/en` for everyone else (uses `request.cf.country`)
- Worker sets `cf-country` cookie so frontend shows correct flag per visitor
- Territory selector navigates to market root (`/en` or `/br`)

---

## 2026-04-03: Multi-region architecture and BR market migration

- Reorganized from flat `src/components/` + `src/pages/` to market-based `src/na/`, `src/br/`, `src/shared/`
- Moved EN content from `public/data/` to `public/data/en/`
- Built complete BR market: 22 routes, 99 blog posts, 11 case studies, 9 solution pages, 7 static pages
- Added `.mcp.json` for Chrome DevTools MCP auto-configuration
- Added project docs: `ADR.md` (ADR-003), `CONTEXT.md`, `STRUCTURE.md`, `IMPLEMENTATION-PLAN.md`
