const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const {chromium}=require('C:/Users/mi/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
(async()=>{
 const browser=await chromium.launch({executablePath:'C:/Users/mi/AppData/Local/ms-playwright/chromium-1234/chrome-win64/chrome.exe',headless:true});
 const results=[];
 try {
  for(const kind of ['notice-script-stalls','counter-service-stalls']){
   const ctx=await browser.newContext({viewport:{width:390,height:844}}),page=await ctx.newPage();
   let requests=0;
   await page.route(kind==='notice-script-stalls'?'**/assets/js/pop_ups.js':'https://hitscounter.dev/**',()=>{requests++;});
   try{
    if(kind==='notice-script-stalls'){
     await page.goto('http://127.0.0.1:8838/zh/',{waitUntil:'commit'});
     await page.waitForLoadState('domcontentloaded',{timeout:3000});
     await page.locator('main#main-content').waitFor({state:'visible',timeout:3000});
     assert.equal(requests,1);
    }else{
     await page.goto('http://127.0.0.1:8838/zh/',{waitUntil:'load',timeout:5000});
     assert.equal(requests,0,'An offscreen counter must not block the page load');
     await page.locator('#hitscounter-badge').scrollIntoViewIfNeeded();
     await page.waitForTimeout(300);
     assert(requests>0,'Counter still requests when the footer is viewed');
    }
    results.push({kind,passed:true});
   }catch(e){results.push({kind,passed:false,error:e.message.split('\n')[0]});}
   finally{await ctx.close();}
  }
 }finally{await browser.close();}
 const label=process.env.OPTIONAL_NETWORK_LABEL||'before';
 fs.writeFileSync(path.join(__dirname,'optional-network-'+label+'.json'),JSON.stringify(results,null,2));
 console.log(JSON.stringify(results));
 assert(results.every(x=>x.passed),'Optional stalled resources must not prevent reading or page load');
})().catch(e=>{console.error(e.message);process.exitCode=1;});
