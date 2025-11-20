/**
 * Interactive Effects for Academic Learning Website
 * 简洁实用的交互特效，提升学习体验
 *
 * 功能特性：
 * - 页面滚动进度条（内容页）
 * - 返回顶部按钮（内容页）
 * - 元素淡入动画
 * - 平滑滚动增强
 * - 表格交互优化
 * - PDF加载状态指示
 * - 键盘导航增强
 * - 科目按钮特效
 *
 * 性能优化：
 * - 使用节流和防抖减少事件处理频率
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

    // handleKeydown: function(e) {
    //   if (e.key === 'Escape') {
    //     this.scrollToTop();
    //   }
    // }
  };



  // 元素淡入动画
  const fadeInAnimation = {
    init: function() {
      if (utils.prefersReducedMotion()) return;

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
            const rect = el.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

            if (isVisible) {
              setTimeout(() => {
                el.classList.add('fade-in-visible');
              }, index * 50);
            }
            // 不可见元素不添加类，保持初始状态
          });
        } catch (error) {
          // Silently handle errors
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
      const link = e.target.closest('a');
      if (!link) return;

      const href = (link.getAttribute('href') || '').toLowerCase();
      if (!href.endsWith('.pdf')) return;

      if (link.classList.contains('loading-pdf')) {
        e.preventDefault();
        return;
      }

      link.classList.add('loading-pdf');
      link.setAttribute('aria-busy', 'true');
      link.style.pointerEvents = 'none';

      let loader = link.querySelector('.pdf-loader');
      if (!loader) {
        loader = document.createElement('span');
        loader.className = 'pdf-loader';
        loader.innerHTML = '<i class="bi bi-hourglass-split" aria-hidden="true"></i><span class="visually-hidden">Loading PDF</span>';
        link.appendChild(loader);
      }

      setTimeout(() => {
        link.classList.remove('loading-pdf');
        link.removeAttribute('aria-busy');
        link.style.pointerEvents = '';
        if (loader && loader.parentElement === link) {
          loader.remove();
        }
      }, 2000);
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



  // 代码块复制功能
  const codeCopy = {
    init: function() {
      // 查找所有代码块
      const codeBlocks = document.querySelectorAll('pre.highlight, .highlight > pre');
      
      codeBlocks.forEach(block => {
        // 检查是否已经有复制按钮
        if (block.querySelector('.copy-btn')) return;
        
        // 创建包装器（如果还没有）
        let wrapper = block.parentElement;
        if (!wrapper.classList.contains('code-wrapper')) {
          wrapper = document.createElement('div');
          wrapper.className = 'code-wrapper position-relative';
          block.parentNode.insertBefore(wrapper, block);
          wrapper.appendChild(block);
        }
        
        // 创建复制按钮
        const btn = document.createElement('button');
        btn.className = 'btn btn-sm btn-outline-secondary copy-btn position-absolute top-0 end-0 m-2';
        btn.innerHTML = '<i class="bi bi-clipboard"></i>';
        btn.setAttribute('aria-label', 'Copy code');
        btn.title = 'Copy to clipboard';
        
        // 添加点击事件
        btn.addEventListener('click', () => {
          const code = block.innerText;
          navigator.clipboard.writeText(code).then(() => {
            // 成功反馈
            const originalHTML = btn.innerHTML;
            btn.innerHTML = '<i class="bi bi-check2"></i>';
            btn.classList.remove('btn-outline-secondary');
            btn.classList.add('btn-success');
            
            setTimeout(() => {
              btn.innerHTML = originalHTML;
              btn.classList.remove('btn-success');
              btn.classList.add('btn-outline-secondary');
            }, 2000);
          }).catch(err => {
            console.error('Failed to copy:', err);
            btn.innerHTML = '<i class="bi bi-x"></i>';
            setTimeout(() => {
              btn.innerHTML = '<i class="bi bi-clipboard"></i>';
            }, 2000);
          });
        });
        
        wrapper.appendChild(btn);
      });
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

    fadeInAnimation.init();
    smoothScroll.init();
    tableInteraction.init();
    loadingIndicator.init();
    keyboardNavigation.init();
    subjectButtonEffects.init();
    codeCopy.init();

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