const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const head = fs.readFileSync(path.join(__dirname, '../_includes/head.html'), 'utf8');
const init = head.match(/<script>([\s\S]*?)<\/script>/)[1];

for (const systemDark of [false, true]) {
  for (const saved of [null, '', 'light', 'dark', 'invalid']) {
    for (const blocked of [false, true]) {
      const attributes = {};
      vm.runInNewContext(init, {
        localStorage: {
          getItem(key) {
            assert.equal(key, 'site-theme');
            if (blocked) throw new Error('Storage blocked');
            return saved;
          }
        },
        window: { matchMedia: () => ({ matches: systemDark }) },
        document: {
          documentElement: { setAttribute: (key, value) => { attributes[key] = value; } }
        }
      });
      const expected = !blocked && ['light', 'dark'].includes(saved)
        ? saved : systemDark ? 'dark' : 'light';
      assert.equal(attributes['data-bs-theme'], expected,
        JSON.stringify({ systemDark, saved, blocked }));
    }
  }
}

console.log('Theme initialization passed: fresh visits, saved preferences, invalid values and blocked storage.');
