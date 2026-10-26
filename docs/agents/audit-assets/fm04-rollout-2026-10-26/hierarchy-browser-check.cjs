const {chromium}=require('C:/Users/mi/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const out=path.join(__dirname,'final'),origin='http://127.0.0.1:8840';
let activeBrowser;
const routes=['/','/alevel/','/alevel/a2-mathematics-overview/','/alevel/a2-further-mathematics-overview/','/alevel/a2-mathematics/statistics/','/alevel/a2-mathematics/mechanics/','/alevel/a2-further-mathematics/','/alevel/a2-further-mathematics/statistics/'];
(async()=>{fs.mkdirSync(out,{recursive:true});const browser=activeBrowser=await chromium.launch({headless:true,executablePath:'C:/Users/mi/AppData/Local/ms-playwright/chromium-1234/chrome-win64/chrome.exe'}),rows=[],journeys=[];
for(const prefix of ['', '/zh'])for(const route of routes)for(const width of [390,1365])for(const theme of ['light','dark']){
const context=await browser.newContext({viewport:{width,height:900},colorScheme:theme});await context.addInitScript(t=>localStorage.setItem('theme',t),theme);
const page=await context.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));await page.route('**/hitscounter.dev/**',r=>r.abort());
const res=await page.goto(origin+prefix+route,{waitUntil:'networkidle'});await page.evaluate(async()=>{await window.MathJax?.startup?.promise;await document.fonts.ready;});
const data=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth-innerWidth,crumbs:[...document.querySelectorAll('.site-breadcrumb li')].map(e=>e.textContent.trim()),broken:[...document.querySelectorAll('main img')].filter(e=>!e.complete||!e.naturalWidth).length}));
const pass=res.status()===200&&data.overflow<=1&&!data.broken&&!errors.length;rows.push({url:page.url(),width,theme,status:res.status(),...data,errors,pass});
if(prefix&&theme==='light'&&['/alevel/a2-mathematics-overview/','/alevel/a2-further-mathematics-overview/','/alevel/a2-mathematics/statistics/'].includes(route)){await page.waitForTimeout(400);await page.screenshot({path:path.join(out,route.split('/').filter(Boolean).join('-')+'-'+width+'.png')});}
if(prefix&&route==='/'&&width===390&&theme==='dark'){await page.locator('#mathematics-units').scrollIntoViewIfNeeded();await page.waitForTimeout(400);await page.screenshot({path:path.join(out,'home-grouped-390-dark.png')});}
await context.close();}
const page=await browser.newPage();await page.route('**/hitscounter.dev/**',r=>r.abort());
for(const prefix of ['', '/zh']){
await page.goto(origin+prefix+'/',{waitUntil:'networkidle'});
await page.locator('a[href$="'+prefix+'/alevel/a2-further-mathematics-overview/"]').first().click();await page.waitForLoadState('networkidle');
assert(page.url().endsWith('/a2-further-mathematics-overview/'));
await page.locator('#content-container a[href$="/statistics/"]').click();await page.waitForLoadState('networkidle');
await page.locator('#content-container a[href$="/statistics/variance-tests/"]').first().click();await page.waitForLoadState('networkidle');
const links=await page.locator('.site-breadcrumb a').evaluateAll(es=>es.map(e=>new URL(e.href).pathname));
assert.deepEqual(links,[prefix+'/',prefix+'/alevel/',prefix+'/alevel/a2-further-mathematics-overview/',prefix+'/alevel/a2-further-mathematics/statistics/']);
await page.locator('.site-breadcrumb a[href$="/statistics/"]').click();await page.waitForLoadState('networkidle');
journeys.push({kind:'home-subject-unit-lesson-unit',language:prefix||'en',pass:page.url().endsWith('/statistics/')});}
await page.goto(origin+'/zh/alevel/a2-mathematics-overview/#statistics',{waitUntil:'networkidle'});await page.locator('#siteLanguage').selectOption('en');await page.waitForURL(u=>u.pathname==='/alevel/a2-mathematics-overview/'&&u.hash==='#statistics');journeys.push({kind:'hub-language-and-hash',pass:true});
// Expanded new answers: verify the repaired sampling table and independent tests on mobile.
await page.setViewportSize({width:390,height:900});
for(const [slug,id] of [['estimators','retry-b'],['standard-mgfs','task-e'],['variance-tests','task-ratio'],['comparing-means','task-c']]){
await page.goto(origin+'/zh/alevel/a2-further-mathematics/statistics/'+slug+'/#'+id,{waitUntil:'networkidle'});await page.evaluate(async()=>await window.MathJax?.startup?.promise);
const task=page.locator('section.lesson-check').filter({has:page.locator('#'+id)});await task.locator('summary').last().focus();await page.keyboard.press('Enter');
assert(await task.locator('details').last().getAttribute('open')!==null);if(slug==='estimators')assert.equal(await task.locator('table').count(),1);
await page.addStyleTag({content:'nav.site-nav,.back-to-top,.reading-progress{visibility:hidden!important}*{transition:none!important}'});await task.screenshot({path:path.join(out,slug+'-'+id+'-390-expanded.png')});
journeys.push({kind:'new-answer-keyboard-and-reading',slug,id,pass:true});}
fs.writeFileSync(path.join(out,'hierarchy-browser-results.json'),JSON.stringify({rows,journeys},null,2));await browser.close();console.log(JSON.stringify({views:rows.length,failures:rows.filter(x=>!x.pass),journeys}));if(rows.some(x=>!x.pass))process.exitCode=1;
})().catch(async e=>{console.error(e);await activeBrowser?.close();process.exitCode=1});
