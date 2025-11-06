(function () {
  'use strict';

  const PLACEHOLDER_SVG = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 9" preserveAspectRatio="none"%3E%3Crect width="16" height="9" fill="%23f0f3f8"/%3E%3C/svg%3E';

  function markAsLoaded(img) {
    img.classList.add('is-lazy-loaded');
    img.removeAttribute('data-lazy-pending');
  }

  function prepareImage(img) {
    if (img.dataset.lazyInitialized === 'true') {
      return false;
    }

    const originalSrc = img.getAttribute('src');
    const originalSrcset = img.getAttribute('srcset');

    if (!originalSrc) {
      return false;
    }

    img.dataset.src = originalSrc;
    if (originalSrcset) {
      img.dataset.srcset = originalSrcset;
      img.removeAttribute('srcset');
    }

    img.dataset.lazyInitialized = 'true';
    img.dataset.lazyPending = 'true';
    img.setAttribute('loading', 'lazy');
    img.src = PLACEHOLDER_SVG;
    return true;
  }

  function initLazyLoading() {
    const container = document.getElementById('content-container');
    if (!container) {
      return;
    }

    const targets = Array.from(container.querySelectorAll('img'))
      .filter((img) => !img.hasAttribute('data-lazy-ignore'));

    if (targets.length === 0) {
      return;
    }

    if (!('IntersectionObserver' in window)) {
      targets.forEach((img) => {
        markAsLoaded(img);
      });
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const img = entry.target;
        observer.unobserve(img);

        if (!img.dataset.src) {
          markAsLoaded(img);
          return;
        }

        const onLoad = () => {
          markAsLoaded(img);
        };

        img.addEventListener('load', onLoad, { once: true });
        img.src = img.dataset.src;
        if (img.dataset.srcset) {
          img.srcset = img.dataset.srcset;
        }

        if (img.complete) {
          markAsLoaded(img);
        }
      });
    }, {
      rootMargin: '120px 0px',
      threshold: 0.01,
    });

    targets.forEach((img) => {
      const prepared = prepareImage(img);
      if (!prepared) {
        return;
      }
      observer.observe(img);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLazyLoading);
  } else {
    initLazyLoading();
  }
})();
