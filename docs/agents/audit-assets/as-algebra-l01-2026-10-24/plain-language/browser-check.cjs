const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const crypto = require('node:crypto'), {execFileSync} = require('node:child_process');
const {chromium} = require(process.env.PLAYWRIGHT_MODULE);
const base = 'http://127.0.0.1:8835', out = __dirname, results = [], journeys = [], failures = [], links = new Set();
const baseline = '19db6ca1640fb47fd541b3f8fb3d45d510d41b09';
const hash = data => crypto.createHash('sha256').update(data).digest('hex');
const sources = ['', 'zh/'].map(prefix => {
  const file = prefix + 'alevel/as-mathematics/algebra.md';
  const old = execFileSync('git', ['show', baseline + ':' + file], {encoding:'utf8'});
  return {file, sha256:hash(fs.readFileSync(file)), oldIds:[...old.matchAll(/\{#([^}]+)\}/g)].map(m=>m[1])};
});
async function ready(p) {
  await p.waitForLoadState('networkidle');
  await p.evaluate(async()=>{await window.MathJax?.startup?.promise; await document.fonts.ready;});
}
(async()=>{
  const browser = await chromium.launch({executablePath:process.env.CHROMIUM_PATH,headless:true});
  try {
    for (const lang of ['en','zh']) for (const width of [1365,390]) {
      const prefix = lang==='zh'?'/zh':'', route = prefix+'/alevel/as-mathematics/algebra/';
      const p = await browser.newPage({viewport:{width,height:900},colorScheme:'light'});
      const pageErrors=[]; p.on('pageerror',e=>pageErrors.push(e.message));
      const response = await p.goto(base+route); await ready(p); assert.equal(response.status(),200);
      const initial = await p.evaluate(()=>({
        open:document.querySelectorAll('#content-container details[open]').length,
        tasks:document.querySelectorAll('.lesson-check').length,
        examples:document.querySelectorAll('.worked-example').length,
        nested:document.querySelectorAll('.lesson-check .lesson-check').length,
        hiddenExamples:[...document.querySelectorAll('.worked-example')].some(e=>e.closest('details')),
        reading:!!document.querySelector('.reading-layout'), toc:document.querySelectorAll('#toc a').length
      }));
      assert.equal(initial.open,0); assert.equal(initial.tasks,6); assert.equal(initial.examples,2);
      assert.equal(initial.nested,0); assert(initial.reading&&!initial.hiddenExamples);
      const s=sources.find(s=>s.file===(lang==='zh'?'zh/':'')+'alevel/as-mathematics/algebra.md');
      const missing=await p.evaluate(ids=>ids.filter(id=>!document.getElementById(id)),s.oldIds); assert.deepEqual(missing,[]);
      let toggles=0;
      for (const summary of await p.locator('.lesson-check > details > summary').all()) {
        await summary.focus(); await p.keyboard.press('Enter'); assert(await summary.evaluate(e=>e.parentElement.open));
        await p.keyboard.press('Enter'); assert(!(await summary.evaluate(e=>e.parentElement.open))); toggles++;
      }
      for(const theme of ['light','dark']) {
        if(await p.locator('html').getAttribute('data-bs-theme')!==theme) {
          if(!(await p.locator('#navThemeBtn').isVisible())) await p.locator('#siteNavToggle').click();
          await p.locator('#navThemeBtn').click();
          if(width<1024) await p.locator('#siteNavToggle').click();
        }
        await p.waitForTimeout(700);
        await p.evaluate(()=>document.querySelectorAll('#content-container details').forEach(e=>e.open=false));
        await p.locator('#l01').evaluate(e=>scrollTo(0,e.getBoundingClientRect().top+scrollY-85));
        if(lang==='zh') await p.screenshot({path:path.join(out,'start-'+width+'-'+theme+'.png')});
        await p.evaluate(()=>document.querySelectorAll('#content-container details').forEach(e=>e.open=true));
        for(const img of await p.locator('#content-container img').all()) {
          await img.scrollIntoViewIfNeeded();
          await p.waitForFunction(e=>e.complete&&e.naturalWidth>0,await img.elementHandle());
        }
        const metrics=await p.evaluate(()=>({
          overflow:document.documentElement.scrollWidth>innerWidth+1,
          mathErrors:[...document.querySelectorAll('#content-container mjx-merror,#content-container [data-mjx-error]')].map(e=>e.textContent),
          badImages:[...document.querySelectorAll('#content-container img')].filter(e=>!e.complete||!e.naturalWidth||!e.alt).map(e=>e.src),
          taskRoles:[...document.querySelectorAll('.lesson-check')].map(e=>({prompts:e.querySelectorAll(':scope > p > strong').length,help:e.querySelectorAll(':scope > details').length}))
        }));
        assert(!metrics.overflow&&!metrics.mathErrors.length&&!metrics.badImages.length);
        assert(metrics.taskRoles.every(e=>e.prompts===1&&e.help===2));
        results.push({lang,width,theme,status:response.status(),initial,missingOldIds:missing,keyboardToggles:toggles,...metrics,pageErrors});
      }
      let scrolled=0;
      for(const formula of await p.locator('#content-container mjx-container[display="true"]').all()) {
        if(!(await formula.evaluate(e=>e.scrollWidth>e.clientWidth+2))) continue;
        await formula.evaluate(e=>{e.scrollLeft=0; const previous=e.previousElementSibling; previous.tabIndex=-1; previous.focus();});
        await p.keyboard.press('Tab');
        const focused=await formula.evaluate(e=>e===document.activeElement||e.contains(document.activeElement));
        await p.keyboard.press('ArrowRight'); await p.waitForTimeout(200);
        assert(focused&&await formula.evaluate(e=>e.scrollLeft>0),'wide formula keyboard scroll'); scrolled++;
      }
      journeys.push({type:'wide-math-keyboard',lang,width,checked:scrolled});
      for(const href of await p.locator('#content-container a[href]').evaluateAll(es=>es.map(e=>e.href))) if(new URL(href).origin===base) links.add(href);
      if(lang==='zh'&&width===390) {
        for(const [id,expanded] of [['l01-indices-example',false],['l01-worked',false],['l01-independent-indices',true],['l01-later-task',true]]) {
          const box=p.locator('#'+id).locator('xpath=..');
          await box.locator('mjx-container').evaluateAll(es=>es.forEach(e=>e.scrollLeft=0));
          await box.locator('details').evaluateAll((es,v)=>es.forEach(e=>e.open=v),expanded);
          const style=await p.addStyleTag({content:'nav.site-nav,.back-to-top,.scroll-progress{visibility:hidden!important;transition:none!important}'});
          await box.screenshot({path:path.join(out,id+'-390-dark.png')}); await style.evaluate(e=>e.remove());
        }
        await p.goto(base+'/zh/alevel/as-mathematics/'); await ready(p);
        await p.locator('#content-container a[href$="/zh/alevel/as-mathematics/algebra/"]').first().click(); await ready(p);
        await p.locator('#content-container a[href="#l02"]').first().click(); assert.equal(new URL(p.url()).hash,'#l02');
        await p.locator('#content-container a[href="#l01-later"]').last().click(); assert.equal(new URL(p.url()).hash,'#l01-later');
        await p.locator('#content-container a[href="#l03"]').last().click(); assert.equal(new URL(p.url()).hash,'#l03');
        journeys.push({type:'entry-L01-quadratics-mixed-polynomials',passed:true});
        await p.locator('a[href$="/zh/alevel/as-mathematics/differentiation/#l06-scaffold"]').click(); await ready(p);
        assert(await p.locator('#l06-scaffold').count()); journeys.push({type:'future-index-application',to:p.url(),passed:true});
      }
      await p.goto(base+route+'#l01-independent-indices'); await ready(p);
      if(!(await p.locator('#siteLanguage').isVisible())) await p.locator('#siteNavToggle').click();
      await p.locator('#siteLanguage').selectOption(lang==='zh'?'en':'zh-CN');
      await p.waitForURL(u=>u.pathname!==route&&u.hash==='#l01-independent-indices',{waitUntil:'domcontentloaded'});
      journeys.push({type:'language-switch',lang,width,to:p.url(),passed:true}); await p.close();
    }
    const probe=await browser.newPage(), cache=new Map(), linkErrors=[];
    for(const href of links) {
      const u=new URL(href);
      if(!cache.has(u.pathname)) {
        const r=await probe.request.get(base+u.pathname);
        cache.set(u.pathname,{status:r.status(),text:u.pathname.endsWith('.pdf')?'':await r.text()});
      }
      const r=cache.get(u.pathname),id=decodeURIComponent(u.hash.slice(1));
      if(r.status!==200||(id&&!r.text.includes('id="'+id+'"'))) linkErrors.push({href,status:r.status(),id});
    }
    assert.deepEqual(linkErrors,[]); assert.equal(results.length,8); assert(results.every(r=>!r.pageErrors.length));
    fs.writeFileSync(path.join(out,'local-links.json'),JSON.stringify({checked:links.size,uniquePaths:cache.size,linkErrors},null,2));
    const files=[...sources.map(s=>s.file),'assets/css/reading.css','assets/css/subject.css',...sources.map(s=>'_site/'+s.file.replace(/\.md$/,'/index.html'))];
    fs.writeFileSync(path.join(out,'source-manifest.json'),JSON.stringify({baseline,sources,files:files.map(file=>({file,sha256:hash(fs.readFileSync(file))}))},null,2));
  } catch(e) { failures.push(String(e.stack)); process.exitCode=1; }
  finally {
    fs.writeFileSync(path.join(out,'browser-results.json'),JSON.stringify({base,results,journeys,failures},null,2));
    await browser.close(); console.log(JSON.stringify({views:results.length,journeys,failures}));
  }
})();
