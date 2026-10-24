const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const base = process.env.ACADEMIC_URL || 'http://127.0.0.1:8835';
const out = process.env.A2FM_EVIDENCE_DIR || path.join(__dirname, 'final');
const targets = [
 ['roots-and-polynomials','roots-and-coefficients'], ['de-moivres-theorem','powers-and-proof'],
 ['polar-coordinates','coordinates'], ['inverse-trigonometric-functions','values-and-graphs'],
 ['proof-by-induction','method'], ['finite-series','partial-fractions'], ['series-and-limits','maclaurin-series'],
 ['arc-length-and-surface-area','surface-area-about-the-x-axis'], ['vector-products-and-coplanarity','cross-product'],
 ['lines-and-planes','directions-and-lines'], ['linear-equations','constraints-and-elimination'],
 ['matrix-algebra','dimensions-and-order'], ['eigenvalues-and-eigenvectors','definition']
];
const rows=[], scrolls=[], journeys=[];
const ready = page => page.evaluate(async () => { await window.MathJax?.startup?.promise; await document.fonts.ready; });
(async()=>{
 fs.mkdirSync(out,{recursive:true});
 const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH,headless:true});
 try {
  for(const [slug,id] of targets){
   const page=await browser.newPage({viewport:{width:390,height:900}});
   await page.addInitScript(()=>localStorage.setItem('site-theme','light'));
   const url=base+'/zh/alevel/a2-further-mathematics/'+slug+'/';
   assert.equal((await page.goto(url,{waitUntil:'networkidle'})).status(),200); await ready(page);
   const start=page.locator('#'+id); assert.equal(await start.count(),1,id);
   for(const img of await page.locator('#content-container img').all()){await img.scrollIntoViewIfNeeded();await page.waitForFunction(e=>e.complete&&e.naturalWidth>0&&!e.hasAttribute('data-lazy-pending'),await img.elementHandle(),{timeout:15000});}
   await page.addStyleTag({content:'nav.site-nav,.back-to-top,.scroll-progress{visibility:hidden!important}*{transition:none!important}'});
   await page.evaluate(()=>scrollTo(0,0));
   const clip=await start.evaluate(e=>{const a=e.getBoundingClientRect(); let n=e.nextElementSibling; while(n&&!/^H2$/.test(n.tagName))n=n.nextElementSibling; const end=n?n.getBoundingClientRect().top:document.documentElement.scrollHeight; return {x:15,y:a.top+scrollY-5,width:innerWidth-30,height:Math.min(1900,end-a.top+5)};});
   await page.screenshot({path:path.join(out,slug+'-390-continuous.png'),fullPage:true,clip,animations:'disabled'});
   rows.push({slug,id,...clip,allHelpClosed:await page.locator('#content-container details[open]').count()===0});
   assert(rows.at(-1).allHelpClosed);
   await page.evaluate(()=>document.querySelectorAll('#content-container details').forEach(d=>d.open=true));
   if(['matrix-algebra','eigenvalues-and-eigenvectors','series-and-limits','finite-series','lines-and-planes','linear-equations'].includes(slug)){
    for(const e of await page.locator('#content-container mjx-container[display="true"]').all()){
     if(!await e.evaluate(e=>e.scrollWidth>e.clientWidth+2))continue;
     const old=await e.evaluate(e=>{const p=e.previousElementSibling;const old=p.getAttribute('tabindex');p.setAttribute('tabindex','-1');p.focus();e.scrollLeft=0;return old;});
     await page.keyboard.press('Tab');assert(await e.evaluate(e=>document.activeElement===e));
     await page.keyboard.press('ArrowRight');await page.keyboard.press('ArrowRight');await page.waitForTimeout(450);
     const m=await e.evaluate((e,old)=>{const p=e.previousElementSibling;if(old===null)p.removeAttribute('tabindex');else p.setAttribute('tabindex',old);return {width:e.clientWidth,scrollWidth:e.scrollWidth,scrollLeft:e.scrollLeft};},old);
     assert(m.scrollLeft>0); scrolls.push({slug,...m});break;
    }
   }
   await page.close();
  }
  for(const [slug,id,next] of [['series-and-limits','maclaurin-series','de-moivres-theorem'],['matrix-algebra','row-column-start','linear-equations'],['eigenvalues-and-eigenvectors','direction-start',null]]){
   const page=await browser.newPage({viewport:{width:390,height:900}});
   await page.goto(base+'/zh/alevel/a2-further-mathematics/',{waitUntil:'networkidle'});await ready(page);
   await page.locator('#content-container a[href$="/'+slug+'/"]').first().click();await page.waitForLoadState('networkidle');await ready(page);
   await page.locator('#'+id).scrollIntoViewIfNeeded();assert(await page.locator('#'+id).isVisible());
   const summary=page.locator('#content-container summary').first();await summary.focus();await page.keyboard.press('Enter');assert(await summary.evaluate(e=>e.parentElement.open));await page.keyboard.press('Enter');assert(!await summary.evaluate(e=>e.parentElement.open));
   if(next){await page.locator('#content-container a[href$="/'+next+'/"]').last().click();await page.waitForLoadState('networkidle');assert(new URL(page.url()).pathname.endsWith('/'+next+'/'));}
   journeys.push({slug,concept:id,courseEntry:true,keyboardHelp:true,next:next||'last lesson'});await page.close();
  }
  assert.equal(rows.length,13);assert.equal(scrolls.length,6);assert.equal(journeys.length,3);
  fs.writeFileSync(path.join(out,'targeted-results.json'),JSON.stringify({rows,scrolls,journeys},null,2)+'\n');
  console.log(JSON.stringify({continuousReadings:rows.length,keyboardScrolls:scrolls.length,journeys:journeys.length}));
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
