---
name: scope-build
description: Run the scope call for Northbound's Build package (NB-003, $10,000, a full web OR mobile app shipped in 30 days — app, backend, auth, payments, weekly demos, App Store / Play Store submission, and 30 days of post-launch fixes). This is the studio's most-booked and highest-stakes waybill, so use this skill whenever a client describes anything that is a real product: logins, user accounts, a dashboard, taking payments, a marketplace, a bookable service, an MVP for early users, "turn our workflow into an app." Use it even when the client calls it "a website" but describes app behavior. It pushes back on the framing to find the v1 wedge, walks every question you must ask to commit to a fixed price and date, and ends by writing a signed Manifest with a locked must-have screen list. Do NOT use this for a marketing site with no app functionality (scope-launch) or for adding AI to a product that already exists (scope-augment).
---

# NB-003 — Build Scope Call

**Manifest line:** Full web or mobile app (auth + backend + payments) · $10,000 CAD fixed · 30 days · most booked

Build is the real-product lane and the one where fixed-scope discipline is do-or-die. Thirty
days buys **one sharp product**, not a platform. Your job on this call is to (1) find the v1
wedge hiding inside the client's vision, (2) lock a must-have screen list precise enough to
build against, (3) confirm the auth/payments/integration decisions, and (4) name everything
that becomes a future waybill. Under-scope here and the studio eats the overage.

## When this is the right waybill

✅ A founder with early users waiting who needs a real product to show.
✅ A service business turning its workflow into a bookable app.
✅ A marketplace that needs a working version before the next funding conversation.
✅ A team that has planned too long and needs to ship something.

🚦 **Redirect / pair if you hear:** "just a marketing site" with no app behavior → `scope-launch`.
"Add AI to our *existing* app" → `scope-augment`. A vision that's clearly a 3-month platform, or
"we're not sure what to build" → strongly recommend the **Discovery** add-on to scope the wedge
before the 30-day clock starts; Discovery also adds +10 build days.

## How to run this call

Follow the root `CLAUDE.md` doctrine, and lean hard into #3 (push back on the framing). Ask for
**specific real examples, never hypotheticals.** When the client says "the app does X, Y, and
Z," your instinct is "which one, done excellently, is worth shipping in 30 days?" Everything not
on the must-have screen list is a future waybill — and you say so on the call.

## The scope checklist

### 1 — The problem and the wedge (challenge the framing)
- Describe the pain with **one specific, recent, real example** — who, doing what, where it hurt.
- Who has this pain, how do they solve it today, and why is that bad enough to pay for an app?
- Reframe out loud: "You described a platform; what's the **single workflow** that, if it just
  worked, makes this worth shipping?" Name the v1 wedge vs. the long-term dream.
- 🚩 If the honest answer is "all of it, or it's pointless," that's a Discovery signal — flag it.

### 2 — Platform and form factor 🚩
- 🚩 Web app, mobile app (iOS / Android / both), or responsive web? (Store submission is included
  — if mobile, set the native-vs-cross-platform expectation now.)
- Who are the **user types / roles** — e.g. customer, provider, admin?

### 3 — Core user journeys (the heart of scope) 🚩
- 🚩 Walk the **primary end-to-end flow** step by step — the one we'll demo in week one.
- 🚩 List the **must-have screens.** This list *is* the scope. Anything not on it is out.
- Secondary flows: explicitly include or defer each one.

### 4 — Accounts and auth (included) 🚩
- 🚩 Who logs in? Auth method — email/password, magic link, Google/Apple SSO, phone OTP?
- Roles and permissions: who can see and do what?

### 5 — Payments (included) 🚩
- 🚩 Is money moving? One-time, subscription, or **marketplace split** (e.g. Stripe Connect)?
- Payouts to third parties? Currencies? Who is the merchant of record?
- 🚩 Marketplace payouts/KYC add real complexity — if present, scope it explicitly or park
  pieces as future waybills.

### 6 — Data and integrations 🚩
- What are the core data entities — users, listings, bookings, orders, messages?
- 🚩 Third-party integrations — calendar, maps, SMS/email, analytics, an existing system or API?
  **Each integration is scope; list every one.**
- Any data migration from a current system?

