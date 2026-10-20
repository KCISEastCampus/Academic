(function() {
  'use strict';

  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');

  if (!searchInput || !searchResults) {
    return;
  }
  const dialog = document.getElementById('siteSearchDialog');
  const status = document.getElementById('search-status');
  const pageLanguage = document.documentElement.lang === 'zh-CN' ? 'zh-CN' : 'en';
  function announce(key, count) {
    if (status) status.textContent = window.siteLanguage.text(key).replace('%count%', count);
  }

  let pagefind = null;

  // Lazy-load Pagefind (built by CI after Jekyll build)
  function loadPagefind() {
    if (pagefind) return Promise.resolve(pagefind);

    return import(/* webpackIgnore: true */ '/pagefind/pagefind.js')
      .then(mod => {
        pagefind = mod.default || mod;
        return pagefind;
      })
      .catch(err => {
        console.error('Pagefind failed to load:', err);
        return null;
      });
  }

  // Fallback: simple client-side filter (if Pagefind index unavailable)
  function fallbackSearch(query, searchData) {
    const q = query.toLowerCase().trim();
    return searchData
      .filter(item => (item.lang || 'en') === pageLanguage && (
        (item._lowerTitle && item._lowerTitle.includes(q)) ||
        (item._lowerContent && item._lowerContent.includes(q))
      ))
      .slice(0, 10)
      .map(item => ({ title: item.title, url: item.url, excerpt: item.content }));
  }

  function cleanExcerpt(value) {
    const excerpt = String(value || '')
      .replace(/<[^>]*>/g, ' ')
      .replace(/\$\$[\s\S]*?\$\$|\$[^$\n]*\$|\\\[[\s\S]*?\\\]|\\\([\s\S]*?\\\)/g, ' ')
      .replace(/\\(?:[A-Za-z]+|[,;!])/g, ' ')
      .replace(/\s+([,.;!?])/g, '$1')
      .replace(/([,.;!?])\s*[,.!?]+/g, '$1 ')
      .replace(/\s+/g, ' ')
      .trim();

    // Pagefind may clip TeX mid-formula; hide fragments that still resemble source.
    if (/\\[A-Za-z]+|[$\\{}^_]|\b[A-Za-z]\w*\s*=\s*[^.;!?]{1,50}/.test(excerpt)) return '';
    return excerpt.slice(0, 120);
  }

  function renderResults(results) {
    searchResults.innerHTML = '';
    announce(results?.length ? 'search_count' : 'no_matches', results?.length || 0);

    if (!results || results.length === 0) {
      searchResults.style.display = 'block';
      const noResult = document.createElement('div');
      noResult.classList.add('list-group-item');
      noResult.setAttribute('data-ui', 'no_matches');
      noResult.textContent = window.siteLanguage ? window.siteLanguage.text('no_matches') : (document.documentElement.lang === 'zh-CN' ? '没有找到匹配结果' : 'No results found');
      searchResults.appendChild(noResult);
      if (window.siteLanguage) window.siteLanguage.apply();
      return;
    }

    searchResults.style.display = 'block';
    results.forEach(result => {
      const item = document.createElement('a');
      item.href = result.url;
      // Keep the title, excerpt and destination from the same indexed page.
      item.setAttribute('data-language-explicit', '');
      item.classList.add('list-group-item', 'list-group-item-action');

      const title = document.createElement('div');
      title.classList.add('fw-bold');
      title.textContent = result.title;
      item.appendChild(title);

      const excerpt = cleanExcerpt(result.excerpt);
      if (excerpt) {
        const snippet = document.createElement('small');
        snippet.classList.add('d-block');
        snippet.textContent = excerpt;
        item.appendChild(snippet);
      }

      searchResults.appendChild(item);
    });
    if (window.siteLanguage) window.siteLanguage.apply();
  }

  let searchData = null;
  const searchUrl = searchInput.getAttribute('data-search-source') || '/search.json';

  let searchDataReady;
  function loadSearchData() {
    // Share the fallback download across searches, only when Pagefind is unavailable.
    return searchDataReady ||= fetch(searchUrl)
      .then(r => {
        if (!r.ok) throw new Error('Search index unavailable');
        return r.json();
      })
      .then(data => {
        searchData = data.map(item => ({
          ...item,
          _lowerTitle: item.title ? item.title.toLowerCase() : '',
          _lowerContent: item.content ? item.content.toLowerCase() : ''
        }));
      })
      .catch(error => { searchDataReady = null; throw error; });
  }

  let debounceTimer = null;
  let currentSearchId = 0;

  searchInput.addEventListener('input', function() {
    const query = this.value.trim();
    const searchId = ++currentSearchId;

    clearTimeout(debounceTimer);
    searchResults.style.display = 'none';
    if (status) status.textContent = '';

    if (query.length < 2) {
      return;
    }
    announce('search_loading');

    // Debounce to avoid excessive searches while typing
    debounceTimer = setTimeout(async () => {
      try {
        const pf = await loadPagefind();
        if (pf) {
          const search = await pf.search(query);
          const resultPromises = search.results
            .slice(0, 10)
            .map(result => result.data());
          const dataResults = await Promise.all(resultPromises);

          if (searchId !== currentSearchId) {
            return;
          }

          const results = dataResults.map(data => ({
            title: data.meta.title,
            url: data.url,
            excerpt: data.excerpt || ''
          }));
          renderResults(results);
        } else {
          // Pagefind unavailable: fall back to client-side filtering.
          // Wait for the data to finish loading so an early keystroke doesn't
          // render an empty result set just because search.json hadn't arrived.
          await loadSearchData();
          if (searchId !== currentSearchId) return;
          const results = fallbackSearch(query, searchData || []).map(item => ({
            title: item.title,
            url: item.url,
            excerpt: item.excerpt || ''
          }));
          renderResults(results);
        }
      } catch (e) {
        console.error('Search error:', e);
        if (searchId !== currentSearchId) return;
        searchResults.style.display = 'none';
        announce('search_error');
      }
    }, 200);
  });

  // Links receive real focus so keyboard and assistive-technology users agree.
  searchInput.addEventListener('keydown', function(e) {
    const items = searchResults.querySelectorAll('a.list-group-item');
    if (!items.length || searchResults.style.display === 'none') return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      items[0].focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      items[items.length - 1].focus();
    }
  });
  searchResults.addEventListener('keydown', function(e) {
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
    const items = Array.from(searchResults.querySelectorAll('a.list-group-item'));
    const index = items.indexOf(document.activeElement);
    if (index < 0) return;
    e.preventDefault();
    const next = items[index + (e.key === 'ArrowDown' ? 1 : -1)];
    (next || searchInput).focus();
  });

  let opener;
  function openSearch(trigger) {
    opener = trigger;
    if (dialog && !dialog.open) dialog.showModal();
    searchInput.focus();
    searchInput.select();
  }
  if (dialog) {
    document.querySelectorAll('[data-open-search]').forEach(button => {
      button.hidden = false;
      button.addEventListener('click', () => openSearch(button));
    });
    document.getElementById('search-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
    dialog.addEventListener('close', () => {
      clearTimeout(debounceTimer);
      ++currentSearchId;
      searchResults.style.display = 'none';
      if (status) status.textContent = '';
      searchInput.value = '';
      // A drawer can close while search is open, making its old focus target inert.
      const target = opener?.getClientRects().length && !opener.closest('[inert]')
        ? opener : document.querySelector('[data-open-search]');
      target?.focus();
    });
  }

  // Native dialog handles Escape, background isolation and the Tab focus loop.
  document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (!dialog?.open) openSearch(document.activeElement);
    }
  });
})();
