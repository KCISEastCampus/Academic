function generateTOC() {
  const contentContainer = document.getElementById("content-container");
  const tocContent = document.querySelector(".toc-content");

  if (!contentContainer || !tocContent) return;

  const headers = contentContainer.querySelectorAll("h1, h2, h3, h4");
  let tocHTML = "<ul>";

  headers.forEach((header, index) => {
    const id = header.id || `toc-heading-${index}`;
    header.id = id; // assign an id if not present

    const levelClass = "toc-" + header.tagName.toLowerCase();
    tocHTML += `<li class="${levelClass} toc-item"><a href="#${id}">${header.textContent}</a></li>`;
  });

  tocHTML += "</ul>";
  tocContent.innerHTML = tocHTML;

  // Enhanced scroll sync with improved active detection
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
  }, 100);
}

function initTOCToggle() {
  const tocToggle = document.getElementById('tocToggle');
  const toc = document.getElementById('toc');
  
  console.log('InitTOCToggle called', {tocToggle, toc});
  
  if (tocToggle && toc) {
    // Remove any existing event listeners
    tocToggle.replaceWith(tocToggle.cloneNode(true));
    const newTocToggle = document.getElementById('tocToggle');
    
    newTocToggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const isVisible = toc.classList.contains('show');
      console.log('TOC toggle clicked, isVisible:', isVisible);
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
    
    console.log('TOC toggle initialized successfully');
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
    tocToggle.innerHTML = '<i class="bi bi-x"></i>';
    // Prevent body scroll when TOC is open on mobile
    if (window.innerWidth <= 768) {
      document.body.style.overflow = 'hidden';
    }
  } else {
    toc.classList.remove('show');
    tocToggle.classList.remove('active');
    tocToggle.innerHTML = '<i class="bi bi-list"></i>';
    // Restore body scroll
    document.body.style.overflow = '';
  }
}
