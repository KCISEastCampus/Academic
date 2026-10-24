const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const base = process.env.ACADEMIC_URL || 'http://127.0.0.1:8835';
const captureStyle = 'nav.site-nav, .back-to-top, .scroll-progress { visibility: hidden !important; }';
(async () => {
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH, headless: true });
  const results = [];
  try {
    for (const [topic, anchor] of [
      ['differential-equations', 'separable-variables'],
      ['parametric-equations', 'stationary-points'],
      ['exponential-and-logarithmic-functions', 'natural-logarithms'],
    ]) {
      const page = await browser.newPage({ viewport: { width: 390, height: 900 } });
      assert.equal((await page.goto(base + '/zh/alevel/a2-mathematics/' + topic + '/', { waitUntil: 'networkidle' })).status(), 200);
      await page.evaluate(async () => { await window.MathJax.startup.promise; await document.fonts.ready; });
      assert.equal(await page.locator('#content-container details[open]').count(), 0);
      assert.equal(await page.locator('#content-container mjx-merror, #content-container [data-mjx-error]').count(), 0);
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1));
      await page.locator('#' + anchor).evaluate(e => scrollTo(0, e.getBoundingClientRect().top + scrollY - 85));
      await page.screenshot({ path: path.join(__dirname, topic + '-390-concept-final.png') });
      if (topic === 'differential-equations') {
        const example = page.locator('#example-1--a-general-solution-with-a-logarithm');
        const general = page.locator('#separation-why-it-works');
        assert(await general.evaluate(e => !!(document.querySelector('#example-1--a-general-solution-with-a-logarithm').compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING)));
        assert.equal(await example.locator('xpath=ancestor::section[1]').locator('details').count(), 0);
        await example.locator('xpath=ancestor::section[1]').screenshot({ path: path.join(__dirname, 'differential-equations-390-example-final.png'), style: captureStyle });
        await general.evaluate(e => scrollTo(0, e.getBoundingClientRect().top + scrollY - 85));
        await page.screenshot({ path: path.join(__dirname, 'differential-equations-390-general-final.png') });
        results.push({ topic, specificExampleBeforeGeneralArgument: true, exampleVisible: true });
      } else results.push({ topic, helpInitiallyClosed: true, noPageOverflow: true, mathErrors: 0 });
      await page.close();
    }
    fs.writeFileSync(path.join(__dirname, 'review-fix-reading-results.json'), JSON.stringify(results, null, 2) + '\n');
    console.log(JSON.stringify(results));
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
