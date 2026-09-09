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
| `.github/workflows/static.yml` | GitHub Pages deployment workflow |

## Editing the content

- The whole site is plain HTML + CSS — no build step, no dependencies.
- Search for HTML comments that begin with `TIP:` to find the spots where personal
  details (email, LinkedIn, location, resume specifics) can be added or replaced.
- Deployment is automatic: push to `main`, and the GitHub Actions workflow publishes
  the site to GitHub Pages.

## License / credits

Portfolio content and code are original. The site does not use third-party templates.
Favicon files are standard GitHub Pages placeholders.
