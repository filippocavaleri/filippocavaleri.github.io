# Sitemap & Build Log

## Project Goal

Convert the GitHub Pages Jekyll site at https://filippocavaleri.github.io/ into a
self-contained, locally-served static website with a significantly improved visual design.
No Jekyll, Ruby, or build pipeline required — just open an HTML file in a browser.

---

## Current Folder Structure

```
website/
├── CLAUDE.md                   ← Project goal and requirements
├── sitemap.md                  ← This file
│
├── index.html                  ← Home page
├── research.html               ← Research page
├── teaching.html               ← Teaching page
├── discussions.html            ← Discussions page
├── cv.html                     ← CV page
│
├── css/
│   └── style.css               ← All styles (design system, layout, components)
│
├── js/
│   └── main.js                 ← Abstract toggle + active nav logic
│
├── files/
│   └── figures/
│       └── cavaleri_headshot.jpg  ← Profile photo (add yours here)
│
└── assets/
    └── files/                  ← Drop all PDFs here (see table below)
```

---

## Session 1 — Initial Build

### Step 1 — Reconnaissance
Fetched the live site and GitHub repo to extract all content and structure:
- Pages: Home, Research, Teaching, Discussions, CV
- Theme in use: AcademicPages (Minimal Mistakes Jekyll fork)
- Downloaded profile photo from live site via curl

### Step 2 — Design System (css/style.css)

**Typography**
- Headings / name: `Playfair Display` (Google Fonts, serif)
- Body / nav / labels: `Inter` (Google Fonts, sans-serif)

**Color Palette**
| Variable           | Value              | Usage                        |
|--------------------|--------------------|------------------------------|
| `--text`           | `#18181b`          | Primary body text            |
| `--text-secondary` | `#71717a`          | Authors, descriptions        |
| `--text-muted`     | `#a1a1aa`          | Labels, metadata             |
| `--accent`         | `#1e3a5f`          | Links, hover borders, buttons|
| `--bg`             | `#ffffff`          | Page background              |
| `--bg-subtle`      | `#fafaf9`          | Hover fill, placeholders     |
| `--border`         | `#e4e4e7`          | Dividers, general borders    |
| `--award`          | `#78350f`          | Award tag text (amber)       |
| `--award-bg`       | `#fef3c7`          | Award tag background         |
| UofT blue          | `rgb(91, 155, 213)`| Paper/discussion card borders|

**Key Components**
- Sticky frosted-glass nav bar (backdrop blur)
- Two-column home layout: photo column (175px) + bio column
- Collapsible abstracts on research papers (JS toggle)
- Award tags (amber pill badges)
- Paper link buttons (outlined, fill on hover)
- Job Market badge (amber pill on homepage)
- Responsive: single-column on screens < 680px

### Step 3 — Pages Built

**index.html — Home**
- Two-column grid: sticky profile photo (left) + bio (right)
- Name in Playfair Display, title, institution
- Job market amber badge
- Bio paragraph + research interests list
- News section (3 placeholder entries, date + text format)
- Social icon links under photo (Font Awesome + Academicons)

**research.html — Research**
Three labeled sections, each paper as a hover card:
- *Job Market Paper*: "Fiscal Insurance and the Pricing of Government Debt"
- *Working Papers*: Preferred-Habitat Model; Convenience Yield; Demand for Safe Assets
- *Policy Papers*: Swiss Treasury Bond Auctions (with Gortan, Ranaldo, Rossi)

Each paper has: title, coauthors, award tags, link buttons, collapsible abstract.

**teaching.html — Teaching**
- University of Chicago: PhD and MBA courses, each with name + level tag + instructor · term
- Working groups organized (Theory Reading Group, Asset Pricing WG, Finance Brownbag)
- University of St. Gallen: Market Microstructure (Ranaldo, Winter 2019)

**discussions.html — Discussions**
Three 2025 conference discussions (EFA, MFA, SGE), each with venue, paper title, authors, slides link.

**cv.html — CV**
Centered download button linking to `assets/files/cv.pdf`.

### Step 4 — JavaScript (js/main.js)
1. Abstract toggle — shows/hides abstract, rotates arrow
2. Active nav link — highlights current page in nav

---

## Session 2 — Iterations & Visual Polish

### Change 1 — News section added to homepage
- Added a "News" block at the bottom of the bio column
- Format: muted date label (left) + update text (right), separated by thin borders
- Three placeholder entries referencing real events (Zellner Prize, MFA presentation, JMP draft)

