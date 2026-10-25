const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { chromium } = require('C:/Users/mi/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const root = path.resolve(__dirname, '../../../..');
const out = path.join(__dirname, 'final');
const base = 'http://127.0.0.1:8838';
const baseline = JSON.parse(fs.readFileSync(path.join(__dirname, 'baseline.json')));
const course = '/alevel/a2-mathematics/mechanics/';
const slugs = fs.readdirSync(path.join(root, course)).filter(x => x.endsWith('.md')).map(x => x.slice(0, -3));
const routes = ['', ...slugs.map(x => x + '/')].flatMap(x => [course + x, '/zh' + course + x]);
const results = { checkedUTC: new Date().toISOString(), base, views: [], scrollChecks: [], journeys: [], failures: [] };
const localLinks = new Set();
fs.mkdirSync(out, { recursive: true });
async function ready(page) {
  await page.waitForFunction(() => !!window.MathJax?.startup?.promise);
  await page.evaluate(async () => { await window.MathJax.startup.promise; await document.fonts.ready; });
}
async function imagesReady(page, content) {
  for (const img of await content.locator('img').all()) {
    await img.scrollIntoViewIfNeeded();
    await page.waitForFunction(e => e.complete && e.naturalWidth > 0 && !e.hasAttribute('data-lazy-pending'), await img.elementHandle());
  }
}
async function checkView(browser, route, width, theme) {
  const ctx = await browser.newContext({ viewport: { width, height: 900 } });
  await ctx.addInitScript(t => localStorage.setItem('site-theme', t), theme);
  const page = await ctx.newPage(), errors = [];
  page.on('pageerror', e => errors.push(e.message));
  const row = { route, width, theme };
  try {
    const response = await page.goto(base + route, { waitUntil: 'networkidle' });
    row.status = response.status(); assert.equal(row.status, 200); await ready(page);
    assert.equal(await page.locator('html').getAttribute('data-bs-theme'), theme);
    const content = page.locator('#content-container');
    assert.equal(await content.locator('details[open]').count(), 0);
    assert.equal(await content.locator('.lesson-check .lesson-check,.worked-example .lesson-check').count(), 0);
    assert.equal(await content.locator('details .lesson-check,details .worked-example').count(), 0, 'A task/example hidden in another answer');
    const ids = ['content-container', ...await content.locator('[id]').evaluateAll(es => es.map(e => e.id))];
    assert.equal(new Set(ids).size, ids.length);
    const prior = baseline.pages.find(p => p.url === route);
    // The initial snapshot stored the whole page; restrict it to the actual main element.
    const oldIDs = prior ? prior.htmlBodyIds.slice(prior.htmlBodyIds.indexOf('content-container') + 1, prior.htmlBodyIds.indexOf('toc')) : [];
    for (const id of oldIDs) assert(ids.includes(id), 'Lost old ID ' + id);
    row.oldIDs = oldIDs.length;
    row.examples = await content.locator('.worked-example').count();
    row.tasks = await content.locator('.lesson-check').count();
    for (const task of await content.locator('.lesson-check').all()) {
      assert.equal(await task.locator(':scope > details').count(), 2, 'Each task has separate hint and solution');
      assert((await task.innerText()).trim().length > 30, 'Task prompt is public');
    }
    const first = content.locator('.lesson-check summary').first();
    if (await first.count()) {
      await first.focus(); await page.keyboard.press('Enter'); assert(await first.evaluate(e => e.parentElement.open));
      await page.keyboard.press('Enter'); assert(!(await first.evaluate(e => e.parentElement.open)));
    }
    row.keyboardHelp = true;
    if (theme === 'light') for (const href of await content.locator('a[href]').evaluateAll(es => es.map(e => e.getAttribute('href')))) {
      const url = new URL(href, page.url()); if (url.origin === base) localLinks.add(url.pathname + url.hash);
    }
    await content.locator('details').evaluateAll(es => es.forEach(e => e.open = true));
    await imagesReady(page, content);
    await ready(page);
    for (const img of await content.locator('img').all()) {
      assert(await img.evaluate(e => e.complete && e.naturalWidth > 0));
      assert((await img.getAttribute('alt'))?.trim(), 'Image has an accessible description');
    }
    row.overflow = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
    row.mathErrors = await content.locator('mjx-merror,[data-mjx-error]').count();
    assert(row.overflow <= 1); assert.equal(row.mathErrors, 0); assert.equal(errors.length, 0);
    if (width === 390 && theme === 'light') for (const e of await content.locator('mjx-container[display="true"]').elementHandles()) {
      if (!(await e.evaluate(n => n.scrollWidth > n.clientWidth + 5))) continue;
      await e.evaluate(n => { n.scrollLeft = 0; n.previousElementSibling.setAttribute('tabindex', '0'); n.previousElementSibling.focus(); });
      await page.keyboard.press('Tab'); assert(await e.evaluate(n => document.activeElement === n));
      await page.keyboard.press('ArrowRight'); await page.waitForTimeout(200);
      assert(await e.evaluate(n => n.scrollLeft > 0));
      results.scrollChecks.push({ route, tabThenArrowRight: true }); break;
    }
    if (route === '/zh' + course && theme === 'light') {
      await content.locator('details').evaluateAll(es => es.forEach(e => e.open = false));
      await page.evaluate(() => scrollTo(0, 0));
      await page.screenshot({ path: path.join(out, 'entry-' + width + '.png') });
    }
    row.passed = true;
  } catch (e) { row.passed = false; row.error = String(e); results.failures.push(row); }
  finally { results.views.push(row); await ctx.close(); }
}
(async () => {
  const browser = await chromium.launch({ executablePath: 'C:/Users/mi/AppData/Local/ms-playwright/chromium-1234/chrome-win64/chrome.exe', headless: true });
  try {
    const queue = routes.flatMap(route => [1365, 390].flatMap(width => ['light', 'dark'].map(theme => ({ route, width, theme }))));
    await Promise.all([0, 1].map(async () => {
      while (queue.length) { const x = queue.shift(); await checkView(browser, x.route, x.width, x.theme); }
    }));
    for (const lang of ['', '/zh']) {
      const ctx = await browser.newContext({ viewport: { width: 390, height: 900 } }), page = await ctx.newPage();
      try {
        await page.goto(base + lang + course, { waitUntil: 'networkidle' }); await ready(page);
        await page.locator('a[href$="mathematical-modelling/"]').first().click(); await page.waitForLoadState('networkidle'); await ready(page);
        const help = page.locator('#content-container .lesson-check summary').first();
        await help.focus(); await page.keyboard.press('Enter'); assert(await help.evaluate(e => e.parentElement.open));
        const heading = page.locator('#content-container h2[id]').first(); const id = await heading.getAttribute('id');
        await page.evaluate(id => location.hash = id, id);
        if (!(await page.locator('#siteLanguage').isVisible())) await page.locator('#siteNavToggle').click();
        await page.locator('#siteLanguage').selectOption(lang ? 'en' : 'zh-CN');
        await page.waitForLoadState('networkidle'); await ready(page);
        assert.equal(new URL(page.url()).hash, '#' + id);
        await page.goto(base + lang + course + '#mixed-b', { waitUntil: 'networkidle' }); await ready(page);
        const solution = page.locator('#mixed-b').locator('xpath=..').locator('details').last();
        await solution.locator('summary').click();
        await solution.locator('a[href*="projectiles/"]').click(); await page.waitForLoadState('networkidle'); await ready(page);
        assert(new URL(page.url()).pathname.endsWith('projectiles/'));
        results.journeys.push({ lang: lang || 'en', entryToLesson: true, keyboardHelp: true, languageHash: true, mixedTaskRecoveryClick: true });
      } finally { await ctx.close(); }
    }
  } finally { await browser.close(); }
  const linkErrors = [];
  for (const target of localLinks) {
    const url = new URL(target, base);
    const file = path.join(root, '_site', decodeURIComponent(url.pathname), url.pathname.endsWith('/') ? 'index.html' : '');
    if (!fs.existsSync(file)) { linkErrors.push({ target, problem: 'missing file' }); continue; }
    if (url.hash && !/\.pdf$/i.test(url.pathname)) {
      const id = decodeURIComponent(url.hash.slice(1));
      if (!fs.readFileSync(file, 'utf8').includes('id="' + id + '"')) linkErrors.push({ target, problem: 'missing anchor' });
    }
  }
  const links = { checked: localLinks.size, linkErrors };
  fs.writeFileSync(path.join(out, 'local-links.json'), JSON.stringify(links, null, 2));
  results.passed = results.failures.length === 0 && linkErrors.length === 0;
  fs.writeFileSync(path.join(out, 'browser-results.json'), JSON.stringify(results, null, 2));
  console.log(JSON.stringify({ views: results.views.length, failures: results.failures.length, links: links.checked, linkErrors: linkErrors.length, scrollChecks: results.scrollChecks.length, journeys: results.journeys.length }));
  if (!results.passed) process.exitCode = 1;
})().catch(e => { results.error = String(e); fs.writeFileSync(path.join(out, 'browser-results.json'), JSON.stringify(results, null, 2)); console.error(e); process.exitCode = 1; });
