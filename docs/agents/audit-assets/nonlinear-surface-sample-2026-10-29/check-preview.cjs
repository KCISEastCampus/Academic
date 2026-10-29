const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'C:/Users/mi/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const origin = process.env.SURFACE_ORIGIN || 'http://127.0.0.1:8844';
const slug = '/alevel/a2-further-mathematics/arc-length-and-surface-area/';
const out = __dirname;
let browser;
async function settled(page) {
  await page.evaluate(async () => {
    if (window.MathJax?.startup?.promise) await window.MathJax.startup.promise;
    await document.fonts.ready;
  });
  await page.addStyleTag({ content: '*{transition:none!important;scroll-behavior:auto!important}' });
}
(async () => {
  browser = await chromium.launch({ headless: true, executablePath: process.env.CHROMIUM_PATH || 'C:/Users/mi/AppData/Local/ms-playwright/chromium-1234/chrome-win64/chrome.exe' });
  const rows = [], targets = new Set(), journeys = [];
  for (const lang of ['zh', 'en']) for (const width of [390, 1365]) for (const theme of ['light', 'dark']) {
    const context = await browser.newContext({ viewport: { width, height: 900 }, colorScheme: theme });
    await context.addInitScript(t => localStorage.setItem('site-theme', t), theme);
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    const prefix = lang === 'zh' ? '/zh' : '';
    const url = origin + prefix + slug;
    const response = await page.goto(url + '#nonlinear-surfaces', { waitUntil: 'networkidle', timeout: 60000 });
    await settled(page);
    const body = page.locator('#content-container');
    const initial = await body.evaluate(el => ({
      openHelp: el.querySelectorAll('details[open]').length,
      nestedTasks: el.querySelectorAll('.lesson-check .lesson-check, .worked-example .lesson-check').length,
      mathErrors: el.querySelectorAll('mjx-merror').length,
      overflow: document.documentElement.scrollWidth > innerWidth,
      theme: document.documentElement.getAttribute('data-bs-theme'),
      visibleExample: !document.getElementById('nonlinear-surface-example').closest('details')
    }));
    assert.equal(response.status(), 200); assert.equal(initial.openHelp, 0); assert.equal(initial.nestedTasks, 0);
    assert.equal(initial.mathErrors, 0); assert(!initial.overflow); assert.equal(initial.theme, theme); assert(initial.visibleExample);
    const figure = body.locator('img[src$="further-nonlinear-surface-elements.svg"], img[data-src$="further-nonlinear-surface-elements.svg"]');
    await figure.scrollIntoViewIfNeeded();
    await page.waitForFunction(() => {
      const img = document.querySelector('img[data-src$="further-nonlinear-surface-elements.svg"], img[src$="further-nonlinear-surface-elements.svg"]');
      return img && img.dataset.lazyPending !== 'true' && img.complete && img.naturalWidth > 0 && img.src.endsWith('further-nonlinear-surface-elements.svg');
    });
    assert((await figure.getAttribute('alt')).length > 30);
    const task = page.locator('#nonlinear-surface-task').locator('..');
    const hint = task.locator('details').first();
    await hint.locator('summary').focus(); await page.keyboard.press('Enter');
    assert(await hint.evaluate(el => el.open));
    assert.equal(await task.locator('details').nth(1).evaluate(el => el.open), false);
    await page.keyboard.press('Enter'); assert.equal(await hint.evaluate(el => el.open), false);
    if (lang === 'zh' && theme === 'light') {
      for (const id of ['nonlinear-surfaces', 'nonlinear-surface-example', 'nonlinear-surface-task', 'nonlinear-surface-retry', 'nonlinear-surface-later']) {
        await page.locator('#' + id).evaluate(el => { el.scrollIntoView(); scrollBy(0, -85); });
        await page.screenshot({ path: path.join(out, id + '-' + width + '.png') });
      }
      await page.addStyleTag({ content: '.site-nav,.back-to-top,.reading-progress-container,.scroll-progress{visibility:hidden!important}' });
      await page.locator('#nonlinear-surface-example').locator('..').screenshot({ path: path.join(out, 'example-continuous-' + width + '.png'), animations: 'disabled' });
      await page.reload({ waitUntil: 'networkidle' }); await settled(page);
    }
    if (width === 390 && theme === 'light') {
      await page.locator('a[href$="/hyperbolic-functions/#inverse-cosh"]').first().click();
      await page.waitForURL(u => u.pathname === prefix + '/alevel/a2-further-mathematics/hyperbolic-functions/' && u.hash === '#inverse-cosh', { waitUntil: 'domcontentloaded' });
      await settled(page);
      await page.locator('a[href$="/arc-length-and-surface-area/#nonlinear-surfaces"]').first().click();
      await page.waitForURL(u => u.pathname === prefix + slug && u.hash === '#nonlinear-surfaces', { waitUntil: 'domcontentloaded' });
      await settled(page);
      journeys.push({ lang, prerequisiteAndReturn: true });
      if (lang === 'zh') {
        await page.locator('#siteNavToggle').click();
        await page.locator('#siteLanguage').selectOption('en');
        await page.waitForURL(u => u.pathname === slug && u.hash === '#nonlinear-surfaces', { waitUntil: 'domcontentloaded' });
        journeys.push({ languageSwitchPreservedAnchor: true });
        await page.goto(url, { waitUntil: 'networkidle' }); await settled(page);
      }
    }
    await body.locator('details').evaluateAll(es => es.forEach(el => { el.open = true; }));
    await page.evaluate(async () => { if (window.MathJax?.typesetPromise) await window.MathJax.typesetPromise(); });
    assert.equal(await body.locator('mjx-merror').count(), 0);
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
    let formulaScroll = null;
    if (width === 390) {
      for (const el of await page.locator('#nonlinear-surface-example').locator('..').locator('mjx-container[display="true"]').elementHandles()) {
        if (!await el.evaluate(e => e.scrollWidth > e.clientWidth + 3)) continue;
        await el.evaluate(e => { const b = document.createElement('button'); b.id = 'temporary-scroll-start'; b.textContent = 'Keyboard check'; e.before(b); e.scrollLeft = 0; b.focus(); });
        await page.keyboard.press('Tab'); const focused = await el.evaluate(e => document.activeElement === e);
        await page.keyboard.press('ArrowRight'); await page.waitForTimeout(500);
        const moved = await el.evaluate(e => e.scrollLeft > 0);
        await page.locator('#temporary-scroll-start').evaluate(e => e.remove());
        assert(focused && moved, 'Wide formula needs keyboard scrolling');
        formulaScroll = { focused, moved }; break;
      }
    }
    for (const href of await body.locator('a[href]').evaluateAll(es => es.map(e => e.href))) {
      const u = new URL(href); if (u.origin === origin) targets.add(u.pathname + u.hash);
    }
    assert.equal(errors.length, 0, errors.join('\n'));
    rows.push({ lang, width, theme, status: response.status(), ...initial, imageLoaded: true, keyboardHint: true, formulaScroll, openAllMathErrors: 0 });
    await context.close();
  }
  const page = await browser.newPage(); const grouped = new Map(); const linkErrors = [];
  for (const target of targets) {
    const u = new URL(target, origin); if (!grouped.has(u.pathname)) grouped.set(u.pathname, []);
    if (u.hash) grouped.get(u.pathname).push(decodeURIComponent(u.hash.slice(1)));
  }
  for (const [pathname, ids] of grouped) {
    const response = await page.goto(origin + pathname, { waitUntil: 'domcontentloaded', timeout: 60000 });
    if (response.status() !== 200) linkErrors.push({ pathname, status: response.status() });
    for (const id of ids) if (!await page.evaluate(id => !!document.getElementById(id), id)) linkErrors.push({ pathname, id });
  }
  await browser.close();
  const result = { origin, observedAt: new Date().toISOString(), rows, journeys, uniqueTargets: targets.size, distinctPaths: grouped.size, linkErrors, limits: 'Host Chromium via LAN URL; no peer-device, physical-phone, full accessibility or student learning trial.' };
  fs.writeFileSync(path.join(out, 'browser-results.json'), JSON.stringify(result, null, 2) + '\n');
  assert.equal(linkErrors.length, 0, JSON.stringify(linkErrors));
  console.log(JSON.stringify({ views: rows.length, journeys: journeys.length, links: targets.size, linkErrors }));
})().catch(async e => { console.error(e); if (browser) await browser.close(); process.exitCode = 1; });