### Change 2 — Social links moved under photo
- Moved Email / Scholar / SSRN / LinkedIn / GitHub / CV links from bio column to left column, below the photo
- Initially styled as stacked text buttons, later replaced with icon links (see Change 4)

### Change 3 — Wider layout
- Max-width increased from 880px → 980px
- Photo column narrowed from 220px → 175px
- Gives the bio/news text noticeably more horizontal room

### Change 4 — Icon-based social links (Kargar-style)
- Replaced text buttons with circular icon links using **Font Awesome 6** + **Academicons**
- Icons: envelope (email), ai-google-scholar, ai-ssrn, fa-linkedin, fa-github, fa-file-pdf (CV)
- Displayed as a centered row of 34px circular bordered buttons under the photo
- Hover: accent color border + subtle background fill
- CDN links added to `<head>` of index.html

### Change 5 — Teaching page restructured (Kargar-style)
- Dropped table layout entirely
- Each course: bold name + level pill tag (PhD / MBA / MSc), then instructor(s) · term on the line below
- Clean dividers between entries, no columns

### Change 6 — Discussion cards with hover effect
- Each discussion wrapped in a bordered card (UofT blue border)
- Hover: off-white background + navy left border (3px) + soft box shadow
- Smooth CSS transitions on all properties

### Change 7 — Research paper cards with hover effect
- Same card treatment applied to all papers on research.html
- Sections (JMP / Working Papers / Policy Papers) remain separated by subsection labels
- Hover: same effect as discussions

### Change 8 — UofT blue card borders
- Default card border color changed from grey (`#e4e4e7`) to UofT blue `rgb(91, 155, 213)`
- Applied to both `.paper` and `.discussion` cards
- Hover left-border accent remains navy (`#1e3a5f`)

### Change 9 — Profile photo
- Folder created: `files/figures/`
- Photo added manually as `cavaleri_headshot.jpg`
- HTML updated to point to `files/figures/cavaleri_headshot.jpg`
- CSS set to `object-fit: contain` + `height: auto` — never cropped, always centered

---

## Files Still Needed

Drop PDFs into `assets/files/` with these exact filenames, or update the `href` in the HTML:

| Filename                | Used in          | What it is                       |
|-------------------------|------------------|----------------------------------|
| `cv.pdf`                | index.html, cv.html | Your CV                       |
| `jmp.pdf`               | research.html    | Job market paper                 |
| `preferred_habitat.pdf` | research.html    | Preferred-habitat model paper    |
| `convenience_yield.pdf` | research.html    | Convenience yield paper          |
| `safe_assets.pdf`       | research.html    | Demand for safe assets paper     |
| `discussion_efa.pdf`    | discussions.html | EFA discussion slides            |
| `discussion_mfa.pdf`    | discussions.html | MFA discussion slides            |
| `discussion_sge.pdf`    | discussions.html | SGE discussion slides            |

External links still set to `#` — update in respective HTML files:
- Email address (`index.html`, line ~38)
- Google Scholar URL (`index.html`)
- SSRN profile URL (`index.html`)
- LinkedIn URL (`index.html`)
- GitHub URL (`index.html`)
- SSRN/SFI/SNB paper links (`research.html`)
- SNB policy paper link (`research.html`)
- Discussion slides links if hosted externally (`discussions.html`)

---

## Next Steps

### 1 — Add all files and links
- Drop every PDF listed above into `assets/files/`
- Fill in all `href="#"` placeholders with real URLs in the HTML files
- Update the 3 news items on `index.html` with real recent events

### 2 — Deploy online (Netlify — recommended, ~5 minutes)
1. Go to https://netlify.com and create a free account
2. Drag the entire `website/` folder onto the Netlify dashboard
3. You get an instant public URL (e.g. `https://random-name.netlify.app`)
4. Rename it to `https://filippocavaleri.netlify.app` in site settings (free)

### 3 — Buy and connect a custom domain
Recommended registrars: **Namecheap** (~$10–15/yr) or **Google Domains** / **Squarespace Domains**.

Suggested domain: `filippocavaleri.com` or `cavaleri.io`

Steps after purchasing:
1. In Netlify: Site settings → Domain management → Add custom domain
2. At your registrar: point the domain's nameservers to Netlify (Netlify provides these)
3. Netlify auto-provisions a free SSL certificate (HTTPS) within minutes

### 4 — Visual polish (remaining to-do)
- Finalize colors, spacing, or font tweaks as needed
- Consider adding a favicon (small icon shown in browser tab)
- Consider adding Google Analytics for visitor tracking

---

## How to Open Locally

No server needed. Double-click `index.html` or run:

```bash
open "/path/to/website/index.html"
```
