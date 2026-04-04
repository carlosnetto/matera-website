# Project Structure Guide

This document explains where every file belongs and why. The organizing principle is **market, not language** — North America (`na/`) and Brazil (`br/`) are separate business units with different products. Languages (`/en`, `/es`, `/fr`) are translations within a market.

## Directory Map

```
matera-website/
├── src/
│   ├── App.tsx              ← router (all markets, all routes)
│   ├── main.tsx             ← React entry point
│   ├── index.css            ← global design tokens, typography, buttons
│   │
│   ├── shared/              ← design system (used by ALL markets)
│   │   ├── components/      ← locale-agnostic UI primitives
│   │   └── utils/           ← pure functions with no hardcoded text
│   │
│   ├── na/                  ← North America market (serves /en, /es, /fr)
│   │   ├── NaLayout.tsx     ← NA shell: Header + <Outlet /> + Footer
│   │   ├── components/      ← NA-specific UI (Header, Footer, Hero, CTA, etc.)
│   │   └── pages/           ← one file per page or content type
│   │
│   └── br/                  ← Brazil market (serves /br)
│       ├── BrLayout.tsx     ← BR shell: Header + <Outlet /> + Footer
│       ├── components/      ← BR-specific UI (Header, Footer, etc.)
│       └── pages/           ← BR page components
│
├── public/
│   ├── data/
│   │   ├── en/              ← English content JSON (NA market)
│   │   │   ├── blog/        ← index.json + individual post JSONs
│   │   │   ├── press/
│   │   │   ├── podcasts/
│   │   │   └── whitepapers/
│   │   └── br/              ← Portuguese content JSON (BR market)
│   │       ├── blog/
│   │       └── cases/
│   ├── fonts/               ← Poppins woff2 (400, 600, 700)
│   ├── logos/               ← client logo PNGs
│   └── (brand assets)       ← logo SVGs, favicon, images
│
└── (config files)            ← package.json, vite.config.ts, tsconfig, etc.
```

## Rules for Each Directory

### `src/shared/`

Code that works identically for every market and every language. If a component contains hardcoded English or Portuguese text, it does **not** belong here.

**Belongs here:**
- `PageHero.tsx` — renders a title passed via props, no hardcoded text
- `ScrollToTop.tsx` — scrolls to top on route change, no text at all
- `markdown.ts` — converts markdown to HTML, language-agnostic

**Does NOT belong here:**
- A Header component — navigation labels differ per market (NA has "Solutions", BR has "Soluções")
- A Footer component — link columns and legal text differ per market
- A CTA component with "Contact us" baked in — that's English-specific
- A "TrustBanner" with specific client logos — client lists differ per market

**Rule of thumb:** if you have to pass a `lang` or `market` prop to make it work for both NA and BR, it probably belongs in the market directory instead. Shared components should need zero awareness of which market is rendering them.

### `src/na/components/`

UI building blocks specific to the North America market. These components contain NA-specific navigation, labels, product names, and visual structure.

**Belongs here:**
- `Header.tsx` — NA navigation (Solutions, News & Insights, Company, Contact us)
- `Footer.tsx` — NA footer columns and links
- `Hero.tsx` — homepage hero with NA-specific headline and video
- `Solutions.tsx` — NA product cards (Digital Twin, Stablecoin, QR Code, Wallet)
- `CTA.tsx` — "Ready to get started?" call-to-action
- `TrustBanner.tsx` — NA client logos
- `Stats.tsx`, `Features.tsx`, `WhyMatera.tsx` — NA homepage sections

**Does NOT belong here:**
- A generic card layout used by both markets → `shared/components/`
- BR navigation or BR product cards → `src/br/components/`

### `src/na/pages/`

One file per page (or per content type that has list + detail views). Each file exports the component(s) rendered by the router.

**Belongs here:**
- `Home.tsx` — assembles Hero + TrustBanner + Solutions + Features + Stats + WhyMatera + CTA
- `Blog.tsx` — exports `BlogList` and `BlogArticle` (fetches from `/data/en/blog/`)
- `Stablecoin.tsx` — NA-specific product page
- `ContactUs.tsx`, `AboutUs.tsx`, `PrivacyPolicy.tsx` — static NA pages

