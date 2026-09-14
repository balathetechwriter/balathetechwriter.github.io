# Balachandar Saravanan — Technical Writer Portfolio

Portfolio, résumé, and writing samples for **Balachandar Saravanan**, published at
https://balathetechwriter.github.io.

Technical writer in Bengaluru with 5+ years of experience in structured authoring
(DITA, DocBook XML) for healthcare software and aviation.

## Site structure

| File | Purpose |
| --- | --- |
| `index.html` | Portfolio homepage — hero, marquee, about, journey timeline, selected work, capabilities, process, contact |
| `resume.html` | Full résumé as a web page — contact, objective, experience, skills, education |
| `resume/Balachandar-Saravanan-Resume.pdf` | Downloadable two-page PDF résumé |
| `samples/user-guide.html` | Sample user guide: adding personal information to a Microsoft Edge profile (procedure + screenshot + field reference) |
| `samples/release-notes.html` | Sample release notes: versioned, grouped by reader impact |
| `samples/style-guide.html` | Sample style guide: personal editorial quick reference with before/after examples |
| `samples/troubleshooting.html` | Sample support article: symptom-based Edge autofill troubleshooting |
| `css/site.css` | Hand-written stylesheet shared by all pages — dark editorial design system |
| `js/site.js` | Shared vanilla-JS interactions (reveal on scroll, nav, counters, cursor) |
| `images/portfolio/` | Screenshot used in the user-guide sample |
| `images/work/` | Abstract cover art for the four sample cards on the homepage |
| `sitemap.xml` | Sitemap — homepage, résumé, PDF, and the four samples |
| `robots.txt` | Allows all crawlers and points at the sitemap |
| `site.webmanifest` | Web app manifest (linked from `index.html`) |
| `.github/workflows/static.yml` | GitHub Pages deployment workflow |

## Design

The site uses a dark, editorial layout inspired by contemporary studio portfolios:
near-black canvas, a single lime accent, oversized display type set in Inter Tight,
and JetBrains Mono for labels.

- **Type** — Inter Tight (display), Inter (body), JetBrains Mono (labels), loaded from Google Fonts.
- **Colour** — all tokens live in the `:root` block at the top of `css/site.css`.
  Change `--accent` to re-skin the whole site.
- **Motion** — reveal-on-scroll, a marquee, animated counters, a magnetic-feeling custom
  cursor, and hover glow on cards. Everything is progressive enhancement: with JavaScript
  disabled the page still renders completely, and every animation is disabled under
  `prefers-reduced-motion: reduce`.
- **Print** — résumé and sample pages have a print stylesheet that drops the dark
  chrome and prints on white.

## Content

All personal and professional content comes from Balachandar's résumé:

- **Experience** — Technical Writer at eClinicalWorks India (Aug 2023 – present) and
  TLE Technologies Pvt Ltd (Jul 2021 – Aug 2023), on GE Aviation and Boeing projects.
- **Structured authoring** — DITA and DocBook XML, with a FrameMaker → Paligo migration
  led end to end, including layout, template, variable-set, and reusable-section setup.
- **Standards** — ASD-STE100 (Simplified Technical English), ATA 100, iSpec 2200, S1000D.
- **Education** — B.E. Aeronautical Engineering, Jeppiaar Engineering College, Chennai.

The writing samples under `samples/` are **not** client work — client documentation is
under NDA. They are written for a familiar consumer product (Microsoft Edge) to
demonstrate structure, research, and editorial care.

## Search and social metadata

Every page carries a `rel="canonical"` URL and Open Graph tags so links shared on
LinkedIn, X, or Slack render a proper preview card. `index.html` also includes a
`schema.org/Person` JSON-LD block with name, job title, email, phone, address,
`alumniOf`, `worksFor`, and areas of expertise.

## Regenerating the résumé PDF

The PDF is a generated file, but this repository deliberately has **no build step and no
dependencies** — it is committed as a plain asset and is not rebuilt during deployment.
It was produced from the same content as `resume.html`. If the résumé changes, edit
`resume.html` and regenerate the PDF, or edit the PDF directly and keep the two in sync.

## Editing the content

- The whole site is plain HTML + CSS — no build step, no dependencies.
- Deployment is automatic: push to `main`, and the GitHub Actions workflow publishes
  the site to GitHub Pages.

## Open item

- **No LinkedIn URL.** The résumé did not include one, so none was added anywhere. When
  available, add it to the contact section of `index.html` and to the `sameAs` array in
  the JSON-LD block.

## License / credits

Portfolio content and code are original. The site does not use third-party templates.
Favicon files are standard GitHub Pages placeholders.
