# Tolworth Intensive Driving Courses — Kings Driving Centre

## What's here
- `index.html` — homepage (now includes the Netlify Identity widget fix)
- `resources.html`, 6 area pages, 11 legal pages — all static, all working as-is
- `blog.html` + 5 posts — current flat HTML version, still live and working
- `_posts/`, `_includes/`, `blog.njk`, `sitemap.njk`, `.eleventy.js`, `admin/` — the Decap CMS system, active once deployed via Netlify

## Netlify Identity fix (this update)
The invite-link password prompt wasn't appearing because the Identity widget was only loaded on `/admin/index.html`, not on the homepage where invite/recovery links actually land. It's now on `index.html` too — redirects into `/admin/` automatically once you're logged in.

## If the blog link still isn't visible on your live site
Check that this exact commit is what's deployed: on github.com, open `index.html` in the `intensive` repo and search the page for "BLOG" — if it's not there, GitHub still has an older version and needs this zip re-uploaded/pushed before Netlify will rebuild with it.

## One-time Netlify + CMS setup
1. netlify.com → "Add new site" → import this repo
2. Site settings → Identity → Enable
3. Identity → Registration → Invite only
4. Identity → Services → Git Gateway → Enable
5. Identity → Invite user → your email → open the email link → set a password
6. `[your-site].netlify.app/admin` → log in → write posts

## Third-party integrations
- Booking form → Formspree (`https://formspree.io/f/xpqvjlok`)
- Google Reviews + YouTube widgets → Elfsight, gated behind cookie consent (`consent.js`)
- Analytics → Google Tag Manager (GTM-52MHG4B6), also gated behind consent
