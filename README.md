# SIM JUYONG | Cloud Engineer Portfolio

Vanilla HTML/CSS/JS portfolio. Design: "Engineer's Notebook" (paper + grid background, navy ink, cobalt accent, terminal-style hero card) — same visual system as the previous version, restructured around a Cloud Engineer narrative.

## Structure
- `index.html` — Home → About → Career → Skills → Certificates → Projects → Contact
- `css/style.css` — all styles (single file)
- `src/` — vanilla JS modules (i18n, TypeIt animation, project filter, active-menu highlight, header/scroll behavior)
- `i18n/*.json` — EN / JA / KO (nav + hero only; body content is Korean-first, matching the reference)
- `images/` — profile photo, favicon, OG image, architecture diagram SVGs (open in a new tab from the Projects section)

## Local preview
```
python3 -m http.server 8000
```
then open http://localhost:8000

## Deploy to Amazon S3 (static website hosting)
1. Create an S3 bucket.
2. Upload all files, preserving folder structure (`css/`, `src/`, `i18n/`, `images/`, `index.html`).
3. Bucket → Properties → **Static website hosting** → Enable, set `index.html` as the index document.
4. Bucket → Permissions → uncheck "Block all public access", add a bucket policy allowing `s3:GetObject` to `*` (or put CloudFront in front for HTTPS + a custom domain).
5. Open the static website endpoint URL to verify.
