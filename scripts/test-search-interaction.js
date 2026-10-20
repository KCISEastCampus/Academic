const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const source = fs.readFileSync(path.join(__dirname, '../assets/js/search.js'), 'utf8')
  .replace("return import(/* webpackIgnore: true */ '/pagefind/pagefind.js')", 'return Promise.resolve(window.pagefind)');

function setup({ fallback = false, lang = 'en' } = {}) {
  const document = new EventTarget();
  function element(tag = 'div') {
    const node = new EventTarget();
    const attrs = {};
    node.tagName = tag;
    node.style = {};
    node.children = [];
    node.classList = { add() {} };
    node.setAttribute = (key, value) => { attrs[key] = value; };
    node.getAttribute = key => attrs[key] ?? null;
    node.appendChild = child => node.children.push(child);
    node.querySelectorAll = () => node.children.filter(child => child.tagName === 'a');
    node.focus = () => { document.activeElement = node; };
    node.getClientRects = () => node.hidden ? [] : [{}];
    node.closest = () => node.inert ? node : null;
    node.select = () => {};
    Object.defineProperty(node, 'innerHTML', { set: () => { node.children = []; } });
    return node;
  }
  const input = element('input'), results = element(), status = element(), dialog = element(), trigger = element('button'), close = element('button');
  dialog.showModal = () => { dialog.open = true; };
  dialog.close = () => { dialog.open = false; dialog.dispatchEvent(new Event('close')); };
  document.getElementById = id => ({
    'search-input': input, 'search-results': results, 'search-status': status,
    siteSearchDialog: dialog, 'search-close': close
  })[id];
  document.querySelectorAll = () => [trigger];
  document.querySelector = () => trigger;
  document.createElement = element;
  document.documentElement = { lang };
  let timer, failFetch = false, fetches = 0;
  const pending = new Map();
  const window = {
    siteLanguage: {
      text: key => ({ search_count: '%count% results', no_matches: 'No matches', search_loading: 'Searching', search_error: 'Unavailable' })[key],
      apply() {}
    },
    pagefind: fallback ? null : { search: query => new Promise(resolve => pending.set(query, resolve)) }
  };
  vm.runInNewContext(source, {
    document, window, console: { error() {} }, setTimeout: fn => { timer = fn; }, clearTimeout() {},
    fetch: async () => {
      fetches++;
      return { ok: !failFetch, json: async () => [
        { title: 'Energy EN', lang: 'en', url: '/energy/', content: '' },
        { title: 'Energy 中文', lang: 'zh-CN', url: '/zh/energy/', content: '' }
      ] };
    }
  });
  function key(node, value, modifiers = {}) {
    const event = new Event('keydown', { cancelable: true });
    Object.assign(event, { key: value, ...modifiers });
    node.dispatchEvent(event);
    return event;
  }
  async function start(query) {
    input.value = query;
    input.dispatchEvent(new Event('input'));
    const done = timer();
    await Promise.resolve();
    await Promise.resolve();
    return { done };
  }
  function finish(query, titles) {
    pending.get(query)({ results: titles.map(title => ({ data: async () => ({ meta: { title }, url: '/' + title + '/', excerpt: '' }) })) });
  }
  return { document, input, results, status, dialog, trigger, close, key, start, finish, setFailure: value => { failFetch = value; }, fetches: () => fetches };
}

(async () => {
  const s = setup();
  s.trigger.dispatchEvent(new Event('click'));
  assert(s.dialog.open);
  assert.equal(s.document.activeElement, s.input);
  const first = await s.start('first');
  s.finish('first', ['one', 'two']);
  await first.done;
  assert.equal(s.status.textContent, '2 results');
  s.key(s.input, 'ArrowDown');
  assert.equal(s.document.activeElement, s.results.children[0], 'ArrowDown moves real focus onto a result link');
  s.key(s.results, 'ArrowDown');
  assert.equal(s.document.activeElement, s.results.children[1]);
  s.key(s.results, 'ArrowDown');
  assert.equal(s.document.activeElement, s.input, 'End of results returns to the query');
  s.key(s.input, 'ArrowUp');
  assert.equal(s.document.activeElement, s.results.children[1]);

  const old = await s.start('old');
  const recent = await s.start('recent');
  s.finish('recent', ['new']);
  await recent.done;
  s.finish('old', ['stale']);
  await old.done;
  assert.equal(s.results.children[0].children[0].textContent, 'new', 'A slower old query cannot replace the current results');
  const late = await s.start('late');
  s.close.dispatchEvent(new Event('click'));
  s.finish('late', ['too-late']);
  await late.done;
  assert.equal(s.results.style.display, 'none');
  assert.equal(s.status.textContent, '');
  assert.equal(s.document.activeElement, s.trigger, 'Closing restores focus to the opener');
  s.key(s.document, 'K', { ctrlKey: true });
  assert(s.dialog.open, 'Shortcut works with uppercase K too');
  s.input.value = 'x';
  s.input.dispatchEvent(new Event('input'));
  assert.equal(s.results.style.display, 'none', 'A short query hides prior results');
  assert(s.key(s.input, 'Escape').defaultPrevented, 'Escape bypasses the search input clear action');
  assert.equal(s.dialog.open, false, 'One Escape closes search even with a nonempty query');
  assert.equal(s.document.activeElement, s.trigger);

  for (const hidden of [true, false]) {
    const drawerLink = { getClientRects: () => hidden ? [] : [{}], closest: () => hidden ? null : { inert: true }, focus() { throw Error('Must not focus an inaccessible drawer link'); } };
    s.document.activeElement = drawerLink;
    s.key(s.document, 'k', { ctrlKey: true });
    s.dialog.close();
    assert.equal(s.document.activeElement, s.trigger, 'Closing search returns to its visible launcher when the old drawer target is hidden or inert');
  }

  for (const lang of ['en', 'zh-CN']) {
    const f = setup({ fallback: true, lang });
    f.setFailure(true);
    await (await f.start('energy')).done;
    assert.equal(f.status.textContent, 'Unavailable', 'Network failure is distinct from zero matches');
    f.setFailure(false);
    await (await f.start('energy')).done;
    assert.equal(f.fetches(), 2, 'A failed fallback download can be retried');
    assert.equal(f.results.children.length, 1, 'Fallback respects the document search language');
    assert.equal(f.results.children[0].href, lang === 'en' ? '/energy/' : '/zh/energy/');
  }
  console.log('Search interaction passed: dialog focus, keyboard links, stale queries, close cancellation, fallback language and retry.');
})().catch(error => { console.error(error); process.exitCode = 1; });
