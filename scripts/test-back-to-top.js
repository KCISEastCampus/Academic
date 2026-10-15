const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const read = file => fs.readFileSync(path.join(__dirname, '..', file), 'utf8');
const source = read('assets/js/interactive_effects.js');
const component = source.match(/const backToTop = (\{[\s\S]*?\n  \});/)[1];
assert.match(read('_includes/footer.html'), /<footer class="site-footer /);
assert.match(read('_layouts/timetable.html'), /<footer class="timetable-doc-footer">/);

for (const width of [390, 844, 1440]) {
  for (const height of [320, 844]) {
    const footer = { top: height - 96, bottom: height };
    const siteFooter = { getBoundingClientRect: () => footer };
    const nestedFooter = { getBoundingClientRect: () => ({ top: -500, bottom: -400 }) };
    const classes = new Set();
    const button = {
      style: {},
      classList: { add: name => classes.add(name), remove: name => classes.delete(name) },
      setAttribute() {},
      addEventListener() {}
    };
    const document = {
      documentElement: { lang: 'en' },
      body: { appendChild() {} },
      createElement: () => button,
      querySelector: selector => ({
        '.site-footer': siteFooter, footer: nestedFooter
      })[selector] || null
    };
    const window = { innerWidth: width, innerHeight: height, pageYOffset: 1200, addEventListener() {} };
    const backToTop = vm.runInNewContext(`(${component})`, {
      document, window, CONFIG: { BACK_TO_TOP_THRESHOLD: 300 },
      utils: { throttle: callback => callback }
    });

    backToTop.init();
    assert.equal(backToTop.footer, siteFooter, 'Ignore the earlier nested document footer');
    assert.equal(button.style.bottom, '112px', 'Keep a 16px gap above the site footer');
    assert.ok(height - 112 - 64 >= 0, 'The button remains inside a short viewport');
    assert.ok(classes.has('visible'));

    const base = width <= 768 ? 20 : 32;
    footer.top = height + 100;
    footer.bottom = height + 200;
    backToTop.updatePosition();
    assert.equal(button.style.bottom, `${base}px`, 'Use the normal offset before the footer appears');

    footer.top = -200;
    footer.bottom = -100;
    backToTop.updatePosition();
    assert.equal(button.style.bottom, `${base}px`, 'Ignore a footer that has scrolled past the viewport');

    backToTop.footer = null;
    backToTop.updatePosition();
    assert.equal(button.style.bottom, `${base}px`, 'Pages without a site footer still work');
    window.pageYOffset = 0;
    backToTop.toggleVisibility();
    assert.equal(classes.has('visible'), false);
  }
}
console.log('Back-to-top passed: nested footers, footer clearance, short viewports, missing footer and visibility.');
