const { clientIp, rateLimit, str, isEmail, looksAutomated, accepted } = require('./_guard');

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const MAX = { name: 120, email: 254, message: 5000 };

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = req.body || {};

  // Silent accept, before any work. See api/_guard.js for why 200 and not 403.
  const automated = looksAutomated({
    honeypot: body.company_website,
    elapsedMs: body.elapsed,
  });
  if (automated) {
    console.log('[contact] dropped', { reason: automated, ip: clientIp(req) });
    return accepted(res);
  }

  if (!rateLimit(`contact:${clientIp(req)}`, { limit: 5 })) {
    return res.status(429).json({
      ok: false,
      error: 'Too many messages from this address. Email hello@northboundsoftwarestudio.com directly.',
    });
  }

  const name = str(body.name, MAX.name);
  const email = str(body.email, MAX.email);
  const message = str(body.message, MAX.message);

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: 'Missing required fields' });
  }
  if (!isEmail(email)) {
    return res.status(400).json({ ok: false, error: 'That email address does not look right' });
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Northbound Contact Form <hello@northboundsoftwarestudio.com>',
        to: ['hello@northboundsoftwarestudio.com'],
        reply_to: email,
        subject: `New inquiry from ${name}`,
        html: `
          <h2>New inquiry from ${safeName}</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        `,
        text: `New inquiry from ${name}\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      }),
    });

    if (response.ok) {
      return res.status(200).json({ ok: true });
    } else {
      const err = await response.json().catch(() => ({}));
      console.error('Resend error:', err);
      return res.status(500).json({ ok: false, error: 'Failed to send email' });
    }
  } catch (err) {
    console.error('Handler error:', err);
    return res.status(500).json({ ok: false, error: 'Internal server error' });
  }
};
