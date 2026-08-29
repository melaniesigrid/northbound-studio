# Offerings plan — evaluated against Indai Technologies

Status: proposal, 2026-08-29. Companion to `PLAN.md`, which was written off the
Panorama evaluation. Panorama is the competitor above us; Indai is the one below.
Both are useful, for opposite reasons.

---

## 0. Verdict

Indai is not a threat to Northbound and should not be copied. But three of the
things they sell are real gaps in our menu, and one of them is the difference
between a studio that re-earns its revenue every month and one that doesn't.

Take **three additions** — a care plan, an AI-search visibility service, and an
inherited-codebase rescue. Take **none** of their breadth. The 12 services and
27 "expertise" pages are not an offering strategy; they are a keyword strategy,
and copying them would cost us the one thing we have that they don't.

---

## 1. Who they actually are

Their homepage opens **"Since 2010 · 14+ years shipping."** Their own About page
says the company was **founded in 2024** with "18+ years of combined trust," and
Clutch lists founding year 2024. The 14 years is a combined-experience number
wearing a company-age costume, on the page where a stranger forms their first
impression.

The stats don't reconcile either: **100+ launches** (home) vs **80+ projects**
(about) vs **75+ clients** and **12+ experts**. Delhi-based, WhatsApp as a primary
channel, 10 AM–7 PM IST.

The portfolio is the tell. **24 projects, zero outcome metrics.** Every card
carries a client name, a stack, and a duration — "Ambulans Sverige, WordPress,
2 weeks." No revenue lift, no conversion delta, no traffic number. Mostly Dutch
and Scandinavian small-business WordPress work, a couple of Laravel builds, one
Shopify store. That is a two-year-old contract shop serving European SMBs at
Indian rates, not an applied-AI studio.

**They compete on price and menu width. We compete on a committed date and a
fixed number.** Different buyer, mostly. The overlap is Spark and Launch, where a
restaurant owner comparing quotes will find them cheaper — and where our answer
is the date and the code ownership, not a lower number.

## 2. What their menu is really for

12 services × 27 expertise pages × 10 industry pages ≈ **60+ indexed URLs**, each
one a long-tail net: "laravel development company delhi," "magento 2 migration,"
"shopify development for retail." The menu is not a description of what they do.
It is a surface area.

**Northbound's sitemap has 12 URLs, six of which are blog posts.** Everything we
sell lives at anchors on a single page — `#packages` — which Google indexes as one
document. That is the actual asymmetry, and it is a distribution problem wearing
an offerings costume. See §6.

The copy itself is worth a closer read than the menu. Their "What's Really Holding
Your Website Back?" section is genuinely good: it leads with the buyer's symptom
(*"Getting Visitors But Not Enough Leads?"*), not the vendor's service. We already
do this on the Augment card — the four failure modes — and nowhere else. Spark and
Launch still lead with deliverables.

## 3. The three gaps that are real

### 3.1 We have no recurring revenue on the software we ship

Every Spark, Launch, Build and Augment client goes quiet 30 days after launch.
Pulse is a subscription, but it sells social posts — it does not sell care of the
thing we built. Indai runs three separate maintenance lines because that is what
keeps a shop alive between projects.

The delicate part: FAQ answer 6 currently ends **"There are no retainer strings
attached."** That promise is an asset and must survive. The reconciliation is that
the promise is *no retainer required*, not *no retainer available* — the code is
yours, you can walk, and if you'd rather not think about it, here is the plan. The
FAQ line needs one clause added, not removal.

### 3.2 We sell AI systems and say nothing about AI-search visibility

Indai's flagship is **GEO — "Be the answer AI engines recommend."** Their framing
is sharp: *"Zero-click is the new normal: AI answers resolve queries without a
website visit — if you're not cited, you're invisible."*

Their delivery is not. Behind that headline is a content retainer — 40 backlinks a
month, 6 PR distributions, 2 blog posts. That is 2015 SEO with a new name, and the
backlink volume is a liability we would never attach our name to.

But the underlying problem is real and it is **an engineering problem**, which is
exactly where we have standing and they don't: structured data, entity
disambiguation, `llms.txt`, answer-shaped content architecture, and a measured
citation baseline. We already do half of this to our own site. We publish six
posts on agentic AI. A client who just paid for Launch has a live question about
whether ChatGPT can find them, and we currently have no answer.

### 3.3 We have nothing for a codebase that already exists and is broken

