// Validates northbound-studio/index.html: JSON-LD, i18n dictionary, key parity,
// markup-key resolution, and the two repo invariants (no prices, no cal.com).
const fs = require('fs');
const file = process.argv[2] || 'index.html';
const h = fs.readFileSync(file, 'utf8');
let bad = 0;
const fail = (m) => { console.log('FAIL  ' + m); bad++; };
const ok = (m) => console.log('ok    ' + m);

// 1. every JSON-LD block parses
[...h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
  .forEach((b, i) => {
    try { JSON.parse(b[1]); ok('JSON-LD block ' + (i + 1)); }
    catch (e) { fail('JSON-LD block ' + (i + 1) + ': ' + e.message); }
  });

// 2. the EN/FR dictionary evaluates
const start = h.indexOf('{', h.indexOf('var T = {'));
let depth = 0, end = -1;
for (let j = start; j < h.length; j++) {
  if (h[j] === '{') depth++;
  else if (h[j] === '}' && --depth === 0) { end = j; break; }
}
let T = null;
try { T = new Function('return ' + h.slice(start, end + 1))(); ok('dictionary parses'); }
catch (e) { fail('dictionary: ' + e.message); }

if (T) {
  const en = Object.keys(T.en), fr = Object.keys(T.fr);
  const missFr = en.filter(k => !(k in T.fr));
  const missEn = fr.filter(k => !(k in T.en));
  if (missFr.length) fail('missing in FR: ' + missFr.join(', '));
  if (missEn.length) fail('missing in EN: ' + missEn.join(', '));
  if (!missFr.length && !missEn.length) ok('EN/FR parity (' + en.length + ' keys each)');

  // 3. every data-i18n key in the markup has an entry
  const used = new Set([...h.matchAll(/data-i18n(?:-html)?="([^"]+)"/g)].map(m => m[1]));
  const orphan = [...used].filter(k => !(k in T.en));
  orphan.length ? fail('markup keys with no EN entry: ' + orphan.join(', '))
                : ok('all ' + used.size + ' markup keys resolve');

  // 4. dictionary entries nothing in the markup uses
  const unused = en.filter(k => !used.has(k));
  if (unused.length) console.log('note  ' + unused.length + ' unused dictionary keys: ' + unused.slice(0, 12).join(', ') + (unused.length > 12 ? ' …' : ''));
}

// 5. repo invariants (README): no published prices, no booking link
const prices = [...h.matchAll(/.{0,40}\$[0-9].{0,40}/g)].map(m => m[0]).filter(s => !/\$0\b/.test(s));
prices.length ? fail('price figures found: ' + prices.join(' | ')) : ok('no price figures');
/cal\.com/.test(h) ? fail('cal.com link present') : ok('no cal.com link');

console.log(bad ? '\n' + bad + ' check(s) failed' : '\nall checks passed');
process.exit(bad ? 1 : 0);
