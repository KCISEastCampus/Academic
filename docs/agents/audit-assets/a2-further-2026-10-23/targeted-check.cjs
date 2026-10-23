const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const base = process.env.ACADEMIC_URL || 'http://127.0.0.1:8832';
const out = process.env.A2FM_EVIDENCE_DIR || __dirname;
(async () => {
  const b = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH, headless: true });
  const results = [];
  try {
    const p = await b.newPage({ viewport: { width: 390, height: 900 } });
    for (const slug of ['first-order-differential-equations', 'eigenvalues-and-eigenvectors', 'matrix-algebra']) {
      await p.goto(base + '/zh/alevel/a2-further-mathematics/' + slug + '/', { waitUntil: 'networkidle' });
      await p.evaluate(async () => { await window.MathJax.startup.promise; await document.fonts.ready; });
      if (slug === 'first-order-differential-equations') {
        const e = p.locator('#example-1-normalise-and-solve');
        await e.evaluate(e => scrollTo(0, e.getBoundingClientRect().top + scrollY - 85));
        await p.screenshot({ path: path.join(out, 'first-order-390-collapsed.png') });
        await p.evaluate(() => document.querySelectorAll('#content-container details').forEach(d => { d.open = true; }));
        await e.evaluate(e => scrollTo(0, e.getBoundingClientRect().top + scrollY - 85));
        await p.screenshot({ path: path.join(out, 'first-order-390-expanded.png') });
      }
      await p.evaluate(() => document.querySelectorAll('#content-container details').forEach(d => { d.open = true; }));
      const scrolls = p.locator('#content-container mjx-container[display="true"], #content-container .table-wrapper');
      let checked = 0;
      for (let i = 0; i < await scrolls.count() && checked < 2; i++) {
        const e = scrolls.nth(i);
        if (!(await e.evaluate(e => e.scrollWidth > e.clientWidth + 2))) continue;
        await e.scrollIntoViewIfNeeded(); await e.focus();
        await p.keyboard.press('ArrowRight'); await p.waitForTimeout(180);
        const state = await e.evaluate(e => ({ focused: document.activeElement === e || e.contains(document.activeElement), moved: e.scrollLeft, maximum: e.scrollWidth - e.clientWidth }));
        results.push({ type: 'keyboard-scroll', slug, ...state }); checked++;
      }
      if (slug === 'eigenvalues-and-eigenvectors') {
        const shapes = await p.locator('#content-container mjx-mtable').evaluateAll(es => es.slice(0, 6).map(t => { const rows = [...t.querySelectorAll(':scope > mjx-table > mjx-itable > mjx-mtr')]; return [rows.length, rows[0]?.querySelectorAll(':scope > mjx-mtd').length]; }));
        assert.deepEqual(shapes.slice(0, 3), [[2, 2], [2, 1], [2, 1]]);
        results.push({ type: 'rendered-matrix-shapes', slug, shapes });
      }
    }
    await p.goto(base + '/zh/alevel/a2-further-mathematics/roots-and-polynomials/', { waitUntil: 'networkidle' });
    const old = p.locator('#content-container a[href*="as-further-mathematics/#3-complex"]');
    assert.equal(await old.count(), 1);
    const href = await old.getAttribute('href');
    await old.click();
    await p.waitForLoadState('domcontentloaded');
    results.push({ type: 'prerequisite-click', href, actualURL: p.url() });
    await p.evaluate(async () => { await window.MathJax.startup.promise; await document.fonts.ready; });
    const archived = await p.locator('[id="3-complex-numbers-fp13"]').evaluate(e => ({ language: document.documentElement.lang, archiveOpen: e.closest('details')?.open, title: e.textContent, reference: e.parentElement.textContent, nextHref: e.nextElementSibling?.getAttribute('href') }));
    results.push({ type: 'prerequisite-destination', ...archived });
    assert.equal(archived.language, 'zh-CN');
    assert.equal(archived.archiveOpen, true);
    assert.match(archived.reference, /英文参考/);
    await p.close();
  } finally { await b.close(); }
  fs.writeFileSync(path.join(out, 'targeted-results.json'), JSON.stringify(results, null, 2));
  console.log(JSON.stringify(results));
})().catch(e => { console.error(e); process.exitCode = 1; });
