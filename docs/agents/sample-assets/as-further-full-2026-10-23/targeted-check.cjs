const {chromium}=require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const fs=require('node:fs');
const assert=require('node:assert/strict');
const out=process.env.ASFM_EVIDENCE_DIR || __dirname+'/runtime';fs.mkdirSync(out,{recursive:true});
(async()=>{
 const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH,headless:true});
 const results=[];
 for(const lang of ['en','zh'])for(const width of [1365,390]){
  const page=await browser.newPage({viewport:{width,height:900}});
  const route=(lang==='zh'?'/zh':'')+'/alevel/as-further-mathematics/';
  for(const mode of ['fresh','same-document']){
  for(const id of ['5-series-fp15','31-what-are-complex-numbers','11-matrix-algebra']){
   console.log('fragment',lang,width,mode,id);
   if(mode==='fresh')await page.goto('about:blank');
   await page.goto((process.env.ACADEMIC_URL || 'http://127.0.0.1:8832')+route+'#'+id,{waitUntil:'networkidle'});
   await page.evaluate(async()=>{await window.MathJax?.startup?.promise;await document.fonts.ready;});
   await page.waitForFunction(id=>{const e=document.getElementById(id);const y=e?.getBoundingClientRect().top;return e?.closest('details')?.open&&y>=-2&&y<innerHeight;},id,{timeout:15000});
   await page.waitForTimeout(700);
   const position=await page.locator('[id="'+id+'"]').evaluate(e=>({open:e.closest('details')?.open,y:e.getBoundingClientRect().top}));
   assert.equal(position.open,true);assert.ok(position.y>=-2&&position.y<900,JSON.stringify(position));
   results.push({type:'legacy-fragment',lang,width,mode,id,...position});
  }
  }
  await page.goto((process.env.ACADEMIC_URL || 'http://127.0.0.1:8832')+route,{waitUntil:'networkidle'});
  await page.keyboard.press('Control+k');
  assert.equal(await page.locator('#siteSearchDialog').evaluate(e=>e.open),true);
  await page.locator('#search-input').fill(lang==='zh'?'概率生成函数':'generating functions');
  const target=page.locator('#search-results a[href*="/as-further-mathematics/generating-functions/"]').first();
  await target.waitFor({state:'visible',timeout:15000});
  const href=await target.getAttribute('href');assert.ok(href.startsWith(route));
  const title=await target.locator('.fw-bold').textContent();
  await target.click();await page.waitForURL(u=>u.pathname===route+'generating-functions/');
  results.push({type:'search-result',lang,width,href,title});
  await page.goto((process.env.ACADEMIC_URL || 'http://127.0.0.1:8832')+route+'dimensions/#entry-check',{waitUntil:'networkidle'});
  await page.evaluate(async()=>{await window.MathJax?.startup?.promise;document.querySelector('#entry-check').closest('section').querySelectorAll('details').forEach(d=>d.open=true);});
  const dimensions=await page.locator('#entry-check').evaluate(e=>e.closest('section').querySelector('mjx-container').textContent);
  assert.ok(dimensions.includes('[a]')&&dimensions.includes('[F]'),dimensions);
  results.push({type:'dimension-brackets',lang,width,text:dimensions});
  await page.close();
 }
 await browser.close();fs.writeFileSync(out+'/targeted-results.json',JSON.stringify({results,passed:true},null,2));
 console.log('PASS:',results.length,'legacy-fragment, real-search and dimension-bracket checks');
})().catch(e=>{console.error(e);process.exit(1);});
