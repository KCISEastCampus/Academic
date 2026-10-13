// Run after the Jekyll build, with Playwright available on Node's module path.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');
const vm = require('node:vm');
const { chromium } = require('playwright');

const root = path.join(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const image = '<svg xmlns="http://www.w3.org/2000/svg" width="160" height="90"><rect width="160" height="90" fill="steelblue"/></svg>';
const requests = [];
const languageData = JSON.parse(read('_site/tests/test.html').match(/<script id="site-language-data"[^>]*>([\s\S]*?)<\/script>/)[1]);
languageData.pairs = [];
const fixture = (lang, runtime) => `<!doctype html><html lang="${lang}"><head>
<link rel="stylesheet" href="/assets/vendor/bootstrap/5.3.3/css/bootstrap.min.css">
<link rel="stylesheet" href="/assets/css/variables.css">
<link rel="stylesheet" href="/assets/css/style.css">
${runtime ? '<script id="site-language-data" type="application/json">' + JSON.stringify(languageData) + '</script><script defer src="/assets/js/site-language.js"></script>' : ''}
<script defer src="/assets/js/image_lazy_load.js"></script>
<script defer src="/assets/js/interactive_effects.js"></script>
</head><body>${runtime ? '<select id="siteLanguage"><option value="en">English</option><option value="zh-CN">Chinese</option></select>' : ''}<main id="content-container">
<form id="form"><pre><code id="plain">  const value = &lt;tag&gt;;\n\treturn value;\n</code></pre></form>
<div class="highlight"><pre class="highlight"><code id="rouge"><span>print</span>("hello")\n</code></pre></div>
<pre><code class="language-mermaid">graph TD; A--&gt;B;</code></pre>
<a id="pdf" href="/paper.PDF?download=1#page=2" target="_blank"><span>Paper</span></a>
<a id="non-pdf" href="/notes.html">Notes</a>
<img id="cached" src="data:image/svg+xml,${encodeURIComponent(image)}" width="160" height="90">
<div style="height:8000px"></div>
<img id="far" loading="lazy" src="/image/far.svg" width="160" height="90" alt="Far image">
<img id="broken" loading="lazy" src="/image/broken.svg" width="160" height="90" alt="Missing image">
<picture><source srcset="/image/picture.svg 1x"><img id="picture" loading="lazy" src="/image/fallback.svg" srcset="/image/responsive.svg 1x" width="160" height="90" alt="Picture"></picture>
<img id="ignored" data-lazy-ignore src="/image/ignored.svg" width="160" height="90">
<img id="eager" loading="eager" src="/image/eager.svg" width="160" height="90">
<div style="height:8000px"></div>
<img id="print" loading="lazy" src="/image/print.svg" width="160" height="90" alt="Print image">
</main></body></html>`;

const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  if (url.pathname === '/') {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    return res.end(fixture(url.searchParams.get('lang') || 'en', url.searchParams.has('runtime')));
  }
  if (url.pathname === '/tmua-regression') {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    return res.end(read('_site/admissions/tmua-esat/index.html'));
  }
  if (url.pathname.startsWith('/image/')) {
    requests.push(url.pathname);
    res.setHeader('Content-Type', 'image/svg+xml');
    res.statusCode = url.pathname.endsWith('/broken.svg') ? 404 : 200;
    return res.end(image);
  }
  const file = path.join(root, url.pathname);
  if (!file.startsWith(root + path.sep) || !fs.existsSync(file) || !fs.statSync(file).isFile()) {
    res.statusCode = 404;
    return res.end();
  }
  const types = { '.js': 'application/javascript', '.css': 'text/css', '.woff': 'font/woff', '.woff2': 'font/woff2' };
  res.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream');
  fs.createReadStream(file).pipe(res);
});

