// Verify the rebuilt MA03 rollout with the existing local preview and installed Chromium.
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const root = process.env.ACADEMIC_ROOT || process.cwd();
const base = process.env.ACADEMIC_URL || 'http://127.0.0.1:8834';
const out = process.env.MA03_EVIDENCE_DIR || __dirname;
const slugs = ['index', ...fs.readdirSync(path.join(root, 'alevel/a2-mathematics')).filter(f => f.endsWith('.md') && !['index.md', 'quick-reference.md', 'mechanics.md', 'statistics.md'].includes(f)).map(f => f.slice(0, -3))];
assert.equal(slugs.length, 16);
fs.mkdirSync(out, { recursive: true });
const saved = path.join(out, 'browser-results.json');
const previous = fs.existsSync(saved) ? JSON.parse(fs.readFileSync(saved, 'utf8')) : { results: [], failures: [] };
const results = previous.results.map(r => ({ ...r, longEquations: r.longEquations.filter(e => e.width > 0) })), failures = previous.failures, localLinks = new Set();
const shots = new Set(['index', 'functions', 'integration', 'parametric-equations', 'vectors', 'mathematical-proof']);
(async () => {
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH, headless: true });
  try {
    for (const slug of slugs) for (const lang of ['en', 'zh']) for (const width of [1365, 390]) {
      if (results.filter(r => r.slug === slug && r.lang === lang && r.width === width).length === 2) continue;
      const route = `${lang === 'zh' ? '/zh' : ''}/alevel/a2-mathematics/${slug === 'index' ? '' : slug + '/'}`;
      const page = await browser.newPage({ viewport: { width, height: 900 } });
      const pageErrors = [];
      page.on('pageerror', e => pageErrors.push(e.message));
      try {
        const response = await page.goto(base + route, { waitUntil: 'networkidle' });
        assert.equal(response.status(), 200);
        await page.evaluate(async () => { await window.MathJax?.startup?.promise; await document.fonts.ready; });
        const initial = await page.evaluate(() => {
          const c = document.querySelector('#content-container');
          const p = [...c.querySelectorAll('p')].find(e => e.textContent.length > 100);
          return { openDetails: c.querySelectorAll('details[open]').length, readingLayout: !!document.querySelector('.reading-layout'), examples: c.querySelectorAll('.worked-example').length, tasks: c.querySelectorAll('.lesson-check').length, tocLinks: document.querySelectorAll('#toc a').length, paragraphWidth: p?.clientWidth, fontSize: p && getComputedStyle(p).fontSize, nestedTasks: c.querySelectorAll('.lesson-check .lesson-check, .worked-example .lesson-check, .lesson-check .worked-example').length, hiddenExamples: [...c.querySelectorAll('.worked-example')].filter(e => e.closest('details')).length, height: document.documentElement.scrollHeight };
        });
        if (lang === 'zh' && shots.has(slug) && (width === 390 || ['index', 'functions'].includes(slug))) {
          const target = slug === 'index' ? page.locator('h1') : page.locator('#content-container h3').first();
          await target.evaluate(e => scrollTo(0, e.getBoundingClientRect().top + scrollY - 85));
          await page.screenshot({ path: path.join(out, `${slug}-${width}-initial.png`) });
        }
        const summary = page.locator('#content-container summary').filter({ hasText: /^(Hint|提示)$/ }).first();
        let keyboard = null;
        if (await summary.count()) {
          await summary.focus(); await page.keyboard.press('Enter');
          const opened = await summary.evaluate(e => e.parentElement.open);
          await page.keyboard.press('Enter');
          keyboard = opened && !(await summary.evaluate(e => e.parentElement.open));
        }
        const headings = await page.locator('#content-container h2[id]').evaluateAll(es => es.map(e => e.id));
        const anchor = headings.includes('practice') ? 'practice' : headings[0];
        let languageHash = null;
        if (anchor) {
          await page.evaluate(id => { location.hash = id; }, anchor);
          const change = page.locator('select#siteLanguage');
          if (width < 1024 && !(await change.isVisible())) await page.locator('#siteNavToggle').click();
          await change.selectOption(lang === 'en' ? 'zh-CN' : 'en');
          await page.waitForURL(u => u.pathname.startsWith(lang === 'en' ? '/zh/alevel/' : '/alevel/'), { waitUntil: 'domcontentloaded' });
          languageHash = new URL(page.url()).hash === '#' + anchor;
          await page.goto(base + route, { waitUntil: 'networkidle' });
          await page.evaluate(async () => { await window.MathJax?.startup?.promise; });
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
            if (width < 1024 && await page.locator('#siteNavToggle').getAttribute('aria-expanded') === 'true') await page.locator('#siteNavToggle').click();
          }
          const metrics = await page.evaluate(() => {
            const c = document.querySelector('#content-container');
            return {
              overflow: document.documentElement.scrollWidth > innerWidth + 1,
              mathErrors: [...c.querySelectorAll('mjx-merror,[data-mjx-error]')].map(e => e.textContent),
              undefinedCommands: [...c.querySelectorAll('mjx-mtext')].filter(e => getComputedStyle(e).color === 'rgb(255, 0, 0)' || /\\[a-zA-Z]/.test(e.textContent)).map(e => e.textContent),
              longEquations: [...c.querySelectorAll('mjx-container[display="true"]')].filter(e => e.querySelector('mjx-math')?.getBoundingClientRect().width > e.clientWidth + 2).map(e => ({ width: e.clientWidth, mathWidth: e.querySelector('mjx-math').getBoundingClientRect().width, overflowX: getComputedStyle(e).overflowX, tabIndex: e.tabIndex, text: e.textContent.slice(0, 90) })),
              matrixShapes: [...c.querySelectorAll('mjx-mtable')].map(t => { const rows = [...t.querySelectorAll(':scope > mjx-table > mjx-itable > mjx-mtr')]; return { rows: rows.length, columns: rows.map(r => r.querySelectorAll(':scope > mjx-mtd').length) }; }),
              imageCount: c.querySelectorAll('img').length,
              badImages: [...c.querySelectorAll('img')].filter(e => !e.complete || !e.naturalWidth).map(e => e.src),
              missingAlt: [...c.querySelectorAll('img')].filter(e => !e.alt).length
            };
          });
          results.push({ slug, lang, width, theme, status: response.status(), initial, keyboard, languageHash, ...metrics, pageErrors });
          const source = fs.readFileSync(path.join(root, (lang === 'zh' ? 'zh/' : '') + 'alevel/a2-mathematics/' + slug + '.md'), 'utf8');
          const sourceRoles = { examples: (source.match(/<section class="worked-example"/g) || []).length, tasks: (source.match(/<section class="lesson-check"/g) || []).length };
          if (initial.examples !== sourceRoles.examples || initial.tasks !== sourceRoles.tasks || !initial.tasks || !initial.readingLayout || initial.openDetails || initial.nestedTasks || initial.hiddenExamples || metrics.overflow || metrics.mathErrors.length || metrics.undefinedCommands.length || metrics.badImages.length || metrics.missingAlt || keyboard === false || languageHash === false || pageErrors.length) failures.push(results.at(-1));
          if (theme === 'dark' && lang === 'zh' && width === 390 && ['integration', 'vectors'].includes(slug)) {
            await page.locator('#practice').evaluate(e => scrollTo(0, e.getBoundingClientRect().top + scrollY - 85));
            await page.screenshot({ path: path.join(out, `${slug}-${width}-dark-expanded.png`) });
          }
        }
        for (const h of await page.locator('#content-container a[href]').evaluateAll(es => es.map(e => e.href))) if (new URL(h).origin === base) localLinks.add(h);
      } catch (e) { failures.push({ slug, lang, width, error: String(e) }); }
      await page.close();
      fs.writeFileSync(saved, JSON.stringify({ results, failures }, null, 2));
    }
    const probe = await browser.newPage(), cache = new Map(), linkErrors = [];
    for (const slug of slugs) for (const lang of ['en', 'zh']) {
      const route = `${lang === 'zh' ? '/zh' : ''}/alevel/a2-mathematics/${slug === 'index' ? '' : slug + '/'}`;
      await probe.goto(base + route, { waitUntil: 'domcontentloaded' });
      for (const h of await probe.locator('#content-container a[href]').evaluateAll(es => es.map(e => e.href))) if (new URL(h).origin === base) localLinks.add(h);
    }
    for (const h of localLinks) {
      const u = new URL(h);
      if (!cache.has(u.pathname)) { const r = await probe.request.get(base + u.pathname); cache.set(u.pathname, { status: r.status(), body: await r.text() }); }
      const r = cache.get(u.pathname);
      if (r.status !== 200) linkErrors.push({ h, status: r.status });
      else if (u.hash && !u.pathname.endsWith('.pdf')) { const id = decodeURIComponent(u.hash.slice(1)); if (!r.body.includes(`id="${id}"`) && !r.body.includes(`id='${id}'`)) linkErrors.push({ h, missing: id }); }
    }
    fs.writeFileSync(path.join(out, 'local-links.json'), JSON.stringify({ checked: localLinks.size, linkErrors }, null, 2));
    console.log(JSON.stringify({ views: results.length, failures: failures.length, links: localLinks.size, linkErrors }));
    assert.equal(results.length, 128);
    assert.equal(failures.length, 0, 'Every view must pass');
    assert.equal(linkErrors.length, 0, 'All course links and anchors must resolve');
  } finally { await browser.close(); }
})().catch(e => { console.error(e); process.exitCode = 1; });
