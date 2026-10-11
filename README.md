# Spint Mind — company website

Marketing site for **Spint Mind**, an IT solutions & mobile app studio.
Live at: **https://jason00780.github.io/spint_mind/**

## Structure

```
index.html                  # the whole site (single page)
assets/
  css/style.css             # all styling
  js/main.js                # nav, reveals, contact form
  img/favicon.svg           # logo mark
  img/projects/             # app screenshots & poster
```

No build step, no dependencies — plain HTML/CSS/JS so it deploys straight
to GitHub Pages.

## Editing content

- **Contact email** — set in two places: the `mailto:` link in
  `index.html` (Contact section) and `CONTACT_EMAIL` in `assets/js/main.js`.
  Currently a placeholder: `hello@spintmind.com`.
- **Projects** — the Work section articles in `index.html`. Screenshots
  live in `assets/img/projects/` (LiftSync poster + two PikJau captures,
  pulled from the private app repos — replace any time).
- **Colors** — CSS variables at the top of `assets/css/style.css`.

## Deploy

Push to `main` — GitHub Pages serves it automatically
(Settings → Pages → branch `main` / root, already configured).

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```
