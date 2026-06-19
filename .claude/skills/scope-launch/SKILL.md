---
name: scope-launch
description: Run the scope call for Northbound's Launch package (NB-002, $3,000, a custom-designed, conversion-focused, SEO-ready marketing site in 7 days with three rounds of corrections). Use this whenever you're scoping a custom marketing or brand site — a startup's pre-investor site, a consultant going independent, a product team's campaign page, a small business upgrading from a DIY/Squarespace site to something polished. Use it any time the client wants real design, SEO, and revision rounds rather than a fast template. It walks every question you must ask and ends by writing a signed Manifest. Do NOT use this for a quick single site with no custom design (that's scope-spark) or anything with logins, payments, or app functionality (that's scope-build).
---

# NB-002 — Launch Scope Call

**Manifest line:** Custom-designed, SEO-ready marketing site + 3 correction rounds · $3,000 CAD fixed · 7 days

Launch is the credibility lane: a custom-designed, conversion-focused, fast, SEO-ready marketing
site, with three rounds of corrections after delivery, code owned forever. Your job is to nail
the positioning, the page set, the brand inputs, and the conversion + SEO mechanics — then draw
the line at app functionality.

## When this is the right waybill

✅ A startup heading into investor meetings that needs a credible, polished site.
✅ A consultant or founder branching out who needs a brand that converts.
✅ A product team launching a campaign, or a business upgrading from a DIY builder.

🚦 **Redirect if you hear:** "I just need something simple by Friday" with no design needs →
`scope-spark`. Logins, dashboards, payments, an actual product → `scope-build`. "We don't know
our positioning / what to even say" → recommend **Discovery** as an add-on. "Add AI to it" →
`scope-augment`.

## How to run this call

Follow the root `CLAUDE.md` doctrine: one question at a time, never assume, draw the scope line,
end with the Manifest. Launch clients range from technical founders to non-technical owners —
read the room. Be clear about what a "correction round" is so the three rounds don't become
infinite.

## The scope checklist

### 1 — Positioning and the conversion goal
- What does the company do, and who is the buyer / primary persona?
- What's the **one action** a visitor should take — book a demo, start a trial, contact, buy
  intent? Any secondary action?
- Is this investor-facing, customer-facing, or both? (It changes tone and which proof matters.)

### 2 — Information architecture
- The page list — home, product/features, pricing, about, blog index, contact, case studies?
- Is pricing public, or "contact us"? Any gated content or lead magnet?

### 3 — Brand and design 🚩
- 🚩 Is there an existing brand — logo, colors, type, guidelines — or are we designing the look
  from scratch? (If from scratch *and* they're unsure of positioning, flag Discovery.)
- 2–3 reference sites they love and ones they hate; how bold vs. conservative.
- Any existing design files (Figma) or a design they're working from?

### 4 — Content and copy 🚩
- 🚩 Who provides copy? Conversion-focused copy support is included — what raw material exists
  (deck, old site, notes, interviews)?
- 🚩 Assets: photography, product screenshots, logos, testimonials, customer/press logos.

### 5 — SEO (this package is "SEO-ready") 🚩
- Target topics or keywords; any geographic focus.
- 🚩 Is there an existing domain/old site whose URLs and ranking we should preserve and redirect?
- Which analytics — GA4, Plausible, something else? (We'll set up metadata, sitemap, OG images,
  basic structured data, and analytics.)

> The full implementation checklist behind the "SEO-ready" promise lives in `seo-checklist.md`
> (this folder) — work it during the build and run its pre-launch verification before going live.

### 6 — Conversion mechanics 🚩
- 🚩 Forms: **where do leads go** — an inbox, a CRM (HubSpot/Salesforce), a scheduler
  (Cal.com/Calendly)?
- Newsletter signup? Which provider (Mailchimp, ConvertKit, Beehiiv)?
- Any embeds — scheduler, Typeform, video? (Note: the studio's stance is *no chatbot widget*; if
  they ask for one, surface that and the reasoning.)

### 7 — Domain, hosting, going live 🚩
- 🚩 Domain + DNS access; existing site and redirects; email records on the domain we must not
  break.

### 8 — The three correction rounds 🚩
- Set expectations now: a **round** is one consolidated pass of visual/content tweaks within the
  agreed design and page set. A new page, a new section, or a new feature is a **new waybill**,
  not a correction. Confirm the client understands.

### 9 — Timeline and stakeholders 🚩
- 🚩 Hard launch date or event.
- 🚩 Who reviews, and who is the single decision-maker for sign-off?

## Scope boundary (fixed-price discipline)

**In scope:** a custom-designed responsive marketing site; conversion-focused copy support; SEO
setup (metadata, sitemap, structured data, OG, analytics); deployment; **3 rounds of
corrections**; source code, owned forever.

**Out of scope → new waybill:** app functionality — auth, dashboards, payments (→ Build) · a
full CMS / blog with a custom posting backend (clarify static vs. CMS) · ongoing content or
social (→ Pulse) · brand strategy from zero (→ Discovery) · AI features (→ Augment) · pages or
sections added after the IA is agreed.

## What we must have before the build clock starts

- [ ] Domain + DNS access
- [ ] Brand assets, or a green light to design the identity
- [ ] Copy, or the source material for copy support
- [ ] The lead destination (inbox / CRM / scheduler) and newsletter provider, if any
- [ ] Analytics choice
- [ ] The hard launch date and the named decision-maker

## Output: write the Manifest

Fill `_shared/MANIFEST_TEMPLATE.md` as **Waybill NB-002**. Launch-specific notes:
- In-scope line items = the agreed page list + "SEO setup" + "3 correction rounds."
- Put the **definition of a correction round** in the Manifest explicitly so it can't drift.
- Out-of-scope = anything from the boundary above, parked as future waybills.
- **Handoff:** gstack's design pipeline fits this package — `/design-consultation` →
  `/design-shotgun` (each round ≈ one of your 3 correction rounds) → `/design-html` →
  `/benchmark` (Core Web Vitals for "SEO-ready") → `/ship`. See `USING_GSTACK.md`.

## Definition of done (the build)

- [ ] Custom site deployed and live on the client's domain
- [ ] SEO basics in place (metadata, sitemap, OG, structured data) and analytics firing
- [ ] Lead path verified (form delivers to the right place)
- [ ] Three correction rounds scheduled / communicated
- [ ] Repo handed over; client owns it
