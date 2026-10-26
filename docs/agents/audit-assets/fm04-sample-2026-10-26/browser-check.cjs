const { chromium } = require('C:/Users/mi/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs = require('node:fs');
const path = require('node:path');
const base = 'http://127.0.0.1:8840';
const out = __dirname;
(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:/Users/mi/AppData/Local/ms-playwright/chromium-1234/chrome-win64/chrome.exe',
    headless: true,
  });
  const rows = [], links = new Set(), targeted = [];
  for (const lang of ['', 'zh/']) for (const suffix of ['', 'moment-generating-functions/']) {
    const url = base + '/' + lang + 'alevel/a2-further-mathematics/statistics/' + suffix;
    for (const width of [390, 1365]) for (const theme of ['light', 'dark']) {
      const page = await browser.newPage({ viewport: { width, height: 900 }, colorScheme: theme });
      const errors = [];
      page.on('pageerror', error => errors.push(error.message));
      await page.addInitScript(t => localStorage.setItem('theme', t), theme);
      const response = await page.goto(url, { waitUntil: 'networkidle' });
      await page.evaluate(async () => {
        if (window.MathJax?.startup?.promise) await window.MathJax.startup.promise;
        await document.fonts.ready;
      });
      const initial = await page.evaluate(() => {
        const main = document.querySelector('#content-container');
        return {
          openHelp: main.querySelectorAll('details[open]').length,
          tasks: main.querySelectorAll('.lesson-check').length,
          nested: main.querySelectorAll('.lesson-check .lesson-check').length,
          examples: main.querySelectorAll('.worked-example').length,
          links: [...main.querySelectorAll('a[href]')].map(a => a.getAttribute('href')),
        };
      });
      for (const href of initial.links) {
        const target = new URL(href, url);
        if (target.origin === base || target.hostname === 'academic.kcisec.site')
          links.add(base + target.pathname + target.search + target.hash);
      }
      let keyboard = null;
      if (suffix) {
        const summary = page.locator('#content-container .lesson-check details summary').first();
        await summary.focus();
        await page.keyboard.press('Enter');
        keyboard = await summary.evaluate(e => e.parentElement.open);
        await page.keyboard.press('Enter');
      }
      await page.locator('#content-container details').evaluateAll(list =>
        list.forEach(e => { e.open = true; }));
      await page.waitForTimeout(100);
      const rendered = await page.evaluate(() => ({
        mathErrors: document.querySelectorAll('mjx-merror,[data-mjx-error]').length,
        overflow: document.documentElement.scrollWidth - innerWidth,
        brokenImages: [...document.querySelectorAll('#content-container img')]
          .filter(i => !i.complete || !i.naturalWidth).length,
      }));
      const pass = response.status() === 200 && !errors.length &&
        !initial.openHelp && !initial.nested && !rendered.mathErrors &&
        rendered.overflow <= 1 && !rendered.brokenImages &&
        (!suffix || (initial.tasks === 7 && initial.examples === 1 && keyboard));
      rows.push({ url, width, theme, status: response.status(), ...initial, links: undefined,
        ...rendered, keyboard, errors, pass });
      if (lang && suffix && width === 390 && theme === 'light') {
        await page.locator('#content-container details').evaluateAll(list => list.forEach(e => { e.open = false; }));
        await page.addStyleTag({content: 'nav.site-nav,.back-to-top,.reading-progress{visibility:hidden!important}'});
        await page.locator('#content-container .worked-example').screenshot({path: path.join(out, 'worked-example-390.png')});
        await page.locator('#task-a').scrollIntoViewIfNeeded();
        await page.screenshot({path: path.join(out, 'task-a-390.png')});
        const wide = page.locator('#content-container mjx-container[display="true"]').filter({has: page.locator('mjx-math')});
        for (let i = 0; i < await wide.count(); i++) {
          const e = wide.nth(i);
          if (!await e.isVisible()) continue;
          if (!await e.evaluate(n => n.scrollWidth > n.clientWidth + 2)) continue;
          await e.scrollIntoViewIfNeeded();
          await e.evaluate(n => n.scrollLeft = 0);
          await e.focus();
          await page.keyboard.press('ArrowRight');
          await page.waitForTimeout(150);
          targeted.push(await e.evaluate(n => ({ kind: 'formula-keyboard-scroll',
            formula: n.textContent, focused: document.activeElement === n,
            moved: n.scrollLeft > 0 })));
        }
      }
      if (lang && suffix && width === 1365 && theme === 'dark') {
        await page.locator('#example').scrollIntoViewIfNeeded();
        await page.screenshot({path: path.join(out, 'example-1365-dark.png')});
      }
      await page.close();
    }
  }
  const page = await browser.newPage();
  const linkErrors = [];
  for (const href of links) {
    const url = new URL(href);
    const response = await page.request.get(url.href);
    if (response.status() !== 200) linkErrors.push({ href, status: response.status() });
    else if (url.hash) {
      const html = await response.text();
      const id = decodeURIComponent(url.hash.slice(1));
      if (!html.includes('id="' + id + '"')) linkErrors.push({ href, missing: id });
    }
  }
  await page.goto(base + '/zh/alevel/a2-further-mathematics/statistics/', {waitUntil:'networkidle'});
  await page.locator('#content-container a[href$="/statistics/moment-generating-functions/"]').click();
  await page.waitForLoadState('networkidle');
  targeted.push({kind:'entry-to-lesson', pass:page.url().endsWith('/statistics/moment-generating-functions/')});
  await page.goto(base + '/zh/alevel/a2-further-mathematics/statistics/moment-generating-functions/#task-b', {waitUntil:'networkidle'});
  await page.locator('#siteLanguage').selectOption('en');
  await page.waitForURL(u => u.pathname === '/alevel/a2-further-mathematics/statistics/moment-generating-functions/' && u.hash === '#task-b');
  await page.waitForLoadState('networkidle');
  targeted.push({kind:'language-retains-task', url:page.url(),
    pass:new URL(page.url()).pathname === '/alevel/a2-further-mathematics/statistics/moment-generating-functions/' && new URL(page.url()).hash === '#task-b'});
  const switches = await page.locator('a[href*="/alevel/a2-further-mathematics/statistics/moment-generating-functions/"]').evaluateAll(es =>
    es.map(e => ({href:e.getAttribute('href'),text:e.textContent})));
  fs.writeFileSync(path.join(out, 'browser-results.json'), JSON.stringify({rows, targeted, switches, checkedLinks:links.size, linkErrors}, null, 2));
  await browser.close();
  console.log(JSON.stringify({views:rows.length, failures:rows.filter(r=>!r.pass), checkedLinks:links.size,
    linkErrors, targeted}));
  if (rows.some(r=>!r.pass) || linkErrors.length || targeted.some(r=>r.pass===false || r.moved===false)) process.exitCode=1;
})().catch(error => { console.error(error); process.exitCode=1; });
