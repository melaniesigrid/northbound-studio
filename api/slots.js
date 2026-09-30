// GET /api/slots?start=YYYY-MM-DD&end=YYYY-MM-DD&tz=Area/City
// Open times for the 20-minute scope call, read from Cal.com's public slots
// endpoint. No API key: the event type is public. Cal.com is free here and
// nothing it does is metered (see SPEND.md).
const { clientIp, rateLimit } = require('./_guard');

const CAL = 'https://api.cal.com/v2/slots';
const EVENT = { eventTypeSlug: 'scope-call', username: 'northboundsoftwarestudio' };
const DAY = /^\d{4}-\d{2}-\d{2}$/;
const MAX_DAYS = 62;

function validZone(tz) {
  try { new Intl.DateTimeFormat('en-US', { timeZone: tz }); return true; } catch { return false; }
}

module.exports = async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ ok: false, error: 'Method not allowed' });
  if (!rateLimit(`slots:${clientIp(req)}`, { limit: 120 })) {
    return res.status(429).json({ ok: false, error: 'Too many requests' });
  }

  const { start, end } = req.query || {};
  const tz = validZone(req.query && req.query.tz) ? req.query.tz : 'America/Toronto';
  if (!DAY.test(start || '') || !DAY.test(end || '')) {
    return res.status(400).json({ ok: false, error: 'start and end must be YYYY-MM-DD' });
  }
  const span = (Date.parse(end) - Date.parse(start)) / 864e5;
  if (!(span >= 0 && span <= MAX_DAYS)) {
    return res.status(400).json({ ok: false, error: `Ask for at most ${MAX_DAYS} days` });
  }

  const url = `${CAL}?${new URLSearchParams({ ...EVENT, start, end, timeZone: tz })}`;
  try {
    const r = await fetch(url, { headers: { 'cal-api-version': '2024-09-04' } });
    const body = await r.json().catch(() => ({}));
    if (!r.ok || !body.data) {
      console.log('[slots] cal error', r.status, JSON.stringify(body).slice(0, 300));
      return res.status(502).json({ ok: false, error: 'Calendar unavailable' });
    }
    // { "2026-10-01": ["2026-10-01T09:00:00.000-04:00", ...], ... }
    const days = {};
    for (const [day, list] of Object.entries(body.data)) days[day] = list.map(s => s.start);
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=120');
    return res.status(200).json({ ok: true, tz, days });
  } catch (err) {
    console.log('[slots] fetch failed', err && err.message);
    return res.status(502).json({ ok: false, error: 'Calendar unavailable' });
  }
};