### 7 — Admin and operations 🚩
- 🚩 Does the client need an **admin view** to manage users, content, or orders? (Frequently
  forgotten, almost always needed — surface it.)
- Notifications — email / SMS / push — and which events trigger them?

### 8 — Content, branding, and legal 🚩
- Branding: existing brand, or do we need design? (If a polished marketing surface is also
  needed, that may be a separate Launch waybill.)
- Seed/content data to launch with.
- 🚩 Legal pages — the client needs **their own** privacy policy and terms (especially with auth
  and payments). Who provides them?

### 9 — Non-functional and constraints 🚩
- Expected scale at launch — dozens, hundreds, thousands of users?
- Compliance — payments run through Stripe (PCI handled), but any health, financial, or other
  regulated data?
- 🚩 **Stack is a senior-engineer decision, made here.** Northbound picks the best technology for
  *this* product based on the requirements above — there's no house default, and you don't ask the
  client to choose. Capture the constraints that drive it (scale, platform, integrations, hosting
  needs, team familiarity) and record the chosen stack in the Manifest. Ask the client only about a
  **mandated** stack or an **existing codebase** to extend rather than start fresh.

### 10 — Store submission (if mobile) 🚩
- 🚩 Do they have **Apple Developer and Google Play accounts**, or need help setting them up?
- App name, icon, store listing copy, screenshots, privacy-policy URL — who provides each?

### 11 — Weekly demos and decisions 🚩
- 🚩 Demo cadence and day; who attends; the **single decision-maker** for scope calls.

### 12 — Post-launch
- The included 30 days of fixes = **bug fixes within scope**, not new features. Set the
  expectation. What happens after — new waybills, a future arrangement?

### 13 — Launch target and dependencies 🚩
- 🚩 Hard ship date, and the dependencies the client owns — content, accounts, approvals,
  third-party credentials.

## Scope boundary (fixed-price discipline)

**In scope:** one product (the agreed wedge) — app + backend + auth + payments **as scoped on
the must-have screen list** · weekly demos · App Store / Play Store submission (if mobile) · 30
days of post-launch bug fixes · source code + a non-developer handoff doc · ownership.

**Out of scope → new waybill:** any screen or feature not on the must-have list · user roles
added later · additional integrations · a native rebuild if cross-platform was scoped (or vice
versa) · AI features (→ Augment, unless bundled) · a separate marketing site (→ Launch) · heavy
data migration · multi-region or high-scale infrastructure work · maintenance beyond the 30-day
fix window. Every "can it also…" → "yes, as a new waybill," written into the Manifest.

## What we must have before the build clock starts

- [ ] Signed-off **must-have screen list** + the primary flow
- [ ] Auth decision
- [ ] Payments decision **and** a Stripe (or chosen processor) account in the client's name
- [ ] The full list of integrations, with credentials/access for each
- [ ] Brand assets (or a decision to design)
- [ ] Apple Developer + Google Play accounts, if mobile
- [ ] Client-provided legal pages (privacy, terms)
- [ ] The hard ship date and the named decision-maker
- [ ] The stack decision recorded in the Manifest (senior engineer's pick for this build), plus any client-mandated stack or existing codebase to extend

## Output: write the Manifest

Fill `_shared/MANIFEST_TEMPLATE.md` as **Waybill NB-003**. Build-specific notes:
- The **must-have screen list goes in as the in-scope line items** — verbatim. This is the single
  most important section; it is what the build is measured against.
- Out-of-scope = the boundary list, parked as future waybills with prices to follow.
- Dependencies = the checklist above. The 30-day clock starts only when they're all in hand.
- If a Discovery Sprint is attached, note +10 build days and that the wedge/roadmap came from it.
- **Handoff:** once signed, this Manifest goes to the gstack pipeline — see `USING_GSTACK.md`. The
  must-have screen list seeds `/autoplan` or `/spec`, and auth + payments make `/cso` non-optional.

## Definition of done (the build)

- [ ] Deployed **production** product (not a staging link)
- [ ] Store submission completed, if mobile
- [ ] Every flow on the must-have screen list works end to end
- [ ] Source code handed over; client owns it
- [ ] Non-developer handoff doc delivered
- [ ] 30-day post-launch fix window communicated and started
