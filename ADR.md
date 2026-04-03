# Architecture Decision Records

## ADR-001: Static JSON Content Architecture for CMS-Free Content

**Date:** 2026-04-02
**Status:** Accepted

### Context

The matera.com/en website was originally built on Next.js + Strapi CMS. The CMS adds operational complexity, database dependencies, and a server that can fail. The goal of this project is a 100% static site — React + Vite + TypeScript, deployed to Cloudflare Pages via Wrangler, with no CMS, no database, and no server.

The challenge: Blog (35 posts), Press (56 articles), and Podcasts (11 episodes) are content-heavy, CMS-driven listing pages with individual article views. We needed a way to store, index, and render this content statically without a backend.

### Decision

#### Data Layer: One JSON per article, one index per content type

Each content type lives in its own directory under `public/data/`:

```
public/data/
├── blog/
│   ├── index.json
│   ├── 2026-02-10 - Article Title.json
│   └── ...
├── press/
│   ├── index.json
│   ├── 2025-09-10 - Press Title.json
│   └── ...
└── podcasts/
    ├── index.json
    ├── 2025-08-29 - Episode Title.json
    └── ...
```

**Individual article JSON** (`YYYY-MM-DD - Title.json`):
```json
{
  "title": "Full article title",
  "slug": "url-slug-matching-original-site",
  "date": "YYYY-MM-DD",
  "author": "Author Name",
  "thumbnail": "https://d2lq74zxbg4jiz.cloudfront.net/...",
  "excerpt": "First ~160 characters of body text",
  "body": "Full article content in markdown",
  "images": ["https://...embedded-image.png"]
}
```

Content-type-specific extra fields:
- **Press** adds `source` (publication name) and `externalUrl` (link to original article)
- **Podcasts** adds `spotifyUrl` (direct episode link) and `applePodcastsUrl` (direct episode link)

**Master index JSON** (`index.json`) — lightweight, loaded by listing pages:
```json
[
  {
    "title": "...",
    "slug": "...",
    "date": "...",
    "thumbnail": "...",
    "excerpt": "...",
    "file": "2026-02-10 - Article Title.json"
  }
]
```

The index contains only metadata needed for the listing page (no body text). The `file` field points to the full JSON for on-demand loading.

#### Filename Convention

`YYYY-MM-DD - Title.json`

- Date prefix enables natural chronological sorting via filesystem
- Title has special characters (colons, quotes, etc.) removed
- Truncated to 80 characters max to avoid filesystem issues
- Spaces (not kebab-case) for human readability

#### React Page Architecture

Each content type has two components exported from one file:

```typescript
export { BlogList, BlogArticle }    // pages/Blog.tsx
export { PressList, PressArticle }  // pages/Press.tsx
export { PodcastList, PodcastEpisode } // pages/Podcasts.tsx
```

**Listing page** (`/en/blog`, `/en/press`, `/en/podcasts`):
1. Fetches `index.json` on mount
2. Renders a 3-column card grid (thumbnail, date, title, excerpt)
3. Shows 12 items initially, "Load more" adds 12 more (blog/press)
4. Each card links to `/en/{type}/:slug`

**Article page** (`/en/blog/:slug`, `/en/press/:slug`, `/en/podcasts/:slug`):
1. Fetches `index.json`, finds the entry matching `:slug`
2. Uses the `file` field to fetch the individual article JSON
3. Renders hero (title, date, author), thumbnail, and body
4. Body markdown is converted to HTML via a simple `markdownToHtml()` function
5. Press articles show a "Read original article" link when `externalUrl` is present
6. Podcast episodes show Spotify and Apple Podcasts buttons when URLs are present

#### Content Sourcing Process

When content needs to be added or refreshed:

1. **Find all URLs** via `matera.com/sitemap.xml` (search for `/en/blog/`, `/en/press/`, etc.)
2. **Fetch each article** via WebFetch, extracting title, date, author, thumbnail, body (markdown), images
3. **Write individual JSONs** to `public/data/en/{type}/`
4. **Regenerate index** with Node one-liner:
   ```bash
   cd public/data/en/{type} && node -e "
   const fs = require('fs');
   const files = fs.readdirSync('.').filter(f => f.endsWith('.json') && f !== 'index.json').sort().reverse();
   const index = files.map(f => {
     const data = JSON.parse(fs.readFileSync(f, 'utf8'));
     return { title: data.title, slug: data.slug, date: data.date, thumbnail: data.thumbnail || '', excerpt: data.excerpt || '', file: f };
   });
   fs.writeFileSync('index.json', JSON.stringify(index, null, 2));
   "
   ```

To add a single new post: write the JSON file, then re-run the index generator.

### Consequences

**Benefits:**
- Zero runtime dependencies — no database, no CMS, no API server
- Content is version-controlled in git alongside the code
- Instant page loads — JSON files served from Cloudflare CDN edge
- Easy to audit, diff, and review content changes
- Resilient — no server to go down, no database connection to fail
- Parallelizable sourcing — multiple agents can fetch batches of articles simultaneously

**Trade-offs:**
- Adding content requires writing JSON files + regenerating the index (not a web UI)
- Body content is stored as markdown, converted to HTML at render time via a simple regex-based converter (not a full markdown parser)
- All content is public in `public/data/` — no draft/publish workflow
- Images remain on the original Cloudfront CDN (not self-hosted)

