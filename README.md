# Balachandar S. — Technical Writer Portfolio

Portfolio and writing samples for **Balachandar S.**, published at
https://balathetechwriter.github.io.

## Site structure

| File | Purpose |
| --- | --- |
| `index.html` | Portfolio homepage — hero, about, expertise, sample cards, process, contact |
| `samples/user-guide.html` | Sample user guide: adding personal information to a Microsoft Edge profile (procedure + screenshot + field reference) |
| `samples/release-notes.html` | Sample release notes: versioned, grouped by reader impact |
| `samples/style-guide.html` | Sample style guide: personal editorial quick reference with before/after examples |
| `samples/troubleshooting.html` | Sample support article: symptom-based Edge autofill troubleshooting |
| `css/site.css` | Hand-written stylesheet shared by all pages |
| `images/portfolio/` | Screenshot used in the user-guide sample |
| `sitemap.xml` | Sitemap listing the homepage and the four samples |
| `robots.txt` | Allows all crawlers and points at the sitemap |
| `site.webmanifest` | Web app manifest (linked from `index.html`) |
| `.github/workflows/static.yml` | GitHub Pages deployment workflow |

## Search and social metadata

Every page carries a `rel="canonical"` URL and Open Graph tags so links shared on
LinkedIn, X, or Slack render a proper preview card. `index.html` also includes a
`schema.org/Person` JSON-LD block.

The JSON-LD currently contains only details already published on the site — name,
job title, site URL, GitHub profile, and areas of expertise. Resume-specific fields
(`email`, `alumniOf`, `address`, a LinkedIn URL in `sameAs`) are still to be added.

## Editing the content

- The whole site is plain HTML + CSS — no build step, no dependencies.
- Search for HTML comments that begin with `TIP:` to find the spots where personal
  details (email, LinkedIn, location, resume specifics) can be added or replaced.
- Deployment is automatic: push to `main`, and the GitHub Actions workflow publishes
  the site to GitHub Pages.

## Still to do — resume content not yet added

The resume details have **not** been merged into the site yet. The following markers in
`index.html` are still waiting on real values, and none of them should be filled with
placeholder or invented information:

| Marker (approx. line) | Section | Needs |
| --- | --- | --- |
| `TIP:` ~88 | About copy | Years of experience, employers, industries, education, certifications |
| `EDIT:` ~122 | Fact card | Real city/country and timezone |
| `EDIT:` ~124 | Fact card | Current role/employer or availability |
| `TIP:` ~187 | Toolbox chips | Actual tool stack |
| `TIP:` ~283 | Samples footer | Resume PDF or LinkedIn link |
| `TIP:` ~335 | Contact buttons | Real email and LinkedIn |
| `TIP:` ~346 | Contact sidebar | Real email and LinkedIn |
| JSON-LD block | `index.html` `<head>` | `email`, `alumniOf`, `address`, LinkedIn in `sameAs` |

### Adding the resume PDF

The Pages workflow uploads the entire repository (`path: '.'`), so a PDF committed to
the repo is served directly by GitHub Pages with no extra configuration. Drop it at
`resume/Balachandar-S-Resume.pdf` and point the "Download resume" buttons at that path.

No download button has been added yet, because linking to a file that is not in the
repository would publish a broken link.

## License / credits

Portfolio content and code are original. The site does not use third-party templates.
Favicon files are standard GitHub Pages placeholders.
