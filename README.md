# Tolworth Intensive Driving Courses — Kings Driving Centre

Static site: 1 homepage, 6 area landing pages, a learner resources page, and 11 legal pages.

## Pages
- `index.html` — homepage
- `resources.html` — Show Me Tell Me questions, Ready to Pass, UK licence steps (sourced from GOV.UK/DVSA, OGL v3.0)
- `tolworth.html`, `surbiton.html`, `morden.html`, `kingston-upon-thames.html`, `new-malden.html`, `putney.html` — area landing pages
- 11 legal pages (privacy, cookies, terms, cancellation, refund, payment, booking terms, GDPR, accessibility, disclaimer, complaints)

## Deploying
Keep every file in this list together in one folder (relative paths for images/CSS/JS). Any static host works. For GitHub Pages on this repo: Settings → Pages → Deploy from branch → `main` / root.

## Integrations
- Booking form → Formspree (`https://formspree.io/f/xpqvjlok`) — delivery email is set on Formspree's dashboard, not in code.
- Google Reviews + YouTube widgets → Elfsight, gated behind real cookie consent (see `consent.js`).
- Analytics → Google Tag Manager (GTM-52MHG4B6), also gated behind consent.

## Known limitation
The "Staff Login" admin panel (bottom of homepage footer) is a working prototype using Claude.ai's artifact preview storage — it will not persist changes once hosted normally. See conversation history for real production options (e.g. a git-based CMS).
