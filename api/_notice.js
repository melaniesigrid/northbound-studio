/**
 * Minimum notice for the scope call: five days.
 *
 * Melanie prepares for every call, and five calendar days is the shortest
 * notice that always leaves at least three business days, whatever weekday
 * someone books on. Enforced on both sides: api/slots.js never offers an
 * earlier time, and api/book.js refuses one from a stale page.
 *
 * The Cal.com event type has its own "Minimum booking notice" setting. Keep it
 * at 5 days too: the fallback and noscript links send people straight there.
 */
const MIN_NOTICE_MS = 5 * 24 * 60 * 60 * 1000;

function earliestStart(now = Date.now()) {
  return now + MIN_NOTICE_MS;
}

module.exports = { MIN_NOTICE_MS, earliestStart };
