const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { chromium } = require('C:/Users/mi/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const base = 'http://127.0.0.1:8839';
const out = __dirname, rows = [], journeys = [];
async function ready(page) {
  await page.waitForLoadState('networkidle');
  await page.evaluate(async () => { await window.MathJax?.startup?.promise; await document.fonts.ready; });
}
async function continuous(page, id, filename) {
  const element = page.locator(`#${id}`).locator('..');
  const hide = await page.addStyleTag({content: '.site-nav,.reading-progress-container,.scroll-progress,.back-to-top{visibility:hidden!important}'});
  await element.screenshot({path: path.join(out, filename)});
  await hide.evaluate(e => e.remove());
}
(async () => {
  const browser = await chromium.launch({executablePath:'C:/Users/mi/AppData/Local/ms-playwright/chromium-1234/chrome-win64/chrome.exe', headless:true});
  try {
    for (const lang of ['', '/zh']) for (const width of [390, 1365]) for (const theme of ['light', 'dark']) {
      const ctx = await browser.newContext({viewport:{width,height:900}});
      await ctx.addInitScript(value => localStorage.setItem('site-theme', value), theme);
      await ctx.route('https://hitscounter.dev/**', route => route.abort());
      const page = await ctx.newPage();
      for (const suffix of ['/', '/poisson-distribution/']) {
        const url = `${base}${lang}/alevel/a2-mathematics/statistics${suffix}`;
        const errors = []; page.on('pageerror', e => errors.push(e.message));
        const response = await page.goto(url, {waitUntil:'domcontentloaded'}); assert.equal(response.status(), 200);
        await ready(page); await page.waitForTimeout(700);
        assert.equal(await page.locator('html').getAttribute('data-bs-theme'), theme);
        assert.equal(await page.locator('details[open]').count(), 0);
        assert.equal(await page.locator('mjx-merror').count(), 0);
        assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1));
        assert.equal(await page.locator('.lesson-check .lesson-check').count(), 0);
        const lesson = suffix !== '/';
        if (lesson) {
          assert(await page.locator('#example-exact').isVisible());
          const summary = page.locator('#task-interval').locator('..').locator('summary').first();
          await summary.focus(); await page.keyboard.press('Enter');
          assert(await summary.evaluate(e => e.parentElement.open));
          await page.keyboard.press('Enter'); assert(!(await summary.evaluate(e => e.parentElement.open)));
          await page.evaluate(() => document.querySelectorAll('details').forEach(e => { e.open = true; }));
          await ready(page); await page.waitForTimeout(500);
          assert.equal(await page.locator('mjx-merror').count(), 0);
          assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1));
          const oversized = await page.locator('mjx-container[display="true"]').evaluateAll(es => es.filter(e => e.scrollWidth > e.clientWidth + 2).length);
          assert.equal(oversized, 0, 'sample equations fit the reading column');
          rows.push({url,width,theme,status:response.status(),expanded:true,mathErrors:0,pageOverflow:false,locallyWideMath:oversized,pageErrors:errors});
          await page.evaluate(() => document.querySelectorAll('details').forEach(e => { e.open = false; }));
          if (lang === '/zh' && width === 390 && theme === 'light') {
            await continuous(page, 'example-exact', 'zh-390-example.png');
            await page.locator('#official-task').locator('..').locator('summary').last().click();
            await ready(page);
            await continuous(page, 'official-task', 'zh-390-official-expanded.png');
            await page.evaluate(() => { document.querySelectorAll('details').forEach(e => e.open = false); scrollTo({top:0,behavior:'instant'}); });
            await page.waitForTimeout(300);
            await page.screenshot({path:path.join(out,'zh-390-start.png')});
          }
          if (lang === '/zh' && width === 1365 && theme === 'dark') {
            await continuous(page,'example-tail','zh-1365-dark-example.png');
          }
        } else rows.push({url,width,theme,status:response.status(),mathErrors:0,pageOverflow:false,pageErrors:errors});
        assert.deepEqual(errors, []);
      }
      await ctx.close();
    }
    const ctx = await browser.newContext({viewport:{width:1365,height:900}});
    await ctx.route('https://hitscounter.dev/**', r => r.abort());
    const page = await ctx.newPage();
    await page.goto(`${base}/zh/`); await ready(page);
    await page.locator('a.modern-subject-card[href$="/zh/alevel/a2-mathematics/statistics/"]').click();
    await page.waitForURL(`${base}/zh/alevel/a2-mathematics/statistics/`); await ready(page);
    await page.locator('#content-container a[href$="/statistics/poisson-distribution/"]').click();
    await page.waitForURL(`${base}/zh/alevel/a2-mathematics/statistics/poisson-distribution/`); await ready(page);
    assert(page.url().endsWith('/zh/alevel/a2-mathematics/statistics/poisson-distribution/'));
    journeys.push({type:'home-to-entrance-to-sample',passed:true});
    await page.goto(`${base}/zh/alevel/a2-mathematics/statistics/poisson-distribution/#task-interval`); await ready(page);
    await page.locator('#siteLanguage').selectOption('en');
    await page.waitForURL(`${base}/alevel/a2-mathematics/statistics/poisson-distribution/#task-interval`); await ready(page);
    assert(!page.url().includes('/zh/')); assert(page.url().endsWith('#task-interval'));
    journeys.push({type:'language-switch-preserves-task',passed:true});
    await page.locator('#task-interval').locator('..').locator('summary').last().click();
    await page.locator('#task-interval').locator('..').locator('a[href="#retry-count"]').click();
    assert(page.url().endsWith('#retry-count'));
    journeys.push({type:'feedback-to-new-retry',passed:true});
    await page.locator('#retry-count').locator('..').locator('summary').last().click();
    await page.locator('#retry-count').locator('..').locator('a[href="#interval"]').click();
    assert(page.url().endsWith('#interval'));
    journeys.push({type:'retry-to-specific-recovery',passed:true});
    await ctx.close();
  } finally {
    await browser.close();
    fs.writeFileSync(path.join(out,'browser-results.json'),JSON.stringify({rows,journeys},null,2));
  }
  console.log(`${rows.length} views and ${journeys.length} actual journeys passed.`);
})().catch(e => { console.error(e); process.exitCode=1; });
