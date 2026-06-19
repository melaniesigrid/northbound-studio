---
name: scope-spark
description: Run the scope call for Northbound's Spark package (NB-001, $1,500, a clean coded website live on the client's domain in 3 days). Use this whenever you're scoping a small fast website — a restaurant menu page, a photographer's portfolio, a freelancer's one-pager, a pop-up's link-in-bio — or any time a client wants a simple site live this week with no app functionality. Use it even if the client just says "I need a website" and the build turns out to be small. It walks every question you must ask and ends by writing a signed Manifest. Do NOT use this for custom-designed marketing sites with revision rounds (that's scope-launch) or anything with logins, payments, or a backend (that's scope-build).
---

# NB-001 — Spark Scope Call

**Manifest line:** Clean coded website on the client's domain · $1,500 CAD fixed · 3 days

Spark is the fast lane: one tasteful, hand-coded, mobile-ready site, live on their domain the
same week, code owned forever. It is small by design. Your job on this call is to confirm it's
genuinely a Spark, capture enough to build it in three days, and draw the line where it stops.

## When this is the right waybill

✅ A restaurant that needs a menu + hours + a "call us" button before the weekend rush.
✅ A photographer or freelancer who needs a clean portfolio or one-pager *today*.
✅ A market vendor or pop-up who needs a real link in bio.

🚦 **Redirect if you hear:** custom bespoke design / "make it really stand out" / many pages →
`scope-launch`. Logins, accounts, online payments, bookings-with-checkout, a real backend →
`scope-build`. "Post for me every week" → `scope-pulse`. Say it on the call and move them.

## How to run this call

Follow the doctrine in the root `CLAUDE.md`: one question at a time, never assume, draw the
scope line out loud, end by writing the Manifest. Spark calls are short — keep it brisk and
human. The client is often non-technical; skip jargon.

## The scope checklist

### 1 — The business and the site's one job
- In one line, what's the business?
- What's the **single most important thing** this site must make happen — get a call, show the
  menu, take a booking link, display the portfolio, be the link in bio?
- Who lands on it, and on what device? (Most Spark visitors are on phones — confirm.)

### 2 — Pages and structure
- One page, or a small set? Which sections — home, menu, about, gallery, contact?
- 🚩 **Scope gate:** if it's more than ~5 sections, or needs page-by-page custom design, this is
  Launch, not Spark. Decide here.

### 3 — Content and copy 🚩
- Do they have the text written, or do they need copy support? What's the raw material — an old
  site, social posts, a menu PDF, notes?
- 🚩 Logo and photos: do they exist, are they high-resolution, and does the client have the
  right to use them? (No usable images is a real blocker — surface it.)

### 4 — Domain and going live 🚩
- 🚩 Do they own a domain? Which registrar, and can they get into it? (Or do they need help
  buying one?)
- Is there an existing site to replace or redirect?
- 🚩 Is email tied to that domain (e.g. hello@theirbiz.com)? We must not break it when we point
  DNS — confirm the email setup.

### 5 — The functional bits
- How do visitors get in touch — a contact form, click-to-call, WhatsApp, a map, social links,
  opening hours?
- If a form: **where do submissions go?** (An email address — confirm which.)
- Any third-party links or embeds — reservations (OpenTable/Resy), ordering (Square/Toast),
  Linktree, a Google reviews or Instagram embed?

### 6 — Look and feel (light touch)
- 2–3 sites or styles they like, and anything they want to avoid.
- Existing brand colors or fonts? (If none and they want a real identity designed, that leans
  Launch — flag it.)

### 7 — Logistics 🚩
- 🚩 Is there a hard date — an event, an opening, the weekend they mentioned?
- Who reviews and signs off?

## Scope boundary (fixed-price discipline)

**In scope:** one clean, hand-coded, responsive website; the agreed small page/section set;
copy support; deploy to the client's domain; the source code, owned forever.

**Out of scope → new waybill:** bespoke custom design system (→ Launch) · e-commerce/checkout ·
user accounts or logins · a CMS or admin · a blog with a posting backend · ongoing content
updates (→ Pulse) · rounds of revisions beyond minor tweaks (the corrections package is Launch).

**Redirect signals:** "log in," "sell," "book and pay," "dashboard" → `scope-build`.

## What we must have before the build clock starts

- [ ] Domain access (or a decision to buy one through us)
- [ ] Final copy, or the source material for copy support
- [ ] Logo + usable, rights-cleared images
- [ ] The email address that contact-form submissions should go to
- [ ] The hard launch date

## Output: write the Manifest

Fill `_shared/MANIFEST_TEMPLATE.md` as **Waybill NB-001**. Spark-specific notes:
- The "one line" is usually literally the site's job ("a one-page site that shows the menu and
  lets people call").
- In-scope line items = the page/section list. Out-of-scope = anything from the boundary above.
- Dependencies = the five items above. The 3-day clock starts when they're in hand.
- **Handoff:** keep the build light — `/design-html` → `/qa` → `/ship` → `/land-and-deploy`. See
  `USING_GSTACK.md`.

## Definition of done (the build)

- [ ] Site deployed and live on the client's own domain
- [ ] Tested on mobile and desktop
- [ ] The contact path works (form delivers / call button dials / map loads)
- [ ] Repo handed over; client owns it
