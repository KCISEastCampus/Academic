const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const site = path.join(__dirname, '../_site');
const read = file => fs.readFileSync(path.join(site, file), 'utf8');

for (const file of ['index.html', 'zh/index.html', 'alevel/index.html', 'igcse/index.html',
  'zh/alevel/a2-physics/capacitance/index.html', 'alevel/fx-cg50/index.html', 'admissions/tmua-esat/index.html']) {
  const html = read(file);
  if (html.includes('subject-page-title')) assert.match(html, /<h1\b[^>]*class="subject-page-title"[^>]*data-pagefind-body/, `${file}: full lesson title is searchable`);
  for (const id of ['search-input', 'search-results', 'siteSearchDialog']) {
    assert.equal(html.split(`id="${id}"`).length - 1, 1, `${file}: exactly one ${id}`);
  }
  assert.equal((html.match(/<main\b/g) || []).length, 1, `${file}: one main landmark, including embedded notes`);
  assert(html.indexOf('class="skip-link') < html.indexOf('<nav class="site-nav"'), `${file}: skip link precedes the navigation`);
  const target = html.match(/class="skip-link[^"]*" href="#([^"]+)"/)[1];
  assert(new RegExp(`id="${target}"[^>]*tabindex="-1"`).test(html), `${file}: skip target accepts focus`);
  assert(html.includes('role="status"'), `${file}: search announces results`);
  assert(html.includes('aria-controls="siteNavLinks"'), `${file}: navigation toggle names its panel`);
}
// Snapshot destinations, not copy: descriptions may change without changing the resources.
const homepageDestinations = [
  ['/alevel/as-mathematics/', '/zh/alevel/as-mathematics/'],
  ['/alevel/as-further-mathematics/', '/zh/alevel/as-further-mathematics/'],
  ['/alevel/as-chemistry/', null],
  ['/alevel/as-physics/', '/zh/alevel/as-physics/'],
  ['/alevel/as-economics/', null],
  ['/alevel/as-biology/', null],
  ['/alevel/a2-mathematics/', '/zh/alevel/a2-mathematics/'],
  ['/alevel/a2-mathematics/statistics', '/zh/alevel/a2-mathematics/statistics/'],
  ['/alevel/a2-mathematics/mechanics', '/zh/alevel/a2-mathematics/mechanics/'],
  ['/alevel/a2-further-mathematics/', '/zh/alevel/a2-further-mathematics/'],
  ['/alevel/a2-further-mathematics/statistics/', '/zh/alevel/a2-further-mathematics/statistics/'],
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
  const cards = Array.from(html.matchAll(/<a\b([^>]*class="modern-subject-card"[^>]*)>([\s\S]*?)<\/a>/g));
  assert.equal(cards.length, homepage ? 19 : file.includes('alevel/') ? 15 : 4, `${file}: preserve existing cards and expose FM04`);
  if (homepage) {
    for (const group of ['as', 'a2', 'igcse']) {
      assert(html.includes(`href="#${group}-courses"`));
      assert(html.includes(`id="${group}-courses"`));
    }
    assert.deepEqual(cards.map(card => card[1].match(/href="([^"]+)"/)[1]),
      homepageDestinations.map(([en, zh]) => chinese ? zh || en : en), `${file}: preserve every card destination and its order`);
  } else {
    const level = file.includes('alevel/') ? 'alevel' : 'igcse';
    assert(html.includes('<body class="home-page level-page">'), `${file}: use the homepage card styles`);
    assert.match(html, /<header class="container text-center py-3" role="banner">/, `${file}: center the overview title`);
    assert.deepEqual(cards.map(card => card[1].match(/href="([^"]+)"/)[1]),
      homepageDestinations.filter(([en]) => en.startsWith(`/${level}/`)).map(([en, zh]) => chinese ? zh || en : en),
      `${file}: course discovery follows the homepage order and destinations`);
    if (level === 'alevel') {
      for (const group of ['as', 'a2', 'tools']) {
        assert(html.includes(`id="${group}-courses"`), `${file}: retain stage navigation`);
      }
    }
  }
  cards.forEach(card => {
    assert(!card[2].includes('meta-text'), `${file}: course cards match the homepage without subtitles`);
    assert(card[2].match(/<div class="card-title">([^<]+)<\/div>/)?.[1].trim(), `${file}: course cards have visible names`);
  });
}
const index = JSON.parse(read('assets/search.json'));
assert(index.every(item => ['en', 'zh-CN'].includes(item.lang)), 'Fallback language metadata is explicit');
for (const [url, section] of [
  ['/zh/alevel/a2-physics/capacitance/', 'A2 物理'],
  ['/alevel/a2-mathematics/mechanics/', 'A2 Math - Mechanics']
]) {
  const item = index.find(item => item.url.replace(/\/$/, '') === url.replace(/\/$/, ''));
  assert.equal(item?.section, section, 'Search uses the most specific course name');
  const page = read(url.slice(1) + 'index.html');
  assert(page.includes(`data-pagefind-meta="section[content]" content="${section}"`), 'Both search engines receive the same course context');
  if (url.includes('capacitance')) {
    assert(item.description.startsWith('解释电容器如何储存电荷和能量'), 'Prefer a full introduction over clipped query context');
    assert(page.includes('data-pagefind-meta="description[content]" content="解释电容器如何储存电荷和能量'), 'Pagefind receives the same complete introduction');
  }
}

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
console.log('Frontend UX passed: shared search, landmarks/skip links, course discovery, bilingual card names and destinations, fallback language and link contrast.');
