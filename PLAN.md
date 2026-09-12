# Northbound improvement plan

Status: working plan, 2026-08-28. Supersedes nothing. This is the first one.

The trigger was evaluating **Panorama** (SF, a16z speedrun-backed applied-AI
consultancy) as a competitor. Read that as the benchmark throughout: they sell
into the same "we need AI shipped properly" budget, and their site does two
things ours does not. It publishes no prices, and every claim on it is a number
with a mechanism attached.

---

## 0. What changed today

Both already applied to `index.html` and `manifesto/index.html`:

- **No prices anywhere.** Six dollar figures removed from the package cards, the
  Pulse strip, the FAQ (visible and JSON-LD), the schema.org `OfferCatalog`, and
  `priceRange`. Cards now read **By quote: fixed price, agreed on day zero**.
  The *promise* of a fixed price stays; the number is not the first thing a
  stranger learns about us.
- **Email is the only entry point.** Every `cal.com` link is gone from the nav,
  mobile nav, hero, footer, and the manifesto page. The contact form
  (`api/contact.js` → Resend → `hello@`) is now the single funnel. GA4 CTA
  tracking was repointed from `a[href*="cal.com"]` to the contact/mailto links.

Both language dictionaries (231 EN keys, 231 FR) were updated in step. There is
no English string left with a price and no French string still offering a call.

### Why remove the prices

1. **A published number is a ceiling, not a filter.** "$10,000 CAD fixed" means
   the client with a $28K problem prices themselves out before they describe it.
   No competent studio in this market publishes a number, Panorama included.
2. **It invites the wrong comparison.** A visible $1,500 puts Spark next to a
   Fiverr template shop, which is a fight about price. Without it the comparison
   is about the committed date and the fixed-scope promise, which we win.
3. **The numbers were stale anyway.** They were set before the four in-house
   products existed and before agentic delivery changed what a build costs us.

### What this costs, and the mitigation

Removing `Offer.price` weakens rich-result eligibility for the package pages, and
the title tag still reads *Fixed-Price Software Development Studio Toronto*. That
term is still accurate ("fixed price" is a delivery model, not a price list) so
keep the tag. Watch Search Console impressions for `#packages` over the next
month; if they fall, the fix is content (case studies) not a restored number.

---

## 1. The actual gap: the site has no proof

Panorama's page carries five case studies, each one sentence of problem, one
paragraph of mechanism, three hard numbers. Northbound's page carries zero. Every
claim on it is a promise about the future (*we ship fast, we don't surprise
you, agents do 70%*) and a stranger has no way to check any of it.

This is the highest-leverage change available, and it costs nothing to make,
because the proof already exists and is sitting unshipped in the four sibling
repos.

### The proof shelf

Four shipped products, all ours, all real:

| Product | The one-sentence problem | Numbers to pull |
|---|---|---|
| **ZipQuarry** | Owner-led service businesses lose evenings to prospecting. | Time-to-first-useful-lead, draft-edit rate, cost per reviewed lead, replies per 10 sent. Being measured now under the design-partner run: see `zipquarry-platform/docs/CEO-DECISION.md`. |
| **Quotefront** | Quoting from site photos is a manual estimator's afternoon. | Photo-to-findings turnaround, findings per photo, per-quote model cost. |
| **Windward** | Portfolio grading requires an analyst you don't have. | Pillars computed, tickers covered, time to a graded portfolio. |
| **ReconAI** | Invoice/PO matching is human tedium at scale. | Match rate, exceptions surfaced, minutes per hundred documents. |

**Do not ship a case study with an invented number.** One honest metric beats
three plausible ones, and the whole point of the format is that it is checkable.
ZipQuarry is closest to having real figures: start there, ship one, and let the
other three follow as their numbers land.

### The format to copy

> **The best people spent the whole day on outreach.**
> A client asked where AI would be worth using in their business. The audit
> pointed at outreach. We built an agent that lives in Slack, drafts messages in
> each person's voice, and hands every final decision back to a human.
> **15 → 1 min** per prospect · **90 → 150** prospects/day · **~20 hrs/day**
> skilled time handed back

Title is the problem, not the solution. Body names the mechanism. Three numbers,
each with a unit. That is the entire template.

---

## 2. Replace the vanity stats with earned ones

The stats strip currently reads *3 day spark sprint · 100% fixed-price guarantee
· ≤30 days to launch · $0 surprise invoices*. Three of those four are restatements
of the packages, and "100%" of a promise we have made to ourselves is not a
statistic. Once the first case study lands, this strip should hold measured
numbers: products shipped, days to first deploy, an actual cost or time delta.

---

## 3. Sharpen the AI-native claim

