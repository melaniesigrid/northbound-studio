/**
 * Blog newsletter form → /api/subscribe.
 *
 * Every blog page used to POST natively to a Formspree URL that was still the
 * placeholder, so subscriptions went nowhere. A native POST to our own endpoint
 * would navigate the reader to raw JSON, so this intercepts and submits with
 * fetch, and reports success in place.
 */
(function () {
  var forms = document.querySelectorAll('form[data-newsletter]');
  if (!forms.length) return;

  forms.forEach(function (form) {
    var openedAt = Date.now();
    var btn = form.querySelector('button[type="submit"]');
    var note = form.querySelector('.newsletter-note');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var email = form.querySelector('[name="email"]');
      if (!email || !email.value) return;

      var original = btn ? btn.textContent : '';
      if (btn) { btn.textContent = 'Sending…'; btn.disabled = true; }

      fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.value,
          source: location.pathname,
          company_website: (form.querySelector('[name="company_website"]') || {}).value || '',
          elapsed: Date.now() - openedAt
        })
      })
        .then(function (r) { return r.json(); })
        .then(function (res) {
          if (res && res.ok) {
            form.innerHTML = '<p class="newsletter-note" style="color:inherit">' +
              'Got it — you\'ll hear from us when something ships.</p>';
            if (typeof gtag === 'function') {
              gtag('event', 'generate_lead', { event_category: 'newsletter', event_label: 'blog' });
            }
          } else {
            fail(res && res.error);
          }
        })
        .catch(function () { fail(); });

      function fail(msg) {
        if (btn) { btn.textContent = original; btn.disabled = false; }
        if (note) {
          note.textContent = msg ||
            'Something went wrong — email hello@northboundsoftwarestudio.com';
        }
      }
    });
  });
})();
