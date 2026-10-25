const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE);
const base='http://127.0.0.1:8837',out=path.join(__dirname,'final'),results=[];
const topics=[['algebra','l03-concept','l03-scaffold'],['integration','l08-concept','l08-scaffold'],['sequences','l11-concept','l11-scaffold'],['circles','l14-concept','l14-scaffold'],['trigonometry','l15-concept','l15-scaffold'],['exponentials-logarithms','l17-concept','l17-scaffold'],['random-variables','l19-concept','l19-scaffold'],['binomial','l21-concept','l21-scaffold'],['constant-acceleration','l22-concept','l22-scaffold'],['variable-acceleration','l23-concept','l23-scaffold'],['forces','l24-concept','l24-scaffold'],['momentum','l25-concept','l25-scaffold']];
async function ready(p){await p.waitForLoadState('networkidle');await p.evaluate(async()=>{await window.MathJax?.startup?.promise;await document.fonts.ready;});}
async function theme(p,value,width){if(await p.locator('html').getAttribute('data-bs-theme')!==value){if(!(await p.locator('#navThemeBtn').isVisible()))await p.locator('#siteNavToggle').click();await p.locator('#navThemeBtn').click();if(width<1024)await p.locator('#siteNavToggle').click();}await p.waitForTimeout(800);}
async function continuous(p,topic,start,end,width){
 for(const img of await p.locator('#content-container > p img').all()){
  await img.scrollIntoViewIfNeeded();await p.waitForFunction(e=>e.complete&&e.naturalWidth>0&&!e.hasAttribute('data-lazy-pending'),await img.elementHandle());
 }
 await p.waitForTimeout(800);
 const capture=await p.addStyleTag({content:'.site-nav,.back-to-top,.reading-progress-container{visibility:hidden!important;transition:none!important}'});
 await p.evaluate(()=>scrollTo(0,0));
 const clip=await p.evaluate(([a,b])=>{const c=document.querySelector('#content-container').getBoundingClientRect(),s=document.getElementById(a).getBoundingClientRect(),z=document.getElementById(b).closest('.lesson-check').getBoundingClientRect();return{x:c.x,y:s.y+scrollY,width:c.width,height:z.y-s.y+Math.min(z.height,200)};},[start,end]);
 const file=`${topic}-${width}-continuous.png`,shot=await p.screenshot({path:path.join(out,file),fullPage:true,clip});
 assert(Math.abs(shot.readUInt32BE(20)-clip.height)<2);await capture.evaluate(e=>e.remove());
 results.push({type:'continuous-reading',topic,width,file,height:clip.height,captureOnlyHidden:'fixed navigation, back-to-top, reading progress; no source/CSS changes'});
}
(async()=>{
 fs.mkdirSync(out,{recursive:true});
 const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH,headless:true});
 try{
  const p=await browser.newPage({viewport:{width:390,height:900},colorScheme:'light'});
  for(const [topic,start,end] of topics){
   await p.goto(base+'/zh/alevel/as-mathematics/'+topic+'/');await ready(p);await theme(p,'light',390);
   await continuous(p,topic,start,end,390);
  }
  for(const [topic,identity] of [['constant-acceleration','l22-independent'],['forces','l24-independent']]){
   await p.goto(base+'/zh/alevel/as-mathematics/'+topic+'/');await ready(p);
   const box=p.locator('#'+identity).locator('xpath=..'),solution=box.locator('details').last();
   await solution.locator('summary').focus();await p.keyboard.press('Enter');assert(await solution.evaluate(e=>e.open));
   const img=solution.locator('img');await img.scrollIntoViewIfNeeded();await p.waitForFunction(e=>e.complete&&e.naturalWidth>0&&!e.hasAttribute('data-lazy-pending'),await img.elementHandle());await p.waitForTimeout(800);
   const metrics=await img.evaluate(e=>({width:e.clientWidth,naturalWidth:e.naturalWidth,alt:e.alt}));
   const svg=fs.readFileSync(path.join(__dirname,'../../../../alevel/as-mathematics/assets',topic==='forces'?'car-trailer-check.svg':'motion-check.svg'),'utf8');
   const font=Number(svg.match(/font-size="(\d+)"/)[1]),viewWidth=Number(svg.match(/viewBox="0 0 (\d+)/)[1]);
   assert(font*metrics.width/viewWidth>=12,'graph labels at actual mobile width');await img.screenshot({path:path.join(out,topic+'-390-check-graph.png')});
   results.push({type:'closed-answer-graph',topic,identity,...metrics});
  }
  const seen=new Set();
  for(const topic of ['algebra','sequences','trigonometry','random-variables','binomial']){
   await p.goto(base+'/zh/alevel/as-mathematics/'+topic+'/');await ready(p);
   await p.evaluate(()=>document.querySelectorAll('#content-container details').forEach(e=>e.open=true));
   const wide=p.locator('#content-container mjx-container[display="true"]');
   for(let i=0;i<await wide.count();i++){
    const e=wide.nth(i),m=await e.evaluate(e=>({text:e.textContent,width:e.clientWidth,content:e.querySelector('mjx-math')?.getBoundingClientRect().width}));
    if(m.content<=m.width+6||seen.has(topic)||!m.width)continue;
    seen.add(topic);await e.scrollIntoViewIfNeeded();
    await e.evaluate(e=>{e.scrollLeft=0;const before=e.previousElementSibling;before.dataset.savedTab=before.getAttribute('tabindex')??'';before.setAttribute('tabindex','-1');before.focus();});
    let focused=false;for(let j=0;j<8;j++){await p.keyboard.press('Tab');if(await e.evaluate(e=>document.activeElement===e)){focused=true;break;}}
    assert(focused,topic+': keyboard reaches wide formula');await p.keyboard.press('ArrowRight');await p.waitForTimeout(150);
    const moved=await e.evaluate(e=>e.scrollLeft>0);assert(moved,topic+': keyboard moves local formula');
    await e.evaluate(e=>{const before=e.previousElementSibling;if(before.dataset.savedTab==='')before.removeAttribute('tabindex');else before.setAttribute('tabindex',before.dataset.savedTab);delete before.dataset.savedTab;});
    results.push({type:'keyboard-scroll',topic,focused,moved,width:m.width,content:m.content});
   }
  }
  await p.goto(base+'/zh/alevel/as-mathematics/');await ready(p);
  await p.locator('#content-container a[href$="/differentiation/"]').first().click();await ready(p);
  assert(p.url().includes('/differentiation/'));
  const power=p.locator('#l06-independent-powers').locator('xpath=..');assert.equal(await power.locator('details[open]').count(),0);
  await power.locator('summary').first().focus();await p.keyboard.press('Enter');assert(await power.locator('details').first().evaluate(e=>e.open));
  await p.locator('a[href$="/algebra/#l01-indices"]').last().click();await ready(p);assert(p.url().endsWith('/algebra/#l01-indices'));
  results.push({type:'journey',name:'entry → derivative attempt → keyboard hint → precise power recovery',passed:true,end:p.url()});
  await p.goto(base+'/zh/alevel/as-mathematics/#mixed-statistics');await ready(p);
  const mixed=p.locator('#mixed-statistics').locator('xpath=..');await mixed.locator('details').last().locator('summary').click();
  await mixed.locator('a[href$="/probability/#l18-worked"]').click();await ready(p);assert(p.url().endsWith('/probability/#l18-worked'));
  await p.locator('a[href="#l18-retry-conditional"]').last().click();assert(p.url().endsWith('#l18-retry-conditional'));
  results.push({type:'journey',name:'mixed statistics → conditional denominator repair → new retry',passed:true,end:p.url()});
  await p.goto(base+'/zh/alevel/as-mathematics/variable-acceleration/');await ready(p);
  const conditions=p.locator('#l23-independent-conditions').locator('xpath=..');await conditions.locator('details').last().locator('summary').focus();await p.keyboard.press('Enter');assert(await conditions.locator('details').last().evaluate(e=>e.open));
  await p.locator('a[href$="/forces/"]').last().click();await ready(p);assert(p.url().endsWith('/forces/'));
  await p.locator('a[href$="#mixed-mechanics"]').click();await ready(p);assert(p.url().endsWith('/#mixed-mechanics'));
  results.push({type:'journey',name:'velocity/position attempt → keyboard solution → next lesson → mixed mechanics',passed:true,end:p.url()});
  for(const [topic,id] of [['algebra','l03-retry-division'],['sequences','l10-retry-threshold'],['trigonometry','l15-retry-triangle'],['trigonometry','l16-retry-restrictions'],['probability','l18-retry-conditional'],['binomial','l21-retry-model'],['momentum','l25-retry-separation'],['forces','l24-retry-friction']]){
   await p.goto(base+'/zh/alevel/as-mathematics/'+topic+'/');await ready(p);
   await p.locator('a[href="#'+id+'"]').last().click();assert(p.url().endsWith('#'+id));
   const box=p.locator('#'+id).locator('xpath=..');assert.equal(await box.locator('details[open]').count(),0);
   for(const summary of await box.locator('summary').all()){await summary.focus();await p.keyboard.press('Enter');assert(await summary.evaluate(e=>e.parentElement.open));}
   results.push({type:'repaired-retry',topic,id,keyboardHelp:true,passed:true});
  }
  for(const [topic,id] of [['random-variables','l19-retry'],['forces','l24-independent-friction'],['index','mixed-further']]){
   await p.goto(base+'/zh/alevel/as-mathematics/'+(topic==='index'?'':topic+'/'));await ready(p);
   const box=p.locator('#'+id).locator('xpath=..');
   if(topic==='random-variables')assert.equal(await box.locator(':scope > p a[href="#l19-worked"]').count(),1);
   await box.locator('details').last().locator('summary').focus();await p.keyboard.press('Enter');
   const capture=await p.addStyleTag({content:'.site-nav,.back-to-top,.reading-progress-container{visibility:hidden!important;transition:none!important}'});
   await box.screenshot({path:path.join(out,id+'-390-expanded.png')});await capture.evaluate(e=>e.remove());
   results.push({type:'repaired-task-reading',topic,id,keyboardSolution:true});
  }
  await p.setViewportSize({width:1365,height:900});await p.goto(base+'/zh/alevel/as-mathematics/circles/');await ready(p);await theme(p,'light',1365);await continuous(p,'circles','l14-concept','l14-scaffold',1365);
  await p.setViewportSize({width:390,height:900});await p.goto(base+'/zh/alevel/as-mathematics/random-variables/');await ready(p);await theme(p,'dark',390);await continuous(p,'random-variables-dark','l19-concept','l19-scaffold',390);
  fs.writeFileSync(path.join(out,'targeted-results.json'),JSON.stringify(results,null,2));
  console.log(JSON.stringify({checks:results.length,continuous:results.filter(r=>r.type==='continuous-reading').length,keyboard:results.filter(r=>r.type==='keyboard-scroll').length,journeys:3,passed:true}));
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
