const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE);
const base = 'https://academic.kcisec.site';
(async () => {
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH, headless: true });
  const results = [];
  try {
    const page = await browser.newPage({ viewport: { width: 390, height: 900 }, colorScheme: 'light' });
    const load = async url => {
      await page.goto(url, { waitUntil: 'networkidle' });
      await page.evaluate(async () => { await window.MathJax?.startup?.promise; await document.fonts.ready; });
    };
    await load(base + '/zh/alevel/as-mathematics/');
    await page.screenshot({ path: path.join(__dirname, 'index-390-initial.png') });
    // Live links may be absolute after Jekyll rendering.
    await page.locator('#content-container a[href$="/zh/alevel/as-mathematics/algebra/"]').first().click();
    await page.waitForURL('**/algebra/', { waitUntil: 'networkidle' });
    await page.locator('#l01-worked').scrollIntoViewIfNeeded();
    assert.match(await page.locator('#l01-scaffold').locator('xpath=following-sibling::*').first().textContent(), /rewrite/);
    const hint = page.locator('#l01-scaffold').locator('xpath=following-sibling::details').first().locator('summary');
    await hint.focus(); await page.keyboard.press('Enter');
    assert.equal(await hint.evaluate(e => e.parentElement.open), true);
    await page.keyboard.press('Enter');
    assert.equal(await hint.evaluate(e => e.parentElement.open), false);
    results.push({ type: 'entry-example-attempt', from: '/zh/alevel/as-mathematics/', to: page.url() + '#l01-scaffold', passed: true });
    await page.locator('#next-step').scrollIntoViewIfNeeded();
    await page.locator('#content-container a[href$="/zh/alevel/as-mathematics/coordinate-geometry/"]').last().click();
    await page.waitForURL('**/coordinate-geometry/', { waitUntil: 'networkidle' });
    results.push({ type: 'next-lesson', from: 'algebra#next-step', to: page.url(), passed: true });
    for (const [slug, start, end] of [['algebra', 'l01', 'l01-scaffold'], ['variable-acceleration', 'l23', 'l23-scaffold']]) {
      await load(base + '/zh/alevel/as-mathematics/' + slug + '/');
      await page.evaluate(id => scrollTo(0, document.getElementById(id).getBoundingClientRect().top + scrollY - 84), start);
      await page.screenshot({ path: path.join(__dirname, slug + '-390-concept-viewport.png') });
      const style = await page.addStyleTag({ content: 'nav.site-nav,.back-to-top,.scroll-progress{transition:none!important;visibility:hidden!important}' });
      await page.evaluate(() => scrollTo(0, 0));
      await page.waitForTimeout(400);
      const clip = await page.evaluate(({ start, end }) => {
        const a = document.getElementById(start).getBoundingClientRect(), z = document.getElementById(end).getBoundingClientRect(), c = document.getElementById('content-container').getBoundingClientRect();
        return { x: c.x, y: a.y + scrollY, width: c.width, height: z.y - a.y };
      }, { start, end });
      assert.ok(clip.height > 500, 'continuous capture must include concept and worked reasoning');
      const shot = await page.screenshot({ path: path.join(__dirname, slug + '-390-continuous-example.png'), fullPage: true, clip });
      assert.ok(Math.abs(shot.readUInt32BE(20) - clip.height) <= 2, 'capture must not be clipped to the viewport');
      await style.evaluate(e => e.remove());
      results.push({ type: 'continuous-reading-capture', slug, width: 390, captureOnlyHidden: 'fixed navigation, back-to-top and scroll progress', passed: true });
    }
    for (const lang of ['en', 'zh']) for (const slug of ['probability', 'variable-acceleration']) {
      await load(base + (lang === 'zh' ? '/zh' : '') + '/alevel/as-mathematics/' + slug + '/');
      const formula = page.locator('mjx-container[display="true"]').first();
      const before = await formula.evaluate(e => {
        e.scrollLeft = 0;
        const previous = e.previousElementSibling || e.parentElement.previousElementSibling;
        previous.tabIndex = -1; previous.focus();
        return { scroll: e.scrollLeft, width: e.clientWidth, fullWidth: e.scrollWidth, focusStart: previous.tagName, previousText: previous.textContent.slice(0, 100), focusedBefore: document.activeElement === previous };
      });
      await page.keyboard.press('Tab');
      const focused = await formula.evaluate(e => e === document.activeElement || e.contains(document.activeElement));
      const focusAfterTab = await page.evaluate(() => ({ tag: document.activeElement.tagName, text: document.activeElement.textContent.slice(0, 80) }));
      await page.keyboard.press('ArrowRight'); await page.waitForTimeout(150);
      const after = await formula.evaluate(e => e.scrollLeft);
      results.push({ type: 'wide-formula-keyboard', lang, slug, before, focused, focusAfterTab, after, passed: focused && after > before.scroll });
    }
    fs.writeFileSync(path.join(__dirname, 'targeted-results.json'), JSON.stringify(results, null, 2));
    console.log(JSON.stringify(results));
  } finally { await browser.close(); }
})().catch(e => { console.error(e); process.exitCode = 1; });
