const { chromium } = require('C:/Users/mi/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const out = __dirname;
const base = 'http://127.0.0.1:8843';
const route = JSON.parse(fs.readFileSync(path.join(out, 'course-route.json'), 'utf8'));
const slugs = ['', ...route.flatMap(g => g[3].map(t => t[0] + '/')), 'mixed-review/'];
const previous = JSON.parse(fs.readFileSync(path.join(out, '../igcse-mathematics-sample-2026-10-26/previous-index-anchors.json'), 'utf8'));
const jobs = ['', 'zh/'].flatMap(lang => slugs.flatMap(slug => [390, 1365].flatMap(width => ['light', 'dark'].map(theme => ({
  url: '/' + lang + 'igcse/mathematics/' + slug, width, theme, index: !slug
})))));
const result = { testedAt: new Date().toISOString(), boundary: 'Local Chromium, external hitscounter aborted; no real student or physical phone trial.', views: [], failures: [], links: [], linkErrors: [] };
(async () => {
  const browser = await chromium.launch({ headless: true, executablePath: 'C:/Users/mi/AppData/Local/ms-playwright/chromium-1234/chrome-win64/chrome.exe' });
  const links = new Set();
  async function check(job) {
    const page = await browser.newPage({ viewport: { width: job.width, height: 900 }, colorScheme: job.theme });
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    try {
      await page.route('**/*hitscounter.dev/**', r => r.abort());
      await page.addInitScript(theme => { localStorage.setItem('site-theme', theme); localStorage.setItem('site-language', 'en'); }, job.theme);
      const response = await page.goto(base + job.url, { waitUntil: 'networkidle', timeout: 45000 });
      assert.equal(response.status(), 200, 'HTTP');
      await page.evaluate(async () => { await window.MathJax?.startup?.promise; await document.fonts.ready; });
      const body = page.locator('#content-container');
      const initial = await body.evaluate(el => ({
        overflow: document.documentElement.scrollWidth > innerWidth + 1,
        formulaErrors: el.querySelectorAll('mjx-merror,[data-mjx-error]').length,
        openHelp: el.querySelectorAll('details[open]').length,
        nestedTasks: el.querySelectorAll('.lesson-check .lesson-check').length,
        ids: [...el.querySelectorAll('[id]')].map(n => n.id),
        hrefs: [...el.querySelectorAll('a[href]')].map(n => n.href)
      }));
      assert(!initial.overflow, 'initial page overflow');
      assert.equal(initial.formulaErrors, 0, 'initial formula errors');
      assert.equal(initial.openHelp, 0, 'closed help');
      assert.equal(initial.nestedTasks, 0, 'nested tasks');
      assert.equal(initial.ids.length, new Set(initial.ids).size, 'duplicate IDs');
      if (job.index) for (const id of previous[job.url.slice(1)] || []) assert(initial.ids.includes(id), 'old anchor ' + id);
      for (const href of initial.hrefs) {
        const u = new URL(href);
        if ([base, 'https://academic.kcisec.site'].includes(u.origin)) links.add(u.pathname + u.search + u.hash);
      }
      let toggled = false;
      const hint = body.locator('.lesson-check summary').first();
      if (await hint.count()) {
        await hint.focus(); await page.keyboard.press('Enter');
        assert(await hint.evaluate(el => el.parentElement.open), 'keyboard open');
        await page.keyboard.press('Enter');
        assert(!(await hint.evaluate(el => el.parentElement.open)), 'keyboard close');
        toggled = true;
      }
      await body.locator('details').evaluateAll(nodes => nodes.forEach(n => { n.open = true; }));
      await page.evaluate(async () => {
        await window.MathJax?.typesetPromise?.();
      });
      const images = body.locator('img');
      for (let i = 0; i < await images.count(); i++) {
        await images.nth(i).scrollIntoViewIfNeeded();
        await images.nth(i).evaluate(n => new Promise((resolve, reject) => {
          const start = Date.now();
          const check = () => {
            if (n.dataset.lazyPending !== 'true' && n.complete && n.naturalWidth > 0 && !n.currentSrc.startsWith('data:')) return resolve();
            if (Date.now() - start > 15000) return reject(new Error('Actual image did not load: ' + (n.dataset.src || n.src)));
            setTimeout(check, 50);
          }; check();
        }));
      }
      const expanded = await body.evaluate(el => ({
        overflow: document.documentElement.scrollWidth > innerWidth + 1,
        formulaErrors: el.querySelectorAll('mjx-merror,[data-mjx-error]').length,
        imageErrors: [...el.querySelectorAll('img')].filter(n => !n.naturalWidth || !n.alt.trim()).map(n => n.src),
        tasks: el.querySelectorAll('.lesson-check').length,
        examples: el.querySelectorAll('.worked-example').length
      }));
      assert(!expanded.overflow, 'expanded page overflow');
      assert.equal(expanded.formulaErrors, 0, 'expanded formula errors');
      assert.deepEqual(expanded.imageErrors, [], 'images and alt');
      assert.deepEqual(errors, [], 'JavaScript errors');
      result.views.push({ ...job, status: response.status(), ...expanded, toggled, oldAnchors: job.index ? 31 : 0 });
    } catch (e) { result.failures.push({ ...job, error: e.message }); }
    finally { await page.close(); }
  }
  try {
    await Promise.all(Array.from({ length: 4 }, async () => { while (jobs.length) await check(jobs.shift()); }));
    const context = await browser.newContext();
    for (const href of links) {
      const u = new URL(href, base);
      const response = await context.request.get(base + u.pathname + u.search);
      let valid = response.status() === 200;
      if (valid && u.hash && response.headers()['content-type']?.includes('text/html')) valid = (await response.text()).includes('id="' + decodeURIComponent(u.hash.slice(1)) + '"');
      result.links.push(href);
      if (!valid) result.linkErrors.push({ href, status: response.status() });
    }
    await context.close();
    result.passed = !result.failures.length && !result.linkErrors.length;
  } finally {
    result.views.sort((a, b) => a.url.localeCompare(b.url) || a.width - b.width || a.theme.localeCompare(b.theme));
    fs.writeFileSync(path.join(out, 'browser-results.json'), JSON.stringify(result, null, 2) + '\n');
    await browser.close();
  }
  console.log(JSON.stringify({ views: result.views.length, failures: result.failures, links: result.links.length, linkErrors: result.linkErrors, passed: result.passed }));
  assert(result.passed);
})().catch(e => { console.error(e); process.exitCode = 1; });
