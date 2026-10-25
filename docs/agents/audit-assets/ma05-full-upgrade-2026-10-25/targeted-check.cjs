const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const { chromium } = require('C:/Users/mi/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const out = path.join(__dirname, 'final');
const base = 'http://127.0.0.1:8838';
const course = '/alevel/a2-mathematics/mechanics/';
const slugs = ['mathematical-modelling', 'vectors-and-kinematics', 'moments-and-rigid-objects', 'centres-of-mass', 'newtons-laws-of-motion', 'projectiles', 'work-and-energy', 'uniform-circular-motion', 'momentum-bridge', 'quick-reference'];
const results = { captures: [], recoveryClicks: [] };
async function ready(page) {
  await page.waitForFunction(() => !!window.MathJax?.startup?.promise);
  await page.evaluate(async () => { await window.MathJax.startup.promise; await document.fonts.ready; });
}
(async () => {
  const browser = await chromium.launch({ executablePath: 'C:/Users/mi/AppData/Local/ms-playwright/chromium-1234/chrome-win64/chrome.exe', headless: true });
  const page = await browser.newPage({ viewport: { width: 390, height: 900 } });
  try {
    for (const slug of slugs) {
      await page.goto(base + '/zh' + course + slug + '/', { waitUntil: 'networkidle' }); await ready(page);
      const content = page.locator('#content-container');
      for (const img of await content.locator('img').all()) {
        await img.scrollIntoViewIfNeeded();
        await page.waitForFunction(e => e.complete && e.naturalWidth > 0 && !e.hasAttribute('data-lazy-pending'), await img.elementHandle());
      }
      await page.addStyleTag({ content: '.site-nav,.back-to-top,.reading-progress-container,.reading-progress,.scroll-progress{visibility:hidden!important}*{transition:none!important}' });
      await page.evaluate(() => scrollTo(0, 0));
      const example = content.locator('.worked-example').first();
      assert(await example.isVisible(), slug + ': public complete example');
      const rect = await example.evaluate(e => {
        const b = e.getBoundingClientRect();
        const hs = [...document.querySelectorAll('#content-container h2')].filter(h => h.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING);
        const top = hs.length ? hs[hs.length - 1].getBoundingClientRect().top : b.top;
        return { x: Math.max(0, Math.floor(b.left) - 8), y: Math.max(0, Math.floor(top) - 8), width: Math.min(innerWidth - Math.floor(b.left) - 1, Math.ceil(b.width) + 16), height: Math.ceil(b.bottom - top) + 24 };
      });
      const file = slug + '-390-continuous.png';
      await page.screenshot({ path: path.join(out, file), fullPage: true, clip: rect });
      assert.equal(fs.readFileSync(path.join(out, file)).readUInt32BE(20), rect.height);
      results.captures.push({ slug, file, rect, exampleVisible: true });
    }
    await page.goto(base + '/zh' + course + '#mixed-a', { waitUntil: 'networkidle' }); await ready(page);
    for (const [task, destination] of [['mixed-a', 'centres-of-mass/'], ['mixed-b', 'projectiles/'], ['mixed-c', 'uniform-circular-motion/'], ['later-a', 'newtons-laws-of-motion/'], ['later-b', 'momentum-bridge/']]) {
      await page.goto(base + '/zh' + course + '#' + task, { waitUntil: 'networkidle' }); await ready(page);
      const solution = page.locator('#' + task).locator('xpath=..').locator('details').last();
      await solution.locator('summary').click();
      await solution.locator('a[href$="' + destination + '"]').click(); await page.waitForLoadState('networkidle'); await ready(page);
      assert(new URL(page.url()).pathname.endsWith(destination));
      results.recoveryClicks.push({ task, destination, actualClick: true });
    }
    await page.goto(base + '/zh' + course + 'uniform-circular-motion/', { waitUntil: 'networkidle' }); await ready(page);
    await page.evaluate(() => { localStorage.setItem('site-theme', 'dark'); }); await page.reload({ waitUntil: 'networkidle' }); await ready(page);
    const hint = page.locator('#content-container .lesson-check summary').first();
    await hint.focus(); await page.keyboard.press('Enter'); assert(await hint.evaluate(e => e.parentElement.open));
    await page.waitForTimeout(1000);
    await page.addStyleTag({ content: '.site-nav,.back-to-top,.reading-progress-container,.scroll-progress{visibility:hidden!important}*{scroll-behavior:auto!important;transition:none!important}' });
    await hint.locator('xpath=../..').screenshot({ path: path.join(out, 'circular-help-390-dark.png') });
    results.passed = true;
    fs.writeFileSync(path.join(out, 'targeted-results.json'), JSON.stringify(results, null, 2));
    console.log(JSON.stringify({ captures: results.captures.length + 1, recoveryClicks: results.recoveryClicks.length, passed: true }));
  } finally { await browser.close(); }
})().catch(e => { results.error = String(e); fs.writeFileSync(path.join(out, 'targeted-results.json'), JSON.stringify(results, null, 2)); console.error(e); process.exitCode = 1; });
