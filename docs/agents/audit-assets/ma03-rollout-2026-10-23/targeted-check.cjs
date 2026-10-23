const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const base = process.env.ACADEMIC_URL || 'http://127.0.0.1:8834';
const out = process.env.MA03_EVIDENCE_DIR || __dirname;
const topics = ['functions', 'binomial-series', 'trigonometric-functions-and-formulae',
  'integration', 'integration-applications', 'parametric-equations', 'vectors', 'mathematical-proof'];
const captureStyle = 'nav.site-nav, .back-to-top, .scroll-progress { visibility: hidden !important; }';
(async () => {
 const browser = await chromium.launch({executablePath:process.env.CHROMIUM_PATH,headless:true});
 const results = [];
 try {
  for (const topic of topics) {
   const page = await browser.newPage({viewport:{width:390,height:900}});
   assert.equal((await page.goto(base+'/zh/alevel/a2-mathematics/'+topic+'/',{waitUntil:'networkidle'})).status(),200);
   await page.evaluate(async()=>{await window.MathJax.startup.promise; await document.fonts.ready;});
   const example = page.locator('#content-container .worked-example').first();
   assert(await example.count(),topic+': complete visible example');
   assert.equal(await example.locator('details').count(),0,topic+': first example remains visible');
   if (['integration','parametric-equations','mathematical-proof'].includes(topic))
    await example.screenshot({path:path.join(out,topic+'-390-continuous-example.png'),style:captureStyle});
   const firstTask = page.locator('#content-container .lesson-check').first();
   const hints = firstTask.locator('summary');
   if (await hints.count()) {
    await hints.first().focus(); await page.keyboard.press('Enter');
    assert(await hints.first().evaluate(e=>e.parentElement.open));
    await page.keyboard.press('Space');
    assert(!await hints.first().evaluate(e=>e.parentElement.open));
   }
   await page.evaluate(()=>document.querySelectorAll('#content-container details').forEach(d=>d.open=true));
   for(const img of await page.locator('#content-container img').all()){
    await img.scrollIntoViewIfNeeded();
    await page.waitForFunction(e=>e.complete&&e.naturalWidth>0,await img.elementHandle());
   }
   let count=0;
   for(const element of await page.locator('#content-container mjx-container[display="true"], #content-container .table-wrapper').all()){
    if(count>=2)break;
    if(!await element.evaluate(e=>e.scrollWidth>e.clientWidth+2))continue;
    await element.scrollIntoViewIfNeeded(); await element.focus(); await page.keyboard.press('ArrowRight'); await page.waitForTimeout(160);
    const state=await element.evaluate(e=>({focused:document.activeElement===e||e.contains(document.activeElement),moved:e.scrollLeft,maximum:e.scrollWidth-e.clientWidth}));
    assert(state.focused&&state.moved>0,topic+': keyboard local scrolling');
    results.push({type:'keyboard-scroll',topic,...state});count++;
   }
   if(topic==='integration')
    await page.locator('#retry-b').locator('xpath=ancestor::section[1]').screenshot({path:path.join(out,'integration-retry-b-390-expanded.png'),style:captureStyle});
   const images=await page.locator('#content-container img').evaluateAll(es=>es.map(e=>({src:e.getAttribute('src'),width:e.clientWidth,height:e.clientHeight,alt:e.alt})));
   results.push({type:'continuous-example-and-task',topic,keyboard:!!await hints.count(),images});
   await page.close();
  }
  const page=await browser.newPage({viewport:{width:390,height:900}});
  await page.goto(base+'/zh/alevel/a2-mathematics/',{waitUntil:'networkidle'});
  await page.locator('#content-container a[href$="/zh/alevel/a2-mathematics/functions/"]').first().click();
  await page.waitForURL('**/zh/alevel/a2-mathematics/functions/',{waitUntil:'domcontentloaded'});
  await page.locator('#practice').scrollIntoViewIfNeeded();
  assert(await page.locator('#content-container .lesson-check').count()>0);
  results.push({type:'entry-to-student-attempt',url:page.url(),fragment:'practice'});
  await page.goto(base+'/zh/alevel/a2-mathematics/integration/',{waitUntil:'networkidle'});
  const recovery=page.locator('a[href$="/zh/alevel/a2-mathematics/differentiation/#composite-functions"]').first();
  await recovery.click(); await page.waitForURL('**/differentiation/#composite-functions',{waitUntil:'domcontentloaded'});
  assert.equal(new URL(page.url()).hash,'#composite-functions');
  results.push({type:'precise-prerequisite',url:page.url()});
  await page.goto(base+'/zh/alevel/a2-mathematics/integration/',{waitUntil:'networkidle'});
  await page.locator('a[href$="/zh/alevel/a2-mathematics/integration-applications/"]').last().click();
  await page.waitForURL('**/integration-applications/',{waitUntil:'domcontentloaded'});
  results.push({type:'named-next-lesson',url:page.url()});
  await page.close();
 } finally {fs.writeFileSync(path.join(out,'targeted-results.json'),JSON.stringify(results,null,2)+'\n');await browser.close();}
 fs.writeFileSync(path.join(out,'targeted-results.json'),JSON.stringify(results,null,2)+'\n');
 console.log(JSON.stringify({checks:results.length,keyboardScrolls:results.filter(r=>r.type==='keyboard-scroll').length,journey:3}));
})().catch(e=>{console.error(e);process.exitCode=1;});