**Pattern:** content-driven pages (Blog, Press, Podcasts, Whitepapers) export two components from one file:
```typescript
// pages/Blog.tsx
export function BlogList() { ... }    // renders /en/blog
export function BlogArticle() { ... } // renders /en/blog/:slug
```

### `src/br/components/` and `src/br/pages/`

Same rules as NA, but for Brazil. BR has different products (Core Banking, Pagamentos, Crédito, etc.), different navigation, and Portuguese text.

**Belongs here:**
- `Header.tsx` — BR navigation (Soluções, Empresa, News & Insights, Fale conosco)
- `Footer.tsx` — BR footer with Portuguese links
- `pages/Home.tsx` — BR homepage with BR-specific solutions, cases, and stats

**Does NOT belong here:**
- Anything that says "Stablecoin" or "Wallet as a Service" — those are NA products
- English text — BR pages are in Portuguese

### `src/App.tsx`

The single router file. All markets and all routes are defined here, nested under their market layout:

```tsx
<Routes>
  {/* NA market */}
  <Route element={<NaLayout />}>
    <Route path="/en" ... />
    <Route path="/en/blog" ... />
    {/* future: /es and /fr routes reuse same NA pages */}
  </Route>

  {/* BR market */}
  <Route element={<BrLayout />}>
    <Route path="/br" ... />
    <Route path="/br/solucoes/core-banking" ... />
  </Route>
</Routes>
```

Adding a new page means: create the component in `src/{market}/pages/`, then add one `<Route>` line here.

### `src/index.css`

Global design tokens and base styles shared by all markets:
- CSS variables (`--matera-blue`, `--matera-green`, `--matera-purple`, etc.)
- Font-face declarations (Poppins 400/600/700)
- Base typography, button styles, container widths
- Reset and global defaults

Market-specific styles live inline in their components (CSS-in-JS via `style` props).

### `public/data/{lang}/`

Static JSON content files. Each content type has its own directory with an `index.json` (listing metadata) and individual `YYYY-MM-DD - Title.json` files (full content).

**Belongs here:**
- `en/blog/index.json` — array of `{title, slug, date, thumbnail, excerpt, file}` for the listing page
- `en/blog/2024-01-15 - Article Title.json` — full article with `{title, slug, date, author, thumbnail, excerpt, body, images}`
- `br/cases/index.json` — same pattern for BR case studies

**Does NOT belong here:**
- Component code or styles
- Assets that aren't content (logos, fonts → use other `public/` directories)
- Draft or unpublished content (everything here is public)

### `public/fonts/`, `public/logos/`, `public/` root

- `fonts/` — Poppins woff2 files only. No Google Fonts, no CDN.
- `logos/` — client/partner logo PNGs used by TrustBanner and similar components.
- Root (`public/`) — brand assets: `matera-logo.svg`, `favicon.ico`, `icon.png`, background images.

## How the Pieces Connect

```
Browser requests /en/blog/my-article
         │
         ▼
    App.tsx router
    matches /en/blog/:slug
    renders NaLayout > BlogArticle
         │
         ▼
    NaLayout.tsx
    renders Header + BlogArticle + Footer
         │
         ▼
    BlogArticle (na/pages/Blog.tsx)
    fetches /data/en/blog/index.json → finds file for slug
    fetches /data/en/blog/2024-01-15 - My Article.json
    calls shared/utils/markdown.ts to render body
         │
         ▼
    HTML page with NA header, article content, NA footer
```

Replace `/en` with `/br` and `NaLayout` with `BrLayout` — same flow, completely independent content and chrome.

## Adding a New Market

If a third market were added (e.g., Europe):

1. Create `src/eu/` with `EuLayout.tsx`, `components/`, `pages/`
2. Create `public/data/de/` (or whatever language) with content JSON
3. Add `<Route element={<EuLayout />}>` block in `App.tsx`
4. No changes to `src/na/`, `src/br/`, or `src/shared/`
