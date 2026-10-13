const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

class Element extends EventTarget {
  constructor() {
    super();
    this.attributes = {};
    this.style = {};
    this.classes = new Set();
    this.classList = {
      contains: value => this.classes.has(value),
      add: value => this.classes.add(value),
      remove: value => this.classes.delete(value)
    };
  }
  setAttribute(key, value) { this.attributes[key] = value; }
  getAttribute(key) { return this.attributes[key] ?? null; }
  focus() { document.activeElement = this; }
  contains(element) { return element === this || this.children?.includes(element); }
}

const toggle = new Element();
const toc = new Element();
const search = new Element();
const hiddenLink = new Element();
const firstLink = new Element();
hiddenLink.getClientRects = () => [];
firstLink.getClientRects = () => [{}];
toc.children = [search, hiddenLink, firstLink];
toc.querySelectorAll = () => [hiddenLink, firstLink];
const document = new EventTarget();
document.activeElement = toggle;
document.body = new Element();
document.querySelectorAll = () => [];
document.documentElement = new Element();
document.getElementById = id => ({ tocToggle: toggle, toc, tocSearch: search })[id];
const window = new EventTarget();
window.innerWidth = 390;
const context = vm.createContext({ document, window, AbortController });
const read = file => fs.readFileSync(path.join(__dirname, '..', file), 'utf8');
vm.runInContext(read('assets/js/toc_generator.js'), context);
const init = () => {
  context.controller?.abort();
  context.controller = new AbortController();
  vm.runInContext('initTOCToggle(controller.signal);', context);
};
const expanded = value => assert.equal(toggle.getAttribute('aria-expanded'), String(value));

init();
expanded(false);
assert.equal(toc.inert, true, 'Closed mobile TOC is outside keyboard navigation');
assert.equal(toc.getAttribute('aria-hidden'), 'true');
assert.equal(toggle.getAttribute('aria-controls'), 'toc');
toggle.dispatchEvent(new Event('click'));
expanded(true);
assert.equal(toc.inert, false);
assert.equal(document.activeElement, firstLink, 'Opening skips filtered or collapsed links');
assert.equal(document.body.style.overflow, 'hidden');

const escape = new Event('keydown', { cancelable: true });
escape.key = 'Escape';
document.dispatchEvent(escape);
expanded(false);
assert.equal(document.activeElement, toggle, 'Escape restores focus to the opener');
assert.equal(document.body.style.overflow, '');

toggle.dispatchEvent(new Event('click'));
const outside = new Element();
outside.focus();
// Dispatch with an outside target to represent Tab leaving the drawer.
document.dispatchEvent(new Event('focusin'));
expanded(false);
assert.equal(document.activeElement, outside, 'Leaving the drawer preserves the new focus');

toggle.focus();
init();
init();
toggle.dispatchEvent(new Event('click'));
expanded(true);
assert.equal(document.activeElement, firstLink, 'Refresh neither replaces the opener nor duplicates handlers');
window.innerWidth = 1280;
window.dispatchEvent(new Event('resize'));
expanded(true);
assert.equal(toc.inert, false, 'Desktop TOC remains accessible');
assert.equal(document.body.style.overflow, '', 'Desktop resize releases scroll locking');
window.innerWidth = 390;
window.dispatchEvent(new Event('resize'));
expanded(false);
assert.equal(document.activeElement, toggle, 'Resize moves focus out of the hidden TOC');

toc.querySelectorAll = () => [];
toggle.dispatchEvent(new Event('click'));
assert.equal(document.activeElement, search, 'Search remains usable when there are no visible links');

for (const file of ['_includes/nav.html', '_includes/theme_button.html']) {
  for (const systemDark of [false, true]) {
    for (const saved of [null, 'light', 'dark', 'invalid']) {
      for (const blocked of [false, true]) {
        const html = new Element();
        const button = new Element();
        button.querySelector = () => null;
        button.closest = () => null;
        const localStorage = {
          getItem() { if (blocked) throw Error('Blocked'); return saved; },
          setItem() { if (blocked) throw Error('Blocked'); }
        };
        const themeDocument = {
          documentElement: html,
          getElementById: id => ['navThemeBtn', 'theme_button'].includes(id) ? button : null
        };
        const themeContext = vm.createContext({
          document: themeDocument, localStorage,
          window: { matchMedia: () => ({ matches: systemDark }) }
        });
        const firstScript = source => source.match(/<script>([\s\S]*?)<\/script>/)[1];
        vm.runInContext(firstScript(read('_includes/head.html')), themeContext);
        vm.runInContext(firstScript(read(file)), themeContext);
        const expectedDark = !blocked && ['light', 'dark'].includes(saved) ? saved === 'dark' : systemDark;
        assert.equal(button.getAttribute('aria-pressed'), String(expectedDark));
        button.dispatchEvent(new Event('click'));
        assert.equal(button.getAttribute('aria-pressed'), String(!expectedDark));
        assert.equal(html.getAttribute('data-bs-theme'), expectedDark ? 'light' : 'dark');
      }
    }
  }
}

console.log('Accessibility passed: TOC focus, visibility, Escape, refresh, resize, empty results and both theme controls.');
