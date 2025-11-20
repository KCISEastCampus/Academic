(function() {
  'use strict';

  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');

  if (!searchInput || !searchResults) {
    return;
  }

  let searchData = [];
  const searchUrl = searchInput.getAttribute('data-search-source') || '/search.json';

  // Fetch search data
  fetch(searchUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      searchData = data;
    })
    .catch(error => {
      console.error('Error fetching search data:', error);
    });

  searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase().trim();
    searchResults.innerHTML = '';

    if (query.length < 2) {
      searchResults.style.display = 'none';
      return;
    }

    const results = searchData.filter(item => {
      return (item.title && item.title.toLowerCase().includes(query)) ||
             (item.content && item.content.toLowerCase().includes(query));
    });

    if (results.length > 0) {
      searchResults.style.display = 'block';
      results.slice(0, 10).forEach(result => {
        const item = document.createElement('a');
        // Append highlight parameter for robust client-side highlighting
        // This works even if the browser's native text fragment support is flaky
        const separator = result.url.includes('?') ? '&' : '?';
        item.href = `${result.url}${separator}highlight=${encodeURIComponent(query)}`;
        item.classList.add('list-group-item', 'list-group-item-action');
        
        const title = document.createElement('div');
        title.classList.add('fw-bold');
        title.textContent = result.title;
        
        const snippet = document.createElement('small');
        snippet.classList.add('text-muted', 'd-block');
        
        // Generate snippet with highlight
        const content = result.content || '';
        const lowerContent = content.toLowerCase();
        const index = lowerContent.indexOf(query);
        
        if (index > -1) {
          const start = Math.max(0, index - 40);
          const end = Math.min(content.length, index + query.length + 60);
          let text = content.substring(start, end);
          
          if (start > 0) text = '...' + text;
          if (end < content.length) text = text + '...';
          
          // Highlight matches safely
          const parts = text.split(new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'));
          parts.forEach(part => {
            if (part.toLowerCase() === query) {
              const mark = document.createElement('mark');
              mark.textContent = part;
              mark.classList.add('bg-warning', 'text-dark', 'px-0', 'rounded-1');
              snippet.appendChild(mark);
            } else {
              snippet.appendChild(document.createTextNode(part));
            }
          });
        } else {
          snippet.textContent = content.substring(0, 100) + '...';
        }
        
        item.appendChild(title);
        item.appendChild(snippet);
        searchResults.appendChild(item);
      });
    } else {
      searchResults.style.display = 'block';
      const noResult = document.createElement('div');
      noResult.classList.add('list-group-item');
      noResult.textContent = 'No results found';
      searchResults.appendChild(noResult);
    }
  });

  // Hide results when clicking outside
  document.addEventListener('click', function(e) {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
      searchResults.style.display = 'none';
    }
  });
})();
