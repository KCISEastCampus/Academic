/**
 * Interactive Effects for Academic Learning Website
 * 简洁实用的交互特效，提升学习体验
 *
 * 功能特性：
 * - 页面滚动进度条（内容页）
 * - 返回顶部按钮（内容页）
 * - 按钮点击波纹效果
 * - 元素淡入动画
 * - 平滑滚动增强
 * - 表格交互优化
 * - 加载状态指示
 * - 键盘导航增强
 * - 科目按钮特效
 * - 目录高亮跟踪
 *
 * 性能优化：
 * - 使用节流和防抖减少事件处理频率
 * - Intersection Observer API 提升动画性能
 * - 被动事件监听器优化滚动性能
 * - 上下文感知：主页自动禁用特定特效
 * - prefers-reduced-motion 尊重用户偏好
 */

(function() {
  'use strict';

  // 配置参数
  const CONFIG = {
    BACK_TO_TOP_THRESHOLD: 300,
    FADE_IN_THRESHOLD: 0.1,
    SCROLL_OFFSET: 80,
    FADE_IN_DELAY: 100,
    // 性能优化：减少不必要的计算
    ENABLE_DEBUG_LOGGING: false
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

      // 检查是否已经存在
      if (document.querySelector('.scroll-progress')) return;

      this.progressBar = document.createElement('div');
      this.progressBar.className = 'scroll-progress';
      this.progressBar.innerHTML = '<div class="scroll-progress-bar"></div>';
      document.body.appendChild(this.progressBar);

      this.update = utils.throttle(this.update.bind(this), 16);
      window.addEventListener('scroll', this.update, { passive: true });
      this.update();
    },

    update: function() {
      if (!this.progressBar) return;

      const scrolled = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      const progressBar = this.progressBar.querySelector('.scroll-progress-bar');

      if (progressBar) {
        if (scrolled > 0) {
          this.progressBar.style.opacity = '1';
          progressBar.style.width = scrolled + '%';
        } else {
          this.progressBar.style.opacity = '0';
        }
      }
    }
  };

  // 返回顶部按钮
  const backToTop = {
    init: function() {
      // 检查是否已经存在
      if (document.querySelector('.back-to-top')) return;

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
      if (!this.button) return;

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

    handleKeydown: function(e) {
      if (e.key === 'Escape') {
        this.scrollToTop();
      }
    }
  };

  // 按钮点击波纹效果 - 已禁用以改善阅读体验
  const rippleEffect = {
    init: function() {
      // 波纹效果已禁用，不再创建视觉干扰
      return;
    },

    createRipple: function(e) {
      // 不再创建波纹效果
      return;
    }
  };

  // 元素淡入动画
  const fadeInAnimation = {
    init: function() {
      if (utils.prefersReducedMotion()) return;

      // 延迟执行，让页面先加载完成
      setTimeout(() => {
        this.applyFadeInToVisibleElements();
      }, 100);
    },

    applyFadeInToVisibleElements: function() {
      const selectors = [
        'h2', 'h3', '.card', '.subject-card',
        'table', '.math', '.exam-link'
      ];

      selectors.forEach(selector => {
        try {
          document.querySelectorAll(selector).forEach((el, index) => {
            // 检查元素是否在视口中
            const rect = el.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

            if (isVisible) {
              // 短暂延迟，让动画更自然
              setTimeout(() => {
                el.classList.add('fade-in-visible');
              }, index * 50); // 每个元素间隔50ms
            } else {
              // 对于不在视口中的元素，直接设为可见
              el.classList.add('fade-in-visible');
            }
          });
        } catch (error) {
          console.warn('Error applying fade-in to selector:', selector, error);
        }
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

    if (CONFIG.ENABLE_DEBUG_LOGGING) {
      console.log('Interactive effects initialized' + (isHomePage ? ' (Home page mode)' : ''));
    }
  }

  // 页面加载完成后初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();