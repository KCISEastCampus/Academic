const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const source = name => fs.readFileSync(path.join(__dirname, '../assets/js', name), 'utf8');
function classes() {
  const values = new Set();
  return { add: value => values.add(value), remove: value => values.delete(value), contains: value => values.has(value) };
}
function harness() {
  const clicks = [];
  const tocClicks = [];
  const scrolls = [];
  const historyCalls = [];
  let reduced = false;
  const document = {
    readyState: 'complete', activeElement: null,
    documentElement: { lang: 'en', dataset: {} },
    body: { classList: classes() },
    addEventListener(type, handler) { if (type === 'click') clicks.push(handler); },
    querySelector: selector => selector === '.toc-content' ? toc : null,
    querySelectorAll: () => [],
    getElementById: id => ({ 'content-container': content, first, chapter })[id]
  };
  function heading(id, top) {
    const attributes = new Map();
    return {
      id, tagName: 'H2', textContent: id,
      getBoundingClientRect: () => ({ top }),
      hasAttribute: key => attributes.has(key),
      setAttribute: (key, value) => attributes.set(key, value),
      getAttribute: key => attributes.get(key),
      scrollIntoView: options => scrolls.push({ kind: 'element', ...options }),
      focus(options) { this.focusOptions = options; document.activeElement = this; }
    };
  }
  const first = heading('first', 0);
  const chapter = heading('chapter', 500);
  function link(id = 'chapter', attributes = {}) {
    const values = { href: '#' + id, ...attributes };
    const item = { classList: classes(), parentElement: null };
    return {
      classList: classes(), target: values.target || '', href: 'https://example.test/#' + id,
      getAttribute: key => values[key] ?? null,
      hasAttribute: key => Object.hasOwn(values, key),
      setAttribute: (key, value) => { values[key] = value; },
      removeAttribute: key => { delete values[key]; },
      closest(selector) {
        if (selector === '.toc-collapse') return null;
        if (selector === 'li.toc-item') return item;
        return this;
      }
    };
  }
  const links = [link('first'), link()];
  const content = { dataset: {}, querySelectorAll: () => [first, chapter] };
  const toc = {
    contains: () => false, querySelectorAll: () => links,
    addEventListener(type, handler) { if (type === 'click') tocClicks.push(handler); }
  };
  const window = {
    location: { pathname: '/', search: '', hash: '' }, innerWidth: 1280,
    pageYOffset: 30, IntersectionObserver: function() {},
    matchMedia: () => ({ matches: reduced }), addEventListener() {},
    scrollTo: options => scrolls.push({ kind: 'window', ...options })
  };
  const context = vm.createContext({
    document, window, URLSearchParams, AbortController, console, setTimeout: () => 0,
    history: {
      pushState: (...args) => historyCalls.push(['push', ...args]),
      replaceState: (...args) => historyCalls.push(['replace', ...args])
    }
  });
  vm.runInContext(source('interactive_effects.js'), context);
  vm.runInContext(source('toc_generator.js'), context);
  vm.runInContext('generateTOC()', context);
  function activate(anchor, overrides = {}, inToc = false) {
    const event = {
      target: anchor, button: 0, detail: 1, defaultPrevented: false,
      preventDefault() { this.defaultPrevented = true; }, ...overrides
    };
    if (inToc) tocClicks.forEach(handler => handler(event));
    clicks.forEach(handler => handler(event));
    return event;
  }
  return { activate, link, links, chapter, document, scrolls, historyCalls, setReduced: value => { reduced = value; } };
}

for (const reduced of [false, true]) {
  const h = harness();
  h.setReduced(reduced);
  const event = h.activate(h.links[1], { detail: 0 }, true); // Enter-generated click, then bubble to document.
  assert.equal(event.defaultPrevented, true);
  assert.equal(h.scrolls.length, 1, 'TOC event must scroll once across both listeners');
  assert.equal(h.scrolls[0].kind, 'element');
  assert.equal(h.scrolls[0].behavior, reduced ? 'instant' : 'smooth');
  assert.equal(h.scrolls[0].block, 'start');
  assert.equal(h.historyCalls.length, 1, 'TOC must not also push document history');
  assert.equal(h.historyCalls[0][0], 'replace');
  assert.equal(h.historyCalls[0][3], '#chapter');
  assert.equal(h.document.activeElement, h.chapter);
  assert.equal(h.chapter.getAttribute('tabindex'), '-1');
  assert.equal(h.chapter.focusOptions.preventScroll, true);
  assert.equal(h.links[1].getAttribute('aria-current'), 'location');
  assert.equal(h.links[0].getAttribute('aria-current'), null);

  const regular = harness();
  regular.setReduced(reduced);
  regular.activate(regular.link(), { detail: 0 });
  assert.equal(regular.scrolls.length, 1, 'Keyboard-generated ordinary anchor click still works');
  assert.equal(regular.scrolls[0].behavior, reduced ? 'instant' : 'smooth');
  assert.equal(regular.scrolls[0].top, 450, 'Keep existing 80px sticky-header offset');
  assert.equal(regular.historyCalls.length, 1);
  assert.equal(regular.historyCalls[0][0], 'push');
}

for (const inToc of [false, true]) {
  for (const overrides of [
    { defaultPrevented: true }, { button: 1 }, { button: 2 },
    { ctrlKey: true }, { metaKey: true }, { shiftKey: true }, { altKey: true }
  ]) {
    const h = harness();
    const event = h.activate(h.link(), overrides, inToc);
    assert.equal(event.defaultPrevented, !!overrides.defaultPrevented);
    assert.equal(h.scrolls.length, 0);
    assert.equal(h.historyCalls.length, 0);
    assert.equal(h.document.activeElement, null);
  }
  for (const attributes of [{ target: '_blank' }, { target: 'lesson-window' }, { target: '_parent' }, { download: '' }]) {
    const h = harness();
    const event = h.activate(h.link('chapter', attributes), {}, inToc);
    assert.equal(event.defaultPrevented, false, 'External browsing targets and downloads stay native');
    assert.equal(h.scrolls.length, 0);
    assert.equal(h.historyCalls.length, 0);
  }
  const missing = harness();
  assert.equal(missing.activate(missing.link('missing'), {}, inToc).defaultPrevented, false);
  assert.equal(missing.scrolls.length, 0);
  assert.equal(missing.historyCalls.length, 0);
}
const skip = harness();
const skipLink = skip.link();
skipLink.classList.add('skip-link');
assert.equal(skip.activate(skipLink).defaultPrevented, false, 'Skip links keep native focus/navigation');
assert.equal(skip.scrolls.length, 0);
assert.equal(skip.historyCalls.length, 0);
const self = harness();
assert.equal(self.activate(self.link('chapter', { target: '_self' })).defaultPrevented, true);
// Preferences are evaluated on each activation, including changes after initialization.
self.setReduced(true);
self.activate(self.link());
assert.equal(self.scrolls[1].behavior, 'instant');
console.log('Anchor navigation passed: one TOC scroll/history update, focus/ARIA, live motion preference, native click exceptions and skip links.');
