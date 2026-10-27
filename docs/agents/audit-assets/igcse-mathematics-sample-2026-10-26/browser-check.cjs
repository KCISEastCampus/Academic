const { chromium } = require('C:/Users/mi/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const out = __dirname;
const base = 'http://127.0.0.1:8843';
const slug = 'fractions-decimals-and-percentages/';
const routes = ['/igcse/mathematics/', '/zh/igcse/mathematics/'];
const old = JSON.parse(fs.readFileSync(path.join(out, 'previous-index-anchors.json')));
const result = { views: [], journeys: [], localLinks: [], linkErrors: [] };
(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:/Users/mi/AppData/Local/ms-playwright/chromium-1234/chrome-win64/chrome.exe',
    headless: true
  });
  const links = new Set();
  try {
    for (const root of routes) for (const suffix of ['', slug]) {
      for (const width of [390, 1365]) for (const theme of ['light', 'dark']) {
        const page = await browser.newPage({ viewport: { width, height: 900 }, colorScheme: theme });
        const errors = [];
        page.on('pageerror', e => errors.push(e.message));
        await page.route('**/*hitscounter.dev/**', r => r.abort());
        await page.addInitScript(value => {
          localStorage.setItem('site-theme', value);
          localStorage.setItem('site-language', 'en');
        }, theme);
        const response = await page.goto(base + root + suffix, { waitUntil: 'networkidle' });
        await page.evaluate(async () => {
          if (window.MathJax?.startup?.promise) await window.MathJax.startup.promise;
          await document.fonts.ready;
        });
        const body = page.locator('#content-container');
        const state = await body.evaluate(el => ({
          overflow: document.documentElement.scrollWidth > innerWidth + 1,
          errors: el.querySelectorAll('mjx-merror,[data-mjx-error]').length,
          openHelp: el.querySelectorAll('details[open]').length,
          nestedTasks: el.querySelectorAll('.lesson-check .lesson-check').length,
          imageErrors: [...el.querySelectorAll('img')].filter(i => !i.complete || !i.naturalWidth || !i.alt).map(i => i.src),
          ids: [...el.querySelectorAll('[id]')].map(e => e.id),
          links: [...el.querySelectorAll('a[href]')].map(a => a.href)
        }));
        assert.equal(response.status(), 200);
        assert(!state.overflow, 'Whole-page overflow');
        assert.equal(state.errors, 0, 'MathJax errors');
        assert.equal(state.openHelp, 0, 'Help starts closed');
        assert.equal(state.nestedTasks, 0);
        assert.deepEqual(state.imageErrors, []);
        assert.deepEqual(errors, []);
        for (const id of suffix ? [] : old[root.slice(1)] || []) assert(state.ids.includes(id), 'Preserve old index ID: ' + id);
        for (const href of state.links) {
          const u = new URL(href);
          if (u.origin === base || u.origin === 'https://academic.kcisec.site') links.add(u.pathname + u.search + u.hash);
        }
        let keyboard = false;
        if (suffix) {
          const hint = body.locator('.lesson-check summary').first();
          await hint.focus();
          await page.keyboard.press('Enter');
          assert(await hint.evaluate(e => e.parentElement.open));
          await page.keyboard.press('Enter');
          assert(!(await hint.evaluate(e => e.parentElement.open)));
          keyboard = true;
          if (root.includes('/zh/') && width === 390) {
            await page.evaluate(() => scrollTo(0, 0));
            await page.screenshot({ path: path.join(out, 'sample-zh-390-' + theme + '.png') });
          }
          if (theme === 'light' && ((root.includes('/zh/') && width === 390) || (!root.includes('/zh/') && width === 1365))) {
            const style = await page.addStyleTag({ content: 'nav.site-nav,.back-to-top,.reading-progress-container {visibility:hidden!important}' });
            await page.evaluate(() => scrollTo(0, 0));
            const start = await page.locator('#change-form').boundingBox();
            const end = await page.locator('#practice-forms').locator('..').boundingBox();
            await page.screenshot({
              path: path.join(out, 'continuous-' + (root.includes('/zh/') ? 'zh' : 'en') + '-' + width + '.png'),
              fullPage: true,
              clip: { x: 0, y: Math.floor(start.y), width, height: Math.ceil(end.y + end.height - start.y) }
            });
            await style.evaluate(e => e.remove());
          }
          await body.locator('details').evaluateAll(els => els.forEach(el => { el.open = true; }));
          await page.evaluate(async () => { if (window.MathJax?.typesetPromise) await window.MathJax.typesetPromise(); });
          assert.equal(await body.locator('mjx-merror,[data-mjx-error]').count(), 0);
          assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1));
        }
        result.views.push({ route: root + suffix, width, theme, status: response.status(),
          pageOverflow: state.overflow, formulaErrors: state.errors, imageErrors: state.imageErrors.length,
          keyboardToggle: keyboard, oldAnchors: suffix ? 0 : (old[root.slice(1)] || []).length });
        await page.close();
      }
    }
    const page = await browser.newPage({ viewport: { width: 390, height: 900 } });
    for (const root of routes) {
      await page.goto(base + root, { waitUntil: 'networkidle' });
      await page.locator('#content-container a[href$="/' + slug + '"]').click();
      await page.waitForURL(base + root + slug);
      await page.locator('#example-forms').scrollIntoViewIfNeeded();
      await page.locator('#practice-forms').scrollIntoViewIfNeeded();
      await page.locator('#practice-forms').locator('..').locator('summary').first().click();
      await page.locator('#next-step').scrollIntoViewIfNeeded();
      await page.locator('#content-container a[href$="' + root + '#learning-start"]').last().click();
      await page.waitForURL(base + root + '#learning-start');
      result.journeys.push({ root, entryTaskReturn: true });
    }
    await page.goto(base + routes[1] + slug + '#example-forms', { waitUntil: 'networkidle' });
    await page.locator('#siteNavToggle').click();
    await page.locator('#siteLanguage').selectOption('en');
    await page.waitForURL(base + routes[0] + slug + '#example-forms');
    result.journeys.push({ languageSwitchKeepsPosition: true });
    for (const href of links) {
      const url = new URL(href, base);
      const response = await page.request.get(base + url.pathname + url.search);
      let valid = response.status() === 200;
      if (valid && url.hash && response.headers()['content-type']?.includes('text/html')) {
        const id = decodeURIComponent(url.hash.slice(1));
        valid = (await response.text()).includes('id="' + id + '"');
      }
      result.localLinks.push(href);
      if (!valid) result.linkErrors.push({ href, status: response.status() });
    }
    await page.close();
    assert.deepEqual(result.linkErrors, []);
    result.passed = true;
  } finally {
    fs.writeFileSync(path.join(out, 'browser-results.json'), JSON.stringify(result, null, 2) + '\n');
    await browser.close();
  }
  console.log(JSON.stringify({ views: result.views.length, journeys: result.journeys.length,
    links: result.localLinks.length, linkErrors: result.linkErrors, passed: result.passed }));
})().catch(e => { console.error(e); process.exitCode = 1; });
