const { chromium } = require('C:/Users/mi/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const origin = 'http://172.26.108.40:8844';
const out = 'D:/GitHub/Academic/docs/agents/audit-assets/second-order-pi-learning-2026-10-28';
const slug = '/alevel/a2-further-mathematics/second-order-differential-equations/';
let activeBrowser;
(async () => {
  fs.mkdirSync(out, { recursive: true });
  const browser = await chromium.launch({ executablePath: 'C:/Users/mi/AppData/Local/ms-playwright/chromium-1234/chrome-win64/chrome.exe', headless: true });
  activeBrowser = browser;
  const rows = [], targets = new Set();
  for (const lang of ['zh', 'en']) for (const width of [390, 1365]) for (const theme of ['light', 'dark']) {
    const context = await browser.newContext({ viewport: { width, height: 900 }, colorScheme: theme });
    await context.addInitScript(theme => { localStorage.setItem('site-theme', theme); }, theme);
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    const url = origin + (lang === 'zh' ? '/zh' : '') + slug;
    const response = await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
    await page.evaluate(async () => { if (window.MathJax?.startup?.promise) await window.MathJax.startup.promise; await document.fonts.ready; });
    await page.addStyleTag({ content: '* { transition:none!important; scroll-behavior:auto!important; }' });
    const article = page.locator('#content-container');
    const initial = await article.evaluate(el => ({
      open: el.querySelectorAll('details[open]').length,
      nested: el.querySelectorAll('.lesson-check .lesson-check').length,
      overflow: document.documentElement.scrollWidth > innerWidth,
      mathErrors: el.querySelectorAll('mjx-merror').length,
      actualTheme: document.documentElement.getAttribute('data-bs-theme'),
      tableRows: document.getElementById('pi-table').nextElementSibling.nextElementSibling.querySelectorAll('tbody tr').length,
      firstTryBeforeOverlap: !!(document.getElementById('pi-try-exponential').compareDocumentPosition(document.getElementById('resonance')) & Node.DOCUMENT_POSITION_FOLLOWING)
    }));
    assert.equal(response.status(), 200); assert.equal(initial.open, 0); assert.equal(initial.nested, 0);
    assert(!initial.overflow); assert.equal(initial.mathErrors, 0); assert(initial.firstTryBeforeOverlap);
    assert.equal(initial.actualTheme, theme);
    const firstTask = page.locator('#pi-try-exponential').locator('..');
    const help = firstTask.locator('details').first();
    await help.locator('summary').focus(); await page.keyboard.press('Enter');
    assert(await help.evaluate(el => el.open));
    assert.equal(await firstTask.locator('details').nth(1).evaluate(el => el.open), false);
    await page.keyboard.press('Enter');
    assert.equal(await help.evaluate(el => el.open), false);
    if (lang === 'zh' && theme === 'light') {
      for (const id of ['pi-trials', 'pi-table', 'example-4-exponential-pi', 'example-6-repeated-resonance', 'pi-target-retry']) {
        await page.locator('#' + id).evaluate(el => { el.scrollIntoView(); scrollBy(0, -85); });
        await page.screenshot({ path: path.join(out, id + '-' + width + '.png') });
      }
    }
    if (lang === 'zh' && width === 390 && theme === 'light') {
      await page.locator('#example-4-exponential-pi').locator('..').screenshot({ path: path.join(out, 'first-example-continuous-390.png') });
      await page.locator('#pi-table').evaluate(el => { location.hash = el.id; });
      await page.locator('#siteNavToggle').click();
      await page.locator('#siteLanguage').selectOption('en');
      await page.waitForURL(u => u.pathname === slug, { waitUntil: 'domcontentloaded' });
      assert.equal(new URL(page.url()).hash, '#pi-table');
      await page.goto(url, { waitUntil: 'networkidle' });
      await page.evaluate(async () => { if (window.MathJax?.startup?.promise) await window.MathJax.startup.promise; });
    }
    await page.locator('#content-container details').evaluateAll(list => list.forEach(el => { el.open = true; }));
    await page.evaluate(async () => { if (window.MathJax?.typesetPromise) await window.MathJax.typesetPromise(); });
    assert.equal(await page.locator('#content-container mjx-merror').count(), 0);
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
    let formulaScroll = null;
    if (width === 390) {
      const formulas = await page.locator('#content-container mjx-container[display="true"]').elementHandles();
      for (const formula of formulas) {
        if (!await formula.evaluate(el => el.scrollWidth > el.clientWidth + 3)) continue;
        await formula.evaluate(el => {
          const before = document.createElement('button');
          before.id = 'temporary-keyboard-start'; before.textContent = 'Keyboard check';
          el.before(before); el.scrollLeft = 0; before.focus();
        });
        await page.keyboard.press('Tab');
        const focused = await formula.evaluate(el => document.activeElement === el);
        await page.keyboard.press('ArrowRight'); await page.keyboard.press('ArrowRight');
        await page.waitForTimeout(500);
        const moved = await formula.evaluate(el => el.scrollLeft > 0);
        await page.locator('#temporary-keyboard-start').evaluate(el => el.remove());
        assert(focused && moved, 'Wide formula must accept Tab then arrow scrolling');
        formulaScroll = { focused, moved };
        break;
      }
    }
    for (const href of await article.locator('a[href]').evaluateAll(as => as.map(a => a.href))) {
      const u = new URL(href);
      if (u.origin === origin) targets.add(u.pathname + u.hash);
    }
    assert.equal(errors.length, 0, errors.join('\n'));
    rows.push({ lang, width, theme, status: response.status(), ...initial, keyboardHint: true, formulaScroll, openAllMathErrors: 0, errors });
    await context.close();
  }
  const context = await browser.newContext();
  const page = await context.newPage();
  const linkErrors = [];
  const grouped = new Map();
  for (const target of targets) {
    const u = new URL(target, origin);
    if (!grouped.has(u.pathname)) grouped.set(u.pathname, []);
    if (u.hash) grouped.get(u.pathname).push(decodeURIComponent(u.hash.slice(1)));
  }
  for (const [pathname, ids] of grouped) {
    const response = await page.goto(origin + pathname, { waitUntil: 'domcontentloaded', timeout: 60000 });
    if (response.status() !== 200) linkErrors.push({ pathname, status: response.status() });
    for (const id of ids) if (!await page.evaluate(id => !!document.getElementById(id), id)) linkErrors.push({ pathname, id });
  }
  await browser.close();
  const result = { origin, observedAt: new Date().toISOString(), rows, uniqueTargets: targets.size, distinctPaths: grouped.size, linkErrors, limits: 'Host browser via current LAN address; no separate peer device or full accessibility/student trial.' };
  fs.writeFileSync(path.join(out, 'browser-results.json'), JSON.stringify(result, null, 2));
  assert.equal(linkErrors.length, 0, JSON.stringify(linkErrors));
  console.log(JSON.stringify({ views: rows.length, links: targets.size, linkErrors, keyboard: rows.length }));
})().catch(async e => { console.error(e); if (activeBrowser) await activeBrowser.close(); process.exitCode = 1; });
