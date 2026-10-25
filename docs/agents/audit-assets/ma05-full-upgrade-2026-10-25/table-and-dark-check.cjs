const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const { chromium } = require('C:/Users/mi/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const out = path.join(__dirname, 'final'), base = 'http://127.0.0.1:8838', course = '/alevel/a2-mathematics/mechanics/';
(async () => {
  const browser = await chromium.launch({ executablePath: 'C:/Users/mi/AppData/Local/ms-playwright/chromium-1234/chrome-win64/chrome.exe', headless: true });
  const page = await browser.newPage({ viewport: { width: 390, height: 900 } }), results = { tables: [] };
  try {
    for (const lang of ['', '/zh']) for (const slug of ['mathematical-modelling', 'quick-reference']) {
      await page.goto(base + lang + course + slug + '/', { waitUntil: 'networkidle' });
      await page.evaluate(async () => { await window.MathJax.startup.promise; await document.fonts.ready; });
      let checked = false;
      for (const table of await page.locator('#content-container .table-wrapper').elementHandles()) {
        if (!(await table.evaluate(e => e.scrollWidth > e.clientWidth + 5))) continue;
        await table.evaluate(e => { e.scrollLeft = 0; e.previousElementSibling.setAttribute('tabindex', '0'); e.previousElementSibling.focus(); });
        await page.keyboard.press('Tab'); assert(await table.evaluate(e => document.activeElement === e || e.contains(document.activeElement)));
        await page.keyboard.press('ArrowRight'); await page.waitForTimeout(200);
        const moved = await table.evaluate(e => e.scrollLeft); assert(moved > 0);
        results.tables.push({ lang: lang || 'en', slug, tabThenArrowRight: true, moved }); checked = true; break;
      }
      if (!checked) results.tables.push({ lang: lang || 'en', slug, noWideTable: true });
    }
    await page.evaluate(() => localStorage.setItem('site-theme', 'dark'));
    await page.goto(base + '/zh' + course + 'uniform-circular-motion/', { waitUntil: 'networkidle' });
    await page.evaluate(async () => { await window.MathJax.startup.promise; await document.fonts.ready; }); await page.waitForTimeout(1000);
    const hint = page.locator('#content-container .lesson-check summary').first();
    await hint.focus(); await page.keyboard.press('Enter'); assert(await hint.evaluate(e => e.parentElement.open));
    await page.addStyleTag({ content: '.site-nav,.back-to-top,.reading-progress-container,.scroll-progress{visibility:hidden!important}*{scroll-behavior:auto!important;transition:none!important}' });
    await hint.locator('xpath=../..').screenshot({ path: path.join(out, 'circular-help-390-dark.png') });
    results.darkHelpCapture = { expandedByKeyboard: true, actualTaskElementCapture: true };
    results.passed = true;
    fs.writeFileSync(path.join(out, 'table-and-dark-results.json'), JSON.stringify(results, null, 2));
    console.log(JSON.stringify(results));
  } finally { await browser.close(); }
})().catch(e => { console.error(e); process.exitCode = 1; });
