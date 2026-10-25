const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const {chromium}=require('C:/Users/mi/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
(async()=>{
 const browser=await chromium.launch({executablePath:'C:/Users/mi/AppData/Local/ms-playwright/chromium-1234/chrome-win64/chrome.exe',headless:true});
 const rows=[];
 try{
  for(const lang of ['', '/zh']) for(const width of [390,1365]) for(const lesson of [false,true]){
   const theme=width===390?'light':'dark',ctx=await browser.newContext({viewport:{width,height:844}}),page=await ctx.newPage();
   await ctx.addInitScript(t=>localStorage.setItem('site-theme',t),theme);
   await page.route('https://hitscounter.dev/**',()=>{});
   if(!lesson)await page.route('**/assets/js/pop_ups.js',async r=>{await page.waitForLoadState('domcontentloaded');await r.continue();});
   const route=lang+(lesson?'/alevel/a2-further-mathematics/first-order-differential-equations/#example-1-normalise-and-solve':'/');
   try{
    const r=await page.goto('http://127.0.0.1:8838'+route,{waitUntil:'load',timeout:15000});assert.equal(r.status(),200);
    if(lesson){
     await page.waitForFunction(()=>!!window.MathJax?.startup?.document);
     await page.evaluate(async()=>{await window.MathJax.startup.promise;await document.fonts.ready;});
     assert.equal(await page.locator('mjx-merror').count(),0);
     const summary=page.locator('.lesson-check summary').first();await summary.focus();await page.keyboard.press('Enter');
     assert(await summary.evaluate(e=>e.parentElement.open));
    }else{
     await page.waitForFunction(()=>!!window.bootstrap?.Modal);
     await page.evaluate(()=>window.underConstruction());
     await page.locator('#infoModal.show').waitFor({state:'visible'});
     assert((await page.locator('#infoModalBody').innerText()).includes('内容正在建造中'));
     await page.locator('#infoModal .btn-close').click();
    }
    assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
    if(lang==='/zh'&&width===390)await page.screenshot({path:path.join(__dirname,'network-fix-'+(lesson?'lesson':'home')+'.png')});
    rows.push({route,width,theme,passed:true});
   }finally{await ctx.close();}
  }
 }finally{await browser.close();fs.writeFileSync(path.join(__dirname,'network-fix-reading.json'),JSON.stringify(rows,null,2));}
 assert.equal(rows.length,8);console.log('Eight bilingual desktop-dark/mobile-light views passed: notices work, formulas/help/anchors remain available with the external counter stalled.');
})().catch(e=>{console.error(e);process.exitCode=1;});
