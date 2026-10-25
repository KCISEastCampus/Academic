const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');
const crypto=require('node:crypto');
const {chromium}=require('C:/Users/mi/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const root=path.resolve(__dirname,'../../../..');
const out=path.join(__dirname,'final');
const base='http://127.0.0.1:8838';
const route='/alevel/a2-mathematics/mechanics/forces-equilibrium-and-friction/';
const baseline=JSON.parse(fs.readFileSync(path.join(__dirname,'baseline.json'),'utf8'));
const result={base,checkedUTC:new Date().toISOString(),views:[],links:[],journeys:[],scrollChecks:[]};
const sha=file=>crypto.createHash('sha256').update(fs.readFileSync(path.join(root,file))).digest('hex');
fs.mkdirSync(out,{recursive:true});
async function ready(page) {
  await page.waitForFunction(()=>!!window.MathJax?.startup?.promise);
  await page.evaluate(async()=>{await window.MathJax.startup.promise;await document.fonts.ready;});
}
async function imageReady(page) {
  for(const img of await page.locator('#content-container img').all()) {
    await img.scrollIntoViewIfNeeded();
    await page.waitForFunction(e=>e.complete&&e.naturalWidth>0&&!e.hasAttribute('data-lazy-pending'),await img.elementHandle());
  }
}
(async()=>{
  const browser=await chromium.launch({executablePath:'C:/Users/mi/AppData/Local/ms-playwright/chromium-1234/chrome-win64/chrome.exe',headless:true});
  try {
    for(const lang of ['en','zh']) for(const width of [1365,390]) for(const theme of ['light','dark']) {
      const ctx=await browser.newContext({viewport:{width,height:900}});
      await ctx.addInitScript(t=>localStorage.setItem('site-theme',t),theme);
      const page=await ctx.newPage(), errors=[];
      page.on('pageerror',e=>errors.push(e.message));
      const prefix=lang==='zh'?'/zh':'';
      const response=await page.goto(base+prefix+route,{waitUntil:'networkidle'});
      assert.equal(response.status(),200);await ready(page);
      assert.equal(await page.locator('html').getAttribute('data-bs-theme'),theme);
      const body=page.locator('#content-container');
      assert.equal(await body.locator('details[open]').count(),0);
      assert.equal(await body.locator('.worked-example').count(),8);
      assert.equal(await body.locator('.lesson-check').count(),14);
      assert.equal(await body.locator('.lesson-check .lesson-check,.worked-example .lesson-check').count(),0);
      for(const task of await body.locator('.lesson-check').all()) assert.equal(await task.locator(':scope > details').count(),2);
      const first=page.locator('#first-check').locator('xpath=..').locator('summary').first();
      await first.focus();await page.keyboard.press('Enter');assert(await first.evaluate(e=>e.parentElement.open));
      await page.keyboard.press('Enter');assert(!(await first.evaluate(e=>e.parentElement.open)));
      const prior=baseline.pages.find(p=>p.source===(prefix? 'zh/':'')+route.slice(1,-1)+'.md');
      const all=prior.oldIDs, start=all.indexOf('content-container')+1, end=all.indexOf('toc');
      const oldIDs=all.slice(start,end<start?undefined:end);
      const ids=await body.locator('[id]').evaluateAll(es=>es.map(e=>e.id));
      for(const id of oldIDs) assert(ids.includes(id),'Lost old course ID '+id);
      assert.equal(new Set(ids).size,ids.length);
      if(theme==='light') for(const href of await body.locator('a[href]').evaluateAll(es=>es.map(e=>e.getAttribute('href')))) {
        const url=new URL(href,page.url());if(url.origin!==base) continue;
        const local=path.join(root,'_site',decodeURIComponent(url.pathname),url.pathname.endsWith('/')?'index.html':'');
        assert(fs.existsSync(local),'Missing local target '+href);
        if(url.hash&&!/\.pdf$/i.test(url.pathname)) {
          const target=decodeURIComponent(url.hash.slice(1));
          assert(fs.readFileSync(local,'utf8').includes('id="'+target+'"'),'Missing anchor '+href);
        }
        result.links.push(prefix+route+' -> '+href);
      }
      if(lang==='zh'&&theme==='light') {
        await page.evaluate(()=>scrollTo(0,0));
        await page.screenshot({path:path.join(out,'entry-'+width+'.png')});
      }
      await body.locator('details').evaluateAll(es=>es.forEach(e=>e.open=true));
      await imageReady(page);await ready(page);
      const overflow=await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth);
      const mathErrors=await body.locator('mjx-merror').count();
      assert(overflow<=1&&mathErrors===0&&errors.length===0);
      const wide=await body.locator('mjx-container[display="true"]').elementHandles();
      if(width===390) for(const e of wide) {
        if(!(await e.evaluate(n=>n.scrollWidth>n.clientWidth+5))) continue;
        await e.evaluate(n=>{n.scrollLeft=0;});
        await e.evaluate(n=>{const p=n.previousElementSibling;p.setAttribute('tabindex','0');p.focus();});
        await page.keyboard.press('Tab');
        assert(await e.evaluate(n=>document.activeElement===n),'Wide equation is not reachable by Tab');
        await page.keyboard.press('ArrowRight');await page.waitForTimeout(200);
        assert(await e.evaluate(n=>n.scrollLeft>0),'ArrowRight did not scroll the equation');
        result.scrollChecks.push({lang,width,theme,tabAndArrowRight:true});break;
      }
      if(lang==='zh'&&width===390) {
        const hide=await page.addStyleTag({content:'.site-nav,.back-to-top,.reading-progress-container,.reading-progress,.scroll-progress{visibility:hidden!important}'});
        if(theme==='light') {
          await page.locator('#example-6--friction-need-not-be-limiting').locator('xpath=..').screenshot({path:path.join(out,'friction-example-390.png')});
          await page.locator('img[src*="force-components-sample.svg"]').screenshot({path:path.join(out,'components-390.png')});
          await page.locator('#wall-check').locator('xpath=..').screenshot({path:path.join(out,'wall-answer-390.png')});
        } else await page.locator('#friction-retry').locator('xpath=..').screenshot({path:path.join(out,'friction-retry-390-dark.png')});
        await hide.evaluate(e=>e.remove());
      }
      result.views.push({lang,width,theme,status:200,oldIDsPreserved:oldIDs.length,workedExamples:8,tasks:14,defaultClosed:true,keyboardHelp:true,overflow,mathErrors,errors});
      await ctx.close();
    }
    for(const lang of ['en','zh']) {
      const ctx=await browser.newContext({viewport:{width:390,height:900}}),page=await ctx.newPage();
      const prefix=lang==='zh'?'/zh':'';
      await page.goto(base+prefix+'/alevel/a2-mathematics/mechanics/',{waitUntil:'networkidle'});
      await page.locator('a[href$="'+route+'"]').first().click();await page.waitForLoadState('networkidle');await ready(page);
      await page.locator('a[href="#friction-and-limiting-equilibrium"]').first().click();
      assert.equal(new URL(page.url()).hash,'#friction-and-limiting-equilibrium');
      await page.evaluate(()=>location.hash='#friction-retry');
      const help=page.locator('#friction-retry').locator('xpath=..').locator('summary').first();
      await help.focus();await page.keyboard.press('Enter');assert(await help.evaluate(e=>e.parentElement.open));
      if(!(await page.locator('#siteLanguage').isVisible())) await page.locator('#siteNavToggle').click();
      await page.locator('#siteLanguage').selectOption(lang==='en'?'zh-CN':'en');
      await page.waitForLoadState('networkidle');await ready(page);
      assert.equal(new URL(page.url()).hash,'#friction-retry');
      result.journeys.push({lang,courseToTopic:true,sectionJump:true,keyboardHint:true,languageHash:true});
      await ctx.close();
    }
    result.links=[...new Set(result.links)];
    result.passed=true;
    fs.writeFileSync(path.join(out,'browser-results.json'),JSON.stringify(result,null,2));
    const sources=[route.slice(1,-1)+'.md','zh'+route.slice(0,-1)+'.md','assets/img/a2-math-mech/force-components-sample.svg','assets/img/a2-math-mech/wall-friction-feedback.svg','scripts/test-mechanics-forces.js'];
    for(const [file,hash] of Object.entries(baseline.shared)) assert.equal(sha(file),hash,'Shared file changed');
    fs.writeFileSync(path.join(out,'source-manifest.json'),JSON.stringify({baseCommit:baseline.base,sourceHashes:Object.fromEntries(sources.map(file=>[file,sha(file)])),sharedHashes:baseline.shared,limits:'Browser checks are local, not student mastery or physical-device/WCAG certification.'},null,2));
    console.log(JSON.stringify({views:result.views.length,links:result.links.length,journeys:result.journeys.length,scrollChecks:result.scrollChecks.length,passed:true}));
  } finally {await browser.close();}
})().catch(error=>{result.passed=false;result.error=String(error);fs.writeFileSync(path.join(out,'browser-results.json'),JSON.stringify(result,null,2));console.error(error);process.exitCode=1;});
