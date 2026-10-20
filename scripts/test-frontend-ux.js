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
for (const file of ['index.html', 'zh/index.html']) {
  const html = read(file);
  for (const group of ['as', 'a2', 'igcse']) {
    assert(html.includes(`href="#${group}-courses"`));
    assert(html.includes(`id="${group}-courses"`));
  }
  assert.equal((html.match(/class="modern-subject-card"/g) || []).length, 18, 'Grouping preserves all 14 A-level/tool and 4 IGCSE cards');
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
console.log('Frontend UX passed: shared search, landmarks/skip links, course discovery, fallback language and link contrast.');
