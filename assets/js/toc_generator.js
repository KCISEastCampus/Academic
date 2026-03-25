function generateTOC() {
  const contentContainer = document.getElementById("content-container");
  const tocContent = document.querySelector(".toc-content");

  if (!contentContainer || !tocContent) return;

  const headers = Array.from(contentContainer.querySelectorAll("h1, h2, h3, h4"));

  if (headers.length === 0) return;

  // Assign IDs to all headers upfront
  headers.forEach((header, index) => {
    if (!header.id) {
      header.id = `toc-heading-${index}`;
    }
  });

  // Build a nested tree that mirrors the heading hierarchy
  function buildTOCTree(headers) {
    const root = { children: [], level: 0 };
    const stack = [root];

    headers.forEach((header) => {
      const level = parseInt(header.tagName.charAt(1));
      const node = { id: header.id, text: header.textContent, level, children: [] };

      // Pop until we find a node whose level is strictly less than the current one
      while (stack.length > 1 && stack[stack.length - 1].level >= level) {
        stack.pop();
      }

      stack[stack.length - 1].children.push(node);
      stack.push(node);
    });

    return root.children;
  }

  // Render the tree as nested <ul>/<li> HTML
  function renderTOCTree(nodes) {
    if (nodes.length === 0) return '';
    let html = '<ul class="toc-list">';
    nodes.forEach((node) => {
      html += `<li class="toc-h${node.level} toc-item">`;
      html += `<a href="#${node.id}">${node.text}</a>`;
      if (node.children.length > 0) {
        html += renderTOCTree(node.children);
      }
      html += '</li>';
    });
    html += '</ul>';
    return html;
  }

  tocContent.innerHTML = renderTOCTree(buildTOCTree(headers));

  // Scroll sync with active heading detection using IntersectionObserver
  const tocLinks = document.querySelectorAll(".toc-content a");
  let isScrolling = false;
  let lastUpdateTime = 0;

  // Intersection Observer for better active detection
  const observer = new IntersectionObserver(
    (entries) => {
      const now = Date.now();
      if (isScrolling || now - lastUpdateTime < 100) return; // Don't update during programmatic scrolling or too frequently
      
      let activeEntry = null;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeEntry = entry;
        }
      });

      if (activeEntry) {
        lastUpdateTime = now;
        tocLinks.forEach((link) => link.classList.remove("active"));
        const activeLink = document.querySelector(`.toc-content a[href="#${activeEntry.target.id}"]`);
        if (activeLink) {
          activeLink.classList.add("active");
          // Auto-scroll TOC to active item (only on desktop)
          if (window.innerWidth > 1024) {
            activeLink.scrollIntoView({
              behavior: 'smooth',
              block: 'center'
            });
          }
        }
      }
    },
    { 
      rootMargin: "-10% 0px -80% 0px", 
      threshold: [0, 0.5, 1.0]
    }
  );

  headers.forEach((header) => observer.observe(header));

  // Smooth scrolling for TOC links
  tocLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        isScrolling = true;
        
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Reset scrolling flag after animation
        setTimeout(() => {
          isScrolling = false;
        }, 1000);
        
        // Update active state immediately
        tocLinks.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
        
        // Close mobile TOC if open
        if (window.innerWidth <= 1024) {
          toggleTOC(false);
        }
      }
    });
  });

  // Initialize TOC toggle functionality
  setTimeout(() => {
    initTOCToggle();
    initTOCSearch();
    initReadingProgress();
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
  
  if (!searchInput) return;
  
  searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase().trim();
    const tocLinks = document.querySelectorAll('.toc-content a');

    // Show/hide clear button
    searchClear.style.display = searchTerm ? 'flex' : 'none';

    if (!searchTerm) {
      // Reset all items to visible and restore original text
      document.querySelectorAll('.toc-content li').forEach(li => { li.style.display = ''; });
      tocLinks.forEach(link => {
        const targetEl = document.getElementById((link.getAttribute('href') || '').substring(1));
        if (targetEl) link.textContent = targetEl.textContent;
      });
      const noResultsMsg = document.getElementById('tocNoResults');
      if (noResultsMsg) noResultsMsg.remove();
      return;
    }

    // Hide all list items first
    document.querySelectorAll('.toc-content li').forEach(li => { li.style.display = 'none'; });

    const escapedTerm = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const searchRegex = new RegExp(`(${escapedTerm})`, 'gi');

    let visibleCount = 0;
    tocLinks.forEach(link => {
      const href = link.getAttribute('href');
      const targetId = href ? href.substring(1) : '';
      const targetEl = targetId ? document.getElementById(targetId) : null;
      const originalText = targetEl ? targetEl.textContent : link.textContent;
      link.textContent = originalText;

      if (originalText.toLowerCase().includes(searchTerm)) {
        visibleCount++;
        // Reveal this <li> and all ancestor <li> elements within .toc-content
        let el = link.closest('li');
        while (el && el.closest('.toc-content')) {
          el.style.display = '';
          el = el.parentElement ? el.parentElement.closest('li') : null;
        }
        // Highlight matched text
        link.innerHTML = originalText.replace(searchRegex, '<span class="toc-match">$1</span>');
      }
    });

    // Show/hide "no results" message
    const noResultsMsg = document.getElementById('tocNoResults');
    if (visibleCount === 0) {
      if (!noResultsMsg) {
        const msg = document.createElement('div');
        msg.id = 'tocNoResults';
        msg.className = 'toc-no-results';
        msg.innerHTML = '<i class="bi bi-search"></i> No matches found';
        document.querySelector('.toc-content').appendChild(msg);
      }
    } else if (noResultsMsg) {
      noResultsMsg.remove();
    }
  });
  
  // Clear button functionality
  searchClear.addEventListener('click', function() {
    searchInput.value = '';
    searchInput.dispatchEvent(new Event('input'));
    searchInput.focus();
  });
  
  // ESC to clear search
  searchInput.addEventListener('keydown', function(e) {
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

