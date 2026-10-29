const {chromium}=require('C:/Users/mi/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs=require('node:fs'), path=require('node:path'), assert=require('node:assert/strict');
const origin='http://172.31.226.8:8844';
const slug='/alevel/a2-further-mathematics/statistics/test-power/';
let browser;
async function settle(page){
  await page.evaluate(async()=>{if(window.MathJax?.startup?.promise)await MathJax.startup.promise;await document.fonts.ready;});
  await page.addStyleTag({content:'*{transition:none!important;scroll-behavior:auto!important}'});
}
(async()=>{
  browser=await chromium.launch({headless:true,executablePath:'C:/Users/mi/AppData/Local/ms-playwright/chromium-1234/chrome-win64/chrome.exe'});
  const rows=[],targets=new Set(),journeys=[];
  for(const lang of ['zh','en'])for(const width of [390,1365])for(const theme of ['light','dark']){
    const context=await browser.newContext({viewport:{width,height:900},colorScheme:theme});
    await context.addInitScript(t=>localStorage.setItem('site-theme',t),theme);
    const page=await context.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));
    const prefix=lang==='zh'?'/zh':'',url=origin+prefix+slug;
    const response=await page.goto(url+'#inverse-problems',{waitUntil:'networkidle',timeout:60000});await settle(page);
    const body=page.locator('#content-container');
    assert.equal(response.status(),200);
    const checks=await body.evaluate(e=>({open:e.querySelectorAll('details[open]').length,nested:e.querySelectorAll('.lesson-check .lesson-check,.worked-example .lesson-check').length,mathErrors:e.querySelectorAll('mjx-merror').length,overflow:document.documentElement.scrollWidth>innerWidth,theme:document.documentElement.getAttribute('data-bs-theme')}));
    assert.equal(checks.open,0);assert.equal(checks.nested,0);assert.equal(checks.mathErrors,0);assert(!checks.overflow);assert.equal(checks.theme,theme);
    const task=page.locator('#task-inverse').locator('..'),hint=task.locator('details').first();
    await hint.locator('summary').focus();await page.keyboard.press('Enter');
    assert(await hint.evaluate(e=>e.open));assert(!await task.locator('details').nth(1).evaluate(e=>e.open));
    await page.keyboard.press('Enter');assert(!await hint.evaluate(e=>e.open));
    if(lang==='zh'&&theme==='light'){
      for(const id of ['inverse-example','task-inverse','discrete-example','task-discrete','retry-inverse','retry-discrete','later-inverse']){
        await page.locator('#'+id).evaluate(e=>{e.scrollIntoView({behavior:'instant'});scrollBy({top:-85,behavior:'instant'});});await page.waitForTimeout(300);
        await page.screenshot({path:path.join(__dirname,id+'-'+width+'.png')});
      }
      await page.addStyleTag({content:'.site-nav,.back-to-top,.scroll-progress,.reading-progress-container{visibility:hidden!important}'});
      await page.locator('#inverse-example').locator('..').screenshot({path:path.join(__dirname,'inverse-continuous-'+width+'.png')});
      const discrete=page.locator('#task-discrete').locator('..');await discrete.locator('details').nth(1).evaluate(e=>e.open=true);
      await page.evaluate(async()=>{await MathJax.typesetPromise();});
      await discrete.screenshot({path:path.join(__dirname,'discrete-expanded-'+width+'.png')});
      await page.reload({waitUntil:'networkidle'});await settle(page);
    }
    await body.locator('details').evaluateAll(es=>es.forEach(e=>e.open=true));
    await page.evaluate(async()=>{await MathJax.typesetPromise();});
    assert.equal(await body.locator('mjx-merror').count(),0);assert(!await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth));
    let scroll=null;
    if(width===390){
      for(const el of await body.locator('mjx-container[display="true"]').elementHandles()){
        if(!await el.evaluate(e=>e.scrollWidth>e.clientWidth+3))continue;
        await el.evaluate(e=>{const b=document.createElement('button');b.id='temporary-scroll-start';b.textContent='Keyboard check';e.before(b);e.scrollLeft=0;b.focus();});
        await page.keyboard.press('Tab');const focused=await el.evaluate(e=>document.activeElement===e);
        await page.keyboard.press('ArrowRight');await page.waitForTimeout(500);const moved=await el.evaluate(e=>e.scrollLeft>0);
        await page.locator('#temporary-scroll-start').evaluate(e=>e.remove());assert(focused&&moved);scroll={focused,moved};break;
      }
    }
    for(const href of await body.locator('a[href]').evaluateAll(es=>es.map(e=>e.href))){const u=new URL(href);if(u.origin===origin)targets.add(u.pathname+u.hash);}
    if(width===390&&theme==='light'){
      await body.locator('a[href$="/statistics/"]').last().click();await settle(page);
      await page.locator('#content-container a[href$="/test-power/"]').first().click();await settle(page);
      assert.equal(new URL(page.url()).pathname,prefix+slug);journeys.push({lang,courseRouteReturn:true});
      await page.goto(url+'#inverse-problems',{waitUntil:'networkidle'});await settle(page);
      await page.locator('#siteNavToggle').click();await page.locator('#siteLanguage').selectOption(lang==='zh'?'en':'zh-CN');
      await page.waitForURL(u=>u.pathname===(lang==='zh'?'':'/zh')+slug&&u.hash==='#inverse-problems',{waitUntil:'domcontentloaded'});
      journeys.push({lang,languageSwitchAnchor:true});
    }
    assert.equal(errors.length,0,errors.join('\n'));rows.push({lang,width,theme,status:response.status(),...checks,closedHelpKeyboard:true,openAllMathErrors:0,scroll});await context.close();
  }
  const grouped=new Map(),linkErrors=[],page=await browser.newPage();
  for(const target of targets){const u=new URL(target,origin);if(!grouped.has(u.pathname))grouped.set(u.pathname,[]);if(u.hash)grouped.get(u.pathname).push(decodeURIComponent(u.hash.slice(1)));}
  for(const [p,ids]of grouped){const response=await page.goto(origin+p,{waitUntil:'domcontentloaded',timeout:60000});if(response.status()!==200)linkErrors.push({p,status:response.status()});for(const id of ids)if(!await page.evaluate(id=>!!document.getElementById(id),id))linkErrors.push({p,id});}
  await browser.close();const result={origin,observedAt:new Date().toISOString(),rows,journeys,uniqueTargets:targets.size,paths:grouped.size,linkErrors,limits:'Host browser through LAN address; no peer-device, physical-phone, complete accessibility or student learning trial.'};
  fs.writeFileSync(path.join(__dirname,'browser-results.json'),JSON.stringify(result,null,2)+'\n');assert.equal(linkErrors.length,0,JSON.stringify(linkErrors));console.log(JSON.stringify({views:rows.length,journeys:journeys.length,links:targets.size,linkErrors}));
})().catch(async e=>{console.error(e);if(browser)await browser.close();process.exitCode=1;});
