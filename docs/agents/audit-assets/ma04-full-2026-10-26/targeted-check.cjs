const fs=require('fs'),path=require('path'),assert=require('node:assert/strict');
const {chromium}=require('C:/Users/mi/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const out=__dirname,base='http://127.0.0.1:8839',rows=[];
async function ready(p){await p.waitForLoadState('networkidle');await p.evaluate(async()=>{await window.MathJax?.startup?.promise;await document.fonts.ready;});}
(async()=>{const b=await chromium.launch({executablePath:'C:/Users/mi/AppData/Local/ms-playwright/chromium-1234/chrome-win64/chrome.exe'});try{
 const p=await b.newPage({viewport:{width:390,height:900}});await p.route('https://hitscounter.dev/**',r=>r.abort());
 await p.goto(base+'/alevel/a2-mathematics/statistics/#s22-continuous-random-variables');await ready(p);assert(await p.locator('#legacy-reference').evaluate(e=>e.open));rows.push({type:'old-fragment-opens-reference',passed:true});
 const wide=p.locator('#legacy-reference mjx-container[display="true"]');
 const indexes=await wide.evaluateAll(es=>es.map((e,i)=>e.scrollWidth>e.clientWidth+2?i:-1).filter(i=>i>=0));
 for(const i of indexes){const e=wide.nth(i);await e.evaluate(e=>{const before=e.previousElementSibling;before.tabIndex=-1;before.focus();e.scrollLeft=0;});await p.keyboard.press('Tab');assert(await e.evaluate(e=>document.activeElement===e),'Tab reaches local formula scroll');await p.keyboard.press('ArrowRight');await p.waitForTimeout(200);assert(await e.evaluate(e=>e.scrollLeft>0));rows.push({type:'legacy-local-formula-keyboard',index:i,passed:true});}
 for(const [slug,aid]of[['estimation','task-clt'],['exponential-distribution','retry-bridge'],['continuous-random-variables','retry-cdf']]){
  await p.goto(`${base}/zh/alevel/a2-mathematics/statistics/${slug}/#${aid}`);await ready(p);const task=p.locator(`#${aid}`).locator('..');await task.locator('details').last().evaluate(e=>e.open=true);await ready(p);
  const hide=await p.addStyleTag({content:'.site-nav,.site-nav *,.reading-progress-container,.scroll-progress,.back-to-top{visibility:hidden!important}'});await task.screenshot({path:path.join(out,`${slug}-${aid}-390-final.png`)});await hide.evaluate(e=>e.remove());rows.push({type:'repaired-task-reading',slug,aid,passed:true});
 }
 for(const slug of ['poisson-distribution','continuous-random-variables','exponential-distribution','normal-distribution','estimation','hypothesis-testing','mean-tests']){
  await p.goto(`${base}/zh/alevel/a2-mathematics/statistics/${slug}/`);await ready(p);
  const hide=await p.addStyleTag({content:'.site-nav{display:none!important}.reading-progress-container,.scroll-progress,.back-to-top{visibility:hidden!important}'});
  await p.locator('.worked-example').first().screenshot({path:path.join(out,`${slug}-390-example.png`)});await hide.evaluate(e=>e.remove());rows.push({type:'continuous-example-reading',slug,passed:true});
 }
 for(const slug of['continuous-random-variables','normal-distribution']){
  await p.goto(`${base}/zh/alevel/a2-mathematics/statistics/${slug}/`);await ready(p);const img=p.locator('#content-container img').first();await img.scrollIntoViewIfNeeded();await p.waitForTimeout(1200);assert(await img.evaluate(e=>Number(getComputedStyle(e).opacity)>.99),'figure animation settled');await img.screenshot({path:path.join(out,`${slug}-390-figure.png`)});rows.push({type:'figure-reading',slug,...await img.evaluate(e=>({renderedWidth:e.getBoundingClientRect().width,alt:e.alt,complete:e.complete&&e.naturalWidth>0}))});
 }
 await p.goto(`${base}/zh/alevel/a2-mathematics/statistics/estimation/#task-clt`);await ready(p);const task=p.locator('#task-clt').locator('..');await task.locator('summary').last().click();await task.locator('a[href="#retry-clt"]').last().click();assert(p.url().endsWith('#retry-clt'));rows.push({type:'CLT-feedback-new-retry',passed:true});
 await p.goto(`${base}/zh/alevel/a2-mathematics/statistics/exponential-distribution/#retry-bridge`);await ready(p);const t=p.locator('#retry-bridge').locator('..');await t.locator('summary').last().click();await t.locator('a[href="#waiting-model"]').click();assert(p.url().endsWith('#waiting-model'));rows.push({type:'model-retry-specific-recovery',passed:true});
 await p.close();
}finally{await b.close();fs.writeFileSync(path.join(out,'targeted-results.json'),JSON.stringify(rows,null,2));}console.log(rows.length+' targeted checks passed');})().catch(e=>{console.error(e);process.exitCode=1});
