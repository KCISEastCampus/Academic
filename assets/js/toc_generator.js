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

  // Determine the minimum heading level so numbering starts at 1
  const minLevel = Math.min(...headers.map(h => parseInt(h.tagName[1], 10)));
  const counters = [0, 0, 0, 0]; // max 4 levels deep

  // Build flat ordered list — all items always visible, Wikipedia-style
  const ol = document.createElement('ol');
  ol.className = 'toc-list';

  headers.forEach(header => {
    const level = parseInt(header.tagName[1], 10);
    const depth = Math.min(level - minLevel, 3); // 0-based depth, capped at 3

    // Increment counter at this depth, reset all deeper counters
    counters[depth]++;
    for (let i = depth + 1; i < 4; i++) {
      counters[i] = 0;
    }

    // Build section number string: "1", "1.1", "1.1.1", etc.
    const numberStr = counters.slice(0, depth + 1).join('.');

    const li = document.createElement('li');
    li.className = `toc-item toc-h${level}`;
    li.dataset.headingId = header.id;
    li.dataset.level = String(level);

    const a = document.createElement('a');
    a.href = `#${header.id}`;

    const numSpan = document.createElement('span');
    numSpan.className = 'toc-number';
    numSpan.textContent = numberStr;
    numSpan.setAttribute('aria-hidden', 'true');

    const textSpan = document.createElement('span');
    textSpan.className = 'toc-text';
    textSpan.textContent = header.textContent;

    a.appendChild(numSpan);
    a.appendChild(textSpan);
    li.appendChild(a);
    ol.appendChild(li);
  });

  tocContent.innerHTML = '';
  tocContent.appendChild(ol);

  const tocLinks = Array.from(tocContent.querySelectorAll('a'));
  let isScrolling = false;
  let lastUpdateTime = 0;

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

    const initialHashId = decodeURIComponent(window.location.hash.replace('#', ''));
    if (initialHashId && document.getElementById(initialHashId)) {
      const initialLink = tocContent.querySelector(`a[href="#${initialHashId}"]`);
      if (initialLink) initialLink.classList.add('active');
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
      let visibleCount = 0;
      tocLinks.forEach(link => {
        const href = link.getAttribute('href');
        const targetId = href ? href.substring(1) : '';
        const targetElement = targetId ? document.getElementById(targetId) : null;
        const originalText = targetElement ? targetElement.textContent : '';

        const textSpan = link.querySelector('.toc-text');
        // Reset to plain text before re-evaluating
        if (textSpan) textSpan.textContent = originalText;

        const text = originalText.toLowerCase();
        const listItem = link.closest('li');
        if (text.includes(searchTerm)) {
          listItem.style.display = '';
          visibleCount++;
          // Highlight the matching substring in the text span only
          if (textSpan) {
            const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
            textSpan.innerHTML = originalText.replace(regex, '<span class="toc-match">$1</span>');
          }
        } else {
          listItem.style.display = 'none';
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
      tocLinks.forEach(link => {
        const href = link.getAttribute('href');
        const targetId = href ? href.substring(1) : '';
        const targetElement = targetId ? document.getElementById(targetId) : null;
        const textSpan = link.querySelector('.toc-text');
        if (textSpan && targetElement) {
          textSpan.textContent = targetElement.textContent;
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
    const contentTop = contentContainer.offsetTop;
    const contentHeight = contentContainer.offsetHeight;
    const contentBottom = contentTop + contentHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
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
