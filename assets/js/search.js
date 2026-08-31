(function() {
  'use strict';

  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');

  if (!searchInput || !searchResults) {
    return;
  }

  let pagefind = null;
  let searchReady = false;

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

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // Fallback: simple client-side filter (if Pagefind index unavailable)
  function fallbackSearch(query, searchData) {
    const q = query.toLowerCase().trim();
    return searchData
      .filter(item =>
        (item.title && item.title.toLowerCase().includes(q)) ||
        (item.content && item.content.toLowerCase().includes(q))
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

  // Preload fallback search data (small)
  fetch(searchUrl)
    .then(r => r.ok ? r.json() : [])
    .then(data => { searchData = data; })
    .catch(() => { searchData = []; });

  let debounceTimer = null;

  searchInput.addEventListener('input', function() {
    const query = this.value.trim();

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
          const results = [];
          for (let i = 0; i < Math.min(search.results.length, 10); i++) {
            const data = await search.results[i].data();
            results.push({
              title: data.meta.title,
              url: data.url,
              excerpt: data.excerpt ? data.excerpt.replace(/<[^>]*>/g, ' ').trim().slice(0, 120) : ''
            });
          }
          renderResults(results);
        } else if (searchData) {
          // Fallback to legacy filtering
          const results = fallbackSearch(query, searchData).map(item => ({
            title: item.title,
            url: item.url,
            excerpt: item.excerpt ? item.excerpt.slice(0, 120) : ''
          }));
          renderResults(results);
        } else {
          renderResults([]);
        }
      } catch (e) {
        console.error('Search error:', e);
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
