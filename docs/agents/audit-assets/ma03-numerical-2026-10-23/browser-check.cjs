const {chromium}=require('C:/Users/mi/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs=require('fs'),path=require('path'),assert=require('assert/strict');
const out='D:/GitHub/Academic-ma03-numerical/docs/agents/audit-assets/ma03-numerical-2026-10-23';
fs.mkdirSync(out,{recursive:true});
(async()=>{
 const browser=await chromium.launch({executablePath:'C:/Users/mi/AppData/Local/ms-playwright/chromium-1234/chrome-win64/chrome.exe',headless:true});
 const results=[],links=new Set();
 for(const lang of ['','zh/'])for(const width of [1365,390])for(const theme of ['light','dark']){
  const page=await browser.newPage({viewport:{width,height:900}});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  const url='http://127.0.0.1:8834/'+lang+'alevel/a2-mathematics/numerical-methods/';
  const response=await page.goto(url,{waitUntil:'networkidle'});assert.equal(response.status(),200);
  await page.evaluate(t=>{document.documentElement.setAttribute('data-bs-theme',t);},theme);
  await page.waitForFunction(()=>!!document.querySelector('mjx-container'));
  await page.evaluate(async()=>{if(window.MathJax?.startup?.promise)await window.MathJax.startup.promise;});
  const initial=await page.locator('#content-container details[open]').count();assert.equal(initial,0);
  const hint=page.locator('#q7--choose-from-the-data').locator('..').locator('summary').first();
  await hint.focus();await page.keyboard.press('Enter');assert(await hint.evaluate(e=>e.parentElement.open));
  await page.keyboard.press('Space');assert(!await hint.evaluate(e=>e.parentElement.open));
  if(lang==='zh/'&&width===390&&theme==='dark'){
   await page.locator('#q7--choose-from-the-data').scrollIntoViewIfNeeded();
   await page.screenshot({path:path.join(out,'q7-mobile-dark.png')});
   await page.locator('#later-review').scrollIntoViewIfNeeded();
   await page.screenshot({path:path.join(out,'later-mobile-dark.png')});
  }
  await page.evaluate(()=>{document.querySelectorAll('#content-container details').forEach(d=>d.open=true);document.querySelectorAll('#content-container img').forEach(i=>i.loading='eager');});
  await page.waitForFunction(()=>[...document.querySelectorAll('#content-container img')].every(i=>i.complete&&i.naturalWidth>0));
  await page.waitForTimeout(400);
  const m=await page.evaluate(()=>({
   overflow:document.documentElement.scrollWidth>innerWidth+1,
   mathErrors:document.querySelectorAll('mjx-merror,[data-mjx-error]').length,
   tasks:document.querySelectorAll('#content-container section.lesson-check').length,
   brokenImages:[...document.querySelectorAll('#content-container img')].filter(i=>!i.naturalWidth||!i.alt).length,
   local:[...document.querySelectorAll('#content-container a[href]')].map(a=>a.getAttribute('href')).filter(h=>h.startsWith('/')||h.startsWith('#'))
  }));
  assert(!m.overflow);assert.equal(m.mathErrors,0);assert.equal(m.brokenImages,0);assert.equal(m.tasks,15);assert.deepEqual(errors,[]);
  m.local.forEach(h=>links.add(new URL(h,url).href));
  if(lang==='zh/'&&width===1365&&theme==='light'){
   await page.locator('#retry-graph').scrollIntoViewIfNeeded();
   await page.screenshot({path:path.join(out,'graph-retry-desktop.png')});
  }
  results.push({lang,width,theme,initialClosed:true,keyboard:true,...m,local:undefined});
  await page.close();
 }
 // Read every local destination and fragment from the generated output, independently of browser navigation.
 const site='D:/GitHub/Academic-ma03-numerical/_site';
 for(const href of links){
  const u=new URL(href);let f=path.join(site,decodeURIComponent(u.pathname));if(u.pathname.endsWith('/'))f=path.join(f,'index.html');
  assert(fs.existsSync(f),'Missing '+href);
  if(u.hash){const id=decodeURIComponent(u.hash.slice(1));assert(fs.readFileSync(f,'utf8').includes('id="'+id+'"'),'Missing fragment '+href);}
 }
 const p=await browser.newPage({viewport:{width:390,height:900}});
 await p.goto('http://127.0.0.1:8834/zh/alevel/a2-mathematics/numerical-methods/#q7--choose-from-the-data',{waitUntil:'networkidle'});
 await p.setViewportSize({width:1365,height:900});
 await p.locator('#siteLanguage').selectOption('en');
 await p.waitForURL(u=>!u.pathname.startsWith('/zh/')&&u.hash==='#q7--choose-from-the-data');
 assert.equal(new URL(p.url()).hash,'#q7--choose-from-the-data');
 await p.setViewportSize({width:390,height:900});
 await p.goto('http://127.0.0.1:8834/zh/alevel/a2-mathematics/numerical-methods/',{waitUntil:'networkidle'});
 await p.locator('section.worked-example').nth(1).scrollIntoViewIfNeeded();
 await p.screenshot({path:path.join(out,'example-2-mobile.png')});
 await p.close();
 fs.writeFileSync(path.join(out,'browser-results.json'),JSON.stringify({results,localLinks:links.size,languageHash:true},null,2));
 await browser.close();console.log(JSON.stringify({views:results.length,localLinks:links.size,failures:0}));
})().catch(e=>{console.error(e);process.exit(1);});
