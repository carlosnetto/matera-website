# TODO

## Hero Carousel with Visitor Personalization

- Build a `HeroCarousel` component for the BR homepage with timed rotation (~8s per slide)
- Define slides in `public/data/br/hero-slides.json` (title, subtitle, CTA link, CTA text, image)
- Later: read cookies, referrer, or geo data to pick the best slide for the visitor
  - Crypto/stablecoin visitor → show stablecoin hero
  - Traditional bank visitor → show core banking hero
  - Regulatory/compliance visitor → show RegTech/SPSAV hero
  - Default → rotate all slides
- Consider adding dot indicators and swipe support for mobile

## BR Timeline

- Make BR timeline (`/br/sobre-nos`) match the EN timeline style (`/en/about-us`)
