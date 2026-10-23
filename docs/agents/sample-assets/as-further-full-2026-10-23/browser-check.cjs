const {chromium}=require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const fs=require('node:fs');const path=require('node:path');const assert=require('node:assert/strict');
const root=process.env.ACADEMIC_ROOT || process.cwd();const out=process.env.ASFM_EVIDENCE_DIR || path.join(__dirname,'runtime');fs.mkdirSync(out,{recursive:true});
const slugs=process.argv.slice(2);if(!slugs.length)slugs.push('index',...fs.readdirSync(root+'/alevel/as-further-mathematics').filter(x=>x.endsWith('.md')&&x!=='index.md').map(x=>x.slice(0,-3)));
const results=[];const failures=[];const links=new Set();
(async()=>{const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH,headless:true});
for(const slug of slugs)for(const lang of ['en','zh'])for(const width of [1365,390]){
const prefix=lang==='zh'?'/zh':'';const route=prefix+'/alevel/as-further-mathematics/'+(slug==='index'?'':slug+'/');
const page=await browser.newPage({viewport:{width,height:900}});const errors=[];page.on('pageerror',e=>errors.push(e.message));
try{
const response=await page.goto((process.env.ACADEMIC_URL || 'http://127.0.0.1:8832')+route,{waitUntil:'networkidle'});assert.equal(response.status(),200);
await page.evaluate(async()=>{await window.MathJax?.startup?.promise;await document.fonts.ready;});
const initial=await page.evaluate(()=>({open:document.querySelectorAll('#content-container details[open]').length,tasks:document.querySelectorAll('#content-container .lesson-check').length,examples:document.querySelectorAll('#content-container .worked-example').length}));assert.equal(initial.open,0);
const tasks=await page.locator('.lesson-check').evaluateAll(ss=>ss.map(s=>({details:s.querySelectorAll(':scope > details').length,nested:s.querySelectorAll('section').length,prompt:!!s.querySelector(':scope > p')})));
for(const t of tasks){assert.equal(t.details,2);assert.equal(t.nested,0);assert.equal(t.prompt,true);}assert.ok(tasks.length>0);
const summary=page.locator('#content-container .lesson-check summary').first();await summary.focus();await page.keyboard.press('Enter');assert.ok(await summary.evaluate(s=>s.parentElement.open));await page.keyboard.press('Enter');assert.equal(await summary.evaluate(s=>s.parentElement.open),false);
// Trigger the real lazy image loader and inspect the loaded image, not its placeholder.
for(const img of await page.locator('#content-container img').all()){
if(await img.evaluate(e=>!!e.closest('details:not([open])')))continue;
await img.scrollIntoViewIfNeeded();await page.waitForFunction(e=>e.complete&&e.naturalWidth>0&&!e.hasAttribute('data-lazy-pending')&&Number(getComputedStyle(e).opacity)===1,await img.elementHandle(),{timeout:15000});}
const target=slug==='index'?'exit-check':'practice';if(width<1024)await page.locator('#tocToggle').click();await page.locator(`#toc a[href="#${target}"]`).click();await page.waitForFunction(h=>location.hash==='#'+h,target);
const change=page.locator('select#siteLanguage');if(width<1024&&!(await change.isVisible()))await page.locator('#siteNavToggle').click();await change.selectOption(lang==='en'?'zh-CN':'en');await page.waitForURL(u=>u.pathname.startsWith(lang==='en'?'/zh/alevel/':'/alevel/'));assert.equal(new URL(page.url()).hash,'#'+target);
await page.goto((process.env.ACADEMIC_URL || 'http://127.0.0.1:8832')+route,{waitUntil:'networkidle'});await page.evaluate(async()=>{await window.MathJax?.startup?.promise;await document.fonts.ready;document.querySelectorAll('#content-container .lesson-check details').forEach(d=>d.open=true);});
for(const img of await page.locator('#content-container img').all()){if(await img.evaluate(e=>!!e.closest('details:not([open])')))continue;await img.scrollIntoViewIfNeeded();await page.waitForFunction(e=>e.complete&&e.naturalWidth>0&&!e.hasAttribute('data-lazy-pending')&&Number(getComputedStyle(e).opacity)===1,await img.elementHandle(),{timeout:15000});}
for(const theme of ['light','dark']){
if(await page.locator('html').getAttribute('data-bs-theme')!==theme){if(width<1024&&!(await page.locator('#navThemeBtn').isVisible()))await page.locator('#siteNavToggle').click();await page.locator('#navThemeBtn').click();if(width<1024&&await page.locator('#siteNavToggle').getAttribute('aria-expanded')==='true')await page.locator('#siteNavToggle').click();}
const metrics=await page.evaluate(()=>{
const c=document.querySelector('#content-container');const visible=e=>!e.closest('details:not([open])')&&e.getClientRects().length>0;
const equations=[...c.querySelectorAll('mjx-container[display="true"]')].filter(visible).map(e=>({width:e.clientWidth,math:e.querySelector('mjx-math')?.getBoundingClientRect().width||0,text:e.getAttribute('aria-label')||e.textContent.slice(0,160)}));
return {overflow:document.documentElement.scrollWidth>innerWidth+1,mathErrors:c.querySelectorAll('mjx-merror,[data-mjx-error]').length,undefinedCommands:[...c.querySelectorAll('mjx-mtext')].filter(visible).filter(e=>getComputedStyle(e).color==='rgb(255, 0, 0)'||/\\[a-zA-Z0-9]/.test(e.textContent)).map(e=>e.textContent),math:c.querySelectorAll('mjx-container').length,longEquations:equations.filter(e=>e.math>e.width+2),badImages:[...c.querySelectorAll('img')].filter(visible).filter(e=>!e.complete||!e.naturalWidth||e.hasAttribute('data-lazy-pending')).map(e=>e.getAttribute('src')),missingAlt:[...c.querySelectorAll('img')].filter(visible).filter(e=>!e.alt).length};});
results.push({slug,lang,width,theme,initial,...metrics,pageErrors:errors});
if(metrics.overflow||metrics.mathErrors||metrics.undefinedCommands.length||metrics.badImages.length||metrics.longEquations.length||metrics.missingAlt||errors.length)failures.push({slug,lang,width,theme,...metrics,pageErrors:errors});
if(lang==='zh'&&(theme==='light'||width===390)){
const selector=slug==='index'?'#learning-route':theme==='dark'?'#'+target:(width===390?'#model':'.worked-example');const el=page.locator(selector).first();
if(await el.count()){await el.evaluate(e=>scrollTo(0,e.getBoundingClientRect().top+scrollY-85));await page.screenshot({path:path.join(out,`${slug}-${lang}-${width}-${theme}.png`)});}
}
}
for(const h of await page.locator('#content-container a[href]').evaluateAll(es=>es.map(e=>e.href)))if(new URL(h).origin===(process.env.ACADEMIC_URL || 'http://127.0.0.1:8832'))links.add(h);
console.log('checked',slug,lang,width);
}catch(e){failures.push({slug,lang,width,error:String(e)});console.log('FAILED',slug,lang,width,String(e));}
await page.close();fs.writeFileSync(path.join(out,'browser-results.json'),JSON.stringify({results,failures},null,2));
}
// Every local target and fragment in the upgraded pages, including archived bookmarks.
const probe=await browser.newPage();const linkErrors=[];const htmlCache=new Map();
for(const h of links){const u=new URL(h);if(!htmlCache.has(u.pathname)){const r=await probe.request.get(u.origin+u.pathname);htmlCache.set(u.pathname,{status:r.status(),body:await r.text()});}const r=htmlCache.get(u.pathname);if(r.status!==200){linkErrors.push({h,status:r.status});continue;}if(u.hash&&!u.pathname.endsWith('.pdf')){const id=decodeURIComponent(u.hash.slice(1));if(!r.body.includes('id="'+id+'"')&&!r.body.includes("id='"+id+"'"))linkErrors.push({h,missing:id});}}
fs.writeFileSync(path.join(out,'local-links.json'),JSON.stringify({checked:links.size,linkErrors},null,2));await browser.close();console.log(JSON.stringify({views:results.length,failures:failures.length,links:links.size,linkErrors}));process.exitCode=failures.length||linkErrors.length?1:0;
})().catch(e=>{console.error(e);process.exitCode=1;});
