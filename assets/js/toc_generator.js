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

  // Intersection Observer for better active detection
  const observer = new IntersectionObserver(
    (entries) => {
      if (isScrolling) return; // Don't update during programmatic scrolling
      
      let activeEntry = null;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeEntry = entry;
        }
      });

      if (activeEntry) {
        tocLinks.forEach((link) => link.classList.remove("active"));
        const activeLink = document.querySelector(`.toc-content a[href="#${activeEntry.target.id}"]`);
        if (activeLink) {
          activeLink.classList.add("active");
          // Auto-scroll TOC to active item
          activeLink.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }
      }
    },
    { 
      rootMargin: "-20% 0px -70% 0px", 
      threshold: [0, 0.1, 0.3, 0.5, 0.7, 1.0]
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
  initTOCToggle();
}

function initTOCToggle() {
  const tocToggle = document.getElementById('tocToggle');
  const toc = document.getElementById('toc');
  
  if (tocToggle && toc) {
    tocToggle.addEventListener('click', () => {
      const isVisible = toc.classList.contains('show');
      toggleTOC(!isVisible);
    });
    
    // Close TOC when clicking outside on mobile
    document.addEventListener('click', (e) => {
      if (window.innerWidth <= 1024 && 
          !toc.contains(e.target) && 
          !tocToggle.contains(e.target) &&
          toc.classList.contains('show')) {
        toggleTOC(false);
      }
    });
  }
}

function toggleTOC(show) {
  const toc = document.getElementById('toc');
  const tocToggle = document.getElementById('tocToggle');
  
  if (show) {
    toc.classList.add('show');
    tocToggle.classList.add('active');
    tocToggle.innerHTML = '<i class="bi bi-x"></i>';
  } else {
    toc.classList.remove('show');
    tocToggle.classList.remove('active');
    tocToggle.innerHTML = '<i class="bi bi-list"></i>';
  }
}
