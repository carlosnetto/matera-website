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
3. **Write individual JSONs** to `public/data/{type}/`
4. **Regenerate index** with Node one-liner:
   ```bash
   cd public/data/{type} && node -e "
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
