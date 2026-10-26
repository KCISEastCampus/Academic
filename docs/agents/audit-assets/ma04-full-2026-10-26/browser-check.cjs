const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const {chromium}=require('C:/Users/mi/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const base='http://127.0.0.1:8839',out=__dirname;
const slugs=['','poisson-distribution','continuous-random-variables','exponential-distribution','normal-distribution','estimation','hypothesis-testing','mean-tests'];
const rows=[],journeys=[];
async function ready(page){await page.waitForLoadState('networkidle');await page.evaluate(async()=>{await window.MathJax?.startup?.promise;await document.fonts.ready;});}
(async()=>{
 const browser=await chromium.launch({executablePath:'C:/Users/mi/AppData/Local/ms-playwright/chromium-1234/chrome-win64/chrome.exe',headless:true});
 try{
  for(const lang of ['', '/zh'])for(const width of [390,1365])for(const theme of ['light','dark']){
   const ctx=await browser.newContext({viewport:{width,height:900}});
   await ctx.addInitScript(t=>localStorage.setItem('site-theme',t),theme);
   await ctx.route('https://hitscounter.dev/**',r=>r.abort());
   const page=await ctx.newPage();
   for(const slug of slugs){
    const url=`${base}${lang}/alevel/a2-mathematics/statistics/${slug?slug+'/':''}`;
    const row={slug:slug||'index',lang,width,theme,url,failures:[]};const errors=[];
    const onError=e=>errors.push(e.message);page.on('pageerror',onError);
    try{
     row.status=(await page.goto(url,{waitUntil:'domcontentloaded'})).status();await ready(page);await page.waitForTimeout(650);
     assert.equal(row.status,200);assert.equal(await page.locator('html').getAttribute('data-bs-theme'),theme);
     assert.equal(await page.locator('details[open]').count(),0,'help starts closed');
     assert.equal(await page.locator('.lesson-check .lesson-check').count(),0,'no nested tasks');
     const first=page.locator('.lesson-check summary').first();await first.focus();await page.keyboard.press('Enter');assert(await first.evaluate(e=>e.parentElement.open));await page.keyboard.press('Enter');assert(!(await first.evaluate(e=>e.parentElement.open)));row.keyboardToggle=true;
     if(lang==='/zh'&&width===390&&theme==='light'){
      await page.evaluate(()=>scrollTo({top:0,behavior:'instant'}));await page.screenshot({path:path.join(out,`${row.slug}-390-start.png`)});
      if(slug){
       const ex=page.locator('.worked-example').first();
       const hide=await page.addStyleTag({content:'.site-nav,.site-nav *,#siteNav,.reading-progress-container,.scroll-progress,.back-to-top{visibility:hidden!important}'});
       await ex.screenshot({path:path.join(out,`${slug}-390-example.png`)});await hide.evaluate(e=>e.remove());
       const task=page.locator('.lesson-check').first();await task.locator('details').last().evaluate(e=>e.open=true);await ready(page);
       const hide2=await page.addStyleTag({content:'.site-nav,.site-nav *,#siteNav,.reading-progress-container,.scroll-progress,.back-to-top{visibility:hidden!important}'});
       await task.screenshot({path:path.join(out,`${slug}-390-answer.png`)});await hide2.evaluate(e=>e.remove());
      }
     }
     await page.evaluate(()=>document.querySelectorAll('details').forEach(e=>e.open=true));await ready(page);
     row.mathErrors=await page.locator('mjx-merror').count();assert.equal(row.mathErrors,0);
     row.pageOverflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1);assert(!row.pageOverflow);
     row.wideMath=await page.locator('mjx-container[display="true"]').evaluateAll(es=>es.filter(e=>e.scrollWidth>e.clientWidth+2).map(e=>({text:e.getAttribute('data-latex')||e.textContent,width:e.clientWidth,scroll:e.scrollWidth,near:e.closest('.lesson-check')?.querySelector('[id]')?.id||e.previousElementSibling?.id})));
     for(const img of await page.locator('#content-container img').evaluateAll(es=>es.map(e=>({alt:e.alt,ok:e.complete&&e.naturalWidth>0})))){assert(img.alt);assert(img.ok,'image loaded');}
     assert.deepEqual(errors,[]);row.pageErrors=errors;
    }catch(e){row.failures.push(e.message);}finally{page.off('pageerror',onError);rows.push(row);fs.writeFileSync(path.join(out,'browser-results.json'),JSON.stringify({rows,journeys},null,2));}
   }await ctx.close();
  }
  const ctx=await browser.newContext({viewport:{width:1365,height:900}});await ctx.route('https://hitscounter.dev/**',r=>r.abort());const page=await ctx.newPage();
  await page.goto(base+'/zh/');await ready(page);await page.locator('a.modern-subject-card[href$="/zh/alevel/a2-mathematics/statistics/"]').click();await page.waitForURL(base+'/zh/alevel/a2-mathematics/statistics/');await ready(page);
  await page.locator('#content-container a[href$="/statistics/poisson-distribution/"]').first().click();await page.waitForURL(base+'/zh/alevel/a2-mathematics/statistics/poisson-distribution/');await ready(page);journeys.push({type:'home-entry-first-lesson',passed:true});
  for(const slug of slugs.filter(Boolean)){
   await page.goto(`${base}/zh/alevel/a2-mathematics/statistics/${slug}/`);await ready(page);
   const id=await page.locator('.lesson-check [id]').first().getAttribute('id');
   await page.goto(`${base}/zh/alevel/a2-mathematics/statistics/${slug}/#${id}`);await ready(page);
   await page.locator('#siteLanguage').selectOption('en');await page.waitForURL(`${base}/alevel/a2-mathematics/statistics/${slug}/#${id}`);await ready(page);assert(await page.locator(`#${id}`).count());journeys.push({type:'language-retains-task',slug,id,passed:true});
   await page.locator('#next-step').scrollIntoViewIfNeeded();
   // Read the next-step destination from the actual lesson body, not the global header.
   const nextSlug=slugs[slugs.indexOf(slug)+1];
   const end=nextSlug?`/statistics/${nextSlug}/`:'/statistics/#mixed-review';
   const link=page.locator(`#next-step ~ p a[href$="${end}"]`).first();const href=await link.getAttribute('href');await link.click();await page.waitForURL(new URL(href,base).href);await ready(page);journeys.push({type:'next-step-link',slug,destination:page.url(),passed:true});
  }await ctx.close();
 }finally{await browser.close();fs.writeFileSync(path.join(out,'browser-results.json'),JSON.stringify({rows,journeys},null,2));}
 const bad=rows.filter(r=>r.failures.length);console.log(`${rows.length} views, ${bad.length} failing rows, ${journeys.length} journeys`);assert.equal(bad.length,0,JSON.stringify(bad));
})().catch(e=>{console.error(e);process.exitCode=1});
