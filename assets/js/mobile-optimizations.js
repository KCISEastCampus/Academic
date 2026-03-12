/**
 * Mobile Optimization & Performance Enhancements
 * Improves UX and performance on mobile devices
 */

// Mobile Detection
const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    || window.innerWidth < 768;
};

// 1. Image Lazy Loading Optimization
function initLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          observer.unobserve(img);
        }
      });
    }, {
      rootMargin: '50px'
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
}

// 2. Optimize Viewport Meta Tag for Better Zoom Control
function optimizeViewport() {
  const viewport = document.querySelector('meta[name="viewport"]');
  if (viewport && isMobile()) {
    // Ensure zoom is controlled properly
    if (!viewport.getAttribute('content').includes('user-scalable')) {
      viewport.setAttribute('content', viewport.getAttribute('content') + ', user-scalable=yes');
    }
  }
}

// 3. Input Optimization to Prevent iOS Auto-Zoom
function optimizeInputs() {
  const inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="search"], textarea');
  inputs.forEach(input => {
    if (input.style.fontSize !== '16px') {
      input.style.fontSize = '16px'; // Prevents auto-zoom on focus in iOS
    }
  });
}

// 4. Touch Feedback Enhancement
function enhanceTouchFeedback() {
  document.addEventListener('touchstart', function(e) {
    const target = e.target.closest('a, button, .btn, .card, .quick-nav-item, [role="button"]');
    if (target) {
      target.style.opacity = '0.8';
    }
  }, false);

  document.addEventListener('touchend', function(e) {
    const target = e.target.closest('a, button, .btn, .card, .quick-nav-item, [role="button"]');
    if (target) {
      target.style.opacity = '1';
    }
  }, false);
}

// 5. Smooth Scroll Polyfill for Older Browsers
function enableSmoothScroll() {
  if (!('scrollBehavior' in document.documentElement.style)) {
    // Polyfill for smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }
}

// 6. Prevent Double-Tap Zoom on Mobile
function preventDoubleTapZoom() {
  let lastTouchEnd = 0;
  document.addEventListener('touchend', function(event) {
    const now = Date.now();
    if (now - lastTouchEnd <= 300 && event.touches.length === 0) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  }, false);
}

// 7. Performance: Defer Non-Critical Resources
function deferNonCritical() {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      // Load fonts asynchronously
      if ('fonts' in document) {
        try {
          document.fonts.load('14px "MapleFont"');
        } catch (e) {
          // Fallback if web font API not supported
        }
      }
    });
  } else {
    // Fallback for browsers without requestIdleCallback
    setTimeout(() => {
      if ('fonts' in document) {
        try {
          document.fonts.load('14px "MapleFont"');
        } catch (e) {
          // Fallback
        }
      }
    }, 3000);
  }
}

// 8. Mobile-Specific Search Input Optimization
function optimizeSearchInput() {
  const searchInput = document.getElementById('search-input');
  if (searchInput && isMobile()) {
    // Prevent auto-capitalize and auto-correct on iOS
    searchInput.setAttribute('autocapitalize', 'off');
    searchInput.setAttribute('autocorrect', 'off');
    searchInput.setAttribute('spellcheck', 'false');
    
    // Improve search performance with debouncing
    let searchTimeout;
    searchInput.addEventListener('input', function() {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        // Trigger search logic here if needed
      }, 300);
    });
  }
}

// 9. Optimize Scrolling Performance
function optimizeScrolling() {
  // Passive event listeners for better scroll performance
  let ticking = false;
  
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        // Performance monitoring can go here
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

// 10. Fix for iOS 100vh Bug
function fixIOSViewportHeight() {
  if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
    document.documentElement.style.height = '100%';
    document.body.style.height = '100%';
    
    const observeViewportHeight = () => {
      document.documentElement.style.height = window.innerHeight + 'px';
    };
    
    window.addEventListener('orientationchange', observeViewportHeight);
    window.addEventListener('resize', observeViewportHeight);
  }
}

// 11. Optimize Media Queries for Dynamic Viewport Changes
function handleViewportChanges() {
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    document.body.classList.add('is-resizing');
    
    resizeTimer = setTimeout(() => {
      document.body.classList.remove('is-resizing');
    }, 100);
  }, { passive: true });
}

// 12. Preload Critical Resources Based on Viewport
function preloadResourcesForViewport() {
  if (isMobile()) {
    // Reduce number of preloaded resources on mobile
    const preloads = document.querySelectorAll('link[rel="preload"]');
    preloads.forEach((preload, index) => {
      // Only keep first few preloads on mobile to reduce bandwidth
      if (index > 2) {
        preload.rel = 'prefetch';
      }
    });
  }
}

// 13. Enable Hardware Acceleration for Animations
function enableHardwareAcceleration() {
  const style = document.createElement('style');
  style.textContent = `
    @media (max-width: 768px) {
      * {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }
  `;
  document.head.appendChild(style);
}

// 14. Adaptive Image Loading Based on Network
function initAdaptiveImageLoading() {
  if ('connection' in navigator) {
    const connection = navigator.connection;
    const updateImageQuality = () => {
      const effectiveType = connection.effectiveType;
      const images = document.querySelectorAll('img[data-src-low], img[data-src-high]');
      
      images.forEach(img => {
        if (effectiveType === '4g') {
          if (img.dataset.srcHigh) {
            img.dataset.src = img.dataset.srcHigh;
          }
        } else {
          if (img.dataset.srcLow) {
            img.dataset.src = img.dataset.srcLow;
          }
        }
      });
    };
    
    updateImageQuality();
    connection.addEventListener('change', updateImageQuality, { passive: true });
  }
}

// Initialize All Mobile Optimizations
function initMobileOptimizations() {
  // Ensure DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      runOptimizations();
    });
  } else {
    runOptimizations();
  }
}

function runOptimizations() {
  optimizeViewport();
  optimizeInputs();
  initLazyLoading();
  optimizeSearchInput();
  enhanceTouchFeedback();
  enableSmoothScroll();
  if (isMobile()) {
    preventDoubleTapZoom();
    fixIOSViewportHeight();
    preloadResourcesForViewport();
    enableHardwareAcceleration();
  }
  handleViewportChanges();
  optimizeScrolling();
  deferNonCritical();
  initAdaptiveImageLoading();
}

// Start optimizations
initMobileOptimizations();

// Performance Monitoring (optional)
if (window.performance && 'getEntriesByType' in window.performance) {
  window.addEventListener('load', () => {
    setTimeout(() => {
      const perfData = window.performance.getEntriesByType('navigation')[0];
      if (perfData && isMobile()) {
        const pageLoadTime = perfData.loadEventEnd - perfData.fetchStart;
        // Can be used for analytics or debugging
        if (pageLoadTime > 3000) {
          console.warn('Mobile page load time is slow:', pageLoadTime + 'ms');
        }
      }
    }, 0);
  });
}
