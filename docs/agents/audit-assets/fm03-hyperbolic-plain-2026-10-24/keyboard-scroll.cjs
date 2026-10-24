const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
(async () => {
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH, headless: true });
  const results = [];
  try {
    for (const lang of ['en', 'zh']) {
      const page = await browser.newPage({ viewport: { width: 390, height: 900 }, colorScheme: 'light' });
      await page.goto('http://127.0.0.1:8835/' + (lang === 'zh' ? 'zh/' : '') + 'alevel/a2-further-mathematics/hyperbolic-functions/', { waitUntil: 'networkidle' });
      await page.evaluate(async () => { await window.MathJax.startup.promise; await document.fonts.ready; document.querySelectorAll('#content-container details').forEach(e => e.open = true); });
      for (const [kind, selector] of [['table', '.table-wrapper'], ['formula', 'mjx-container[display="true"]']]) {
        const candidates = page.locator('#content-container ' + selector);
        let tested = false;
        for (let i = 0; i < await candidates.count(); i++) {
          const element = candidates.nth(i);
          if (!(await element.evaluate(e => e.scrollWidth > e.clientWidth + 2))) continue;
          const previousTabindex = await element.evaluate(e => {
            const previous = e.previousElementSibling;
            if (!previous) throw new Error('Missing preceding element for keyboard entry');
            const old = previous.getAttribute('tabindex');
            previous.setAttribute('tabindex', '-1'); previous.focus(); e.scrollLeft = 0;
            return old;
          });
          await page.keyboard.press('Tab');
          const focused = await element.evaluate(e => document.activeElement === e);
          assert.equal(focused, true, lang + ' ' + kind + ' can be entered with Tab');
          await page.keyboard.press('ArrowRight'); await page.keyboard.press('ArrowRight');
          await page.waitForTimeout(500);
          const measurement = await element.evaluate((e, old) => {
            const previous = e.previousElementSibling;
            if (old === null) previous.removeAttribute('tabindex'); else previous.setAttribute('tabindex', old);
            return { clientWidth: e.clientWidth, scrollWidth: e.scrollWidth, scrollLeft: e.scrollLeft };
          }, previousTabindex);
          assert(measurement.scrollLeft > 0, lang + ' ' + kind + ' responds to ArrowRight');
          results.push({ lang, kind, focused, ...measurement }); tested = true; break;
        }
        assert(tested, lang + ' ' + kind + ' has an overflowing representative');
      }
      await page.close();
    }
    assert.equal(results.length, 4);
    fs.writeFileSync(path.join(__dirname, 'keyboard-scroll-results.json'), JSON.stringify(results, null, 2) + '\n');
    console.log(JSON.stringify({ checked: results.length, passed: true }));
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
