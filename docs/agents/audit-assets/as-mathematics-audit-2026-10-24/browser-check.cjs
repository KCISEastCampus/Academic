// Read-only live audit. No course or shared-style changes.
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE);
const base = 'https://academic.kcisec.site';
const out = __dirname;
const linksOnly = process.argv.includes('--links-only');
const slugs = ['index', ...fs.readdirSync('alevel/as-mathematics').filter(n => n.endsWith('.md') && n !== 'index.md').map(n => n.slice(0, -3))];
assert.equal(slugs.length, 16);
const results = [], failures = [], journeys = [], links = new Set();
const sha = text => crypto.createHash('sha256').update(text).digest('hex');
const sources = slugs.flatMap(slug => ['', 'zh/'].map(prefix => {
  const file = `${prefix}alevel/as-mathematics/${slug}.md`;
  return { file, sha256: sha(fs.readFileSync(file)), headings: [...fs.readFileSync(file, 'utf8').matchAll(/\{#([^}]+)\}/g)].map(m => m[1]) };
}));
fs.writeFileSync(path.join(out, 'source-snapshot.json'), JSON.stringify({ commit: '19db6ca1640fb47fd541b3f8fb3d45d510d41b09', sources }, null, 2));
(async () => {
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH, headless: true });
  try {
    if (!linksOnly) {
    for (const slug of slugs) for (const lang of ['en', 'zh']) for (const width of [1365, 390]) {
      const route = `${lang === 'zh' ? '/zh' : ''}/alevel/as-mathematics/${slug === 'index' ? '' : slug + '/'}`;
      const page = await browser.newPage({ viewport: { width, height: 900 }, colorScheme: 'light' });
      const pageErrors = [];
      page.on('pageerror', e => pageErrors.push(e.message));
      try {
        const response = await page.goto(base + route, { waitUntil: 'networkidle', timeout: 45000 });
        assert.equal(response.status(), 200);
        await page.evaluate(async () => { await window.MathJax?.startup?.promise; await document.fonts.ready; });
        const initial = await page.evaluate(() => {
          const c = document.querySelector('#content-container');
          return { openDetails: c.querySelectorAll('details[open]').length, readingLayout: !!document.querySelector('.reading-layout'), examples: c.querySelectorAll('.worked-example').length, tasks: c.querySelectorAll('.lesson-check').length, tocLinks: document.querySelectorAll('#toc a').length, maxParagraphWidth: Math.max(...[...c.querySelectorAll('p')].map(e => e.clientWidth)), height: document.documentElement.scrollHeight };
        });
        const headings = await page.locator('#content-container [id]').evaluateAll(es => es.map(e => e.id));
        const expected = sources.find(s => s.file === `${lang === 'zh' ? 'zh/' : ''}alevel/as-mathematics/${slug}.md`).headings;
        const missingAnchors = expected.filter(id => !headings.includes(id));
        if (lang === 'zh' && ['index', 'algebra', 'coordinate-geometry', 'random-variables', 'forces', 'variable-acceleration'].includes(slug)) {
          const target = slug === 'index' ? page.locator('h1') : page.locator('#content-container h3').first();
          await target.evaluate(e => scrollTo(0, e.getBoundingClientRect().top + scrollY - 90));
          await page.screenshot({ path: path.join(out, `${slug}-${width}-reading.png`) });
        }
        const summary = page.locator('#content-container summary').filter({ hasText: /^(Hint|提示)$/ }).first();
        let keyboard = null;
        if (await summary.count()) {
          await summary.focus(); await page.keyboard.press('Enter');
          const opened = await summary.evaluate(e => e.parentElement.open);
          await page.keyboard.press('Enter');
          keyboard = opened && !(await summary.evaluate(e => e.parentElement.open));
        }
        await page.evaluate(() => document.querySelectorAll('#content-container details').forEach(d => { d.open = true; }));
        for (const img of await page.locator('#content-container img').all()) {
          await img.scrollIntoViewIfNeeded();
          await page.waitForFunction(e => e.complete && e.naturalWidth > 0 && !e.hasAttribute('data-lazy-pending'), await img.elementHandle(), { timeout: 15000 });
        }
        for (const theme of ['light', 'dark']) {
          if (await page.locator('html').getAttribute('data-bs-theme') !== theme) {
            if (width < 1024 && !(await page.locator('#navThemeBtn').isVisible())) await page.locator('#siteNavToggle').click();
            await page.locator('#navThemeBtn').click();
            if (width < 1024) await page.locator('#siteNavToggle').click();
            await page.waitForTimeout(400);
          }
          const metrics = await page.evaluate(() => {
            const c = document.querySelector('#content-container');
            return { overflow: document.documentElement.scrollWidth > innerWidth + 1, mathErrors: [...c.querySelectorAll('mjx-merror,[data-mjx-error]')].map(e => e.textContent), badImages: [...c.querySelectorAll('img')].filter(e => !e.complete || !e.naturalWidth || !e.alt).map(e => e.src), longMath: [...c.querySelectorAll('mjx-container[display="true"]')].filter(e => e.clientWidth > 0 && e.querySelector('mjx-math')?.getBoundingClientRect().width > e.clientWidth + 2).map(e => ({ width: e.clientWidth, contentWidth: e.querySelector('mjx-math').getBoundingClientRect().width, overflowX: getComputedStyle(e).overflowX, tabIndex: e.tabIndex })) };
          });
          const row = { slug, lang, width, theme, status: response.status(), initial, keyboard, missingAnchors, ...metrics, pageErrors };
          results.push(row);
          if (row.overflow || row.mathErrors.length || row.badImages.length || keyboard === false || missingAnchors.length || pageErrors.length) failures.push(row);
        }
        for (const href of await page.locator('#content-container a[href]').evaluateAll(es => es.map(e => e.href))) if (new URL(href).origin === base) links.add(href);
        if (lang === 'zh' && width === 390 && ['index', 'algebra', 'coordinate-geometry', 'probability'].includes(slug)) {
          const anchor = slug === 'index' ? 'pure-foundations' : slug === 'algebra' ? 'l01-independent' : slug === 'coordinate-geometry' ? 'l04-worked' : 'l18-independent';
          await page.evaluate(id => { location.hash = id; }, anchor);
          if (!(await page.locator('#siteLanguage').isVisible())) await page.locator('#siteNavToggle').click();
          await page.locator('#siteLanguage').selectOption('en');
          await page.waitForURL(u => u.pathname === route.replace(/^\/zh/, '') && u.hash === '#' + anchor, { waitUntil: 'domcontentloaded' });
          journeys.push({ type: 'language-switch', from: route + '#' + anchor, to: page.url(), passed: true });
        }
      } catch (e) { failures.push({ slug, lang, width, error: String(e) }); }
      await page.close();
      fs.writeFileSync(path.join(out, 'browser-results.json'), JSON.stringify({ base, results, failures, journeys }, null, 2));
      console.log(`${slug} ${lang} ${width}: ${results.length} views / ${failures.length} flagged`);
    }
    } else {
      const saved = JSON.parse(fs.readFileSync(path.join(out, 'browser-results.json'), 'utf8'));
      results.push(...saved.results); failures.push(...saved.failures); journeys.push(...saved.journeys);
      if (fs.existsSync(path.join(out, 'discovered-links.json'))) {
        for (const href of JSON.parse(fs.readFileSync(path.join(out, 'discovered-links.json'), 'utf8'))) links.add(href);
      } else {
      const page = await browser.newPage();
      for (const slug of slugs) for (const lang of ['en', 'zh']) {
        const route = `${lang === 'zh' ? '/zh' : ''}/alevel/as-mathematics/${slug === 'index' ? '' : slug + '/'}`;
        await page.goto(base + route, { waitUntil: 'domcontentloaded', timeout: 30000 });
        for (const href of await page.locator('#content-container a[href]').evaluateAll(es => es.map(e => e.href))) if (new URL(href).origin === base) links.add(href);
      }
      await page.close();
      }
    }
    fs.writeFileSync(path.join(out, 'discovered-links.json'), JSON.stringify([...links], null, 2));
    const probe = await browser.newPage(), cache = new Map(), linkErrors = [], requestErrors = [], recoveredRequests = [];
    await probe.goto(base + '/zh/alevel/as-mathematics/', { waitUntil: 'domcontentloaded' });
    for (const href of links) {
      const u = new URL(href);
      if (!cache.has(u.pathname)) {
        for (let attempt = 1; attempt <= 2; attempt++) {
          try {
            const r = await probe.evaluate(async url => {
              const response = await fetch(url, { signal: AbortSignal.timeout(10000) });
              const text = new URL(url).pathname.endsWith('.pdf') ? '' : await response.text();
              return { status: response.status, text };
            }, base + u.pathname);
            cache.set(u.pathname, r);
            if (attempt === 2) recoveredRequests.push(u.pathname);
            break;
          } catch (e) {
            if (attempt === 2) { requestErrors.push({ path: u.pathname, error: e.message.split('\n')[0] }); cache.set(u.pathname, null); }
          }
        }
      }
      const r = cache.get(u.pathname), id = decodeURIComponent(u.hash.slice(1));
      if (!r) continue;
      if (r.status !== 200 || (id && !u.pathname.endsWith('.pdf') && !r.text.includes(`id="${id}"`) && !r.text.includes(`id='${id}'`))) linkErrors.push({ href, status: r.status, missingAnchor: id || null });
    }
    fs.writeFileSync(path.join(out, 'local-links.json'), JSON.stringify({ checked: links.size, uniquePaths: cache.size, linkErrors, requestErrors, recoveredRequests }, null, 2));
    assert.equal(results.length, 128);
    console.log(JSON.stringify({ views: results.length, flagged: failures.length, journeys, links: links.size, linkErrors, requestErrors }));
  } finally { await browser.close(); }
})().catch(e => { console.error(e); process.exitCode = 1; });
