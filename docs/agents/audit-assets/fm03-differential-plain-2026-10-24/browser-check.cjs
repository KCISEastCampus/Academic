const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const base = process.env.ACADEMIC_URL || 'http://127.0.0.1:8835';
const historical = JSON.parse(fs.readFileSync('docs/agents/audit-assets/fm03-rollout-2026-10-23/previous-heading-anchors.json', 'utf8')).pages;
const rows = [], journeys = [], scrolls = [], links = new Set();
const ready = page => page.evaluate(async () => { await window.MathJax.startup.promise; await document.fonts.ready; });
async function arrived(page, id) {
  let old = -1, stable = 0, p;
  for (let i = 0; i < 60; i++) {
    p = await page.locator('#' + id).evaluate(e => ({ top: e.getBoundingClientRect().top, y: scrollY, height: innerHeight }));
    stable = Math.abs(old - p.y) < 1 ? stable + 1 : 0; old = p.y;
    if (stable >= 3) break;
    await page.waitForTimeout(100);
  }
  assert(p.top >= -1 && p.top < p.height, id + ': ' + JSON.stringify(p)); return p;
}
(async () => {
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH, headless: true });
  try {
    for (const order of ['first', 'second']) for (const lang of ['en', 'zh']) for (const width of [390, 1365]) for (const theme of ['light', 'dark']) {
      const slug = order + '-order-differential-equations', prefix = lang === 'zh' ? 'zh/' : '';
      const source = prefix + 'alevel/a2-further-mathematics/' + slug + '.md', route = '/' + source.replace(/\.md$/, '/');
      const example = order === 'first' ? 'example-1-normalise-and-solve' : 'example-1-distinct-roots';
      const concept = order === 'first' ? 'derive-integrating-factor' : 'auxiliary-equation';
      const taskId = order === 'first' ? 'example-2-variable-coefficient' : 'practice-1';
      const context = await browser.newContext({ viewport: { width, height: 900 }, colorScheme: theme });
      await context.addInitScript(value => localStorage.setItem('site-theme', value), theme);
      const page = await context.newPage(), errors = [];
      page.on('pageerror', e => errors.push(e.message));
      const response = await page.goto(base + route, { waitUntil: 'networkidle' }); await ready(page);
      const initial = await page.evaluate(() => ({
        theme: document.documentElement.getAttribute('data-bs-theme'), reading: !!document.querySelector('.reading-layout'),
        initiallyOpen: document.querySelectorAll('#content-container details[open]').length,
        nestedTasks: document.querySelectorAll('.lesson-check .lesson-check,.worked-example .lesson-check').length
      }));
      assert.equal(response.status(), 200); assert.equal(initial.theme, theme); assert(initial.reading);
      assert.equal(initial.initiallyOpen, 0); assert.equal(initial.nestedTasks, 0);
      const baseline = execFileSync('git', ['show', 'HEAD:' + source], { encoding: 'utf8' });
      const explicit = [...baseline.matchAll(/\{#([^}]+)\}|\bid="([^"]+)"/g)].map(m => m[1] || m[2]);
      const oldIds = [...new Set([...explicit, ...(historical[source.replace(/\.md$/, '/index.html')] || [])])];
      assert.deepEqual(await page.evaluate(ids => ids.filter(id => !document.getElementById(id)), oldIds), []);
      if (order === 'second') assert(await page.evaluate(() => !!(document.getElementById('example-1-distinct-roots').compareDocumentPosition(document.getElementById('root-types')) & Node.DOCUMENT_POSITION_FOLLOWING)));
      const worked = page.locator('#' + example).locator('..');
      assert(await worked.evaluate(e => e.classList.contains('worked-example') && !e.querySelector('details')));
      const task = page.locator('#' + taskId).locator('..');
      assert(await task.evaluate(e => e.classList.contains('lesson-check')));
      for (const summary of await task.locator('summary').all()) {
        await summary.focus(); await page.keyboard.press('Enter'); assert(await summary.evaluate(e => e.parentElement.open));
        await page.keyboard.press('Enter'); assert(!(await summary.evaluate(e => e.parentElement.open)));
      }
      if (lang === 'zh') {
        await page.locator('#' + concept).evaluate(e => scrollTo(0, e.getBoundingClientRect().top + scrollY - 85)); await page.waitForTimeout(850);
        await page.screenshot({ path: path.join(__dirname, order + '-concept-' + width + '-' + theme + '.png') });
      }
      if (lang === 'zh' && theme === 'light') {
        const capture = await page.addStyleTag({ content: 'nav.site-nav,.back-to-top,.scroll-progress{visibility:hidden!important}*{transition:none!important}' });
        await page.evaluate(() => scrollTo(0, 0));
        await worked.screenshot({ path: path.join(__dirname, order + '-example-' + width + '.png'), animations: 'disabled' });
        if (width === 390) {
          await task.locator('summary').last().focus(); await page.keyboard.press('Enter');
          await task.screenshot({ path: path.join(__dirname, order + '-task-390-expanded.png'), animations: 'disabled' });
          await task.locator('summary').last().focus(); await page.keyboard.press('Enter');
          await page.evaluate(() => scrollTo(0, 0));
          const clip = await page.evaluate(({ start, end }) => {
            const a = document.getElementById(start).getBoundingClientRect(), b = document.getElementById(end).getBoundingClientRect();
            return { x: 15, y: a.top + scrollY - 5, width: innerWidth - 30, height: b.top - a.top };
          }, { start: order === 'first' ? 'standard-form' : 'equation-and-conditions', end: order === 'first' ? 'integrating-factor' : 'auxiliary-equation' });
          await page.screenshot({ path: path.join(__dirname, order + '-conditions-390-final.png'), fullPage: true, clip });
        }
        await capture.evaluate(e => e.remove());
      }
      if (width === 390 && theme === 'light') {
        await page.locator('#content-container a[href="#' + example + '"]').first().click(); await arrived(page, example);
        await page.locator('#content-container a[href="#practice"]').first().click(); await arrived(page, 'practice');
        await page.goto(base + route + '#' + taskId, { waitUntil: 'networkidle' }); await ready(page);
        if (width < 1025) await page.locator('#siteNavToggle').click();
        await page.locator('#siteLanguage').selectOption(lang === 'en' ? 'zh-CN' : 'en');
        await page.waitForURL(url => url.pathname.startsWith('/zh/') === (lang === 'en'));
        await page.waitForLoadState('networkidle'); await ready(page);
        assert.equal(new URL(page.url()).hash, '#' + taskId);
        const next = order === 'first' ? 'second-order-differential-equations' : 'vector-products-and-coplanarity';
        const nextLink = page.locator('#content-container a[href$="/' + next + '/"]').last();
        await nextLink.click(); await page.waitForLoadState('networkidle'); await ready(page);
        assert(new URL(page.url()).pathname.endsWith('/' + next + '/'));
        journeys.push({ order, lang, exampleAndPracticeAnchors: true, languageHash: true, nextLesson: true });
        await page.goto(base + route, { waitUntil: 'networkidle' }); await ready(page);
      }
      for (const href of await page.locator('#content-container a[href]').evaluateAll(es => es.map(e => e.href))) if (new URL(href).origin === base) links.add(href);
      await page.evaluate(() => document.querySelectorAll('#content-container details').forEach(e => e.open = true));
      const rendered = await page.evaluate(() => ({
        overflow: document.documentElement.scrollWidth > innerWidth + 1,
        mathErrors: [...document.querySelectorAll('#content-container mjx-merror,#content-container [data-mjx-error]')].map(e => e.textContent),
        badImages: [...document.querySelectorAll('#content-container img')].filter(e => !e.complete || !e.naturalWidth || !e.alt.trim()).map(e => e.src)
      }));
      assert(!rendered.overflow); assert.deepEqual(rendered.mathErrors, []); assert.deepEqual(rendered.badImages, []); assert.deepEqual(errors, []);
      if (width === 390 && theme === 'light') {
        for (const [kind, selector] of [['table', '.table-wrapper'], ['formula', 'mjx-container[display="true"]']]) {
          for (const e of await page.locator('#content-container ' + selector).all()) {
            if (!(await e.evaluate(e => e.scrollWidth > e.clientWidth + 2))) continue;
            const old = await e.evaluate(e => { const p = e.previousElementSibling; const old = p.getAttribute('tabindex'); p.setAttribute('tabindex', '-1'); p.focus(); e.scrollLeft = 0; return old; });
            await page.keyboard.press('Tab'); assert(await e.evaluate(e => document.activeElement === e));
            await page.keyboard.press('ArrowRight'); await page.keyboard.press('ArrowRight'); await page.waitForTimeout(500);
            const metric = await e.evaluate((e, old) => { const p = e.previousElementSibling; if (old === null) p.removeAttribute('tabindex'); else p.setAttribute('tabindex', old); return { clientWidth: e.clientWidth, scrollWidth: e.scrollWidth, scrollLeft: e.scrollLeft }; }, old);
            assert(metric.scrollLeft > 0); scrolls.push({ order, lang, kind, ...metric }); break;
          }
        }
      }
      rows.push({ order, lang, width, theme, status: response.status(), ...initial, ...rendered, preservedIds: oldIds.length, errors });
      fs.writeFileSync(path.join(__dirname, 'browser-results.json'), JSON.stringify({ rows, journeys, scrolls }, null, 2) + '\n');
      console.log(order + ' ' + lang + ' ' + width + ' ' + theme + ': passed'); await context.close();
    }
    const probe = await browser.newPage(), cache = new Map(), linkErrors = [];
    for (const href of links) {
      const url = new URL(href);
      if (!cache.has(url.pathname)) { const r = await probe.request.get(base + url.pathname); cache.set(url.pathname, { status: r.status(), text: await r.text() }); }
      const data = cache.get(url.pathname), id = decodeURIComponent(url.hash.slice(1));
      if (data.status !== 200 || (id && !url.pathname.endsWith('.pdf') && !data.text.includes('id="' + id + '"'))) linkErrors.push({ href, status: data.status });
    }
    fs.writeFileSync(path.join(__dirname, 'local-links.json'), JSON.stringify({ checked: links.size, paths: cache.size, linkErrors }, null, 2) + '\n');
    assert.equal(rows.length, 16); assert.equal(journeys.length, 4); assert.equal(scrolls.length, 8); assert.deepEqual(linkErrors, []);
    console.log(JSON.stringify({ views: rows.length, journeys: journeys.length, keyboardScrolls: scrolls.length, links: links.size, linkErrors }));
  } finally { await browser.close(); }
})().catch(e => { console.error(e); process.exitCode = 1; });
