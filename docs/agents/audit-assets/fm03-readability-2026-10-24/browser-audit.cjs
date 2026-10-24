const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const base = process.env.ACADEMIC_URL || 'http://127.0.0.1:8835';
const topics = ['index', ...fs.readdirSync('zh/alevel/a2-further-mathematics').filter(f => f.endsWith('.md') && f !== 'index.md').map(f => f.slice(0, -3))];
assert.equal(topics.length, 17);
const shots = new Set(['index', 'hyperbolic-functions', 'second-order-differential-equations', 'matrix-algebra', 'eigenvalues-and-eigenvectors', 'de-moivres-theorem', 'finite-series']);
const results = [], failures = [], links = new Set();
(async () => {
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH, headless: true });
  try {
    for (const topic of topics) for (const width of [390, 1365]) {
      const page = await browser.newPage({ viewport: { width, height: 900 } });
      const errors = [];
      page.on('pageerror', e => errors.push(e.message));
      const route = '/zh/alevel/a2-further-mathematics/' + (topic === 'index' ? '' : topic + '/');
      const response = await page.goto(base + route, { waitUntil: 'networkidle' });
      await page.evaluate(async () => { await window.MathJax.startup.promise; await document.fonts.ready; });
      const initial = await page.evaluate(() => {
        const c = document.querySelector('#content-container');
        const h = c.querySelector('h2'), example = c.querySelector('.worked-example');
        return { helpInitiallyOpen: c.querySelectorAll('details[open]').length, nestedTasks: c.querySelectorAll('.lesson-check .lesson-check, .worked-example .lesson-check').length, firstConcept: h?.id, firstConceptY: h?.getBoundingClientRect().top + scrollY, firstExampleY: example?.getBoundingClientRect().top + scrollY, readingLayout: !!document.querySelector('.reading-layout') };
      });
      if (width === 390 && shots.has(topic)) {
        await page.screenshot({ path: path.join(__dirname, topic + '-390-entry.png') });
        await page.locator('#content-container h2').first().evaluate(e => scrollTo(0, e.getBoundingClientRect().top + scrollY - 85));
        await page.screenshot({ path: path.join(__dirname, topic + '-390-concept.png') });
      }
      if (width === 1365 && ['hyperbolic-functions', 'eigenvalues-and-eigenvectors'].includes(topic)) {
        await page.locator('#content-container h2').first().evaluate(e => scrollTo(0, e.getBoundingClientRect().top + scrollY - 85));
        await page.screenshot({ path: path.join(__dirname, topic + '-1365-concept.png') });
      }
      const summary = page.locator('#content-container .lesson-check summary').first();
      let keyboard = null;
      if (await summary.count()) {
        await summary.focus(); await page.keyboard.press('Enter');
        const opened = await summary.evaluate(e => e.parentElement.open);
        await page.keyboard.press('Enter');
        keyboard = opened && !(await summary.evaluate(e => e.parentElement.open));
      }
      for (const href of await page.locator('#content-container a[href]').evaluateAll(es => es.map(e => e.href))) if (new URL(href).origin === base) links.add(href);
      await page.evaluate(() => document.querySelectorAll('#content-container details').forEach(d => d.open = true));
      const rendered = await page.evaluate(() => ({ overflow: document.documentElement.scrollWidth > innerWidth + 1, mathErrors: [...document.querySelectorAll('#content-container mjx-merror, #content-container [data-mjx-error]')].map(e => e.textContent) }));
      const row = { topic, width, status: response.status(), ...initial, ...rendered, keyboard, pageErrors: errors };
      results.push(row);
      if (row.status !== 200 || !row.readingLayout || row.helpInitiallyOpen || row.nestedTasks || row.overflow || row.mathErrors.length || row.pageErrors.length || keyboard === false) failures.push(row);
      await page.close();
      fs.writeFileSync(path.join(__dirname, 'browser-results.json'), JSON.stringify({ results, failures }, null, 2) + '\n');
    }
    const probe = await browser.newPage(), cache = new Map(), linkErrors = [];
    for (const href of links) {
      const url = new URL(href);
      if (!cache.has(url.pathname)) { const r = await probe.request.get(base + url.pathname); cache.set(url.pathname, { status: r.status(), body: await r.text() }); }
      const r = cache.get(url.pathname), id = decodeURIComponent(url.hash.slice(1));
      if (r.status !== 200) linkErrors.push({ href, status: r.status });
      else if (id && !url.pathname.endsWith('.pdf') && !r.body.includes('id="' + id + '"') && !r.body.includes("id='" + id + "'")) linkErrors.push({ href, missing: id });
    }
    fs.writeFileSync(path.join(__dirname, 'local-links.json'), JSON.stringify({ checked: links.size, paths: cache.size, linkErrors }, null, 2) + '\n');
    assert.equal(results.length, 34); assert.equal(failures.length, 0); assert.equal(linkErrors.length, 0);
    console.log(JSON.stringify({ views: results.length, failures: failures.length, links: links.size, linkErrors }));
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
