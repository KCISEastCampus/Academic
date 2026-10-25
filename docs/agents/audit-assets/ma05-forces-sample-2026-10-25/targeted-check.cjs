const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const {chromium}=require('C:/Users/mi/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const out='D:/GitHub/Academic/docs/agents/audit-assets/ma05-forces-sample-2026-10-25/final';
const url='http://127.0.0.1:8838/zh/alevel/a2-mathematics/mechanics/forces-equilibrium-and-friction/';
(async()=>{
 const b=await chromium.launch({executablePath:'C:/Users/mi/AppData/Local/ms-playwright/chromium-1234/chrome-win64/chrome.exe',headless:true});
 const page=await b.newPage({viewport:{width:390,height:900}}),results={captures:[],recovery:[]};
 try{
  await page.goto(url,{waitUntil:'networkidle'});
  await page.evaluate(async()=>{await window.MathJax.startup.promise;await document.fonts.ready;});
  const css=await page.addStyleTag({content:'.site-nav,.back-to-top,.reading-progress-container,.scroll-progress{visibility:hidden!important}'});
  for(const [start,end,file] of [['#force-diagrams','#the-resultant-of-coplanar-forces','first-concept-to-attempt-390.png'],['#slope-components','#friction-and-limiting-equilibrium','slope-to-example-390.png']]){
   await page.evaluate(()=>scrollTo(0,0));const a=await page.locator(start).boundingBox(),z=await page.locator(end).boundingBox();
   const clip={x:20,y:Math.floor(a.y),width:350,height:Math.ceil(z.y-a.y)};
   await page.screenshot({path:path.join(out,file),fullPage:true,clip});
   const buf=fs.readFileSync(path.join(out,file));assert.equal(buf.readUInt32BE(20),clip.height);
   results.captures.push({file,clip,pngHeight:clip.height});
  }
  await css.evaluate(e=>e.remove());
  for(const target of ['#slope-components','#example-7--an-angled-pull-reduces-the-reaction','#q7--compare-an-angled-pull-and-an-angled-push']){
   await page.goto(url+'#independent-check',{waitUntil:'networkidle'});
   const link=page.locator('a[href="'+target+'"]').last();await link.click();
   assert.equal(new URL(page.url()).hash,target);results.recovery.push({target,actualClick:true});
  }
  results.passed=true;fs.writeFileSync(path.join(out,'targeted-results.json'),JSON.stringify(results,null,2));
  console.log(JSON.stringify(results));
 }finally{await b.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
