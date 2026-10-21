// Run after Jekyll build: preserve equations, English prompts and language-switch anchors.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const slugs = ['index', 'circular-motion', 'simple-harmonic-motion', 'gravitational-fields-and-satellites', 'electric-fields', 'capacitance', 'capacitor-charge-and-discharge', 'radioactive-decay', 'magnetic-fields-and-moving-charges', 'electromagnetic-induction', 'alternating-current', 'transformers-and-power-transmission', 'quick-reference', 'thermal-physics', 'nuclear-radius', 'mass-and-binding-energy'];
const math = /\$\$[\s\S]*?\$\$|\$[^$\n]+\$/g;
const read = file => fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
const ids = html => [...html.matchAll(/<h[1-4]\b[^>]*id="([^"]+)"/g)].map(m => m[1]);
// Source labels can be translated; the English task and supplied data must stay identical.
const promptText = text => text.trim().replace(/^\*(?:Adapted from|Self-written|Further application)[^\n]*\*\s*\n+/, '').replace(/<img\b[^>]*>\s*/g, '').trim();
for (const slug of slugs) {
  const url = '/alevel/a2-physics/' + (slug === 'index' ? '' : slug + '/');
  const en = read(`alevel/a2-physics/${slug}.md`), zh = read(`zh/alevel/a2-physics/${slug}.md`);
  const enHtml = read(path.join('_site', url, 'index.html')), zhHtml = read(path.join('_site', '/zh' + url, 'index.html'));
  assert(zh.includes(`translation_of: ${url}\n`), slug + ': counterpart metadata');
  assert.match(zhHtml, /<html[^>]*lang="zh-CN"/);
  assert.match(zhHtml, /hreflang="en"/); assert.match(enHtml, /hreflang="zh-CN"/);
  assert(zhHtml.includes(`href="${url}"`) && enHtml.includes(`href="/zh${url}"`), slug + ': language switches');
  assert.deepEqual(zh.match(math), en.match(math), slug + ': formulas');
  assert.deepEqual(ids(zhHtml), ids(enHtml), slug + ': heading anchors');
  assert.equal((zh.match(/<details/g) || []).length, (en.match(/<details/g) || []).length, slug + ': disclosures');
  assert.deepEqual([...zh.matchAll(/<img[^>]+src="([^"]+)"/g)].map(m => m[1]), [...en.matchAll(/<img[^>]+src="([^"]+)"/g)].map(m => m[1]), slug + ': figures');
  for (const m of en.matchAll(/^#{2,4} (?:Example \d+:|Checkpoint:).*\n\n(?:\*(?:Adapted from|Self-written|Further application)[^\n]*\n\n)?([^\n]+)/gm)) assert(zh.includes(m[1]), slug + ': English example prompt');
  for (const m of en.matchAll(/^### Question [^\n]+\n([\s\S]*?)(?=<details)/gm)) assert(zh.includes(promptText(m[1])), slug + ': English practice prompt');
  for (const m of zh.matchAll(/\]\((\/[^)]+)\)|<img[^>]+src="(\/[^" ]+)"/g)) {
    const [target, fragment] = (m[1] || m[2]).split('#');
    const file = path.join('_site', target, target.endsWith('/') ? 'index.html' : '');
    assert(fs.existsSync(file), slug + ': missing ' + target);
    if (fragment) assert(read(file).includes(`id="${decodeURIComponent(fragment)}"`), slug + ': missing anchor ' + fragment);
  }
  assert(zhHtml.includes('href="/zh/alevel/a2-physics/" data-ui="physics">A2 物理</a>') || slug === 'index', slug + ': Chinese breadcrumb');
  for (const formula of zh.match(math) || []) assert(!formula.includes('|'), slug + ': TeX pipe in Markdown');
  const recordIds = slug === 'thermal-physics' ? ['data-specific-heat', 'data-boyle', 'data-charles'] : slug === 'capacitor-charge-and-discharge' ? ['data-rc-records'] : slug === 'radioactive-decay' ? ['model-constant-probability', 'checkpoint-decay-graphs', 'data-decay-records', 'challenge-decay-records', 'retry-counting'] : slug === 'simple-harmonic-motion' ? ['retry-resonance', 'data-pendulum-records'] : slug === 'magnetic-fields-and-moving-charges' ? ['data-magnetic-balance'] : slug === 'electromagnetic-induction' ? ['data-flux-graph'] : slug === 'alternating-current' ? ['data-scope-records'] : slug === 'transformers-and-power-transmission' ? ['data-transformer-efficiency'] : slug === 'nuclear-radius' ? ['data-radius-records'] : slug === 'mass-and-binding-energy' ? ['data-binding-records'] : [];
  for (const id of recordIds) {
    const prompt = promptText(en.split(`{#${id}}`)[1].split('<details')[0]);
    assert(zh.replace(/<img\b[^>]*>\s*/g, '').includes(prompt), id + ': preserve English task and raw data');
  }
  if (slug === 'thermal-physics') {
    for (const html of [enHtml, zhHtml]) {
      assert.match(html, /<h2[^>]*id="latent-heat-measurement"/);
      assert.match(html, /<h3[^>]*id="example-latent-heat"/);
      const energyLines = html.split('\n').filter(line => line.includes('overline{E}'));
      assert.equal(energyLines.length, 3);
      assert(energyLines.every(line => !/<\/?em>/.test(line)), 'energy formulas must not be split by Markdown emphasis');
    }
  }
  if (slug === 'quick-reference') {
    for (const html of [enHtml, zhHtml]) {
      for (const id of ['similarities', 'differences', 'how-electric-and-magnetic-fields-are-connected', 'charged-particles-in-electric-and-magnetic-fields', 'velocity-selector-electric--magnetic-fields-combined']) {
        assert(html.includes(`<h3 id="${id}"`), id + ': child heading level');
        assert(html.includes(`href="#${id}"`), id + ': reachable comparison subsection');
      }
    }
    assert(!zh.includes('仅在重力作用下的绳系质点'));
    assert.equal((en.match(/original source not yet traced/g) || []).length, 7);
    assert.equal((zh.match(/原始来源待考/g) || []).length, 7);
  }
}
console.log(`PASS: ${slugs.length} physics page pairs; formulas, English prompts, anchors, disclosures, figures, local links and language navigation`);
