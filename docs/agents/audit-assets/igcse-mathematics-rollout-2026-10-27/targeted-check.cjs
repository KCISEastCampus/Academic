const { chromium } = require('C:/Users/mi/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const out = __dirname, base = 'http://127.0.0.1:8843';
const result = { readings: [], scrolling: [], journeys: [] };
(async () => {
  const browser = await chromium.launch({ headless: true, executablePath: 'C:/Users/mi/AppData/Local/ms-playwright/chromium-1234/chrome-win64/chrome.exe' });
  async function open(slug, width = 390, theme = 'light', language = 'zh/') {
    const page = await browser.newPage({ viewport: { width, height: 900 }, colorScheme: theme });
    await page.route('**/*hitscounter.dev/**', r => r.abort());
    await page.addInitScript(value => localStorage.setItem('site-theme', value), theme);
    await page.goto(base + '/' + language + 'igcse/mathematics/' + slug, { waitUntil: 'networkidle' });
    await page.evaluate(async () => { await window.MathJax?.startup?.promise; await document.fonts.ready; });
    const images = page.locator('#content-container img');
    for (let i = 0; i < await images.count(); i++) {
      const img = images.nth(i);
      if (!(await img.isVisible())) continue;
      await img.scrollIntoViewIfNeeded();
      await img.evaluate(n => new Promise((resolve, reject) => {
        const start = Date.now();
        const check = () => {
          if (n.dataset.lazyPending !== 'true' && n.complete && n.naturalWidth > 0 && !n.currentSrc.startsWith('data:')) return resolve();
          if (Date.now() - start > 15000) return reject(new Error('Actual image did not load: ' + (n.dataset.src || n.src)));
          setTimeout(check, 50);
        }; check();
      }));
    }
    await page.evaluate(() => scrollTo(0, 0));
    return page;
  }
  try {
    for (const [slug, start, end] of [
      ['number-operations', 'fraction-arithmetic', 'practice-fractions'],
      ['accuracy-and-bounds', 'limits', 'practice-limits'],
      ['circles-and-proof', 'tangents-chords', 'example-proof'],
      ['statistical-diagrams', 'unequal-histograms', 'practice-density'],
      ['differentiation-and-motion', 'gradient-function', 'practice-derivative'],
      ['vectors-and-matrices', 'matrix-products', 'check-products']
    ]) {
      const page = await open(slug + '/');
      await page.addStyleTag({ content: 'nav.site-nav,.back-to-top,.reading-progress-container{visibility:hidden!important}*{transition:none!important}' });
      await page.evaluate(() => scrollTo(0, 0));
      const top = await page.locator('#' + start).boundingBox();
      const tail = page.locator('#' + end);
      const bottom = await tail.evaluate(el => {
        const container = el.closest('.lesson-check,.worked-example') || el;
        const r = container.getBoundingClientRect();
        return { y: r.y + scrollY, height: r.height };
      });
      const height = Math.ceil(bottom.y + bottom.height - top.y + 12);
      assert(height > 200 && height < 18000, slug + ': meaningful continuous reading clip');
      await page.screenshot({ path: path.join(out, slug + '-390-continuous.png'), fullPage: true, clip: { x: 0, y: Math.floor(top.y), width: 390, height } });
      result.readings.push({ slug, width: 390, start, end, height });
      await page.close();
    }
    for (const [slug, width, theme, language] of [
      ['', 390, 'light', 'zh/'], ['', 1365, 'dark', 'zh/'],
      ['constructions-loci-and-bearings/', 390, 'dark', 'zh/'],
      ['statistical-diagrams/', 1365, 'light', ''],
      ['units-area-and-volume/', 390, 'light', 'zh/']
    ]) {
      const page = await open(slug, width, theme, language);
      await page.screenshot({ path: path.join(out, (slug.replaceAll('/', '') || 'index') + '-' + width + '-' + theme + '-viewport.png') });
      result.readings.push({ slug, width, theme, viewport: true });
      await page.close();
    }
    for (const slug of ['vectors-and-matrices/', 'algebraic-fractions-and-proof/', 'statistical-diagrams/']) {
      const page = await open(slug);
      await page.locator('#content-container details').evaluateAll(nodes => nodes.forEach(n => { n.open = true; }));
      await page.evaluate(async () => { await window.MathJax?.typesetPromise?.(); });
      const candidates = page.locator('#content-container mjx-container[display="true"],#content-container .table-scroll');
      let count = 0;
      for (let i = 0; i < await candidates.count() && count < 2; i++) {
        const el = candidates.nth(i);
        if (!(await el.evaluate(n => n.scrollWidth > n.clientWidth + 3))) continue;
        await el.evaluate(n => {
          n.scrollLeft = 0;
          const stop = document.createElement('button');
          stop.textContent = 'Keyboard test start'; stop.id = 'audit-focus-stop';
          n.before(stop); stop.focus();
        });
        await page.keyboard.press('Tab');
        assert(await el.evaluate(n => n === document.activeElement), 'Tab reaches local scroll container');
        await page.keyboard.press('ArrowRight');
        await page.waitForTimeout(180);
        assert(await el.evaluate(n => n.scrollLeft > 0), 'ArrowRight moves local content');
        await page.locator('#audit-focus-stop').evaluate(n => n.remove());
        result.scrolling.push({ slug, index: i, keyboardMoved: true }); count++;
      }
      await page.close();
    }
    for (const slug of ['number-operations/', 'circles-and-proof/', 'statistical-diagrams/']) {
      const page = await open('');
      await page.locator('#content-container a[href$="/' + slug + '"]').click();
      await page.waitForURL(base + '/zh/igcse/mathematics/' + slug);
      const task = page.locator('#content-container .lesson-check').first();
      await task.locator('summary').first().click();
      assert(await task.locator('details').first().evaluate(n => n.open));
      await page.locator('#next-step').scrollIntoViewIfNeeded();
      const onward = page.locator('#content-container a[href*="mixed-review/"]').first();
      await onward.click();
      await page.waitForURL(/mixed-review\//);
      result.journeys.push({ slug, entryAttemptHelpReview: true });
      await page.close();
    }
    const page = await open('circles-and-proof/#example-proof');
    await page.locator('#siteNavToggle').click();
    await page.locator('#siteLanguage').selectOption('en');
    await page.waitForURL(base + '/igcse/mathematics/circles-and-proof/#example-proof');
    result.journeys.push({ languageSwitchKeepsProofPosition: true });
    await page.close();
    for (const language of ['', 'zh/']) {
      const archived = await open('#structure-and-calculation', 390, 'light', language);
      assert(await archived.locator('#structure-and-calculation').evaluate(n => {
        const box = n.closest('details'); return box && box.open;
      }), 'Old fragments reveal the archived reference');
      result.journeys.push({ language, oldFragmentOpensReference: true });
      await archived.close();
    }
    result.passed = true;
  } finally {
    fs.writeFileSync(path.join(out, 'targeted-results.json'), JSON.stringify(result, null, 2) + '\n');
    await browser.close();
  }
  console.log(JSON.stringify(result));
})().catch(e => { console.error(e); process.exitCode = 1; });
