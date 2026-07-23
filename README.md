# Tolworth Intensive Driving Courses

Static site for Kings Driving Centre's Tolworth intensive-courses microsite.

## Files

- `index.html` — the whole site (single file: HTML, CSS, JS)
- `hero-photo-optimized.jpg` — hero photo (resized/compressed from the original upload)
- `kings-logo-transparent.png` — company crest, background removed
- `favicon-32.png` / `favicon-180.png` — browser tab / mobile home-screen icons
- `robots.txt`, `sitemap.xml`, `llms.txt` — SEO/crawler files (paths inside assume the site lives at `kingsdrivingcentre.co.uk/tolworth-intensive-driving-courses/` — update if the real URL differs)

## Deploying

Any static host works (Netlify, Vercel, GitHub Pages, or a folder on your existing web server). If using **GitHub Pages** on this repo: Settings → Pages → Deploy from branch → `main` / root. Keep every file in this list in the same folder — the images and favicons are linked with relative paths.

## Third-party integrations already wired in

- **Booking form** → posts to Formspree (`https://formspree.io/f/xpqvjlok`). The delivery email is set on Formspree's dashboard, not in this code — see form Workflow → Email action there.
- **Google Reviews widget** and **YouTube Gallery widget** → both via Elfsight (`elfsight-app-2f58a3d9-...` and `elfsight-app-be685c8e-...`). Content/settings for both are managed on Elfsight's dashboard.
- **Analytics** → reuses the Google Tag Manager container already live on kingsdrivingcentre.co.uk (`GTM-52MHG4B6`).

## Known limitations

- **Staff Login / admin panel** (bottom of footer): a working prototype for editing prices and gallery photos, but it stores data using Claude.ai's artifact preview storage — it will not save changes once this file is hosted normally (no backend/database here). Real options: a git-based CMS (e.g. Decap CMS), a proper headless CMS, or hand-editing `index.html` directly for small changes.
- `og:image` meta tag and the `google-site-verification` meta tag are still placeholders — swap in a real social-preview image and Search Console code before launch.
- Phone/email/address are the real Kings Driving Centre details; everything else (reviews copy that isn't the live Elfsight widget, etc.) should be reviewed before going live.
