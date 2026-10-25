const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE);
(async()=>{
 const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH,headless:true});
 try{
  const page=await browser.newPage({viewport:{width:390,height:900},colorScheme:'light'});
  await page.goto('http://127.0.0.1:8835/zh/alevel/as-mathematics/algebra/',{waitUntil:'networkidle'});
  await page.evaluate(async()=>{await window.MathJax?.startup?.promise;await document.fonts.ready;});
  await page.screenshot({path:path.join(__dirname,'entry-390-initial.png')});
  await page.locator('#siteNavToggle').click();await page.locator('#navThemeBtn').click();await page.locator('#siteNavToggle').click();
  await page.waitForTimeout(800);
  const captureStyle=await page.addStyleTag({content:'.site-nav,.site-nav *,.back-to-top,.scroll-progress{visibility:hidden!important;transition:none!important}'});
  await page.evaluate(()=>scrollTo(0,0));
  const clip=await page.evaluate(()=>{
   const a=document.getElementById('l01-indices').getBoundingClientRect();
   const z=document.getElementById('l01-scaffold').parentElement.getBoundingClientRect();
   const c=document.getElementById('content-container').getBoundingClientRect();
   return{x:c.x,y:a.y+scrollY,width:c.width,height:z.y-a.y};
  });
  const shot=await page.screenshot({path:path.join(__dirname,'continuous-indices-390-dark.png'),fullPage:true,clip});
  assert(Math.abs(shot.readUInt32BE(20)-clip.height)<2);
  const captured=[];
  for(const [id,open] of [['l01-indices-example',false],['l01-worked',false],['l01-independent-indices',false],['l01-independent',false],['l01-independent',true],['l01-retry',true],['l01-later-task',true]]){
   await page.evaluate(()=>document.querySelectorAll('#content-container details').forEach(e=>e.open=false));
   const box=page.locator('#'+id).locator('xpath=..');
   await box.locator('details').evaluateAll((es,v)=>es.forEach(e=>e.open=v),open);
   await box.locator('mjx-container').evaluateAll(es=>es.forEach(e=>e.scrollLeft=0));
   const name=id+'-390-dark'+(id==='l01-independent'||id==='l01-independent-indices'?(open?'-expanded':'-closed'):'')+'.png';
   await box.screenshot({path:path.join(__dirname,name)});captured.push({id,open,file:name});
  }
  await captureStyle.evaluate(e=>e.remove());
  fs.writeFileSync(path.join(__dirname,'reading-captures.json'),JSON.stringify({width:390,continuousHeight:clip.height,captured,captureOnlyHidden:'fixed navigation and its children, back-to-top and scroll progress; no source/style changes'},null,2));
  console.log(JSON.stringify({continuousHeight:clip.height,captures:captured.length,passed:true}));
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
