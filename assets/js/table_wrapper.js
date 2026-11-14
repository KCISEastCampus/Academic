// Enhance scrolling containers while retaining native table and keyboard behavior.
function initTableWrapper() {
  const content = document.getElementById('content-container');
  if (!content) return;
  if (initTableWrapper.refresh) {
    initTableWrapper.refresh();
    return;
  }

  const records = new Map();
  const scrollContainers = new WeakSet();
  let pending = false;
  let captionId = 0;
  function schedule() {
    if (pending) return;
    pending = true;
    setTimeout(() => {
      pending = false;
      refresh();
    }, 0);
  }
  const resizeObserver = typeof ResizeObserver === 'function' ? new ResizeObserver(schedule) : null;

  // Never overwrite author attributes, including edits made after enhancement.
  function own(record, name, value) {
    const { wrapper, owned } = record;
    if (owned.has(name) && wrapper.getAttribute(name) !== owned.get(name)) owned.delete(name);
    if (wrapper.hasAttribute(name) && !owned.has(name)) return;
    if (wrapper.getAttribute(name) !== value) wrapper.setAttribute(name, value);
    owned.set(name, value);
  }
  function release(record, name) {
    if (!record.owned.has(name)) return;
    if (record.wrapper.getAttribute(name) === record.owned.get(name)) record.wrapper.removeAttribute(name);
    record.owned.delete(name);
  }
  function isVisible(element) {
    if (!element.getClientRects().length) return false;
    // Closed details descendants can retain layout rectangles in Chromium.
    for (let ancestor = element.parentElement; ancestor; ancestor = ancestor.parentElement) {
      if (ancestor.tagName === 'DETAILS' && !ancestor.hasAttribute('open')) {
        const summary = Array.from(ancestor.children).find(child => child.tagName === 'SUMMARY');
        if (!summary || !summary.contains(element)) return false;
      }
    }
    return true;
  }
  function nameRegion(record, index, heading) {
    const { table, wrapper, owned } = record;
    // One author-provided naming attribute takes precedence over generated names.
    if (['aria-label', 'aria-labelledby'].some(name => wrapper.hasAttribute(name) &&
        (!owned.has(name) || wrapper.getAttribute(name) !== owned.get(name)))) {
      release(record, 'aria-label');
      release(record, 'aria-labelledby');
      return;
    }
    let attribute = 'aria-label';
    let name;
    const caption = table.caption;
    if (caption && caption.textContent.trim() && isVisible(caption)) {
      if (!caption.id) {
        let id;
        do { id = `table-caption-${++captionId}`; } while (document.getElementById(id));
        caption.id = id;
      }
      attribute = 'aria-labelledby';
      name = caption.id;
    } else if (table.getAttribute('aria-labelledby')) {
      attribute = 'aria-labelledby';
      name = table.getAttribute(attribute);
    } else if (table.getAttribute('aria-label')) {
      name = table.getAttribute(attribute);
    } else {
      const language = table.closest('[lang]')?.getAttribute('lang') || document.documentElement.lang;
      const label = /^zh\b/i.test(language) ? `表格 ${index}` : `Table ${index}`;
      name = heading ? `${label} — ${heading}` : label;
    }
    release(record, attribute === 'aria-label' ? 'aria-labelledby' : 'aria-label');
    own(record, attribute, name);
  }
  function enhance(table) {
    let wrapper = table.parentElement;
    if (!wrapper.classList.contains('table-wrapper')) {
      wrapper = document.createElement('div');
      wrapper.className = 'table-wrapper';
      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    }
    const record = { table, wrapper, owned: new Map() };
    records.set(table, record);
    if (resizeObserver) {
      resizeObserver.observe(table);
      resizeObserver.observe(wrapper);
    }
    if (!scrollContainers.has(wrapper)) {
      scrollContainers.add(wrapper);
      wrapper.addEventListener('blur', schedule);
      wrapper.addEventListener('touchstart', function() {
        this.style.webkitOverflowScrolling = 'touch';
      }, { passive: true });
      let scrollTimeout;
      wrapper.addEventListener('scroll', function() {
        this.classList.add('scrolled');
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          if (this.scrollLeft <= 5) this.classList.remove('scrolled');
        }, 150);
      });
    }
    return record;
  }
  function refresh() {
    for (const [table, record] of records) {
      if (!content.contains(table)) {
        for (const name of [...record.owned.keys()]) release(record, name);
        if (resizeObserver) {
          resizeObserver.unobserve(table);
          resizeObserver.unobserve(record.wrapper);
        }
        records.delete(table);
      }
    }
    let heading = '';
    let index = 0;
    content.querySelectorAll('h1, h2, h3, h4, h5, h6, table').forEach(element => {
      if (element.tagName !== 'TABLE') {
        heading = element.textContent.trim().replace(/\s+/g, ' ').slice(0, 80);
        return;
      }
      index++;
      const record = records.get(element) || enhance(element);
      const { wrapper } = record;
      if (isVisible(wrapper) && wrapper.clientWidth > 0 && wrapper.scrollWidth - wrapper.clientWidth > 1) {
        own(record, 'tabindex', '0');
        own(record, 'role', 'region');
        nameRegion(record, index, heading);
      } else {
        // Removing tabindex can blur the active container in Chromium. Keep it
        // focusable until blur, without leaving a sequential Tab stop behind.
        const keepFocus = document.activeElement === wrapper && isVisible(wrapper) &&
          record.owned.has('tabindex') && wrapper.getAttribute('tabindex') === record.owned.get('tabindex');
        if (keepFocus) own(record, 'tabindex', '-1');
        for (const name of [...record.owned.keys()]) {
          if (name !== 'tabindex' || !keepFocus) release(record, name);
        }
      }
    });
  }
  initTableWrapper.refresh = schedule;
  const mutationObserver = new MutationObserver(schedule);
  // Attribute writes above cannot retrigger this observer.
  mutationObserver.observe(content, { childList: true, subtree: true, characterData: true,
    attributes: true, attributeFilter: ['open', 'lang'] });
  content.addEventListener('toggle', schedule, true);
  window.addEventListener('resize', schedule);
  if (document.fonts) {
    document.fonts.ready.then(schedule);
    document.fonts.addEventListener('loadingdone', schedule);
  }
  refresh();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initTableWrapper, { once: true });
else initTableWrapper();
