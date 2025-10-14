/**
 * Interactive Effects for Academic Learning Website
 * 简洁实用的交互特效，提升学习体验
 */

(function() {
  'use strict';

  // 配置参数
  const CONFIG = {
    BACK_TO_TOP_THRESHOLD: 300,
    FADE_IN_THRESHOLD: 0.1,
    SCROLL_OFFSET: 80,
    RIPPLE_DURATION: 600,
    FADE_IN_DELAY: 100
  };

  // 工具函数
  const utils = {
    // 节流函数
    throttle: function(func, limit) {
      let inThrottle;
      return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
          func.apply(context, args);
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
        }
      };
    },

    // 防抖函数
    debounce: function(func, wait) {
      let timeout;
      return function executedFunction() {
        const later = () => {
          clearTimeout(timeout);
          func();
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    },

    // 检查用户是否偏好减少动画
    prefersReducedMotion: function() {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    },

    // 平滑滚动到元素
    smoothScrollTo: function(element, offset = CONFIG.SCROLL_OFFSET) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    },

    // 检查是否是主页
    isHomePage: function() {
      // 检查URL路径是否为根路径或index
      const path = window.location.pathname;
      return path === '/' || path === '/index.html' || path.endsWith('/index');
    }
  };

  // 页面滚动进度条
  const scrollProgress = {
    init: function() {
      if (utils.prefersReducedMotion()) return;

      this.progressBar = document.createElement('div');
      this.progressBar.className = 'scroll-progress';
      this.progressBar.innerHTML = '<div class="scroll-progress-bar"></div>';
      document.body.appendChild(this.progressBar);

      this.update = utils.throttle(this.update.bind(this), 16);
      window.addEventListener('scroll', this.update, { passive: true });
      this.update();
    },

    update: function() {
      const scrolled = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      const progressBar = this.progressBar.querySelector('.scroll-progress-bar');

      if (scrolled > 0) {
        this.progressBar.style.opacity = '1';
        progressBar.style.width = scrolled + '%';
      } else {
        this.progressBar.style.opacity = '0';
      }
    }
  };

  // 返回顶部按钮
  const backToTop = {
    init: function() {
      this.button = document.createElement('button');
      this.button.className = 'back-to-top';
      this.button.innerHTML = '<i class="bi bi-chevron-up"></i>';
      this.button.setAttribute('aria-label', '返回顶部');
      document.body.appendChild(this.button);

      this.button.addEventListener('click', this.scrollToTop.bind(this));
      window.addEventListener('scroll', utils.throttle(this.toggleVisibility.bind(this), 100), { passive: true });
      document.addEventListener('keydown', this.handleKeydown.bind(this));
    },

    toggleVisibility: function() {
      if (window.pageYOffset > CONFIG.BACK_TO_TOP_THRESHOLD) {
        this.button.classList.add('visible');
      } else {
        this.button.classList.remove('visible');
      }
    },

    scrollToTop: function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },

    // handleKeydown: function(e) {
    //   if (e.key === 'Escape') {
    //     this.scrollToTop();
    //   }
    // }
  };

  // 按钮点击波纹效果
  const rippleEffect = {
    init: function() {
      if (utils.prefersReducedMotion()) return;

      document.addEventListener('click', this.createRipple.bind(this), true);
    },

    createRipple: function(e) {
      const button = e.target.closest('button, .btn, [role="button"]');
      if (!button || button.classList.contains('back-to-top')) return;

      const circle = document.createElement('span');
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;

      const rect = button.getBoundingClientRect();
      circle.style.width = circle.style.height = diameter + 'px';
      circle.style.left = (e.clientX - rect.left - radius) + 'px';
      circle.style.top = (e.clientY - rect.top - radius) + 'px';
      circle.classList.add('ripple-effect');

      const ripple = button.querySelector('.ripple-effect');
      if (ripple) {
        ripple.remove();
      }

      button.appendChild(circle);

      setTimeout(() => {
        circle.remove();
      }, CONFIG.RIPPLE_DURATION);
    }
  };

  // 元素淡入动画
  const fadeInAnimation = {
    init: function() {
      if (utils.prefersReducedMotion()) return;

      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                entry.target.classList.add('fade-in-visible');
              }, CONFIG.FADE_IN_DELAY);
              this.observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: CONFIG.FADE_IN_THRESHOLD,
          rootMargin: '0px 0px -50px 0px'
        }
      );

      this.observeElements();
    },

    observeElements: function() {
      const selectors = [
        'h2', 'h3', '.card', '.subject-card',
        'table', '.math', '.exam-link'
      ];

      selectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
          el.classList.add('fade-in');
          this.observer.observe(el);
        });
      });
    }
  };

  // 平滑滚动增强
  const smoothScroll = {
    init: function() {
      document.addEventListener('click', this.handleClick.bind(this));
    },

    handleClick: function(e) {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;

      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        e.preventDefault();
        utils.smoothScrollTo(targetElement);
        history.pushState(null, null, link.href);
      }
    }
  };

  // 表格交互优化
  const tableInteraction = {
    init: function() {
      document.querySelectorAll('table').forEach(table => {
        table.addEventListener('mouseover', this.handleMouseOver.bind(this));
        table.addEventListener('mouseout', this.handleMouseOut.bind(this));
      });
    },

    handleMouseOver: function(e) {
      const row = e.target.closest('tr');
      if (row && row.parentElement.tagName === 'TBODY') {
        row.classList.add('table-row-hover');
      }
    },

    handleMouseOut: function(e) {
      const row = e.target.closest('tr');
      if (row) {
        row.classList.remove('table-row-hover');
      }
    }
  };

  // 加载状态指示
  const loadingIndicator = {
    init: function() {
      document.addEventListener('click', this.handleClick.bind(this));
    },

    handleClick: function(e) {
      const link = e.target.closest('a[href$=".pdf"], a[target="_blank"]');
      if (!link) return;

      const icon = link.querySelector('i');
      if (icon) {
        const originalClass = icon.className;
        icon.className = 'bi bi-hourglass-split';
        setTimeout(() => {
          icon.className = originalClass;
        }, 2000);
      }
    }
  };

  // 键盘导航增强
  const keyboardNavigation = {
    init: function() {
      document.addEventListener('keydown', this.handleKeydown.bind(this));
    },

    handleKeydown: function(e) {
      // ESC 已在 backToTop 中处理
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    }
  };

  // 科目按钮特效
  const subjectButtonEffects = {
    init: function() {
      if (utils.prefersReducedMotion()) return;

      document.querySelectorAll('.subject-list .btn').forEach(btn => {
        btn.addEventListener('mouseenter', this.handleMouseEnter.bind(this));
        btn.addEventListener('mouseleave', this.handleMouseLeave.bind(this));
      });
    },

    handleMouseEnter: function(e) {
      const btn = e.target;
      btn.classList.add('subject-btn-hover');
    },

    handleMouseLeave: function(e) {
      const btn = e.target;
      btn.classList.remove('subject-btn-hover');
    }
  };

  // 目录高亮跟踪
  const tocHighlight = {
    init: function() {
      const toc = document.querySelector('.toc-content');
      if (!toc) return;

      this.headings = Array.from(document.querySelectorAll('h2, h3, h4'));
      this.tocLinks = Array.from(toc.querySelectorAll('a[href^="#"]'));

      if (this.headings.length === 0) return;

      window.addEventListener('scroll', utils.throttle(this.updateHighlight.bind(this), 100), { passive: true });
      this.updateHighlight();
    },

    updateHighlight: function() {
      const scrollPosition = window.pageYOffset + CONFIG.SCROLL_OFFSET + 50;

      let currentHeading = null;
      for (let i = this.headings.length - 1; i >= 0; i--) {
        if (this.headings[i].offsetTop <= scrollPosition) {
          currentHeading = this.headings[i];
          break;
        }
      }

      if (currentHeading) {
        const targetId = currentHeading.id;
        this.tocLinks.forEach(link => {
          link.classList.remove('toc-active');
          if (link.getAttribute('href') === '#' + targetId) {
            link.classList.add('toc-active');
          }
        });
      }
    }
  };

  // 初始化所有特效
  function init() {
    // 检查是否支持必要的API
    if (!('IntersectionObserver' in window)) {
      console.warn('IntersectionObserver not supported, some effects disabled');
    }

    const isHomePage = utils.isHomePage();

    // 在主页时不启用滚动进度条和返回顶部按钮
    if (!isHomePage) {
      scrollProgress.init();
      backToTop.init();
    }

    rippleEffect.init();
    fadeInAnimation.init();
    smoothScroll.init();
    tableInteraction.init();
    loadingIndicator.init();
    keyboardNavigation.init();
    subjectButtonEffects.init();
    tocHighlight.init();

    console.log('Interactive effects initialized' + (isHomePage ? ' (Home page mode)' : ''));
  }

  // 页面加载完成后初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();