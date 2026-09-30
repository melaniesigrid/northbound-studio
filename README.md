# Northbound Software Studio: marketing site

> [!CAUTION]
> **Spending rule: if this project spends more than US$10 in a day, stop and ask
> before doing anything else.**
>
> This binds every agent and every person, on every paid API: model calls,
> Places/Maps, email, storage, ads, build minutes. Say the running total, what it
> bought, and what the next step would cost. Then wait for a yes. Do not resume on
> your own judgment, and do not split work into smaller runs to stay under the line.
>
> - **The ceiling goes in before the loop does.** Anything that calls a paid API
>   more than once needs a hard maximum and a way to stop, written before the
>   first run, not after the first bill.
> - **A cap in the code is not a cap.** Set a budget alert and a quota ceiling in
>   the provider's own console as well. An application-level limit cannot survive
>   a bug in the application, and that is exactly when it is needed.
> - **Unmetered scripts are the hole.** A CLI, test or backfill that calls a paid
>   API without going through this project's meter spends money nothing counts.
>   If it costs money, it goes through the meter.
> - **Stop on the first sign of a runaway.** A retry storm, a loop that will not
>   terminate, a job that hangs: kill it and report. Never leave a process that
>   is spending money running while you investigate why.
>
> **Why this rule exists** is written up in the studio's private workspace
> policy (`../SPEND.md`). This repository is public: keep spend figures,
> invoices and incident details out of it.

The public site for [northboundsoftwarestudio.com](https://northboundsoftwarestudio.com).
Static HTML/CSS with one serverless function, deployed on Vercel.

Northbound is an AI-native product studio: web, mobile, and AI-enabled products
with fixed scope, a fixed price, and a committed date. Read **[PLAN.md](PLAN.md)**
before changing positioning, copy, or the funnel. It records what changed on
2026-08-28 and why.

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
index.html          the whole landing page: markup, CSS overrides, JS, and
                    the EN/FR dictionary, in one file (~3k lines)
styles.css          base tokens and reset; most styling is inline in index.html
manifesto/          the manifesto page
blog.html           blog index; blog-*.html are the six posts
privacy/ terms/ cookie-policy/
api/contact.js      Vercel function: contact form → Resend → hello@
mascots/ logo/ social/ linkedin/   assets (mascots are referenced by manifesto)
_dev/ design-audit/ inspo/         internal scratch, excluded by .vercelignore
```

## Working on it

There is no build step. Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 9876     # then http://localhost:9876
```

`api/contact.js` only runs under `vercel dev` and needs `RESEND_API_KEY`.

### Editing copy

Every translatable string appears **twice**: once in the markup as the default
English, once in the `var T = {en:{…}, fr:{…}}` dictionary near the bottom of
`index.html`. Change one and the other silently wins on language toggle. Several
strings appear a **third** time inside the JSON-LD `FAQPage` block in `<head>`.

After any copy edit, check all three:

```bash
node -e "const h=require('fs').readFileSync('index.html','utf8');
JSON.parse(h.match(/<script type=\"application\/ld\+json\">([\s\S]*?)<\/script>/)[1]);
console.log('JSON-LD ok')"

grep -nE '\$[0-9]' index.html      # prices: only the $0 "surprise invoices" stat may match
grep -c 'cal\.com' index.html      # must be 3: the secondary scope-call link + its EN/FR strings
```

The file is **CRLF**. Scripted edits must normalise line endings or multi-line
matches will silently fail.

## Deploy

Vercel builds from `main` on GitHub: pushing to `main` is the deploy.

```bash
git push origin main
```

## Related repos

The four products the studio has shipped live next door and are the raw material
for the case studies PLAN.md §1 calls for: `../zipquarry-platform`,
`../quotefront-platform`, `../reconai`, and Windward.
