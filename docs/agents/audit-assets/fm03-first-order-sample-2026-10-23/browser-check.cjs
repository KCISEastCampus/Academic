// Uses the existing local preview and installed Playwright/Chromium; no new dependencies.
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE);
(async () => {
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH, headless: true });
  const results = [];
  try {
    for (const lang of ['en', 'zh']) for (const width of [1365, 390]) {
      const page = await browser.newPage({ viewport: { width, height: 900 } });
      const errors = [];
      page.on('pageerror', e => errors.push(e.message));
      const route = `${lang === 'zh' ? '/zh' : ''}/alevel/a2-further-mathematics/first-order-differential-equations/`;
      const response = await page.goto('http://127.0.0.1:8832' + route, { waitUntil: 'networkidle' });
      assert.equal(response.status(), 200);
      await page.evaluate(async () => { await window.MathJax.startup.promise; await document.fonts.ready; });
      const content = page.locator('#content-container');
      assert.equal(await content.locator('details[open]').count(), 0);
      const example = content.locator('.worked-example');
      assert.equal(await example.count(), 1);
      assert.equal(await example.locator('details').count(), 0);
      assert.equal(await content.locator('section section').count(), 0);
      for (const theme of ['light', 'dark']) {
        await page.evaluate(theme => { document.documentElement.setAttribute('data-bs-theme', theme); }, theme);
        await page.locator('#example-1-normalise-and-solve').evaluate(e => scrollTo(0, e.getBoundingClientRect().top + scrollY - 85));
        if (lang === 'zh' && theme === 'light') await page.screenshot({ path: path.join(__dirname, `worked-${width}.png`) });
        const retry = content.locator('section.lesson-check').filter({ has: page.locator('#normalisation-retry') });
        const hint = retry.locator('summary').first();
        await hint.focus(); await page.keyboard.press('Enter');
        assert.equal(await retry.locator('details[open]').count(), 1);
        assert.equal(await retry.locator('details').nth(1).getAttribute('open'), null);
        await page.keyboard.press('Enter');
        assert.equal(await retry.locator('details[open]').count(), 0);
        await content.locator('details').evaluateAll(ds => ds.forEach(d => { d.open = true; }));
        const state = await page.evaluate(() => ({
          overflow: document.documentElement.scrollWidth > innerWidth + 2,
          mathErrors: document.querySelectorAll('mjx-merror, [data-mjx-error], [data-mml-node="merror"]').length,
          reading: document.querySelector('#main-container').classList.contains('reading-layout'),
          images: [...document.querySelectorAll('#content-container img')].every(i => i.complete && i.naturalWidth > 0)
        }));
        assert.equal(state.overflow, false); assert.equal(state.mathErrors, 0);
        assert(state.reading && state.images);
        if (lang === 'zh' && width === 390 && theme === 'dark') {
          await page.locator('#normalisation-retry').evaluate(e => scrollTo(0, e.getBoundingClientRect().top + scrollY - 85));
          await page.screenshot({ path: path.join(__dirname, 'retry-390-dark.png') });
        }
        await content.locator('details').evaluateAll(ds => ds.forEach(d => { d.open = false; }));
        results.push({ lang, width, theme, ...state, keyboardDisclosure: true, errors: [...errors] });
        assert.deepEqual(errors, []);
      }
      // Verify skill recovery destinations, not just their file existence.
      const links = await content.locator('a[href*="/a2-mathematics/"]').evaluateAll(as => [...new Set(as.map(a => a.href))]);
      for (const url of links) {
        const check = await browser.newPage();
        const response = await check.goto(url, { waitUntil: 'domcontentloaded' });
        assert.equal(response.status(), 200);
        const hash = new URL(url).hash.slice(1);
        if (hash) assert(await check.evaluate(id => !!document.getElementById(id), decodeURIComponent(hash)), url);
        await check.close();
      }
      await page.close();
    }
  } finally { await browser.close(); }
  fs.writeFileSync(path.join(__dirname, 'browser-results.json'), JSON.stringify(results, null, 2));
  console.log(`Sample browser checks passed: ${results.length} views, closed feedback, keyboard disclosure, exact prerequisite targets.`);
})().catch(e => { console.error(e); process.exitCode = 1; });
