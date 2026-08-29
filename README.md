# Northbound Software Studio — marketing site

The public site for [northboundsoftwarestudio.com](https://northboundsoftwarestudio.com).
Static HTML/CSS with one serverless function, deployed on Vercel.

Northbound is an AI-native product studio: web, mobile, and AI-enabled products
with fixed scope, a fixed price, and a committed date. Read **[PLAN.md](PLAN.md)**
before changing positioning, copy, or the funnel, and **[OFFERINGS.md](OFFERINGS.md)**
before adding or removing a package — between them they record what changed on
2026-08-28 and 2026-08-29, and why.

---

## Two rules that are easy to break

1. **No prices on this site.** Not in the cards, not in the FAQ, not in the
   schema.org `OfferCatalog`, not in `priceRange`. The fixed-price *promise*
   stays; the number is quoted by email. PLAN.md §0 has the reasoning.
2. **Email is the only entry point.** There is no booking link. Every CTA points
   at `#contact`, which posts to `api/contact.js`. Do not reintroduce a calendar
   widget without reading PLAN.md §0 first.

## Layout

```
index.html          the whole landing page — markup, CSS overrides, JS, and
                    the EN/FR dictionary, in one file (~3k lines)
styles.css          base tokens and reset; most styling is inline in index.html
manifesto/          the manifesto page
blog.html           blog index; blog-*.html are the six posts
privacy/ terms/ cookie-policy/
api/contact.js      Vercel function: contact form → Resend → hello@
mascots/ logo/ social/ linkedin/   assets (mascots are referenced by manifesto)
_dev/ design-audit/ inspo/         internal scratch — excluded by .vercelignore
```

## Working on it

There is no build step. Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 9876     # then http://localhost:9876
```

`api/contact.js` only runs under `vercel dev` and needs `RESEND_API_KEY`.

### Editing copy

Every translatable string appears **twice** — once in the markup as the default
English, once in the `var T = {en:{…}, fr:{…}}` dictionary near the bottom of
`index.html`. Change one and the other silently wins on language toggle. Several
strings appear a **third** time inside the JSON-LD `FAQPage` block in `<head>`.

After any copy edit, run the checker:

```bash
node _dev/check-copy.js index.html
```

It parses every JSON-LD block, evaluates the `T` dictionary, asserts EN/FR key
parity, confirms every `data-i18n` key in the markup resolves, and enforces the
two rules above (no price figures, no `cal.com`). Exit code is non-zero on
failure. It is dev-only — `_dev/` is excluded by `.vercelignore`.

It catches the two mistakes this file is most prone to: a French string whose
apostrophe is not escaped as `\'` (which silently breaks the whole FR
dictionary), and a new markup key with no dictionary entry.

**Line endings.** The repo stores LF, but `core.autocrlf=true` with no
`.gitattributes` means a fresh checkout on Windows lands as **CRLF** while an
edited working copy may be LF. Don't assume either — check before a scripted
multi-line match, or it will silently fail to hit:

```bash
tr -dc '\r' < index.html | wc -c    # 0 = LF, ~3000 = CRLF
```

## Deploy

Vercel builds from `main` on GitHub — pushing to `main` is the deploy.

```bash
git push origin main
```

## Related repos

The four products the studio has shipped live next door and are the raw material
for the case studies PLAN.md §1 calls for: `../zipquarry-platform`,
`../quotefront-platform`, `../reconai`, and Windward.