Our entire menu assumes a greenfield build or a clean product to Augment. There is
no offer for *"the developer disappeared,"* *"we inherited this and nobody knows
how it works,"* or *"it works but we're scared to touch it."* Indai catches that
demand with WordPress Maintenance and Web & Server Maintenance — badly, and only
for WordPress.

This is the addition best matched to what we actually are. Reading an unfamiliar
codebase fast is the single thing agentic delivery is most obviously good at, and
it converts a scary open-ended engagement into exactly the fixed-scope, fixed-day
shape the rest of the menu already sells.

## 4. The three additions

Names follow the existing cargo lexicon (Manifest, Waybill, Spark, Launch, Build,
Augment, Pulse). Each gets a waybill number and the same card structure.

### Moorage — WAYBILL № NB-006 · Subscription

> *Where a ship sits safe between voyages.*

Card copy, drafted to the existing failure-mode pattern:

- **Your dependencies rot whether you touch the code or not.** Security patches
  and dependency updates applied monthly, tested against your build before they
  land — so the upgrade is routine instead of an emergency two years from now.
- **Nobody notices the site is down until a customer says so.** Uptime and Core
  Web Vitals monitored continuously. If it breaks, we know before you do, and the
  first message you get from us includes what we already did about it.
- **The small change waits three months because it needs a whole project.** A
  bounded block of change time each month — copy, a new section, a form field, a
  price update — used or lost, no invoice, no scoping call.
- **You have backups you have never restored.** Backups verified by actually
  restoring them on a schedule, not by checking that the job ran.

**Who you are:** you launched with us and would rather not think about it again ·
you have one site and no engineer · your last developer left and nothing has been
patched since · you want someone to call who already knows the codebase.

**Card foot:** *Optional, always. Cancel any month — you own the code either way.*

Why this one first: it is the only addition that changes the shape of the business
rather than the width of the menu. It also has the highest margin per hour of
anything on the page, and every existing client is already qualified.

### Beacon — WAYBILL № NB-007 · 10 days + optional monthly

> *What you put out so you can be found in the dark.*

Sold as engineering, not as SEO. Fixed-scope build, with the optional monthly
re-measure living under Moorage rather than as its own retainer.

- **AI engines answer questions about your market without mentioning you.** We
  measure it first: a baseline of what ChatGPT, Claude, Perplexity and Google AI
  Overviews currently say when asked the twenty questions your buyers actually
  ask. You get the transcript, not a score.
- **The models cannot tell what your company is.** Entity and schema work in the
  codebase — organization, product, service, FAQ and author graphs that resolve to
  one unambiguous thing, plus `llms.txt` and crawler policy set deliberately
  instead of by default.
- **Your best answer is buried in paragraph four.** Content restructured so the
  answer is extractable — question-shaped headings, self-contained answers, claims
  that carry their own citation.
- **You cannot tell whether any of it worked.** The same twenty questions re-run
  after 30 days, side by side with the baseline. If nothing moved, you can see
  that too.

**What it explicitly is not:** we do not buy, build, or broker backlinks, and we
do not sell PR distribution. If a competitor is quoting you 40 links a month, that
is the part of their proposal most likely to eventually hurt you.

**Who you are:** you rank on Google and still get no inbound · your category is one
where buyers now ask a model first · you just launched and want to be findable by
more than one engine · you have been quoted for "GEO" by someone selling backlinks
and want a second opinion.

### Salvage — WAYBILL № NB-008 · 5 days

> *Fixed-price rescue of a codebase you inherited.*

- **Nobody knows how it works, including the people running it.** In five days you
  get a written map of the system — what runs where, what talks to what, what is
  dead code, and what would break first under load.
- **You are afraid to deploy.** We stand up a working local environment and a
  repeatable deploy, or we tell you plainly what stops us and what it would cost
  to fix.
- **You do not know what it is costing you to be exposed.** Dependency, secret and
  access audit — what is unpatched, what is committed that shouldn't be, who still
  has keys.
- **You need to decide whether to fix it or replace it.** The deliverable ends with
  a recommendation and a number for each path, so the decision stops being a
  feeling.

**Who you are:** the developer left and nothing is documented · you acquired a
product and inherited its code · your team says "we should rewrite it" and you
cannot evaluate that claim · you want a second opinion before signing a six-figure
rebuild.

