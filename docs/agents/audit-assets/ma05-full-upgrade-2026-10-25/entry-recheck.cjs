const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const { chromium } = require('C:/Users/mi/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const root = path.resolve(__dirname, '../../../..'), out = path.join(__dirname, 'final');
const base = 'http://127.0.0.1:8838', course = '/alevel/a2-mathematics/mechanics/';
(async () => {
  const browser = await chromium.launch({ executablePath: 'C:/Users/mi/AppData/Local/ms-playwright/chromium-1234/chrome-win64/chrome.exe', headless: true }), rows = [];
  try {
    for (const lang of ['', '/zh']) for (const width of [1365, 390]) for (const theme of ['light', 'dark']) {
      const ctx = await browser.newContext({ viewport: { width, height: 900 } });
      await ctx.addInitScript(t => localStorage.setItem('site-theme', t), theme);
      const page = await ctx.newPage();
      try {
        const response = await page.goto(base + lang + course, { waitUntil: 'networkidle' }); assert.equal(response.status(), 200);
        await page.evaluate(async () => { await window.MathJax.startup.promise; await document.fonts.ready; });
        const body = page.locator('#content-container'); assert.equal(await body.locator('.lesson-check').count(), 6);
        assert.equal(await body.locator('details[open]').count(), 0);
        assert.equal(await body.locator('.lesson-check .lesson-check,mjx-merror').count(), 0);
        assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1));
        const first = body.locator('summary').first(); await first.focus(); await page.keyboard.press('Enter');
        assert(await first.evaluate(e => e.parentElement.open)); await page.keyboard.press('Enter');
        const task = width === 390 ? 'mixed-b' : 'mixed-a';
        const slug = width === 390 ? 'projectiles' : 'centres-of-mass';
        const anchor = width === 390 ? 'projection-from-a-height' : 'a-system-of-particles';
        const solution = page.locator('#' + task).locator('xpath=..').locator('details').last();
        await solution.locator('summary').click(); await solution.locator('a[href*="' + slug + '/"]').click();
        await page.waitForLoadState('networkidle'); assert.equal(new URL(page.url()).hash, '#' + anchor);
        rows.push({ lang: lang || 'en', width, theme, status: 200, task, actualRecoveryClick: slug + '/#' + anchor, passed: true });
      } finally { await ctx.close(); }
    }
  } finally { await browser.close(); }
  const slugs = fs.readdirSync(path.join(root, course)).filter(x => x.endsWith('.md')).map(x => x.slice(0, -3) + '/');
  const routes = ['', ...slugs].flatMap(s => [course + s, '/zh' + course + s]), links = new Set(), linkErrors = [];
  for (const route of routes) {
    const html = fs.readFileSync(path.join(root, '_site', route, 'index.html'), 'utf8');
    const body = html.split('id="content-container"')[1].split('<div id="toc"')[0];
    for (const [, href] of body.matchAll(/href="([^"]+)"/g)) {
      const u = new URL(href.replace(/&amp;/g, '&'), base + route); if (u.origin === base) links.add(u.pathname + u.hash);
    }
  }
  for (const target of links) {
    const u = new URL(target, base), file = path.join(root, '_site', decodeURI(u.pathname), u.pathname.endsWith('/') ? 'index.html' : '');
    if (!fs.existsSync(file)) { linkErrors.push({ target, error: 'missing file' }); continue; }
    if (u.hash && !/\.pdf$/i.test(u.pathname)) assert(fs.readFileSync(file, 'utf8').includes('id="' + decodeURIComponent(u.hash.slice(1)) + '"'), target);
  }
  assert.equal(linkErrors.length, 0);
  fs.writeFileSync(path.join(out, 'entry-recheck-results.json'), JSON.stringify({ rows, unchangedMathAndLayout: 'See feedback-route-comparison.json', passed: true }, null, 2));
  fs.writeFileSync(path.join(out, 'local-links-after-feedback.json'), JSON.stringify({ checked: links.size, linkErrors }, null, 2));
  console.log(JSON.stringify({ entryViews: rows.length, links: links.size, linkErrors: 0 }));
})().catch(e => { console.error(e); process.exitCode = 1; });
