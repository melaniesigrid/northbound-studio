---
name: scope-augment
description: Run the scope call for Northbound's Augment package (NB-004, $6,000, an AI feature integrated into the client's existing product in 14 days — chat, semantic search, summarization, classification, or an agent — with prompt design, an eval harness the client can maintain, guardrails, and a team walkthrough). Use this whenever a client wants to add intelligence to a product that ALREADY EXISTS: a support team automating first replies, a SaaS adding smart/semantic search, an e-commerce store adding recommendations, any team bolting an AI capability onto a working codebase. It defines a crisp, evaluable capability, scopes the integration into their existing system, and ends by writing a signed Manifest. Do NOT use this to build the host product from scratch (that's scope-build) or for a marketing site (scope-launch). The hard requirement: there is an existing codebase and accessible grounding data — if either is missing, surface it as a blocker.
---

# NB-004 — Augment Scope Call

**Manifest line:** One AI feature integrated into the client's existing product · $6,000 CAD fixed · 14 days

Augment drops a single, well-defined, **evaluable** AI capability into a codebase that already
exists. The two things that make or break it: a crisp definition of what "good output" means
(which becomes the eval set), and real access to the existing product and the data that grounds
the feature. Your job is to pin both down, pick the narrowest pattern that delivers the value,
and name the integration boundary.

## When this is the right waybill

✅ A support team drowning in repeat tickets that wants AI to draft the first response.
✅ A SaaS product adding smart/semantic search before the next release.
✅ An e-commerce brand adding AI-driven product recommendations.
✅ A team with a good product that needs to add intelligence to stay competitive.

🚦 **Redirect if you hear:** "build us the app" (no existing product) → `scope-build`. "We're not
sure the AI feature is even the right move" → recommend **Discovery** as an add-on to evaluate it
first. A marketing site → `scope-launch`.

🚩 **Hard dependency:** Augment integrates into an *existing* codebase and needs *accessible
grounding data*. If there's no repo access, or no usable data to ground the feature, you cannot
start — say so on the call and resolve it before quoting a date.

## How to run this call

Follow the root `CLAUDE.md` doctrine, and push on scope shape (#3): clients often ask for "an
agent" when they need retrieval + summarization. Steer to the **narrowest capability** that
solves the real problem. Be concrete about evals — they're included and they're how quality is
proven, so collect real examples on the call.

## The scope checklist

### 1 — The AI job-to-be-done (make it crisp and evaluable) 🚩
- 🚩 In one sentence: what should this feature **do**, for **which user**, at **what moment**?
- Which pattern fits — chat assistant, semantic/RAG search, summarization, classification/
  extraction, or an agent that takes actions? Push toward the narrowest that delivers value.
- 🚩 What does a **good** output look like vs. a bad one? Ask for **5–10 real examples** — these
  seed the eval set.

### 2 — The existing product (the integration target) 🚩
- 🚩 What's the current stack — language, framework, database? **Can we get repo access?**
- Where does the feature live in the UX — which screen or flow? What's the front-end framework?
- How is it invoked — a button, automatically, a background job, an API endpoint?

### 3 — The knowledge / data the AI needs 🚩
- 🚩 What data grounds it — docs, tickets, product catalog, DB tables, knowledge-base articles?
  Where does it live, what's the access path, and how fresh must it be?
- How large is that corpus? Does it need a vector store / index (RAG)?
- 🚩 Any PII or sensitive data in the corpus? Compliance constraints on using it?

### 4 — Model and provider 🚩
- 🚩 Any provider preference or constraint — Anthropic, OpenAI, self-hosted/on-prem, data-
  retention requirements? Existing API keys or accounts?
- Latency / throughput expectations; a ceiling on per-call cost?
- ⚠️ Model availability, context limits, and pricing change frequently — confirm current limits
  and costs against the provider's live docs at scope time rather than assuming.

### 5 — Evals and quality (included) 🚩
- 🚩 Define the success metric — accuracy, helpfulness, deflection rate, precision/recall,
  whatever fits the capability.
- The eval set comes from the real examples in §1; **who on the client side labels "good"?**
- 🚩 What's the acceptance bar to ship?

> The eval-harness scaffold (dataset format, deterministic + judge graders, the acceptance gate,
> and a CI runner) lives in `eval-harness/` (this folder). It's Northbound's deliverable, not
> gstack's — the eval set *is* the gate the feature must clear.

### 6 — Guardrails and failure behavior 🚩
- What must it **not** do — no medical/legal advice, no fabricated facts, refuse out-of-scope?
- Fallback when unsure — hand off to a human, return "I don't know"?
- 🚩 Logging/observability for prompts and outputs, so the client can maintain quality after
  handoff (the package promises a prompt + eval setup they can maintain).

### 7 — Handoff and maintainability 🚩
- 🚩 Who on the client's team will own prompts and evals afterward? Who attends the walkthrough,
  and how deep should it go?

### 8 — Constraints and timeline 🚩
- The client's existing release process / CI we must fit into.
- 🚩 Launch target and the single decision-maker.

## Scope boundary (fixed-price discipline)

**In scope:** one AI capability integrated into the existing codebase · prompt design · an eval
harness + an initial eval set · guardrails and fallback behavior · logging · a team walkthrough.

**Out of scope → new waybill:** building the host product itself (→ Build) · multiple distinct AI
features · model fine-tuning or training · a large-scale data pipeline / ETL build · ongoing
prompt tuning beyond handoff · infrastructure migration.

## What we must have before the build clock starts

- [ ] Repo access to the existing codebase
- [ ] Access to the grounding data
- [ ] 5–10 real example input/output pairs for the eval set
- [ ] A provider/account decision (or agreement to use our recommended one + keys)
- [ ] The success metric and the acceptance bar
- [ ] The integration point in the UX
- [ ] The named decision-maker and the maintainer for after handoff

## Output: write the Manifest

Fill `_shared/MANIFEST_TEMPLATE.md` as **Waybill NB-004**. Augment-specific notes:
- In-scope line items = the one capability + "eval harness + set" + "guardrails" + "walkthrough."
- Record the **acceptance bar** and the **success metric** in the Manifest — they define done.
- The eval set is a dependency *and* a deliverable; note both. The 14-day clock starts when repo
  access, grounding data, and the example set are in hand.
- **Handoff:** `/plan-eng-review` for the integration plan → implement the capability + eval
  harness (Northbound's own; the eval set is the acceptance gate) → `/cso` (data/AI security) →
  `/qa` → `/ship`. See `USING_GSTACK.md`.

## Definition of done (the build)

- [ ] Feature live in the client's product
- [ ] Eval harness + set delivered, and the feature meets the agreed acceptance bar
- [ ] Guardrails and fallback in place; logging on
- [ ] Team walkthrough completed
- [ ] Prompts + evals handed over in a form the client can maintain
