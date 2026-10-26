const {chromium}=require('C:/Users/mi/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const dir=__dirname,out=path.join(dir,'final'),origin='http://127.0.0.1:8841',base='/alevel/a2-further-mathematics/statistics/';
let browser;
(async()=>{browser=await chromium.launch({headless:true,executablePath:'C:/Users/mi/AppData/Local/ms-playwright/chromium-1234/chrome-win64/chrome.exe'});
const rows=[],rawMathScan=[];
for(const prefix of ['', '/zh'])for(const width of [390,1365])for(const theme of ['light','dark']){
const context=await browser.newContext({viewport:{width,height:900},colorScheme:theme});await context.addInitScript(t=>localStorage.setItem('theme',t),theme);
const page=await context.newPage();await page.route('**/hitscounter.dev/**',r=>r.abort());
const response=await page.goto(origin+prefix+base+'variance-tests/',{waitUntil:'networkidle'});await page.evaluate(async()=>{await window.MathJax?.startup?.promise;await document.fonts.ready;});
const initial=await page.locator('#content-container').evaluate(m=>({open:m.querySelectorAll('details[open]').length,nested:m.querySelectorAll('.lesson-check .lesson-check').length,tasks:m.querySelectorAll('.lesson-check').length,examples:m.querySelectorAll('.worked-example').length}));
const summary=page.locator('#content-container .lesson-check summary').first();await summary.focus();await page.keyboard.press('Enter');const keyboard=await summary.evaluate(n=>n.parentElement.open);await page.keyboard.press('Enter');
await page.locator('#content-container details').evaluateAll(es=>es.forEach(e=>e.open=true));
const data=await page.evaluate(()=>({mathErrors:document.querySelectorAll('mjx-merror,[data-mjx-error]').length,overflow:document.documentElement.scrollWidth-innerWidth,rawMath:document.querySelector('#content-container').innerText.includes('$'),brokenImages:[...document.querySelectorAll('#content-container img')].filter(i=>!i.complete||!i.naturalWidth).length,quantileRendered:!![...document.querySelectorAll('#content-container p')].find(p=>p.textContent.includes('quantile')||p.textContent.includes('累计概率'))?.nextElementSibling?.matches('mjx-container, p:has(mjx-container)')}));
const pass=response.status()===200&&!initial.open&&!initial.nested&&keyboard&&!data.mathErrors&&data.overflow<=1&&!data.rawMath&&!data.brokenImages&&data.quantileRendered;
rows.push({url:page.url(),width,theme,status:response.status(),...initial,...data,keyboard,errors:[],pass});assert(pass,JSON.stringify(rows.at(-1)));
if(prefix&&width===390&&theme==='light'){await page.locator('#content-container details').evaluateAll(es=>es.forEach(e=>e.open=false));await page.addStyleTag({content:'nav.site-nav,.back-to-top,.reading-progress-container{visibility:hidden!important}*{transition:none!important}'});await page.evaluate(()=>scrollTo(0,0));const b=await page.locator('#content-container > h2').first().boundingBox();await page.screenshot({path:path.join(out,'variance-tests-390-reading.png'),fullPage:true,clip:{x:0,y:Math.max(0,b.y),width:390,height:1800}});}
await context.close();}
const page=await browser.newPage();await page.route('**/hitscounter.dev/**',r=>r.abort());
for(const prefix of ['', '/zh'])for(const slug of ['', 'moment-generating-functions/','standard-mgfs/','estimators/','confidence-intervals/','test-power/','comparing-means/','paired-tests/','variance-tests/','goodness-of-fit/','association-tests/']){
await page.goto(origin+prefix+base+slug,{waitUntil:'networkidle'});await page.evaluate(async()=>{await window.MathJax?.startup?.promise;document.querySelectorAll('#content-container details').forEach(d=>d.open=true);});
const raw=await page.locator('#content-container').innerText();const pass=!raw.includes('$');rawMathScan.push({url:page.url(),pass});assert(pass,'Unrendered math: '+page.url());}
const file=path.join(out,'browser-results.json'),all=JSON.parse(fs.readFileSync(file,'utf8'));
all.rows=all.rows.filter(r=>!r.url.endsWith('/variance-tests/')).concat(rows);assert.equal(all.rows.length,88);fs.writeFileSync(file,JSON.stringify(all,null,2));
fs.writeFileSync(path.join(out,'formula-followup.json'),JSON.stringify({rows,rawMathScan,inheritance:'80 unchanged content views retained; final 8 variance views replaced after formatting-only quantile repair.'},null,2));
await browser.close();console.log(JSON.stringify({recheckedViews:rows.length,rawFormulaScans:rawMathScan.length,failures:0}));
})().catch(async e=>{console.error(e);await browser?.close();process.exitCode=1});
