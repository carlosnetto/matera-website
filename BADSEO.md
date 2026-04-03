# SEO Audit: Portuguese Content on /en Pages

**Date:** 2026-04-03
**Scope:** All files serving the `/en` routes — `src/na/`, `src/shared/`, `public/data/en/`

---

## Issues Fixed

### 1. Empty image alt text across all content pages (HIGH IMPACT)

Every thumbnail and content image on the EN site used `alt=""`, meaning search engines and screen readers saw no description for any image. This affects all listing pages and article detail pages.

**Files changed:**

| File | What was fixed |
|------|---------------|
| `src/na/pages/Blog.tsx` | Listing thumbnails + article hero image now use article title as alt text |
| `src/na/pages/Press.tsx` | Listing thumbnails + article hero image now use article title as alt text |
| `src/na/pages/Whitepapers.tsx` | Listing thumbnails + detail page image now use whitepaper title as alt text |
| `src/na/pages/Podcasts.tsx` | Listing thumbnails + episode hero image now use episode title as alt text |
| `src/na/pages/DigitalTwin.tsx` | Feature icons now use their description text as alt text |
| `src/na/pages/Stablecoin.tsx` | Hero image now has descriptive alt text |
| `src/na/pages/AboutUs.tsx` | "Work with us" banner image now has descriptive alt text |

**Before:** `<img src={thumbnail} alt="" />`
**After:** `<img src={thumbnail} alt={title} />`

### 2. Purple announcement banner removed from BR homepage

The BR homepage had a purple "Foque na sua operacao..." banner that didn't exist on the real matera.com/br. Removed from `src/br/pages/Home.tsx`.

---

## Issues Found — Not Fixable (external CDN)

### 3. Portuguese words in Cloudfront image filenames

14 thumbnail URLs across press, whitepapers, and blog contain Portuguese words in the filename. These are hosted on `d2lq74zxbg4jiz.cloudfront.net` (Matera's CDN from the original CMS) and cannot be renamed.

**Portuguese patterns found:**
- `Copia_de_shutterstock_...` ("Copia de" = "Copy of") — 8 occurrences across 6 press articles + 1 whitepaper + index files
- `Captura_de_Tela_...` ("Captura de Tela" = "Screenshot") — 1 occurrence in blog

**Affected files:**
- `public/data/en/press/2022-11-09 - Tips for payments using Pix.json`
- `public/data/en/press/2022-11-09 - Matera named one of the top fast-growing companies in Brazil.json`
- `public/data/en/press/2022-12-09 - Materas Expansion to the US.json`
- `public/data/en/press/2022-12-12 - Materas Jump into the US Market.json`
- `public/data/en/press/2023-06-02 - The Future of Instant Payments in the US.json`
- `public/data/en/press/2023-07-26 - Pix By The Numbers report released July 2023.json`
- `public/data/en/whitepapers/2025-01-30 - The Pix Story A Glimpse Into The Future of Instant Payments in the US.json`
- `public/data/en/blog/2022-09-21 - Optimizing Instant Payments Performance Batch Payments and Message Compressio.json`

**SEO impact:** Low. Search engines may parse image filenames but weight them minimally compared to alt text. The alt text fix (issue #1) is far more impactful.

**To fix permanently:** Re-upload these images to the CDN with English filenames and update the JSON references.

---

## Issues Found — Acceptable (proper nouns / external links)

### 4. Portuguese press source names rendered as visible text

4 press articles reference Brazilian publications whose names are in Portuguese. These appear as visible text on the `/en/press` page:

| Source | Article |
|--------|---------|
| Diario Campineiro | "Matera targets expansion to United States" |
| Mix Vale | "Tips for payments using Pix" |
| Digital world (Palavra Digital) | "Matera ranked as one of the fastest growing fintechs" |
| Executive Channel (Canal Executivo) | "Matera announces the hiring of Patrick Devlin..." |

**SEO impact:** Minimal. These are proper nouns (publication names). The English titles and excerpts around them provide strong language signals.

### 5. Portuguese in external URLs (press article links)

4 press articles link to Portuguese-language external sources. The URL paths contain Portuguese words:

- `mixvale.com.br/.../consumidor-pode-parcelar-os-valores-pelo-pix/`
- `diariocampineiro.com.br/.../startup-da-unicamp-assume-dianteira-dos-servicos-financeiros.../`
- `palavradigital.wordpress.com/.../empresas-brasileiras-sao-destaque.../`
- `canalexecutivoblog.wordpress.com/.../matera-anuncia-a-contratacao-de-patrick-devlin.../`

**SEO impact:** Minimal. These are outbound links to external sites. Search engines understand that linking to foreign-language sources is normal for a company with international operations.

---

## Summary

| Category | Count | Impact | Status |
|----------|-------|--------|--------|
| Empty image alt text | 14 images across 7 files | HIGH | FIXED |
| BR announcement banner | 1 component | MEDIUM | FIXED |
| Portuguese CDN filenames | 14 URLs across 8 files | LOW | Cannot fix (external CDN) |
| Portuguese source names | 4 press articles | MINIMAL | Acceptable (proper nouns) |
| Portuguese external URLs | 4 press articles | MINIMAL | Acceptable (outbound links) |

**No Portuguese was found in:** blog titles, blog excerpts, blog body text, whitepaper titles, whitepaper descriptions, podcast titles, podcast excerpts, NA component labels, NA page headings, or image alt text in markdown body content.