(async () => {
  // Check generated HTML, including a subjects page without the mathjax flag.
  for (const [file, expected] of [
    ['_site/index.html', 0], ['_site/tests/test.html', 0],
    ['_site/tests/formula_test.html', 7]
  ]) {
    const html = read(file);
    assert.equal((html.match(/<link[^>]*rel="preload"[^>]*MathJax_[^>]*as="font"/g) || []).length, expected, file);
  }
  const content = read('_site/alevel/fx-cg50/index.html').split('id="content-container"')[1].split('<div id="toc"')[0];
  for (const [tag] of content.matchAll(/<img\b[^>]*>/g)) {
    assert.equal((tag.match(/\bloading=/g) || []).length, 1, 'Exactly one native loading attribute');
  }
  const tmuaSource = read('admissions/tmua-esat/index.html');
  const tmuaBuilt = read('_site/admissions/tmua-esat/index.html');
  const problemData = html => html.match(/const PROBLEMS = (.*);/)[1];
  assert.equal(problemData(tmuaBuilt), problemData(tmuaSource), 'Lazy image attributes must not alter inline question data');
  const tmuaScript = [...tmuaBuilt.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)]
    .find(([, body]) => body.includes('const PROBLEMS = '))[1];
  new vm.Script(tmuaScript, { filename: 'built-tmua-notes.js' });
  const illustratedProblem = Object.values(JSON.parse(problemData(tmuaSource)))
    .find(problem => /<img /.test(problem.question + problem.solution + problem.answer));
  assert(illustratedProblem, 'Exercise the real inline image markup');
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const origin = `http://127.0.0.1:${server.address().port}`;
  let browser;
  try {
    browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({ permissions: ['clipboard-read', 'clipboard-write'] });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(origin);
    await page.waitForFunction(() => document.querySelector('#far')?.dataset.lazyPending === 'true');
    assert(!requests.includes('/image/far.svg'), 'Offscreen image is not requested during parsing or initialization');
    assert(!requests.includes('/image/picture.svg'), 'Offscreen picture source is deferred');
    assert(!requests.includes('/image/print.svg'));
    assert.equal(await page.locator('#ignored').getAttribute('data-lazy-initialized'), null);
    assert.equal(await page.locator('#eager').getAttribute('data-lazy-initialized'), null);
    assert.equal(await page.locator('#cached').getAttribute('src'), `data:image/svg+xml,${encodeURIComponent(image)}`);

    assert.equal(await page.locator('.copy-btn').count(), 2, 'Plain and Rouge code have one button each; Mermaid is untouched');
    await page.evaluate(() => {
      document.querySelector('#form').addEventListener('submit', () => { throw Error('Unexpected form submission'); });
      document.addEventListener('click', event => event.preventDefault());
    });
    await page.locator('#plain').locator('..').locator('..').getByRole('button', { name: 'Copy code' }).click();
    const copied = await page.evaluate(() => navigator.clipboard.readText());
    assert.equal(copied.replace(/\r\n/g, '\n'), '  const value = <tag>;\n\treturn value;\n');
    await page.getByRole('button', { name: 'Copied', exact: true }).waitFor();
    await page.waitForFunction(() => !document.querySelector('#plain').closest('.code-wrapper').querySelector('button').disabled);
    await page.evaluate(() => {
      Object.defineProperty(navigator, 'clipboard', { configurable: true, value: undefined });
    });
    await page.locator('#rouge').locator('..').locator('..').getByRole('button', { name: 'Copy code' }).click();
    await page.getByRole('button', { name: /Copy failed/ }).waitFor();

    await page.locator('#pdf span').click();
    assert.equal(await page.locator('#pdf').getAttribute('aria-busy'), 'true');
    assert.equal(await page.locator('#pdf .pdf-loader').textContent(), 'Loading...');
    await page.locator('#pdf').click();
    assert.equal(await page.locator('#pdf .pdf-loader').count(), 1, 'Repeated activation does not duplicate the loader');
    await page.waitForFunction(() => !document.querySelector('#pdf').hasAttribute('aria-busy'));
    await page.locator('#pdf').dispatchEvent('click', { button: 0, ctrlKey: true });
    assert.equal(await page.locator('#pdf .pdf-loader').count(), 0, 'Modified clicks preserve browser behavior');
    await page.locator('#non-pdf').click();
    assert.equal(await page.locator('.pdf-loader').count(), 0);

    await page.locator('#far').scrollIntoViewIfNeeded();
    await page.waitForFunction(() => ['far', 'broken', 'picture'].every(id =>
      document.getElementById(id).classList.contains('is-lazy-loaded')));
    assert(requests.includes('/image/far.svg'));
    assert(requests.includes('/image/picture.svg'));
    assert.equal(await page.locator('#picture').evaluate(img => img.currentSrc), origin + '/image/picture.svg');
    await page.waitForFunction(() => getComputedStyle(document.getElementById('broken')).opacity === '1');
    assert.equal(await page.locator('#broken').getAttribute('data-lazy-pending'), null, 'Image errors clear the hidden state');
    await page.evaluate(() => window.dispatchEvent(new Event('beforeprint')));
    await page.waitForFunction(() => document.getElementById('print').classList.contains('is-lazy-loaded'));
    assert(requests.includes('/image/print.svg'));
    await page.emulateMedia({ reducedMotion: 'reduce' });
    assert.equal(await page.locator('#far').evaluate(img => getComputedStyle(img).transitionDuration), '0s');
    await page.emulateMedia({ media: 'print' });
    assert.equal(await page.locator('.copy-btn').first().evaluate(btn => getComputedStyle(btn).display), 'none');
    await page.emulateMedia({ media: 'screen' });

    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(origin + '/?lang=zh-CN');
    await page.getByRole('button', { name: '\u590d\u5236\u4ee3\u7801', exact: true }).first().waitFor();
    await page.locator('#pdf').click();
    assert.equal(await page.locator('#pdf .pdf-loader').textContent(), '\u52a0\u8f7d\u4e2d...');
    assert.equal(await page.locator('.copy-btn').first().evaluate(btn => getComputedStyle(btn).opacity), '1');
    await page.locator('.copy-btn').first().focus();
    assert.equal(await page.locator('.copy-btn').first().evaluate(btn => document.activeElement === btn), true);
    assert.deepEqual(errors, [], 'No uncaught browser errors');

    await page.goto(origin + '/?runtime=1');
    await page.locator('#siteLanguage').selectOption('zh-CN');
    assert.equal(await page.locator('html').getAttribute('lang'), 'en', 'Interface language changes without replacing the English document');
    const copy = page.locator('.copy-btn').first();
    assert.equal(await copy.getAttribute('aria-label'), languageData.ui['zh-CN'].copy_code);
    assert.equal(await copy.getAttribute('title'), languageData.ui['zh-CN'].copy_clipboard);
    await copy.click();
    await page.getByRole('button', { name: '\u5df2\u590d\u5236', exact: true }).waitFor();
    await page.locator('#siteLanguage').selectOption('en');
    assert.equal(await copy.getAttribute('aria-label'), '\u5df2\u590d\u5236', 'Changing language preserves active copy feedback');
    await page.waitForFunction(() => !document.querySelector('.copy-btn').disabled);
    assert.equal(await copy.getAttribute('aria-label'), languageData.ui.en.copy_code, 'Reset follows the current language');
    await page.locator('#siteLanguage').selectOption('zh-CN');
    await page.locator('#pdf').click();
    assert.equal(await page.locator('#pdf .pdf-loader').textContent(), languageData.ui['zh-CN'].loading_pdf);
    await page.locator('#siteLanguage').selectOption('en');
    assert.equal(await page.locator('#pdf .pdf-loader').textContent(), languageData.ui.en.loading_pdf);
    await page.evaluate(() => Object.defineProperty(navigator, 'clipboard', { configurable: true, value: undefined }));
    await copy.click();
    await page.getByRole('button', { name: /Copy failed/ }).waitFor();
    await page.waitForFunction(() => !document.querySelector('.copy-btn').disabled);
    assert.equal(await copy.getAttribute('aria-label'), languageData.ui.en.copy_code);
    assert.deepEqual(errors, [], 'Language switching produces no browser errors');

    const fallback = await context.newPage();
    await fallback.addInitScript(() => { delete window.IntersectionObserver; });
    await fallback.goto(origin);
    assert.equal(await fallback.locator('#far').getAttribute('data-lazy-pending'), null);
    assert.equal(await fallback.locator('#far').getAttribute('src'), '/image/far.svg');
    await fallback.locator('#far').scrollIntoViewIfNeeded();
    await fallback.waitForFunction(() => document.getElementById('far').naturalWidth > 0);
    const noScript = await browser.newContext({ javaScriptEnabled: false });
    const staticPage = await noScript.newPage();
    await staticPage.goto(origin);
    assert.equal(await staticPage.locator('#far').getAttribute('src'), '/image/far.svg');
    assert.equal(await staticPage.locator('#far').evaluate(img => getComputedStyle(img).opacity), '1');
    const tmuaPage = await context.newPage();
    const tmuaErrors = [];
    tmuaPage.on('pageerror', error => tmuaErrors.push(error.message));
    await tmuaPage.route('**/assets/vendor/mathjax/**', route => route.abort());
    await tmuaPage.goto(origin + '/tmua-regression', { waitUntil: 'domcontentloaded' });
    assert.equal(await tmuaPage.locator('#content-container img[data-fig]').count(), 0, 'The notes script hydrates the chapter figures');
    assert(await tmuaPage.locator('figure.fig img[src]').count() > 0);
    await tmuaPage.locator('#mode-toggle').click();
    assert.equal(await tmuaPage.locator('body').evaluate(body => body.classList.contains('mode-concise')), true);
    await tmuaPage.locator('#mode-toggle').click();
    await tmuaPage.locator('.prob-btn[data-pid="' + illustratedProblem.id + '"]:visible').first().click();
    await tmuaPage.locator('#panel.open').waitFor();
    assert(await tmuaPage.locator('#panel-body img[src]').count() > 0, 'Problem figures hydrate when the panel opens');
    assert.equal(await tmuaPage.locator('#panel-body img[data-fig]').count(), 0);
    await tmuaPage.locator('#panel-close').click();
    assert.equal(await tmuaPage.locator('#panel.open').count(), 0);
    assert.deepEqual(tmuaErrors, [], 'The built TMUA page has no script errors');
    console.log('UX browser checks passed: built TMUA question data, figure hydration, mode and problem controls; conditional font preloads, deferred image requests, picture/srcset, cache, errors, print, observer and JS fallbacks, PDF feedback, clipboard success/failure, keyboard and mobile controls.');
  } finally {
    if (browser) await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
})().catch(error => {
  console.error(error);
  server.close();
  process.exitCode = 1;
});
