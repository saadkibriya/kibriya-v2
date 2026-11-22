# kibriya-v2

My personal site, rebuilt. One page for the four things I do — research, engineering, writing, photography — and a portfolio for each.

**Live:** https://saadkibriya.github.io/kibriya-v2/

The previous site ([saadkibriya.github.io](https://saadkibriya.github.io/)) is untouched.

## Pages

| Path | What it is |
| --- | --- |
| `index.html` | Home. Portrait, socials, what is running in the background, the four portfolios |
| `research/` | The Springer chapter on federated learning for pox detection, plus two works in progress |
| `engineering/` | Timeline, tools, and the repositories that are actually public |
| `writing/` | Two short stories, one in English and one in Bangla |
| `photography/` | Instagram archive and the gear it was shot on |

## How it is built

Plain HTML, CSS and JavaScript. No framework, no build step, no dependencies — GitHub Pages serves the files exactly as they are.

- `style.css` — the whole design system: one type pairing (Newsreader + Inter), one dark/light theme, an accent colour per section
- `theme.js` — saved theme, nav scroll state, scroll reveal, copy-to-clipboard, footer year
- `home.js` — the small live widgets on the home page

Run it locally:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Facts on the site

Every claim is checked against a primary source rather than a summary:

- *Privacy-Preserving Vision-Based Detection of Pox Diseases Using Federated Learning*, Kibriya et al., Studies in Big Data vol. 152, Springer, 2024, pp. 105–122. DOI [10.1007/978-981-97-3966-0_6](https://doi.org/10.1007/978-981-97-3966-0_6). The chapter reports **87.50%** test accuracy, and the site quotes that number.
- The 1,178 verified Bangla sentences belong to a separate corpus project, not to the chapter.
- Code samples and skill percentages from the old site were removed; links point at real repositories instead.

## Fixed from the old site

Self-reloading home links, a 404 path from both stories, a bare Springer URL, invented code samples and made-up skill percentages, a dead lightbox, a mobile menu that could not be opened, and body text below WCAG AA contrast.
