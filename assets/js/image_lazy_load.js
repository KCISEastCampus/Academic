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

    if (img.complete && img.naturalWidth > 0) {
      markAsLoaded(img);
      return false;
    }

    const originalSrc = img.getAttribute('src');
    const originalSrcset = img.getAttribute('srcset');

    if (!originalSrc && !originalSrcset) {
      return false;
    }

    if (originalSrc) img.dataset.src = originalSrc;
    if (originalSrcset) {
      img.dataset.srcset = originalSrcset;
      img.removeAttribute('srcset');
    }

    if (img.parentElement.tagName === 'PICTURE') {
      img.parentElement.querySelectorAll('source[srcset]').forEach((source) => {
        source.dataset.srcset = source.getAttribute('srcset');
        source.removeAttribute('srcset');
      });
    }

    img.dataset.lazyInitialized = 'true';
    img.dataset.lazyPending = 'true';
    img.setAttribute('loading', 'lazy');
    img.src = PLACEHOLDER_SVG;
    return true;
  }

  function loadImage(img) {
    if (img.dataset.lazyPending !== 'true') return;

    const onComplete = () => {
      markAsLoaded(img);
      img.removeEventListener('load', onComplete);
      img.removeEventListener('error', onComplete);
    };
    img.addEventListener('load', onComplete);
    img.addEventListener('error', onComplete);
    img.setAttribute('loading', 'eager');
    if (img.parentElement.tagName === 'PICTURE') {
      img.parentElement.querySelectorAll('source[data-srcset]').forEach((source) => {
        source.srcset = source.dataset.srcset;
      });
    }
    if (img.dataset.srcset) img.srcset = img.dataset.srcset;
    if (img.dataset.src) img.src = img.dataset.src;
    if (img.complete && img.naturalWidth > 0) onComplete();
  }

  function initLazyLoading() {
    const container = document.getElementById('content-container');
    if (!container) {
      return;
    }

    const targets = Array.from(container.querySelectorAll('img'))
      .filter((img) => !img.hasAttribute('data-lazy-ignore') && img.loading !== 'eager');

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

        loadImage(img);
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

    window.addEventListener('beforeprint', () => {
      targets.forEach((img) => {
        observer.unobserve(img);
        loadImage(img);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLazyLoading);
  } else {
    initLazyLoading();
  }
})();
