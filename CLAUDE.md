# Filippo Cavaleri — Personal Website

Static personal/academic site hosted on GitHub Pages at `filippocavaleri.github.io`.
Repo: https://github.com/filippocavaleri/filippocavaleri.github.io (branch: `master`, deploys directly — no build step).

## Structure

- `index.html` — home page (bio, photo, social links, news)
- `research.html` — research/papers listing
- `teaching.html` — teaching page
- `discussions.html` — discussant work
- `cv.html` — CV page (embeds `files/CV.pdf`)
- `css/style.css` — single stylesheet for all pages
- `js/main.js` — small JS (nav toggle, etc.)
- `files/CV.pdf` — CV
- `files/papers/` — research paper PDFs
- `files/discussions/` — discussant slide PDFs
- `files/figures/` — profile photo and other images
- `favicon.svg` — site favicon

All 5 HTML pages share the same `<head>` boilerplate (meta tags, Google Analytics snippet, `og:image`/`twitter:image`) and the same nav bar — when editing shared elements (nav links, profile photo, meta description), update all 5 files consistently.

## Conventions

- Plain HTML/CSS/JS, no framework or build process. Edit files directly.
- Keep edits minimal and consistent with existing style/structure.
- `og:image` and `twitter:image` meta tags in every page's `<head>` point to the profile photo — keep them in sync with the actual photo used in `index.html`.

## Git workflow

- **Always ask for explicit approval before running any `git push` (or `git pull`) to the remote.** Local commits are fine to prepare, but do not push without confirmation.
- Do not force-push or rewrite history.
