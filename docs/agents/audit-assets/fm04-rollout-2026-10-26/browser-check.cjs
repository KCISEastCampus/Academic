const { chromium } = require('C:/Users/mi/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs = require('node:fs'), path = require('node:path');
const origin='http://127.0.0.1:8840', base='/alevel/a2-further-mathematics/statistics/';
const slugs=['','moment-generating-functions/','standard-mgfs/','estimators/','confidence-intervals/','test-power/','comparing-means/','paired-tests/','variance-tests/','goodness-of-fit/','association-tests/'];
const out=path.join(__dirname,'final');fs.mkdirSync(out,{recursive:true});
(async()=>{
 const browser=await chromium.launch({executablePath:'C:/Users/mi/AppData/Local/ms-playwright/chromium-1234/chrome-win64/chrome.exe',headless:true});
 const rows=[],targeted=[],links=new Set();
 for(const prefix of ['', '/zh']) for(const slug of slugs) for(const width of [390,1365]) for(const theme of ['light','dark']){
  const context=await browser.newContext({viewport:{width,height:900},colorScheme:theme});
  await context.addInitScript(t=>localStorage.setItem('theme',t),theme);
  const page=await context.newPage(),errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  // External visit counter is optional and not part of lesson correctness.
  await page.route('**/hitscounter.dev/**',r=>r.abort());
  const url=origin+prefix+base+slug;
  const response=await page.goto(url,{waitUntil:'networkidle'});
  await page.evaluate(async()=>{await window.MathJax?.startup?.promise;await document.fonts.ready;});
  const initial=await page.evaluate(()=>{
   const m=document.querySelector('#content-container');
   return {open:m.querySelectorAll('details[open]').length,nested:m.querySelectorAll('.lesson-check .lesson-check,.worked-example .lesson-check').length,
    tasks:m.querySelectorAll('.lesson-check').length,examples:m.querySelectorAll('.worked-example').length,
    hrefs:[...m.querySelectorAll('a[href],.site-breadcrumb a[href]')].map(a=>a.href)};
  });
  for(const href of initial.hrefs){const u=new URL(href);if([new URL(origin).host,'academic.kcisec.site'].includes(u.host))links.add(origin+u.pathname+u.hash);}
  const summary=page.locator('#content-container .lesson-check summary').first();
  await summary.focus();await page.keyboard.press('Enter');
  const keyboard=await summary.evaluate(e=>e.parentElement.open);
  await page.keyboard.press('Enter');
  await page.locator('#content-container details').evaluateAll(es=>es.forEach(e=>e.open=true));
  const final=await page.evaluate(()=>({mathErrors:document.querySelectorAll('mjx-merror,[data-mjx-error]').length,
   overflow:document.documentElement.scrollWidth-innerWidth,brokenImages:[...document.querySelectorAll('#content-container img')].filter(i=>!i.complete||!i.naturalWidth).length}));
  const pass=response.status()===200&&!errors.length&&!initial.open&&!initial.nested&&initial.tasks>0&&(!slug||initial.examples>0)&&keyboard&&!final.mathErrors&&final.overflow<=1&&!final.brokenImages;
  rows.push({url,width,theme,status:response.status(),...initial,hrefs:undefined,...final,keyboard,errors,pass});
  if(prefix&&width===390&&theme==='light'){
   await page.locator('#content-container details').evaluateAll(es=>es.forEach(e=>e.open=false));
   await page.addStyleTag({content:'nav.site-nav,.back-to-top,.reading-progress{visibility:hidden!important}*{transition:none!important}'});
   await page.evaluate(()=>scrollTo(0,0));
   const block=page.locator('#content-container > h2').first();
   if(slug){
    const start=await block.boundingBox();
    await page.screenshot({path:path.join(out,(slug.slice(0,-1)||'index')+'-390-reading.png'),fullPage:true,clip:{x:0,y:Math.max(0,start.y),width:390,height:1800}});
    const formulas=page.locator('#content-container mjx-container[display="true"]');
    for(let i=0;i<await formulas.count();i++){
     const e=formulas.nth(i);if(!await e.isVisible()||!await e.evaluate(n=>n.scrollWidth>n.clientWidth+2))continue;
     await e.scrollIntoViewIfNeeded();await e.evaluate(n=>n.scrollLeft=0);
     const prev=await e.evaluateHandle(n=>n.previousElementSibling);
     if(await prev.asElement())await prev.asElement().evaluate(n=>{n.setAttribute('tabindex','-1');n.focus();});
     for(let tabs=0;tabs<15;tabs++){await page.keyboard.press('Tab');if(await e.evaluate(n=>document.activeElement===n))break;}
     await page.keyboard.press('ArrowRight');await page.waitForTimeout(120);
     targeted.push(await e.evaluate(n=>({kind:'actual-tab-formula-scroll',url:location.href,focused:document.activeElement===n,moved:n.scrollLeft>0})));
     if(targeted.filter(r=>r.url===page.url()).length>=2)break;
    }
   }else await page.screenshot({path:path.join(out,'index-390.png')});
  }
  await context.close();
 }
 const page=await browser.newPage(),linkErrors=[];
 for(const href of links){const u=new URL(href),r=await page.request.get(href);
  if(r.status()!==200)linkErrors.push({href,status:r.status()});
  else if(u.hash&&!((await r.text()).includes('id="'+decodeURIComponent(u.hash.slice(1))+'"')))linkErrors.push({href,missing:u.hash});
 }
 await page.goto(origin+'/zh'+base,{waitUntil:'networkidle'});
 await page.locator('#content-container a[href$="/statistics/standard-mgfs/"]').first().click();await page.waitForLoadState('networkidle');
 targeted.push({kind:'entry-to-continuous',pass:page.url().endsWith('standard-mgfs/')});
 await page.goto(origin+'/zh'+base+'test-power/#task-b',{waitUntil:'networkidle'});
 await page.locator('#siteLanguage').selectOption('en');await page.waitForURL(u=>u.pathname===base+'test-power/'&&u.hash==='#task-b');
 targeted.push({kind:'language-preserves-task',pass:true,url:page.url()});
 fs.writeFileSync(path.join(out,'browser-results.json'),JSON.stringify({rows,targeted,checkedLinks:links.size,linkErrors},null,2));
 await browser.close();
 console.log(JSON.stringify({views:rows.length,failures:rows.filter(x=>!x.pass),targeted,checkedLinks:links.size,linkErrors}));
 if(rows.some(x=>!x.pass)||targeted.some(x=>x.pass===false||x.focused===false||x.moved===false)||linkErrors.length)process.exitCode=1;
})().catch(e=>{console.error(e);process.exitCode=1});
