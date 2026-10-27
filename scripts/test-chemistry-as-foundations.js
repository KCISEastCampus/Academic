// Run after the Jekyll build. Check scientific invariants and the complete bilingual AS path.
const assert = require('node:assert/strict');
const fs = require('node:fs'), path = require('node:path');
const root = path.join(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8').replace(/\r\n/g, '\n');
const close = (a,b,tolerance=1e-9) => assert(Math.abs(a-b)<=tolerance, `${a} != ${b}`);

// Use reacted amounts and conserve every atom and the total closed-system mass.
for(const [al,oxygen,product,leftAl,leftOxygen] of [[5.4,6.4,10.2,0,1.6],[10.8,6.4,13.6,3.6,0]]){
  const extent=Math.min(al/27/4,oxygen/32/3);
  close(2*extent*102,product); close(al-4*extent*27,leftAl); close(oxygen-3*extent*32,leftOxygen);
  close(al+oxygen,product+leftAl+leftOxygen);
}
close(8.43/84.3*40.3,4.03); close(4.23/4.03*100,104.96277915632754);
close(40.3/84.3*100,47.80545670225385); close(22.4/28*100,80); close((22.4+2.8)/28*100,90);
close(28/46*100,60.869565217391305);
// Separate atom-ratio inference from the molecular multiplier and measured gas amount.
close(88/44,2); close(76/76,1); close(180/30,6);
const gasAmount=(pressure,volume,temperature)=>pressure*volume/(8.31*temperature);
close(gasAmount(100000,249e-6,300),.009987966305655836);
close(.440/gasAmount(100000,249e-6,300),44.05301204819277);
close(.580/gasAmount(100000,250e-6,300),57.8376);
close(.580/gasAmount(100000,500e-6,300),28.9188);
close((.545/12)/(.364/16),1.9963369963369961);
close(.08/18.40*100,.43478260869565216);close(.06/12*100,.5);
close(((23.85-.50)+(24.40-1.00))/2,23.375);
const mean=values=>values.reduce((a,b)=>a+b,0)/values.length;
const carbonateTitres=[[.4,25.5],[1.2,26.2],[.7,25.75]].map(([start,end])=>end-start);
close(mean(carbonateTitres),25.05);close(2*.05*.025/(mean(carbonateTitres)/1000),.0998003992015968);
close(.1000*(mean([20.05,20.00])/1000)/.025,.08010);
close(.1000*.02460/2/.025,.04920);
close((1.055/106)/.250,.03981132075471698);
close((.5300/106)/.250,.02000);close(.02000*.025/.250,.002000);
close(gasAmount(100000,249e-6,300)*84.3/1.2*100,70.16546329723226);
close(mean([25.20,25.25,25.15]),25.20);close(.1000*.02520/2/.025,.05040);
close(.10/25.20*100,.3968253968253968);
close(.1000*.018/2*10*106/1.06*100,90);
assert(6/34>8/52,'The extra steam belongs in atom economy denominator');
const atomTotals=(species,coefficients)=>species.reduce((sum,atoms,i)=>{
  for(const [element,count] of Object.entries(atoms))sum[element]=(sum[element]||0)+count*coefficients[i]; return sum;
},{});
assert.deepEqual(atomTotals([{Al:1},{H:1,Cl:1}],[2,6]),atomTotals([{Al:1,Cl:3},{H:2}],[2,3]));

const tasks=source=>[...source.matchAll(/<!-- task:([^ ]+) -->([\s\S]*?)<!-- \/task:\1 -->/g)].map(([,id,body])=>[id,body.trim()]);
const headings=source=>[...source.matchAll(/<h[23] id="([^"]+)"/g)].map(m=>m[1]);
const slugs=['amount-and-equations','formulae-and-gases','solutions-and-titration','quantitative-review','atomic-structure','bonding-and-shape','structure-and-forces','energetics-and-calorimetry','hess-and-bond-enthalpies','redox-equations','periodicity','group-2','halogens','qualitative-analysis','kinetics','equilibrium','organic-foundations','alkanes','halogenoalkanes','alkenes','epoxyethane','alcohols','organic-analysis','as-review'];
assert.deepEqual(fs.readdirSync(path.join(root,'alevel/as-chemistry')).filter(x=>x.endsWith('.md')&&x!=='index.md').map(x=>x.slice(0,-3)).sort(),[...slugs].sort(),'Every AS lesson belongs to the reviewed course route');
for(const slug of slugs){
  const en=read(`alevel/as-chemistry/${slug}.md`),zh=read(`zh/alevel/as-chemistry/${slug}.md`);
  assert(tasks(en).length>0,`${slug}: tasks are traceable`);
  assert.deepEqual(tasks(en),tasks(zh),`${slug}: preserve English conditions and data`);
  assert.deepEqual(headings(en),headings(zh),`${slug}: preserve language anchors`);
  assert(zh.includes(`translation_of: /alevel/as-chemistry/${slug}/`));
  for(const prefix of ['', '/zh']){
    const route=`${prefix}/alevel/as-chemistry/${slug}/`,html=read(`_site${route}index.html`);
    assert(html.includes('class="reading-layout"'));
    assert(!/<details\b[^>]*\bopen(?:\s|>|=)/.test(html),'Help starts closed');
    assert(!/<(?:div|details)[^>]+markdown=/.test(html),'Markdown containers are processed');
    assert(!html.includes('<p>$$'),'Display math is not exposed as text');
    const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
    assert.equal(new Set(ids).size,ids.length,`${route}: duplicate ids`);
    for(const [,href] of html.matchAll(/(?:href|src)="([^"<>]+)"/g)){
      if(!/^(?:\/(?!\/)|#)/.test(href))continue;
      const url=new URL(href,`https://local.test${route}`);
      let target=`_site${decodeURIComponent(url.pathname)}`;if(target.endsWith('/'))target+='index.html';
      assert(fs.existsSync(path.join(root,target)),`${route}: missing ${href}`);
      if(url.hash)assert(read(target).includes(`id="${decodeURIComponent(url.hash.slice(1))}"`),`${route}: missing fragment ${href}`);
    }
    assert(read(`_site${prefix}/alevel/as-chemistry/index.html`).includes(`href="${route}"`),'Course index discovers lesson');
  }
}
const practical=read('alevel/as-chemistry/solutions-and-titration.md');
for(const id of ['preparation-procedure','endpoint-check','uncertainty-check','retry-readings'])assert(tasks(practical).some(([task])=>task===id),id+' independent recovery evidence');
const chineseIndex=read('_site/zh/alevel/as-chemistry/index.html');
const explicitReferences=[...chineseIndex.matchAll(/<a([^>]*href="\/alevel\/as-chemistry\/#chapter-[^>]+)>/g)];
assert.equal(explicitReferences.length,5);
for(const [,tag] of explicitReferences)assert(tag.includes('data-language-explicit'),'English reference stays explicit');
const reference=read('_site/alevel/as-chemistry/index.html');
for(const anchor of ['-unit-2-organic-chemistry','chapter-11-introduction-to-organic-chemistry','chapter-12-alkanes','chapter-13-halogenoalkanes','chapter-14-alkenes','chapter-15-alcohols'])assert(reference.includes(`id="${anchor}"`),'Legacy reference anchor '+anchor);
// Independent arithmetic spot-checks of changed-condition and cross-topic tasks.
close((24*79+25*10+26*11)/100,24.32);
close(Math.sqrt(40/20),Math.SQRT2);
close(.0240*8.31*300/100000*1e6,598.32);
close(105*4.18*2.6/1000/(5/74.6),17.0258088,1e-7);
close(.0600**2/(.0200*.0200),9);
close(.0600**2/.0200,.180);
close(3*12+8*1.0078+15.9949,60.0573);
close(2*12+4*1.0078+2*15.9949,60.0210);
close(2*12+6*1.0078+15.9949,46.0417);
close(12+2*1.0078+2*15.9949,46.0054);
close((.1800/18)/(.2180/218),10);
// Net ionic equation must conserve both atoms and charge; an atom-balanced
// redox equation with electrons on the wrong side must not pass this check.
assert.deepEqual(atomTotals([{Cr:2,O:7},{H:1},{Fe:1}],[1,14,6]),atomTotals([{Cr:1},{H:2,O:1},{Fe:1}],[2,7,6]));
assert.equal(-2+14+6*2,2*3+6*3);
assert.notEqual(-1+8,2-5,'Wrong permanganate electron side changes net charge');
// Separate electron arrows need separate SVG paths: marker-end renders only the last subpath.
for(const file of fs.readdirSync(path.join(root,'assets/img')).filter(f=>/^chemistry-as-.*\.svg$/.test(f))){
  for(const [tag] of read('assets/img/'+file).matchAll(/<path\b[^>]+>/g)){
    if(!/marker-end=/.test(tag))continue;
    const d=tag.match(/\bd="([^"]+)"/)?.[1]||'';
    assert((d.match(/[Mm]/g)||[]).length<=1,file+': each arrow has its own visible head');
  }
}
const scope=read('docs/agents/implementation-as-chemistry-full-2026-10-27.md');
const clauses=new Set([...scope.matchAll(/\b3\.[123]\.\d+\.\d+\b/g)].map(x=>x[0]));
assert.equal(clauses.size,50,'Full implementation matrix traces all 50 AS subclauses');
for(const rp of ['RP1','RP2','RP3','RP4','RP5'])assert(scope.includes(rp));
for(const [,slug,anchor] of scope.matchAll(/\.\.\/\.\.\/alevel\/as-chemistry\/([a-z0-9-]+)\.md#([a-z0-9-]+)/g)){
  for(const prefix of ['', 'zh/'])assert(read(`${prefix}alevel/as-chemistry/${slug}.md`).includes(`id="${anchor}"`),`Scope evidence resolves: ${prefix}${slug}#${anchor}`);
}
console.log('AS chemistry passed: 24 paired lessons, scientific invariants, bilingual tasks, closed feedback, local links, scope matrix and legacy anchors.');
