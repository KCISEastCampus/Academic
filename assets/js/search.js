(function() {
  'use strict';

  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');

  if (!searchInput || !searchResults) {
    return;
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
      .filter(item =>
        (item._lowerTitle && item._lowerTitle.includes(q)) ||
        (item._lowerContent && item._lowerContent.includes(q))
      )
      .slice(0, 10)
      .map(item => ({ title: item.title, url: item.url, excerpt: item.content }));
  }

  function renderResults(results) {
    searchResults.innerHTML = '';

    if (!results || results.length === 0) {
      searchResults.style.display = 'block';
      const noResult = document.createElement('div');
      noResult.classList.add('list-group-item');
      noResult.textContent = 'No results found';
      searchResults.appendChild(noResult);
      return;
    }

    searchResults.style.display = 'block';
    results.forEach(result => {
      const item = document.createElement('a');
      item.href = result.url;
      item.classList.add('list-group-item', 'list-group-item-action');

      const title = document.createElement('div');
      title.classList.add('fw-bold');
      title.textContent = result.title;
      item.appendChild(title);

      if (result.excerpt) {
        const snippet = document.createElement('small');
        snippet.classList.add('text-muted', 'd-block');
        snippet.textContent = result.excerpt.slice(0, 120);
        item.appendChild(snippet);
      }

      searchResults.appendChild(item);
    });
  }

  let searchData = null;
  const searchUrl = searchInput.getAttribute('data-search-source') || '/search.json';

  // Preload fallback search data (small). Keep the promise so a search issued
  // before the data finishes loading can await it instead of flashing "No results".
  const searchDataReady = fetch(searchUrl)
    .then(r => r.ok ? r.json() : [])
    .then(data => {
      searchData = data.map(item => ({
        ...item,
        _lowerTitle: item.title ? item.title.toLowerCase() : '',
        _lowerContent: item.content ? item.content.toLowerCase() : ''
      }));
    })
    .catch(() => { searchData = []; });

  let debounceTimer = null;
  let currentSearchId = 0;

  searchInput.addEventListener('input', function() {
    const query = this.value.trim();
    const searchId = ++currentSearchId;

    clearTimeout(debounceTimer);

    if (query.length < 2) {
      searchResults.style.display = 'none';
      return;
    }

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
            excerpt: data.excerpt ? data.excerpt.replace(/<[^>]*>/g, ' ').trim().slice(0, 120) : ''
          }));
          renderResults(results);
        } else {
          // Pagefind unavailable: fall back to client-side filtering.
          // Wait for the data to finish loading so an early keystroke doesn't
          // render an empty result set just because search.json hadn't arrived.
          await searchDataReady;
          if (searchId !== currentSearchId) return;
          const results = fallbackSearch(query, searchData || []).map(item => ({
            title: item.title,
            url: item.url,
            excerpt: item.excerpt ? item.excerpt.slice(0, 120) : ''
          }));
          renderResults(results);
        }
      } catch (e) {
        console.error('Search error:', e);
        if (searchId !== currentSearchId) return;
        renderResults([]);
      }
    }, 200);
  });

  // Hide results when clicking outside
  document.addEventListener('click', function(e) {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
      searchResults.style.display = 'none';
    }
  });

  // Ctrl+K / Cmd+K to focus search
  document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      searchInput.focus();
      searchInput.select();
    }
    if (e.key === 'Escape' && document.activeElement === searchInput) {
      searchInput.blur();
      searchResults.style.display = 'none';
    }
  });
})();