Natural upsell path: Salvage → Build (replace), Salvage → Moorage (keep and
maintain), Salvage → Augment (it's fine, add the AI feature). It is the cheapest
possible first transaction and it qualifies a client better than a call does.

## 5. What we do not copy

- **The menu width.** Magento 2, OpenCart, CodeIgniter, EJS, Handlebars, Vue,
  WordPress maintenance as its own line. Each page added is a claim we have to
  defend in a scoping call, and a dilution of "AI-native." A studio that lists
  Handlebars development is a studio that will take any job.
- **Dedicated developer placement.** Staff augmentation is the opposite of
  fixed-scope productized delivery. It sells hours, which is the exact model the
  Manifest exists to reject.
- **"24/7 support."** Untrue for a small team the moment it is tested, and it is
  the first promise a client will hold us to at 3 a.m.
- **Backlink and PR packages.** See §3.2.
- **The inflated founding year.** Northbound's honest age is an asset when the
  proof is real (PLAN.md §1). Buying two extra years costs the credibility of
  every other number on the page.

## 6. The distribution move, which matters more than any of the above

The three additions are worth roughly nothing while everything we sell lives at
`#packages` on one URL. Indai's actual advantage is 60 indexed pages to our 12.

Give each package its own page — `/spark`, `/launch`, `/build`, `/augment`,
`/moorage`, `/beacon`, `/salvage` — each with the card copy, the failure modes, a
FAQ block, and its own JSON-LD. That is seven new indexable documents built from
copy that already exists, and it is the prerequisite for the case studies PLAN.md
§1 is waiting on having anywhere to live.

## 7. Sequence, and what this does not fix

**This plan does not solve the problem PLAN.md identified.** The site still has
zero proof, and adding three offerings to a page with no case studies makes the
menu longer without making it more believable. Offerings change the revenue shape;
case studies change conversion. Do not let this reorder §1 of PLAN.md.

1. ~~Fix the live inconsistencies~~ (§8). **cal.com removed 2026-08-29**; the
   stats strip still needs measured numbers and is blocked on the same data as
   PLAN.md §2.
2. ~~**Moorage.**~~ **Shipped 2026-08-29.** Second `.sub-strip` above Pulse,
   `#moorage`, four features, four who-you-are lines, `Offer` in the
   `OfferCatalog`, and a new FAQ (`faq-q11`). FAQ answer 6 now reconciles the
   promise: *no retainer required*, not *none available*.
3. ~~**Salvage.**~~ **Shipped 2026-08-29.** `WAYBILL № NB-006`, 5 days, full-width
   strip sharing Discovery's layout, `#salvage`, `Offer` in the `OfferCatalog`,
   new FAQ (`faq-q10`). `faq-a1` now lists it in the timeline rundown.
4. **Package pages** (§6), all seven at once, since the copy is written. ← next
5. **Beacon.** Last, because it should launch with our own citation baseline as
   its first case study — measure Northbound, publish the transcript, then sell
   it. Selling AI-search visibility from a site nothing cites is Indai's mistake.

### What shipping 2 and 3 actually touched

Both languages, every time. A new offering is **six** edits, not one: the markup,
the EN dictionary, the FR dictionary, the `OfferCatalog`, the JSON-LD `FAQPage`,
and the visible FAQ. `_dev/check-copy.js` (new) asserts all of it — run it after
any copy edit. It exists because an unescaped apostrophe in a French string
silently breaks the entire FR dictionary, and nothing on the page would have told
us.

`packages-note` no longer says "Four packages" — it reads *Fixed scope, a fixed
price, and a committed date*, which is both true after the additions and a better
line than a count.

## 8. Two live inconsistencies found while reading the site

Both contradict claims already made in `README.md` and `PLAN.md` §0:

- ~~**`cal.com` is still live in three places**~~ — the contact form note, the EN
  dictionary, and the FR dictionary. PLAN.md §0 states every cal.com link was
  removed and email is the only entry point, so this was a miss, not a decision.
  **Fixed 2026-08-29:** all three replaced with *Every note gets a human reply
  with the scope, the price, and the ship date* (and its French equivalent), which
  answers the same objection the booking link was there to answer.
- **The stats strip is still the vanity version** — *3 day spark sprint · 100%
  fixed-price guarantee · ≤30 days to launch · $0 surprise invoices* — which
  PLAN.md §2 already flagged. Noting it here only because it is the first thing a
  visitor comparing us to Indai's "100+ launches · 10+ countries" will read, and
  ours are four restatements of the packages while theirs, however inflated, are
  at least claims about the past.
