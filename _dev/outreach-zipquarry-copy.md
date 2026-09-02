# Northbound outreach copy — the ZipQuarry account

Internal, 2026-09-02.

What Northbound sends **as the seller** through ZipQuarry. Not site copy.

Lives in `_dev/` on purpose: `.vercelignore` skips this folder, so the price in
§4 never reaches the public site. Don't move it to the root — see
[../PLAN.md](../PLAN.md) §0.

The offer: *tell me the job you hate doing, I build the thing that does it.*

---

## 0. Three choices, one line each

- **The friction question goes last, not first.** Asked first, it makes them do
  our work. ZipQuarry already found the friction for us — the `What the model
  spotted` line in `../zipquarry-platform/outreach/batch-*.md`.
- **AI is never in the subject or the first line.** It scares this buyer at the
  door (`../zipquarry-platform/docs/marketing/ICP.md` §9). It shows up in
  follow-up 1, as plumbing.
- **Not a launch discount. A first five.** "We're launching" reads as *no
  clients*, and four products have shipped. Same money, better frame.

---

## 1. Account profile

Paste into the ZipQuarry company profile. `api/_lib/seller.js` feeds these into
every prompt, and the model copies their tone. Plain in, plain out.

**Industry**

```
Custom software and automation for local service businesses
```

**Niche**

```
One-job automations — quoting, scheduling, intake, follow-up, and the spreadsheet work that eats a day a week
```

**Description**

```
We build one small piece of software that takes over one repetitive job.
Usually: retyping the same spreadsheet, chasing people to book a time,
pulling numbers out of a dozen places to answer one question. We look at how
the job is done now, build the thing that does it instead, and hand it over
working. Fixed price, fixed date, agreed before we start. AI where it does
the job better, plain software where it doesn't. Two weeks is normal. We're
taking a small first group at a lower price.
```

---

## 2. Email 1 — 65 words

Subject: one to four words, lowercase, no selling.

`the friday spreadsheet` · `your quote form` · `quick question about scheduling`

```
Hi there,

I looked at {Business} first. {The specific detail.}

Most places your size have one job that eats a day a week. Retyping a
spreadsheet. Phone tag to book a time. Twelve tabs to answer one
question.

I build one small thing that does that job instead. Two weeks. Fixed
price, agreed before I start.

What job would you hand over?

Melanie
```

No "workflow", "solution", "streamline", "leverage".

---

## 3. Follow-up 1 (+4 days) — get concrete

```
Hi there,

Three jobs I've taken over, so this is less vague:

- A spreadsheet two people kept in sync by hand. Now it fills itself.
- Phone tag to book a visit. Now people pick a slot that's free.
- A monthly report built from four exports. Now it's already done.

Some use AI, some don't. I pick whichever breaks less.

Sound like your Friday?

Melanie
```

**Swap in jobs actually done.** One true example beats three vague ones.

---

## 4. Follow-up 2 (+9 days) — the price

Default — no number. It gets quoted in the reply, against a real problem.

```
Hi there,

I'm taking five of these at a lower price, then it goes back to normal. A
short queue is worth more to me right now than the margin.

Fixed price and a date before anything starts. And I'll tell you if your
job isn't worth building.

Want the number?

Melanie
```

If the number goes in the email:

```
Normally {FULL}. {DISCOUNTED} for the first five, back to {FULL} after {date}.
```

- `{FULL}` has to be a price we really charge. Fake "regular" prices are a
  Competition Act problem here, not just a credibility one.
- A discount with no end date is just the price. Pick the date first.

---

## 5. Follow-up 3 (+16 days) — let them off

```
Hi there,

I'll stop here. "No" is a fine answer.

If it's "later" — what has to change first?

Melanie
```

---

## 6. Before sending

- **Read the `{specific detail}`.** A model wrote it from their site. One wrong
  detail costs more than a generic email.
- **CASL.** The ZipQuarry template already carries the address and the
  reply-to-unsubscribe line. Honour every unsubscribe the same day.
- **Sending is still by hand.** The app doesn't know these went out.
