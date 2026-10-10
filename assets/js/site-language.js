(function () {
  'use strict';
  const data = document.getElementById('site-language-data');
  if (!data) return;
  const config = JSON.parse(data.textContent);
  const root = document.documentElement;
  const valid = language => language === 'en' || language === 'zh-CN';
  let language = root.lang === 'zh-CN' ? 'zh-CN' : 'en';
  try {
    const saved = localStorage.getItem('site-language');
    if (valid(saved)) language = saved;
  } catch (e) { /* Keep the static page usable when storage is blocked. */ }

  const normalize = path => path.replace(/\/index\.html$/, '/').replace(/([^/.])$/, '$1/');
  const pairs = new Map();
  for (const pair of config.pairs) {
    const en = new URL(pair.en, location.href);
    const zh = new URL(pair['zh-CN'], location.href);
    if (en.origin !== location.origin || zh.origin !== location.origin) continue;
    pairs.set(normalize(en.pathname), pair);
    pairs.set(normalize(zh.pathname), pair);
  }

  function localizedHref(href, selected) {
    if (!href || href.startsWith('#')) return href;
    const url = new URL(href, location.href);
    if (url.origin !== location.origin) return href;
    const pair = pairs.get(normalize(url.pathname));
    if (!pair) return href;
    const target = new URL(pair[selected], location.href);
    target.search = url.search;
    target.hash = url.hash;
    return target.href;
  }

  function text(key) {
    return config.ui[language][key] || config.ui.en[key] || '';
  }

  function apply() {
    root.dataset.uiLanguage = language;
    document.querySelectorAll('[data-site-ui]').forEach(element => { element.lang = language; });
    for (const [marker, attribute] of [['data-ui', null], ['data-ui-aria', 'aria-label'], ['data-ui-title', 'title'], ['data-ui-placeholder', 'placeholder'], ['data-ui-alt', 'alt']]) {
      document.querySelectorAll('[' + marker + ']').forEach(element => {
        const value = text(element.getAttribute(marker));
        if (!value) return;
        element.lang = language;
        if (attribute) element.setAttribute(attribute, value);
        else element.textContent = value;
      });
    }
    document.querySelectorAll('a[href]').forEach(link => {
      if (link.hasAttribute('hreflang') || link.hasAttribute('download') || link.hasAttribute('data-language-explicit')) return;
      if (!link.dataset.languageHref) link.dataset.languageHref = link.getAttribute('href');
      link.href = localizedHref(link.dataset.languageHref, language);
    });
    const select = document.getElementById('siteLanguage');
    if (select) select.value = language;
    const fallback = document.getElementById('languageSwitch');
    if (fallback) fallback.hidden = root.lang === language;
  }

  window.siteLanguage = { text, apply };
  function init() {
    apply();
    const select = document.getElementById('siteLanguage');
    if (!select) return;
    select.hidden = false;
    select.addEventListener('change', () => {
      if (!valid(select.value)) return;
      language = select.value;
      try { localStorage.setItem('site-language', language); } catch (e) { /* Session choice still works. */ }
      apply();
      const destination = localizedHref(location.href, language);
      if (destination !== location.href) location.assign(destination);
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
