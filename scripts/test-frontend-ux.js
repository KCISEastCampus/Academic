const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const site = path.join(__dirname, '../_site');
const read = file => fs.readFileSync(path.join(site, file), 'utf8');

for (const file of ['index.html', 'zh/index.html', 'alevel/index.html', 'igcse/index.html',
  'zh/alevel/a2-physics/capacitance/index.html', 'alevel/fx-cg50/index.html', 'admissions/tmua-esat/index.html']) {
  const html = read(file);
  for (const id of ['search-input', 'search-results', 'siteSearchDialog']) {
    assert.equal(html.split(`id="${id}"`).length - 1, 1, `${file}: exactly one ${id}`);
  }
  assert.equal((html.match(/<main\b/g) || []).length, 1, `${file}: one main landmark, including embedded notes`);
  assert(html.indexOf('class="skip-link') < html.indexOf('<nav class="site-nav"'), `${file}: skip link precedes the navigation`);
  const target = html.match(/class="skip-link[^"]*" href="#([^"]+)"/)[1];
  assert(new RegExp(`id="${target}"[^>]*tabindex="-1"`).test(html), `${file}: skip target accepts focus`);
  assert(html.includes('role="status"'), `${file}: search announces results`);
}
// Snapshot destinations, not copy: descriptions may change without changing the resources.
const homepageDestinations = [
  ['/alevel/as-mathematics/', '/zh/alevel/as-mathematics/'],
  ['/alevel/as-further-mathematics/', null],
  ['/alevel/as-chemistry/', null],
  ['/alevel/as-physics/', '/zh/alevel/as-physics/'],
  ['/alevel/as-economics/', null],
  ['/alevel/as-biology/', null],
  ['/alevel/a2-mathematics/', '/zh/alevel/a2-mathematics/'],
  ['/alevel/a2-mathematics/mechanics', null],
  ['/alevel/a2-mathematics/statistics', null],
  ['/alevel/a2-further-mathematics/', '/zh/alevel/a2-further-mathematics/'],
  ['/alevel/a2-physics/', '/zh/alevel/a2-physics/'],
  ['/alevel/a2-chemistry/', '/zh/alevel/a2-chemistry/'],
  ['/alevel/a2-biology/', '/zh/alevel/a2-biology/'],
  ['/alevel/fx-cg50/', null],
  ['/igcse/mathematics/', '/zh/igcse/mathematics/'],
  ['/igcse/physics/', '/zh/igcse/physics/'],
  ['/igcse/chemistry/', '/zh/igcse/chemistry/'],
  ['/igcse/biology/', '/zh/igcse/biology/']
];
for (const file of ['index.html', 'zh/index.html', 'alevel/index.html', 'igcse/index.html',
  'zh/alevel/index.html', 'zh/igcse/index.html']) {
  const html = read(file);
  const chinese = file.startsWith('zh/');
  const homepage = file === 'index.html' || file === 'zh/index.html';
  const cards = Array.from(html.matchAll(/<a\b([^>]*class="(?:modern-subject-card|course-link)"[^>]*)>([\s\S]*?)<\/a>/g));
  assert.equal(cards.length, homepage ? 18 : file.includes('alevel/') ? 14 : 4, `${file}: preserve all subject/tool cards`);
  if (homepage) {
    for (const group of ['as', 'a2', 'igcse']) {
      assert(html.includes(`href="#${group}-courses"`));
      assert(html.includes(`id="${group}-courses"`));
    }
    assert.deepEqual(cards.map(card => card[1].match(/href="([^"]+)"/)[1]),
      homepageDestinations.map(([en, zh]) => chinese ? zh || en : en), `${file}: preserve every card destination and its order`);
  }
  cards.forEach(card => {
    if (homepage) {
      assert(!card[2].includes('meta-text'), `${file}: the compact directory contains names without resource-scope copy`);
      assert(card[2].match(/<span>([^<]+)<\/span>/)?.[1].trim(), `${file}: course links have visible names`);
      return;
    }
    const destination = card[1].match(/href="([^"]+)"/)[1].replace(/^\/zh\//, '/');
    const description = card[2].match(/<span class="meta-text">([^<]*)<\/span>/)?.[1].trim();
    assert(description, `${file}: ${destination} has a visible resource description`);
    assert(card[1].match(/aria-label="([^"]+)"/)[1].includes(description),
      `${file}: the accessible card name includes its resource scope`);
    if (destination === '/alevel/as-economics/') {
      assert.match(description, chinese ? /PDF.*(?:思维导图|导图)/i : /PDF.*mind\s*maps?/i,
        `${file}: economics provides PDF mindmap links`);
    }
    if (destination === '/alevel/a2-physics/') {
      for (const scope of [/PH03/, /PH04/, chinese ? /部分|精选|选定/ : /selected|partial|some/i,
        chinese ? /笔记/ : /notes/i, chinese ? /热学/ : /thermal/i]) {
        assert.match(description, scope, `${file}: physics distinguishes partial lessons/notes and thermal physics`);
      }
    }
    if (chinese && destination.startsWith('/igcse/')) {
      for (const scope of [/中文.*目录/, /英文.*笔记/, /→|链接|打开|前往/]) {
        assert.match(description, scope, `${file}: the Chinese index links to English notes`);
      }
    }
  });
}
const index = JSON.parse(read('assets/search.json'));
assert(index.every(item => ['en', 'zh-CN'].includes(item.lang)), 'Fallback language metadata is explicit');

function luminance(hex) {
  const rgb = hex.match(/[a-f\d]{2}/gi).map(channel => parseInt(channel, 16) / 255)
    .map(value => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
  return rgb[0] * 0.2126 + rgb[1] * 0.7152 + rgb[2] * 0.0722;
}
const themes = read('assets/css/variables.css').split('html[data-bs-theme="dark"]');
for (const theme of themes) {
  const token = name => theme.match(new RegExp(`--${name}: (#[a-f\\d]{6})`))[1];
  for (const link of ['link-text', 'link-hover']) {
    for (const background of ['bg', 'surface', 'surface-hover']) {
      const values = [luminance(token(link)), luminance(token(background))].sort((a, b) => b - a);
      assert((values[0] + 0.05) / (values[1] + 0.05) >= 4.5, `${link} on ${background} meets 4.5:1`);
    }
  }
}
console.log('Frontend UX passed: shared search, landmarks/skip links, course discovery, bilingual card scopes and destinations, fallback language and link contrast.');
