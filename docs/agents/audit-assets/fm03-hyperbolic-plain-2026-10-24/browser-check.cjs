const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const base = process.env.ACADEMIC_URL || 'http://127.0.0.1:8835';
const historical = JSON.parse(fs.readFileSync('docs/agents/audit-assets/fm03-rollout-2026-10-23/previous-heading-anchors.json', 'utf8')).pages;
const rows = [], journeys = [], links = new Set();
const ready = page => page.evaluate(async () => { await window.MathJax.startup.promise; await document.fonts.ready; });
async function arrived(page, id) {
  let previous = -1, stable = 0, position;
  for (let i = 0; i < 60; i++) {
    position = await page.locator('#' + id).evaluate(e => ({ top: e.getBoundingClientRect().top, scroll: scrollY, height: innerHeight }));
    stable = Math.abs(position.scroll - previous) < 1 ? stable + 1 : 0;
    if (stable >= 3) break;
    previous = position.scroll;
    await page.waitForTimeout(100);
  }
  assert(position.top >= -1 && position.top < position.height, id + ': ' + JSON.stringify(position));
  return position;
}
(async () => {
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH, headless: true });
  try {
    for (const lang of ['en', 'zh']) for (const width of [390, 1365]) for (const theme of ['light', 'dark']) {
      const context = await browser.newContext({ viewport: { width, height: 900 }, colorScheme: theme });
      await context.addInitScript(value => localStorage.setItem('site-theme', value), theme);
      const page = await context.newPage(), errors = [];
      page.on('pageerror', error => errors.push(error.message));
      const source = (lang === 'zh' ? 'zh/' : '') + 'alevel/a2-further-mathematics/hyperbolic-functions.md';
      const route = '/' + source.replace(/\.md$/, '/');
      const response = await page.goto(base + route, { waitUntil: 'networkidle' });
      await ready(page);
      const initial = await page.evaluate(() => ({
        theme: document.documentElement.getAttribute('data-bs-theme'),
        reading: !!document.querySelector('.reading-layout'),
        initiallyOpen: document.querySelectorAll('#content-container details[open]').length,
        nestedTasks: document.querySelectorAll('.lesson-check .lesson-check, .worked-example .lesson-check').length
      }));
      assert.equal(response.status(), 200); assert.equal(initial.theme, theme);
      assert.equal(initial.reading, true); assert.equal(initial.initiallyOpen, 0); assert.equal(initial.nestedTasks, 0);
      const baseline = execFileSync('git', ['show', 'HEAD:' + source], { encoding: 'utf8' });
      const explicitIds = [...baseline.matchAll(/\{#([^}]+)\}|\bid="([^"]+)"/g)].map(m => m[1] || m[2]);
      const htmlPath = source.replace(/\.md$/, '/index.html');
      const ids = [...new Set([...explicitIds, ...historical[htmlPath]])];
      const missingIds = await page.evaluate(ids => ids.filter(id => !document.getElementById(id)), ids);
      assert.deepEqual(missingIds, []);
      await page.locator('#definitions').evaluate(e => scrollTo(0, e.getBoundingClientRect().top + scrollY - 85));
      await page.waitForTimeout(900);
      if (lang === 'zh') await page.screenshot({ path: path.join(__dirname, `intro-${width}-${theme}.png`) });
      const task = page.locator('#definition-check').locator('..');
      assert.equal(await task.evaluate(e => e.classList.contains('lesson-check')), true);
      const toggles = [];
      for (const summary of await task.locator('summary').all()) {
        await summary.focus(); await page.keyboard.press('Enter');
        assert.equal(await summary.evaluate(e => e.parentElement.open), true);
        await page.keyboard.press('Enter');
        assert.equal(await summary.evaluate(e => e.parentElement.open), false);
        toggles.push(await summary.textContent());
      }
      if (width === 390 && theme === 'light') {
        await task.locator('summary').last().focus(); await page.keyboard.press('Enter');
        await task.locator('a[href="#definition-retry"]').click();
        assert.equal(new URL(page.url()).hash, '#definition-retry');
        const retryPosition = await arrived(page, 'definition-retry');
        const retry = page.locator('#definition-retry').locator('..');
        await retry.locator('summary').last().focus(); await page.keyboard.press('Enter');
        assert.equal(await retry.locator('details').last().evaluate(e => e.open), true);
        if (lang === 'zh') {
          const captureStyle = await page.addStyleTag({ content: 'nav.site-nav,.back-to-top,.scroll-progress{visibility:hidden!important}' });
          await retry.screenshot({ path: path.join(__dirname, 'retry-390-expanded.png'), animations: 'disabled' });
          await captureStyle.evaluate(e => e.remove());
        }
        await page.locator('#content-container a[href="#ratio-and-reciprocals"]').click();
        assert.equal(new URL(page.url()).hash, '#ratio-and-reciprocals');
        const returnPosition = await arrived(page, 'ratio-and-reciprocals');
        await page.goto(base + route + '#definition-check', { waitUntil: 'networkidle' }); await ready(page);
        if (width < 1025) await page.locator('#siteNavToggle').click();
        await page.locator('#siteLanguage').selectOption(lang === 'en' ? 'zh-CN' : 'en');
        await page.waitForURL(url => url.pathname.startsWith('/zh/') === (lang === 'en'));
        await page.waitForLoadState('networkidle'); await ready(page);
        assert.equal(new URL(page.url()).hash, '#definition-check');
        assert.equal(new URL(page.url()).pathname.startsWith('/zh/'), lang === 'en');
        journeys.push({ lang, width, attemptToRetryToReturn: true, retryPosition, returnPosition, languageHash: true });
        await page.goto(base + route, { waitUntil: 'networkidle' }); await ready(page);
      }
      if (lang === 'zh' && theme === 'light') {
        await page.evaluate(() => scrollTo(0, 0));
        const captureStyle = await page.addStyleTag({ content: 'nav.site-nav,.back-to-top,.scroll-progress{visibility:hidden!important}*{transition:none!important}' });
        const clip = await page.evaluate(() => {
          const a = document.getElementById('definitions').getBoundingClientRect();
          const b = document.getElementById('definition-check').parentElement.getBoundingClientRect();
          const c = document.getElementById('content-container').getBoundingClientRect();
          return { x: Math.max(0, c.x - 5), y: a.top + scrollY - 8, width: Math.min(innerWidth, c.width + 10), height: b.bottom - a.top + 16 };
        });
        await page.screenshot({ path: path.join(__dirname, `continuous-${width}-light.png`), fullPage: true, clip });
        await captureStyle.evaluate(e => e.remove());
      }
      for (const href of await page.locator('#content-container a[href]').evaluateAll(es => es.map(e => e.href))) if (new URL(href).origin === base) links.add(href);
      await page.evaluate(() => document.querySelectorAll('#content-container details').forEach(e => e.open = true));
      for (const img of await page.locator('#content-container img').all()) {
        await img.scrollIntoViewIfNeeded();
        await page.waitForFunction(e => e.complete && e.naturalWidth > 0 && !e.currentSrc.startsWith('data:'), await img.elementHandle());
      }
      const rendered = await page.evaluate(() => ({
        overflow: document.documentElement.scrollWidth > innerWidth + 1,
        mathErrors: [...document.querySelectorAll('#content-container mjx-merror,#content-container [data-mjx-error]')].map(e => e.textContent),
        brokenImages: [...document.querySelectorAll('#content-container img')].filter(e => !e.complete || !e.naturalWidth || !e.alt.trim()).map(e => e.src)
      }));
      rendered.newTaskMathOverflows = await page.evaluate(() => ['definition-check', 'definition-retry'].flatMap(id => [...document.getElementById(id).parentElement.querySelectorAll('mjx-container[display="true"]')].filter(e => e.scrollWidth > e.clientWidth + 2).map(() => id)));
      assert.equal(rendered.overflow, false); assert.deepEqual(rendered.mathErrors, []); assert.deepEqual(rendered.brokenImages, []); assert.deepEqual(errors, []);
      assert.deepEqual(rendered.newTaskMathOverflows, []);
      rows.push({ lang, width, theme, status: response.status(), ...initial, ...rendered, oldIds: ids.length, toggles, errors });
      console.log(`${lang} ${width} ${theme}: passed`);
      await context.close();
      fs.writeFileSync(path.join(__dirname, 'browser-results.json'), JSON.stringify({ rows, journeys }, null, 2) + '\n');
    }
    const probe = await browser.newPage(), cache = new Map(), linkErrors = [];
    for (const href of links) {
      const url = new URL(href);
      if (!cache.has(url.pathname)) { const r = await probe.request.get(base + url.pathname); cache.set(url.pathname, { status: r.status(), text: await r.text() }); }
      const data = cache.get(url.pathname), id = decodeURIComponent(url.hash.slice(1));
      if (data.status !== 200 || (id && !url.pathname.endsWith('.pdf') && !data.text.includes('id="' + id + '"') && !data.text.includes("id='" + id + "'"))) linkErrors.push({ href, status: data.status });
    }
    fs.writeFileSync(path.join(__dirname, 'local-links.json'), JSON.stringify({ checked: links.size, paths: cache.size, linkErrors }, null, 2) + '\n');
    assert.equal(rows.length, 8); assert.equal(journeys.length, 2); assert.deepEqual(linkErrors, []);
    console.log(JSON.stringify({ views: rows.length, journeys: journeys.length, links: links.size, linkErrors }));
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
