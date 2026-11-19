# kibriya-v2

Improved v2 of [saadkibriya.github.io](https://saadkibriya.github.io/) — the same person, rebuilt as one system.

**Live:** https://kibriya-v2-7730xa.freebuff.site

## What it is

Plain static HTML, CSS and JS. No build step, no dependencies.

- `index.html` — home: photo hero, socials, what is running in the background, four portfolios
- `research/` — the Springer chapter, corrected record (87.50% test accuracy, DOI 10.1007/978-981-97-3966-0_6) and two works in progress
- `engineering/` — timeline and real repositories
- `writing/` — two stories, English and Bangla
- `photography/` — Instagram archive
- `style.css` — one design system; `theme.js` — theme, nav, reveal, copy-to-clipboard

## Run it

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Fixed from v1

Self-reloading home links, a 404 story navigation path, a bare Springer URL, invented code samples and skill percentages, a dead lightbox, an unreachable mobile menu, and text below WCAG AA contrast.