Ours is generic: *agents handle the repetitive 70%*. Panorama's is specific and
therefore credible: retrieval, context engineering, LLM cost optimization, data
strategy, post-training. Each names a failure mode a reader recognizes from their
own product.

We have equally specific ground to stand on and were not saying any of it:
per-tenant token cost caps, output-schema validation, hallucination containment,
evals on structured output, multi-tenant isolation.

**Done 2026-08-28.** The Augment card no longer lists features. It lists the four
things that go wrong once a model is in production, and what we do about each:

| Was | Now |
|---|---|
| Chat, search, summarization, or agents | It makes things up and nobody catches it |
| Integrated into your existing codebase | The inference bill outgrows the usage |
| Prompt & eval setup you can maintain | Nobody can tell whether a change helped |
| Team walkthrough on handoff | Your team cannot maintain it after we leave |

"Who you are" moved the same way: from job titles to symptoms: *you shipped an
AI feature and cannot say what it costs per customer*, *it worked in the demo and
misses in production and nobody can name which change broke it*.

Every claim on that card is something already shipped in the products next door,
which is the test any replacement has to pass. The spend cap is not aspirational:
ZipQuarry reserves budget **before** the external call rather than counting after
it, capped per customer, so a runaway loop cannot spend a month of revenue in an
afternoon. If a claim on this card ever stops being true of our own code, it
comes off the card.

---

## 4. What we are explicitly not copying

- **The credential wall.** Ex-Google/Twitter/Berkeley, SOC 2 Type II, CASA Tier 3,
  "the Navy SEALs AI eng team". That sells to a CTO running vendor diligence.
  Aimed at a restaurant owner buying Spark it reads as talking past them.
  Northbound's package range spans both buyers; the voice has to hold both.
- **Product Hunt rank and upvote counts.** Vanity, and it points the site at an
  audience that does not buy builds.
- **A services-only future.** Panorama's a16z backing says services now, product
  later. Northbound already has the products. That is the asset: the studio site
  should point at them, not hide them.

---

## 5. Site hygiene

- **`README.md` was stale**. It described `northbound.html`, `business-plan.md`,
  `todo.md`, `offer-sheet.md` and four other files that do not exist in this repo.
  Rewritten today.
- **`_dev/` is publicly reachable.** `_dev/theme-compare.html` still contains the
  old price list and is served at a guessable URL. Added `.vercelignore` so it
  stops deploying; the file stays in the repo as a working reference.
- **`vercel.json` was `{}`.** Now carries `X-Content-Type-Options`,
  `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, HSTS and a CSP
  built from the origins the pages actually reference: Google Fonts, gtag,
  GA collect endpoints, Vercel vitals. **The CSP allows `'unsafe-inline'` for
  scripts** and cannot do otherwise while the page carries dozens of inline
  `<script>` blocks and six inline event handlers. It still blocks every external
  script origin we did not name, which is the attack this actually prevents.
  Tightening to a nonce means extracting the inline JS first.
- **`api/contact.js` had no rate limit and no spam trap.** Fixed: honeypot,
  dwell-time check, per-IP limit, length caps and email validation, all in
  `api/_guard.js`. The rate limit is in-memory and therefore per warm instance, and honest about it in the module comment. It stops the naive loop, not a flood.
- **Seven dead newsletter forms.** Every blog page posted to
  `https://formspree.io/f/YOUR_FORM_ID`: the literal placeholder. Every
  subscription since the blog launched hit a Formspree 404 and no address was
  ever recorded. They now post to `api/subscribe.js`, which mails the address to
  hello@ through the same Resend path as the contact form. **It is not a mailing
  list**, no storage, no double opt-in, no unsubscribe, because there is no list
  yet. CASL needs a recorded consent basis and a working unsubscribe before the
  first campaign, not after it.

---

## 6. Sequence

1. ~~`.vercelignore`, README rewrite, this plan.~~ **Done 2026-08-28.**
2. ~~Honeypot + rate limit on `api/contact.js`.~~ **Done 2026-08-28**, and the
   seven dead newsletter forms found and fixed in the same pass.
3. ~~Security headers in `vercel.json`.~~ **Done 2026-08-28.**
4. ~~Augment package rewritten around named AI failure modes.~~ **Done
   2026-08-28.**
5. First case study: ZipQuarry, using the numbers the design-partner run
   produces. Panorama format, three real metrics, no invented figures.
6. Stats strip rebuilt from earned numbers.
7. Case studies two through four as Quotefront, Windward and ReconAI produce
   measurable results.

Items 5–7 are the ones that change conversion, and every one of them is now
waiting on a **measured number**, not on an evening of work. Nothing else on this
plan can be written without data, which makes the design-partner run the only
thing standing between this site and the proof it is missing.