**Future considerations:**
- If the markdown-to-HTML converter becomes insufficient, replace with a proper library (e.g., `marked` or `react-markdown`)
- If content volume grows significantly, consider splitting `index.json` into paginated chunks
- The same pattern can be applied to any new content type (e.g., whitepapers, case studies)

---

## ADR-002: Static Site Deployment via Cloudflare Pages

**Date:** 2026-04-02
**Status:** Accepted

### Context

The site needs to be publicly accessible, fast globally, and trivial to deploy — with no servers to manage.

### Decision

- **Build tool:** Vite 8 produces a static `dist/` directory
- **Deploy target:** Cloudflare Pages via Wrangler 4
- **Command:** `npm run deploy` runs `npm run build && npx wrangler pages deploy dist`
- **SPA routing:** `public/_redirects` with `/* /index.html 200` ensures all routes resolve to the React app
- **Assets:** Everything in `public/` (fonts, images, JSON data, favicon) is copied to `dist/` at build time and served from Cloudflare's CDN edge

### Consequences

- No server, no container, no infrastructure to manage
- Global CDN edge delivery for all assets
- Deploy is a single command from the terminal
- The repo root (source code, docs, ADRs) never reaches Cloudflare — only `dist/` is uploaded

---

## ADR-003: Multi-Region Market-Based Architecture

**Date:** 2026-04-03
**Status:** Accepted

### Context

Matera operates in two distinct markets — North America (NA) and Brazil (BR) — with different products, different content, and different target audiences. The matera.com website serves both markets under the same domain: `/en/*` for NA (English), `/br/*` for BR (Portuguese).

Additionally, the NA market content may be offered in multiple languages (`/es` for Spanish, `/fr` for French) in the future. These are translations of the same NA products and content, not separate markets.

The challenge: organize the codebase so that NA and BR are truly independent (different pages, different navigation, different content), while sharing the brand's design system (colors, typography, fonts, layout primitives) and avoiding duplication.

### Decision

#### Organize by market, not by language

The source code is structured by **market** (the business division), not by **language** (the locale):

```
src/
├── shared/              ← design system shared across ALL markets
│   ├── components/      ← PageHero, ScrollToTop (locale-agnostic primitives)
│   └── utils/           ← markdownToHtml (shared utility)
├── na/                  ← North America market
│   ├── NaLayout.tsx     ← NA-specific shell (Header + Footer)
│   ├── components/      ← NA Header, Footer, Hero, Solutions, etc.
│   └── pages/           ← NA pages (completely independent from BR)
├── br/                  ← Brazil market (future)
│   ├── BrLayout.tsx     ← BR-specific shell
│   ├── components/      ← BR Header, Footer, etc.
│   └── pages/           ← BR pages (different products entirely)
```

#### Content data is per-language

Content JSON files live under `public/data/{lang}/` since the actual text varies per language, even within the same market:

```
public/data/
├── en/              ← English content (NA market)
│   ├── blog/
│   ├── press/
│   ├── podcasts/
│   └── whitepapers/
├── es/              ← Spanish content (NA market, future)
├── fr/              ← French content (NA market, future)
└── br/              ← Portuguese content (BR market, future)
```

#### Router uses market-based layout nesting

Each market has its own layout component (Header + Footer), and routes are nested under it:

```tsx
<Routes>
  <Route element={<NaLayout />}>
    <Route path="/en/*" ... />
    <Route path="/es/*" ... />   {/* future: same NA pages, different language */}
    <Route path="/fr/*" ... />   {/* future: same NA pages, different language */}
  </Route>
  <Route element={<BrLayout />}>
    <Route path="/br/*" ... />   {/* future: completely different pages */}
  </Route>
</Routes>
```

#### What goes in `shared/` vs market-specific

| Layer | `shared/` | Market-specific |
|-------|-----------|----------------|
| Design tokens (CSS variables) | ✅ | |
| Typography, buttons, containers | ✅ | |
| Fonts (Poppins woff2) | ✅ | |
| Brand assets (logo, favicon) | ✅ | |
| Layout primitives (PageHero shell) | ✅ | |
| Utility functions (markdownToHtml) | ✅ | |
| Header (nav items, labels, links) | | ✅ per market |
| Footer (columns, links) | | ✅ per market |
| Page components | | ✅ per market |
| Content JSON | | ✅ per language |

### Consequences

**Benefits:**
- NA and BR are fully independent — different products, different nav, different content
- Shared design system ensures brand consistency across markets
- One app, one build, one deploy — no need for separate projects or reverse proxies
- Adding `/es` or `/fr` for the NA market reuses the same NA page components with different content
- All existing `/en/*` URLs remain stable (Google-indexed)

**Trade-offs:**
- A bug in `shared/` code affects all markets
- The `na/` directory name doesn't match the URL prefix (`/en`), which requires understanding the market-vs-language distinction
- Adding a new language to the NA market requires creating translated content JSON and possibly parameterizing hardcoded English text in NA page components

**Future considerations:**
- When `/es` and `/fr` are added, NA page components may need to accept a `lang` parameter to switch hardcoded English labels
- The "English" button in the NA Header should become a working language switcher
- The root `/` route may need a language/market picker or browser locale detection
