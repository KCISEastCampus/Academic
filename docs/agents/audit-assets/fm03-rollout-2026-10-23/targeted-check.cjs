const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const base = process.env.ACADEMIC_URL || 'http://127.0.0.1:8832';
const out = path.join(__dirname, 'final');
const cases = [
  ['first-order-differential-equations', 'example-1-normalise-and-solve', 1365],
  ['first-order-differential-equations', 'example-1-normalise-and-solve', 390],
  ['finite-series', null, 390],
  ['de-moivres-theorem', null, 1365],
  ['de-moivres-theorem', null, 390],
  ['inverse-trigonometric-functions', 'practice', 390],
  ['matrix-algebra', 'inverse-system-task', 390]
];
(async () => {
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH, headless: true });
  const results = [];
  try {
    for (const [slug, id, width] of cases) {
      const page = await browser.newPage({ viewport: { width, height: 900 } });
      const response = await page.goto(`${base}/zh/alevel/a2-further-mathematics/${slug}/`, { waitUntil: 'networkidle' });
      assert.equal(response.status(), 200);
      await page.evaluate(async () => { await window.MathJax.startup.promise; await document.fonts.ready; });
      let target = id ? page.locator(`[id="${id}"]`) : page.locator('.worked-example').first();
      const section = await target.evaluate(e => !!e.closest('section'));
      if (section) target = target.locator('xpath=ancestor-or-self::section[1]');
      if (slug === 'inverse-trigonometric-functions') target = page.locator('.lesson-check').first();
      // Hide fixed page controls only while capturing a tall content element.
      const screenshotStyle = 'nav.site-nav, .back-to-top, .scroll-progress { visibility: hidden !important; }';
      await target.screenshot({ path: path.join(out, `${slug}-${width}-reading.png`), style: screenshotStyle });
      if (slug === 'first-order-differential-equations') {
        const tex = await target.locator('mjx-container').evaluateAll(es => es.map(e => e.querySelector('mjx-assistive-mml')?.textContent || e.textContent));
        assert.equal(await target.locator('details').count(), 0, 'The complete first example stays visible');
        results.push({ type: 'visible-integrating-factor-example', width, formulas: tex.length });
        await target.locator('mjx-container[display="true"]').nth(2).evaluate(e => scrollTo(0, e.getBoundingClientRect().top + scrollY - 90));
        await page.screenshot({ path: path.join(out, `first-order-${width}-integral-viewport.png`) });
      }
      await page.evaluate(() => document.querySelectorAll('#content-container details').forEach(d => { d.open = true; }));
      if (slug === 'de-moivres-theorem' && width === 390)
        await page.locator('svg[aria-labelledby="four-root-title four-root-desc"]').screenshot({ path: path.join(out, 'de-moivre-four-roots-390.png'), style: screenshotStyle });
      if (slug === 'finite-series')
        await page.locator('[id="question-5--original-aqa-practice"]').locator('xpath=ancestor::section[1]').screenshot({ path: path.join(out, 'finite-series-q5-390-expanded.png'), style: screenshotStyle });
      if (slug === 'matrix-algebra') await target.screenshot({ path: path.join(out, 'matrix-algebra-inverse-task-expanded.png'), style: screenshotStyle });
      let checked = 0;
      for (const element of await page.locator('#content-container mjx-container[display="true"], #content-container .table-wrapper').all()) {
        if (checked >= 2) break;
        if (!(await element.evaluate(e => e.scrollWidth > e.clientWidth + 2))) continue;
        await element.scrollIntoViewIfNeeded(); await element.focus();
        await page.keyboard.press('ArrowRight'); await page.waitForTimeout(200);
        const state = await element.evaluate(e => ({ focused: document.activeElement === e || e.contains(document.activeElement), moved: e.scrollLeft, maximum: e.scrollWidth - e.clientWidth }));
        assert(state.focused && state.moved > 0, 'Long mathematics supports keyboard scrolling');
        results.push({ type: 'keyboard-scroll', slug, width, ...state }); checked++;
      }
      await page.close();
    }
    const page = await browser.newPage();
    await page.goto(base + '/zh/alevel/a2-further-mathematics/roots-and-polynomials/', { waitUntil: 'networkidle' });
    const recovery = page.locator('#content-container a[href*="as-further-mathematics/complex-numbers-and-roots/#model"]').first();
    assert.equal(await recovery.count(), 1);
    const href = await recovery.getAttribute('href'); await recovery.click();
    await page.waitForLoadState('domcontentloaded');
    assert(new URL(page.url()).pathname === '/zh/alevel/as-further-mathematics/complex-numbers-and-roots/');
    assert.equal(new URL(page.url()).hash, '#model');
    results.push({ type: 'precise-prerequisite-click', href, actualURL: page.url() });
  } finally { await browser.close(); }
  fs.writeFileSync(path.join(out, 'targeted-results.json'), JSON.stringify(results, null, 2));
  console.log(JSON.stringify(results));
})().catch(error => { console.error(error); process.exitCode = 1; });
