const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const source = fs.readFileSync(path.join(__dirname, '../_includes/nav.html'), 'utf8');
const script = source.match(/<script>([\s\S]*?)<\/script>/)[1];
function harness(mobile, withToc = true) {
  let document;
  class Element {
    constructor(tag, attributes = {}) {
      this.tag = tag;
      this.attributes = attributes;
      this.children = [];
      this.parentElement = null;
      this.listeners = {};
      this.classes = new Set((attributes.class || '').split(' '));
      this.classList = {
        contains: value => this.classes.has(value),
        remove: value => this.classes.delete(value),
        toggle: value => this.classes.has(value) ? this.classes.delete(value) : this.classes.add(value)
      };
    }
    get nextSibling() { return this.parentElement?.children[this.parentElement.children.indexOf(this) + 1] || null; }
    insertBefore(node, reference) {
      if (reference === node) return node;
      if (reference && reference.parentElement !== this) throw Error('Invalid insertion reference');
      // Classic DOM reparenting can reset focus; the script must restore it.
      if (node.contains(document.activeElement)) document.activeElement = null;
      if (node.parentElement) node.parentElement.children.splice(node.parentElement.children.indexOf(node), 1);
      const index = reference ? this.children.indexOf(reference) : this.children.length;
      this.children.splice(index, 0, node);
      node.parentElement = this;
      return node;
    }
    appendChild(node) { return this.insertBefore(node, null); }
    contains(node) { return this === node || this.children.some(child => child.contains(node)); }
    setAttribute(key, value) { this.attributes[key] = value; }
    getAttribute(key) { return this.attributes[key] ?? null; }
    addEventListener(type, callback) { (this.listeners[type] ||= []).push(callback); }
    fire(type, properties = {}) { for (const callback of this.listeners[type] || []) callback({ target: this, ...properties }); }
    focus() { document.activeElement = this; }
    querySelectorAll(selector) {
      const found = [];
      for (const child of this.children) {
        if (child.classes.has(selector.slice(1))) found.push(child);
        found.push(...child.querySelectorAll(selector));
      }
      return found;
    }
    querySelector(selector) { return this.querySelectorAll(selector)[0] || null; }
    closest(selector) { return this.classes.has(selector.slice(1)) ? this : this.parentElement?.closest(selector); }
  }
  document = new Element('document');
  document.documentElement = new Element('html');
  document.activeElement = null;
  const root = new Element('root');
  const stack = [root];
  // Parse the actual source element ordering; Liquid branches/loops stay unrendered.
  const markup = source.slice(source.indexOf('<nav '), source.indexOf('</nav>') + 6).replace(/{%[\s\S]*?%}/g, '');
  for (const match of markup.matchAll(/<\/?([\w-]+)\b([^>]*)>/g)) {
    if (match[0].startsWith('</')) { stack.pop(); continue; }
    const attributes = {};
    for (const attribute of match[2].matchAll(/([\w-]+)(?:="([^"]*)")?/g)) attributes[attribute[1]] = attribute[2] ?? '';
    const node = new Element(match[1], attributes);
    stack.at(-1).appendChild(node);
    if (!['input', 'img', 'br', 'hr', 'meta', 'link'].includes(match[1])) stack.push(node);
  }
  function all(node) { return [node, ...node.children.flatMap(all)]; }
  document.getElementById = id => all(root).find(node => node.getAttribute('id') === id) || null;
  const toggle = document.getElementById('siteNavToggle');
  const links = document.getElementById('siteNavLinks');
  const preferences = document.getElementById('siteNavPreferences');
  const language = document.getElementById('siteLanguage');
  const theme = document.getElementById('navThemeBtn');
  const toc = document.getElementById('tocToggle');
  if (!withToc) toc.parentElement.children.splice(toc.parentElement.children.indexOf(toc), 1);
  const actions = toggle.parentElement;
  const inner = actions.parentElement;
  const originalActions = [...actions.children];
  const media = new Element('media');
  media.matches = mobile;
  const tocCalls = [];
  vm.runInNewContext(script, {
    document, window: { matchMedia: () => media, toggleTOC: value => tocCalls.push(value) },
    localStorage: { setItem() {} }, URL
  });
  const first = links.querySelector('.site-nav-link');
  function visible(node) {
    if (node.getAttribute('hidden') !== null) return false;
    if (node === toggle && !media.matches) return false;
    if (node === links && media.matches && !links.classList.contains('show')) return false;
    return !node.parentElement || visible(node.parentElement);
  }
  function tabOrder() { return all(root).filter(node => ['a', 'button', 'select'].includes(node.tag) && visible(node)); }
  function resize(value) { media.matches = value; media.fire('change'); }
  return { document, root, toggle, links, preferences, language, theme, toc, actions, inner, first, originalActions, tocCalls, tabOrder, resize };
}

for (const withToc of [false, true]) {
  for (const initiallyMobile of [false, true]) {
    const h = harness(initiallyMobile, withToc);
    if (initiallyMobile) {
      assert.equal(h.inner.children.at(-1), h.links);
      assert.equal(h.tabOrder().includes(h.first), false, 'Closed mobile links remain outside the Tab order');
      assert.equal(h.tabOrder().includes(h.theme), false);
    } else {
      assert.equal(h.inner.children.indexOf(h.links) + 1, h.inner.children.indexOf(h.actions));
      assert.deepEqual(h.actions.children, h.originalActions, 'Desktop preferences keep their original position');
    }
    h.resize(true);
    h.toggle.focus();
    h.toggle.fire('click');
    assert.equal(h.toggle.getAttribute('aria-expanded'), 'true');
    assert.equal(h.document.activeElement, h.toggle);
    assert.equal(h.tocCalls.at(-1), false, 'Menu opening closes the TOC');
    const order = h.tabOrder();
    assert.equal(order[order.indexOf(h.toggle) + 1], h.first, 'Next natural Tab from opener reaches first menu link');
    assert.ok(order.indexOf(h.theme) > order.indexOf(h.first), 'Menu links precede preferences');
    assert.equal(order[order.indexOf(h.first) - 1], h.toggle, 'Shift+Tab from first link returns to opener');
    if (withToc) assert.ok(order.indexOf(h.toc) < order.indexOf(h.toggle));

    // An enabled language selector and focused preference survive both moves.
    delete h.language.attributes.hidden;
    h.language.focus();
    h.resize(false);
    assert.equal(h.document.activeElement, h.language);
    assert.deepEqual(h.actions.children, h.originalActions);
    h.resize(true);
    assert.equal(h.document.activeElement, h.language, 'Open mobile menu retains preference focus');
    h.document.fire('keydown', { key: 'Escape' });
    assert.equal(h.toggle.getAttribute('aria-expanded'), 'false');
    assert.equal(h.document.activeElement, h.toggle);
    assert.equal(h.tabOrder().includes(h.language), false);

    h.resize(false);
    assert.equal(h.document.activeElement, h.first, 'Desktop breakpoint avoids the now-hidden menu button');
    h.resize(true);
    assert.equal(h.document.activeElement, h.toggle, 'Closed mobile breakpoint avoids hidden link focus');
    h.resize(false);
    h.theme.focus();
    h.resize(true);
    assert.equal(h.document.activeElement, h.toggle, 'Closed mobile breakpoint avoids hidden preference focus');

    h.toggle.fire('click');
    h.first.fire('click');
    assert.equal(h.links.classList.contains('show'), false, 'Link activation closes the disclosure');
    assert.equal(h.toggle.getAttribute('aria-expanded'), 'false');
    h.toggle.fire('click');
    h.document.fire('click', { target: { closest: () => null } });
    assert.equal(h.links.classList.contains('show'), false, 'Outside activation closes the disclosure');
    assert.equal(h.toggle.getAttribute('aria-expanded'), 'false');
    for (let index = 0; index < 3; index++) { h.resize(false); h.resize(true); }
    assert.equal(h.toggle.listeners.click.length, 1, 'Responsive reordering does not add duplicate handlers');
    assert.equal(h.links.children.filter(node => node === h.preferences).length, 1);
  }
}
console.log('Navigation passed: natural mobile/desktop DOM order, next/previous focus positions, preference focus, breakpoint recovery, Escape, outside/link close and TOC exclusion. Browser Tab verification remains required.');
