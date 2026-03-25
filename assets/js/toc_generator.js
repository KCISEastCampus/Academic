function generateTOC() {
  const contentContainer = document.getElementById("content-container");
  const tocContent = document.querySelector(".toc-content");

  if (!contentContainer || !tocContent) return;

  const headers = Array.from(contentContainer.querySelectorAll("h1, h2, h3, h4"));
  if (headers.length === 0) return;

  // Assign IDs to headers that don't already have one
  headers.forEach((header, index) => {
    if (!header.id) {
      header.id = `toc-heading-${index}`;
    }
  });

  // Build a nested tree from the flat heading list
  function buildTree(headings) {
    const root = { children: [], level: 0, heading: null };
    const stack = [root];
    headings.forEach(h => {
      const level = parseInt(h.tagName[1], 10);
      const node = { heading: h, level, children: [] };
      while (stack.length > 1 && stack[stack.length - 1].level >= level) {
        stack.pop();
      }
      stack[stack.length - 1].children.push(node);
      stack.push(node);
    });
    return root;
  }

  // Recursively render the tree as nested <ul> elements
  function renderTree(node) {
    const ul = document.createElement('ul');
    ul.className = 'toc-list';

    node.children.forEach(child => {
      const li = document.createElement('li');
      li.className = `toc-item toc-h${child.level}`;
      li.dataset.headingId = child.heading.id;
      li.dataset.level = String(child.level);

      const itemInner = document.createElement('div');
      itemInner.className = 'toc-item-inner';

      const hasChildren = child.children.length > 0;

      if (hasChildren) {
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'toc-expand-btn';
        toggleBtn.setAttribute('aria-label', 'Toggle section');
        toggleBtn.setAttribute('type', 'button');
        toggleBtn.setAttribute('aria-expanded', child.level <= 1 ? 'true' : 'false');
        toggleBtn.innerHTML = child.level <= 1
          ? '<i class="bi bi-chevron-down" aria-hidden="true"></i>'
          : '<i class="bi bi-chevron-right" aria-hidden="true"></i>';
        toggleBtn.addEventListener('click', e => {
          e.preventDefault();
          e.stopPropagation();
          const isExpanded = li.classList.toggle('toc-expanded');
          toggleBtn.querySelector('i').className = isExpanded
            ? 'bi bi-chevron-down'
            : 'bi bi-chevron-right';
          toggleBtn.setAttribute('aria-expanded', String(isExpanded));
        });
        itemInner.appendChild(toggleBtn);
      } else {
        const placeholder = document.createElement('span');
        placeholder.className = 'toc-expand-placeholder';
        placeholder.setAttribute('aria-hidden', 'true');
        itemInner.appendChild(placeholder);
      }

      const a = document.createElement('a');
      a.href = `#${child.heading.id}`;
      a.textContent = child.heading.textContent;
      itemInner.appendChild(a);

      li.appendChild(itemInner);

      if (hasChildren) {
        li.classList.add('toc-has-children');
        // H1 items start expanded; H2+ start collapsed
        if (child.level <= 1) {
          li.classList.add('toc-expanded');
        }
        const childUl = renderTree(child);
        childUl.className = 'toc-list toc-children';
        li.appendChild(childUl);
      }

      ul.appendChild(li);
    });

    return ul;
  }

  const tree = buildTree(headers);
  const renderedTree = renderTree(tree);
  tocContent.innerHTML = '';
  tocContent.appendChild(renderedTree);

  const tocLinks = Array.from(tocContent.querySelectorAll('a'));
  let isScrolling = false;
  let lastUpdateTime = 0;

  // Expand all ancestor items for a given heading ID
  function expandAncestors(headingId) {
    const item = tocContent.querySelector(`.toc-item[data-heading-id="${headingId}"]`);
    if (!item) return;
    let parent = item.parentElement && item.parentElement.closest('.toc-item');
    while (parent) {
      if (parent.classList.contains('toc-has-children') && !parent.classList.contains('toc-expanded')) {
        parent.classList.add('toc-expanded');
        const btn = parent.querySelector(':scope > .toc-item-inner > .toc-expand-btn');
        if (btn) {
          btn.querySelector('i').className = 'bi bi-chevron-down';
          btn.setAttribute('aria-expanded', 'true');
        }
      }
      parent = parent.parentElement && parent.parentElement.closest('.toc-item');
    }
  }

  // Intersection Observer for scroll-synced active heading detection
  const observer = new IntersectionObserver(
    entries => {
      const now = Date.now();
      if (isScrolling || now - lastUpdateTime < 100) return;

      let activeEntry = null;
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          activeEntry = entry;
        }
      });

      if (activeEntry) {
        lastUpdateTime = now;
        tocLinks.forEach(link => link.classList.remove('active'));
        const activeLink = tocContent.querySelector(`a[href="#${activeEntry.target.id}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
          expandAncestors(activeEntry.target.id);
          // Auto-scroll TOC to keep the active item in view (desktop only)
          if (window.innerWidth > 1024) {
            activeLink.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        }
      }
    },
    {
      rootMargin: "-10% 0px -80% 0px",
      threshold: [0, 0.5, 1.0]
    }
  );

  headers.forEach(header => observer.observe(header));

  // Smooth scrolling when a TOC link is clicked
  tocLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        isScrolling = true;
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setTimeout(() => { isScrolling = false; }, 1000);

        tocLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        expandAncestors(targetId);

        // Close the mobile slide-in panel after navigation
        if (window.innerWidth <= 1024) {
          toggleTOC(false);
        }
      }
    });
  });

  // Initialise supporting UI after a short delay (allows DOM to settle)
  setTimeout(() => {
    initTOCToggle();
    initTOCSearch();
    initReadingProgress();

    let initialHashId = null;
    if (window.location.hash) {
      try {
        initialHashId = decodeURIComponent(window.location.hash.replace('#', ''));
      } catch (e) {
        console.error('Failed to decode URL hash for TOC initialisation:', e);
        initialHashId = null;
      }
    }
    if (initialHashId && document.getElementById(initialHashId)) {
      expandAncestors(initialHashId);
    }
  }, 100);

  // Adjust TOC height only when footer is visible
  setupTOCFooterObserver();
}

function initTOCToggle() {
  const tocToggle = document.getElementById('tocToggle');
  const toc = document.getElementById('toc');
  
  if (tocToggle && toc) {
    // Remove any existing event listeners
    tocToggle.replaceWith(tocToggle.cloneNode(true));
    const newTocToggle = document.getElementById('tocToggle');
    newTocToggle.setAttribute('aria-expanded', 'false');
    newTocToggle.setAttribute('aria-controls', 'toc');
    
    newTocToggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const isVisible = toc.classList.contains('show');
      toggleTOC(!isVisible);
    });
    
    // Close TOC when clicking outside on mobile
    document.addEventListener('click', (e) => {
      if (window.innerWidth <= 1024 && 
          !toc.contains(e.target) && 
          !newTocToggle.contains(e.target) &&
          toc.classList.contains('show')) {
        toggleTOC(false);
      }
    });
    
    // ESC key to close TOC on mobile
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && toc.classList.contains('show')) {
        toggleTOC(false);
      }
    });
    
  } else {
    console.error('TOC elements not found:', {tocToggle, toc});
  }
}

function toggleTOC(show) {
  const toc = document.getElementById('toc');
  const tocToggle = document.getElementById('tocToggle');
  
  if (!toc || !tocToggle) return;
  
  if (show) {
    toc.classList.add('show');
    tocToggle.classList.add('active');
    tocToggle.innerHTML = '<i class="bi bi-x" aria-hidden="true"></i>';
    tocToggle.setAttribute('aria-expanded', 'true');
    // Prevent body scroll when TOC is open on mobile
    if (window.innerWidth <= 768) {
      document.body.style.overflow = 'hidden';
    }

    if (window.innerWidth <= 1024) {
      const firstLink = toc.querySelector('a');
      if (firstLink) {
        setTimeout(() => firstLink.focus(), 120);
      }
    }
  } else {
    toc.classList.remove('show');
    tocToggle.classList.remove('active');
    tocToggle.innerHTML = '<i class="bi bi-list" aria-hidden="true"></i>';
    tocToggle.setAttribute('aria-expanded', 'false');
    // Restore body scroll
    document.body.style.overflow = '';

    if (document.activeElement && toc.contains(document.activeElement)) {
      tocToggle.focus();
    }
  }
}

function setupTOCFooterObserver() {
  const toc = document.getElementById('toc');
  const footer = document.querySelector('footer');

  if (!toc || !footer || !('IntersectionObserver' in window)) return;

  let lastTocScroll = 0;
  const userScrollCooldown = 800; // ms

  const scrollTocToBottom = (sync = false) => {
    // Respect recent user scroll interactions
    if (Date.now() - lastTocScroll <= userScrollCooldown) return;

    const doScroll = () => {
      // Smoothly slide to the bottom; run twice to catch height transitions
      toc.scrollTo({ top: toc.scrollHeight, behavior: 'smooth' });
      setTimeout(() => {
        toc.scrollTo({ top: toc.scrollHeight, behavior: 'smooth' });
      }, 120);
    };

    // Align with the shrink transition so it feels like one motion
    if (sync) {
      requestAnimationFrame(() => {
        doScroll();
      });
    } else {
      doScroll();
    }
  };

  // Track manual TOC scrolling to avoid fighting the user
  toc.addEventListener('scroll', () => {
    lastTocScroll = Date.now();
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        toc.classList.add('toc-footer-visible');
        scrollTocToBottom(true);
      } else {
        toc.classList.remove('toc-footer-visible');
      }
    });
  }, {
    root: null,
    threshold: 0,
    rootMargin: '0px 0px 0px 0px'
  });

  observer.observe(footer);

  // Keep TOC bottom-aligned on resize/zoom when footer is visible
  const debouncedResize = (() => {
    let timer = null;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        if (toc.classList.contains('toc-footer-visible')) {
          scrollTocToBottom();
        }
      }, 120);
    };
  })();

  window.addEventListener('resize', debouncedResize);
}

// TOC Search Functionality
function initTOCSearch() {
  const searchInput = document.getElementById('tocSearch');
  const searchClear = document.getElementById('tocSearchClear');
  const tocContent = document.querySelector('.toc-content');

  if (!searchInput || !tocContent) return;

  searchInput.addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase().trim();
    const tocLinks = Array.from(tocContent.querySelectorAll('a'));

    // Show/hide clear button
    searchClear.style.display = searchTerm ? 'flex' : 'none';

    if (searchTerm) {
      // While searching, reveal all .toc-children containers so matches are visible
      tocContent.classList.add('toc-searching');

      // Helper: safely highlight matching text using DOM nodes (avoids XSS via innerHTML)
      function highlightText(link, originalText, term) {
        link.textContent = '';
        const regex = new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
        let lastIndex = 0;
        let match;
        while ((match = regex.exec(originalText)) !== null) {
          const matchStart = match.index;
          const matchEnd = matchStart + match[0].length;
          if (matchStart > lastIndex) {
            link.appendChild(document.createTextNode(originalText.slice(lastIndex, matchStart)));
          }
          const span = document.createElement('span');
          span.className = 'toc-match';
          span.textContent = originalText.slice(matchStart, matchEnd);
          link.appendChild(span);
          lastIndex = matchEnd;
        }
        if (lastIndex < originalText.length) {
          link.appendChild(document.createTextNode(originalText.slice(lastIndex)));
        }
      }

      // First pass: restore text and determine direct matches per <li>
      const allListItems = Array.from(tocContent.querySelectorAll('li'));
      allListItems.forEach(li => {
        li.style.display = 'none';
        li.dataset.searchMatch = 'false';
      });

      let visibleCount = 0;
      tocLinks.forEach(link => {
        // Restore plain text before re-evaluating
        const href = link.getAttribute('href');
        const targetId = href ? href.substring(1) : '';
        const targetElement = targetId ? document.getElementById(targetId) : null;
        const originalText = targetElement ? targetElement.textContent : link.textContent;
        link.textContent = originalText;

        const text = originalText.toLowerCase();
        const listItem = link.closest('li');
        if (text.includes(searchTerm)) {
          listItem.dataset.searchMatch = 'true';
          // Highlight the matching substring using safe DOM nodes
          highlightText(link, originalText, searchTerm);
        }
      });

      // Second pass: show each matching <li> and all its ancestor <li> items
      allListItems.forEach(li => {
        if (li.dataset.searchMatch === 'true') {
          li.style.display = '';
          visibleCount++;
          // Walk up the tree, showing ancestor <li> items so the match is reachable
          let ancestor = li.parentElement && li.parentElement.closest('li');
          while (ancestor) {
            ancestor.style.display = '';
            ancestor = ancestor.parentElement && ancestor.parentElement.closest('li');
          }
        }
      });

      // Show "no results" message if needed
      const noResultsMsg = document.getElementById('tocNoResults');
      if (visibleCount === 0) {
        if (!noResultsMsg) {
          const msg = document.createElement('div');
          msg.id = 'tocNoResults';
          msg.className = 'toc-no-results';
          msg.innerHTML = '<i class="bi bi-search"></i> No matches found';
          tocContent.appendChild(msg);
        }
      } else if (noResultsMsg) {
        noResultsMsg.remove();
      }
    } else {
      // No search term — restore everything
      tocContent.classList.remove('toc-searching');
      tocLinks.forEach(link => {
        const href = link.getAttribute('href');
        const targetId = href ? href.substring(1) : '';
        const targetElement = targetId ? document.getElementById(targetId) : null;
        if (targetElement) {
          link.textContent = targetElement.textContent;
        }
        const listItem = link.closest('li');
        if (listItem) listItem.style.display = '';
      });
      const noResultsMsg = document.getElementById('tocNoResults');
      if (noResultsMsg) noResultsMsg.remove();
    }
  });

  // Clear button functionality
  searchClear.addEventListener('click', function () {
    searchInput.value = '';
    searchInput.dispatchEvent(new Event('input'));
    searchInput.focus();
  });

  // ESC to clear search
  searchInput.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      this.value = '';
      this.dispatchEvent(new Event('input'));
      this.blur();
    }
  });
}

// Reading Progress Indicator
function initReadingProgress() {
  const progressBar = document.getElementById('readingProgress');
  const progressText = document.getElementById('progressText');
  const contentContainer = document.getElementById('content-container');
  
  if (!progressBar || !contentContainer) return;
  
  function updateProgress() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Calculate content-specific progress
    const contentTop = contentContainer.offsetTop;
    const contentHeight = contentContainer.offsetHeight;
    const contentBottom = contentTop + contentHeight;
    
    let progress = 0;
    
    if (scrollTop < contentTop) {
      progress = 0;
    } else if (scrollTop + windowHeight > contentBottom) {
      progress = 100;
    } else {
      const contentScrolled = scrollTop - contentTop;
      const contentScrollable = contentHeight - windowHeight;
      progress = (contentScrolled / contentScrollable) * 100;
    }
    
    progress = Math.max(0, Math.min(100, progress));
    
    progressBar.style.width = progress + '%';
    progressText.textContent = Math.round(progress) + '%';
    
    // Change color based on progress
    if (progress < 33) {
      progressBar.style.background = 'linear-gradient(to right, #3b82f6, #06b6d4)';
    } else if (progress < 66) {
      progressBar.style.background = 'linear-gradient(to right, #06b6d4, #10b981)';
    } else {
      progressBar.style.background = 'linear-gradient(to right, #10b981, #22c55e)';
    }
  }
  
  // Update on scroll with throttling
  let ticking = false;
  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        updateProgress();
        ticking = false;
      });
      ticking = true;
    }
  });
  
  // Initial update
  updateProgress();
}

