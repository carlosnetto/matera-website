# Lessons Learned

Pitfalls encountered during development and their solutions.

---

## CSS `section:first-child` doesn't match when Helmet injects scripts

**Problem:** The mobile hero padding rule `main > section:first-child` never applied. The hero section had no top padding, causing the heading to collide with the fixed header.

**Root cause:** `react-helmet-async` injects `<script>` tags (JSON-LD structured data) as children of `<main>` via the Outlet. A `<script>` becomes the actual first child, so `section:first-child` never matches.

**Fix:** Use `section:first-of-type` instead of `section:first-child`. The `:first-of-type` pseudo-class matches the first `<section>` regardless of other sibling element types.

---

## CSS `brightness(0) invert(1)` fails on images without transparency

**Problem:** Trust banner client logos appeared as solid gray rectangles instead of showing the logo artwork.

**Root cause:** 8 of 15 logo PNGs had opaque white backgrounds (no alpha channel). The `brightness(0)` step turns the entire image — including the white background — to black, then `invert(1)` turns it all white. Result: a white rectangle at `opacity: 0.7` = gray rectangle.

**Fix:** Pre-render logos as white-on-transparent PNGs using ImageMagick (`-transparent white` to remove background, `-fill white -colorize 100` to make artwork white). Remove the CSS filter entirely — no runtime processing needed, crisper result.

---

## ImageMagick `-fuzz` can degrade image edges

**Problem:** After using `convert -fuzz 15% -transparent white` to remove white backgrounds from logo PNGs, the logos appeared fuzzy with jagged edges.

**Fix:** Re-download originals, upscale 4x first (`-resize 400%`), then apply the fuzz-based transparency removal and colorization. The higher resolution absorbs the edge artifacts, and the browser downscales cleanly when rendering at the target CSS size.

---

## Strapi/Cloudfront logos are thumbnail-sized

**Problem:** Client logos from the Cloudfront CDN were only 80-167px wide — far too small for crisp rendering, especially on Retina displays.

**Root cause:** Strapi CMS stored small thumbnail versions. No higher-resolution variants exist on the CDN (the `large_`, `medium_`, `small_` prefixed URLs return 403).

**Fix:** Upscale 4x with ImageMagick before processing. The 320-668px result is large enough for clean browser downscaling to the 28px CSS display height, even on 3x Retina screens.
