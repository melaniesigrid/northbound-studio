/**
 * Blog newsletter signups.
 *
 * The seven blog pages posted to `https://formspree.io/f/YOUR_FORM_ID` — the
 * literal placeholder. Every subscription since the blog launched went to a
 * Formspree 404 and nobody's address was ever recorded. This endpoint replaces
 * it with the same Resend path the contact form already uses, so a signup
 * reaches a human.
 *
 * It is not a mailing list. There is no storage, no double opt-in and no
 * unsubscribe link, because there is no list to be on yet — the address arrives
 * as mail and gets added by hand. Do not point a "subscribe" button at this and
 * then send bulk mail to what it collects: CASL needs a recorded consent basis
 * and a working unsubscribe before the first campaign, not after it.
 */
const { clientIp, rateLimit, str, isEmail, looksAutomated, accepted } = require('./_guard');

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = req.body || {};

  const automated = looksAutomated({
    honeypot: body.company_website,
    elapsedMs: body.elapsed,
    // One field, not three. A human can plausibly paste an address and submit
    // in well under the two seconds the contact form expects.
    minDwellMs: 800,
  });
  if (automated) {
    console.log('[subscribe] dropped', { reason: automated, ip: clientIp(req) });
    return accepted(res);
  }

  if (!rateLimit(`subscribe:${clientIp(req)}`, { limit: 3 })) {
    return res.status(429).json({ ok: false, error: 'Too many attempts. Try again later.' });
  }

  const email = str(body.email, 254);
  const source = str(body.source, 120) || 'blog';

  if (!email) {
    return res.status(400).json({ ok: false, error: 'Missing email' });
  }
  if (!isEmail(email)) {
    return res.status(400).json({ ok: false, error: 'That email address does not look right' });
  }

  const safeEmail = escapeHtml(email);
  const safeSource = escapeHtml(source);

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Northbound Blog <hello@northboundsoftwarestudio.com>',
        to: ['hello@northboundsoftwarestudio.com'],
        reply_to: email,
        subject: `Blog subscription: ${email}`,
        html: `<h2>New blog subscription</h2>
               <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
               <p><strong>From page:</strong> ${safeSource}</p>`,
        text: `New blog subscription\n\nEmail: ${email}\nFrom page: ${source}\n`,
      }),
    });

    if (response.ok) return res.status(200).json({ ok: true });

    const err = await response.json().catch(() => ({}));
    console.error('Resend error:', err);
    return res.status(500).json({ ok: false, error: 'Failed to record subscription' });
  } catch (err) {
    console.error('Handler error:', err);
    return res.status(500).json({ ok: false, error: 'Internal server error' });
  }
};
