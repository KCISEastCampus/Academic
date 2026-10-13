# 用户体验优化建议 (UX Optimization Recommendations)

> 📅 生成日期: 2025年11月6日  
> 🎯 目标: 提升网站的用户体验和性能

---

## 🏆 优先级分级

- 🔴 **高优先级**: 影响核心体验，建议立即实施
- 🟡 **中优先级**: 提升细节体验，建议短期内实施
- 🟢 **低优先级**: 锦上添花，可长期规划

---

## 🔴 高优先级优化

### 1. 性能优化 - 条件加载MathJax资源

**实施状态（2026年10月13日）**：已完成。

`_includes/head.html` 中七个 MathJax 字体仅在 `page.mathjax` 为真时预加载。脚本保留原有内容页兼容逻辑，避免影响未显式配置该标记的课程页。

**问题**: 所有页面都预加载7个MathJax字体，但主页不需要数学公式支持

**影响**: 首屏加载时间增加，浪费带宽

**解决方案**:

```html
<!-- 在 _includes/head.html 中修改 -->
<!-- 仅在需要MathJax的页面预加载字体 -->
{% if page.mathjax %}
  <link rel="preload" href="/assets/vendor/mathjax/3.2.2/es5/output/chtml/fonts/woff-v2/MathJax_Main-Regular.woff" as="font" type="font/woff" crossorigin="anonymous">
  <!-- 其他字体... -->
{% endif %}
```

**预期效果**: 主页加载时间减少 200-400ms

---

### 2. 图片懒加载 + 占位符

**实施状态（2026年10月13日）**：已完成。

`_layouts/subjects.html` 通过 `_includes/lazy_content.html` 为内容图补充原生 `loading="lazy"`，从 HTML 解析阶段开始延迟屏外请求；保留显式 `loading` 和 `data-lazy-ignore`。`assets/js/image_lazy_load.js` 使用 IntersectionObserver，在接近视口 120px 时恢复图片、`srcset` 和 `picture` 来源，加载后停止观察。缓存图片保持原图，加载失败时恢复可见状态；无 Observer 或关闭 JavaScript 时仍可显示原图，打印前触发剩余图片加载。

**问题**: 图片同时加载，影响页面渲染性能

**解决方案**:

```javascript
// 在 assets/js/image_lazy_load.js 创建新文件
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('#content-container img');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });
  
  images.forEach(img => {
    img.dataset.src = img.src;
    img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f0f0f0" width="400" height="300"/%3E%3C/svg%3E';
    imageObserver.observe(img);
  });
});
```

```css
/* 在 style.css 中添加 */
#content-container img {
  opacity: 0;
  transition: opacity 0.3s ease;
}

#content-container img.loaded {
  opacity: 1;
}
```

**预期效果**: 页面渲染速度提升，改善用户感知性能

---

### 3. 移动端按钮布局优化

**问题**: 主题切换按钮和TOC按钮在移动端可能重叠

**解决方案**:

```css
/* 在 _includes/theme_button.html 的 style 标签中修改 */
@media (max-width: 768px) {
  .theme-toggle-btn {
    top: 15px;
    right: 75px; /* 增加间距 */
    z-index: 9999;
  }
  
  /* 添加视觉分隔 */
  .theme-toggle-btn::after {
    content: '';
    position: absolute;
    right: -10px;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 60%;
    background: var(--muted);
    opacity: 0.3;
  }
}
```

**预期效果**: 避免按钮重叠，视觉更清晰

---

### 4. PDF链接加载状态优化

**实施状态（2026年10月13日）**：已完成。

`assets/js/interactive_effects.js` 为普通 PDF 点击显示可见的 Loading / 加载中提示，并设置 `aria-busy` 与状态播报；支持大小写扩展名及查询参数、页码片段，避免重复添加提示，保留修饰键点击行为。2 秒后恢复链接状态。该提示表示点击已响应，不表示文件已下载完成；跨页面 PDF 导航无法提供可靠的下载完成回调。

**问题**: 点击PDF链接后没有明确的加载反馈

**解决方案**:

```javascript
// 在 assets/js/interactive_effects.js 中改进现有代码
const loadingIndicator = {
  init: function() {
    document.addEventListener('click', this.handleClick.bind(this));
  },

  handleClick: function(e) {
    const link = e.target.closest('a[href$=".pdf"]');
    if (!link) return;

    // 添加加载状态
    link.classList.add('loading-pdf');
    const originalHTML = link.innerHTML;
    
    // 创建加载指示器
    const loader = document.createElement('span');
    loader.className = 'pdf-loader';
    loader.innerHTML = '<i class="bi bi-hourglass-split"></i> Loading...';
    
    link.appendChild(loader);
    link.style.pointerEvents = 'none';
    
    // 2秒后恢复（或实际加载完成）
    setTimeout(() => {
      link.classList.remove('loading-pdf');
      loader.remove();
      link.style.pointerEvents = '';
    }, 2000);
  }
};
```

```css
/* 在 style.css 中添加 */
.loading-pdf {
  opacity: 0.6;
  position: relative;
}

.pdf-loader {
  margin-left: 8px;
  font-size: 0.9em;
  color: var(--accent-ig);
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
```

**预期效果**: 用户清楚知道文件正在加载

---

## 🟡 中优先级优化

### 5. 无障碍访问改进

**问题**: 部分交互元素缺少完整的ARIA标签

**解决方案**:

```html
<!-- 在 _includes/subject_button.html 中 -->
<a href="{{ subject.path }}" 
   class="btn btn-outline-{{ subject.color }}"
   role="button"
   aria-label="查看 {{ subject.name }} 课程资料">
  {{ subject.icon }} {{ subject.name }}
</a>

<!-- 在 subjects.html 中 -->
<button class="toc-toggle" 
        id="tocToggle" 
        aria-label="切换目录显示"
        aria-expanded="false"
        aria-controls="toc">
  <i class="bi bi-list"></i>
</button>
```

```javascript
// 在 toc_generator.js 中添加
function toggleTOC(show) {
  const toc = document.getElementById('toc');
  const tocToggle = document.getElementById('tocToggle');
  
  if (!toc || !tocToggle) return;
  
  // 更新 ARIA 状态
  tocToggle.setAttribute('aria-expanded', show ? 'true' : 'false');
  
  if (show) {
    toc.classList.add('show');
    // 焦点管理
    const firstLink = toc.querySelector('a');
    if (firstLink) firstLink.focus();
  } else {
    toc.classList.remove('show');
  }
}
```

**预期效果**: 改善屏幕阅读器用户体验，符合WCAG 2.1标准

---

### 6. 主题感知的图片背景

**问题**: 图片背景始终是白色，深色模式下不协调

**解决方案**:

```css
/* 在 style.css 中修改 */
#content-container img {
  display: block;
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  margin: 1rem 0;
  max-width: 100%;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

/* 深色模式下的图片处理 */
html[data-bs-theme="dark"] #content-container img {
  background-color: #ffffff;
  box-shadow: 0 4px 16px rgba(0,0,0,0.3);
  /* 可选：添加轻微的边框 */
  border: 1px solid rgba(255,255,255,0.1);
}

/* 或者使用滤镜反转效果（适用于图表） */
html[data-bs-theme="dark"] #content-container img.diagram {
  filter: invert(1) hue-rotate(180deg);
  background-color: transparent;
}
```

**预期效果**: 图片在深色模式下更协调

---

### 7. TOC滚动进度指示器

**问题**: 用户不知道文章的阅读进度

**解决方案**:

```javascript
// 在 toc_generator.js 中添加
function initReadingProgress() {
  const progressBar = document.createElement('div');
  progressBar.className = 'reading-progress';
  progressBar.innerHTML = '<div class="reading-progress-bar"></div>';
  
  const toc = document.querySelector('.table-of-contents');
  if (toc) {
    toc.insertBefore(progressBar, toc.firstChild);
  }
  
  window.addEventListener('scroll', () => {
    const contentContainer = document.getElementById('content-container');
    if (!contentContainer) return;
    
    const containerHeight = contentContainer.scrollHeight - window.innerHeight;
    const scrolled = (window.pageYOffset / containerHeight) * 100;
    
    const bar = progressBar.querySelector('.reading-progress-bar');
    if (bar) {
      bar.style.width = Math.min(scrolled, 100) + '%';
    }
  }, { passive: true });
}

// 在 generateTOC() 函数末尾调用
initReadingProgress();
```

```css
/* 在 subject.css 中添加 */
.reading-progress {
  width: 100%;
  height: 4px;
  background: rgba(var(--accent-ig-rgb), 0.1);
  border-radius: 2px;
  margin-bottom: 16px;
  overflow: hidden;
}

.reading-progress-bar {
  height: 100%;
  width: 0%;
  background: linear-gradient(90deg, var(--accent-ig), var(--accent-al));
  transition: width 0.1s ease;
  border-radius: 2px;
}
```

**预期效果**: 用户可以直观看到阅读进度

---

### 8. 代码块复制按钮

**实施状态（2026年10月13日）**：已完成。

`assets/js/interactive_effects.js` 为普通及 Rouge 高亮的 `pre code` 添加复制按钮，保留原始空白字符，跳过用于绘图的 Mermaid 代码块。按钮支持键盘、手机触摸及中英文标签；复制成功或失败均提供反馈，剪贴板不可用时提示手动复制。`assets/css/style.css` 预留按钮空间，打印时隐藏按钮，并尊重减少动画偏好。

**问题**: 用户无法快速复制代码

**解决方案**:

```javascript
// 创建 assets/js/code_copy.js
document.addEventListener('DOMContentLoaded', function() {
  const codeBlocks = document.querySelectorAll('pre code');
  
  codeBlocks.forEach(block => {
    const pre = block.parentElement;
    const wrapper = document.createElement('div');
    wrapper.className = 'code-block-wrapper';
    
    const copyBtn = document.createElement('button');
    copyBtn.className = 'code-copy-btn';
    copyBtn.innerHTML = '<i class="bi bi-clipboard"></i>';
    copyBtn.setAttribute('aria-label', '复制代码');
    
    copyBtn.addEventListener('click', async () => {
      const code = block.textContent;
      
      try {
        await navigator.clipboard.writeText(code);
        copyBtn.innerHTML = '<i class="bi bi-check2"></i>';
        copyBtn.classList.add('copied');
        
        setTimeout(() => {
          copyBtn.innerHTML = '<i class="bi bi-clipboard"></i>';
          copyBtn.classList.remove('copied');
        }, 2000);
      } catch (err) {
        console.error('复制失败:', err);
      }
    });
    
    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);
    wrapper.appendChild(copyBtn);
  });
});
```

```css
/* 在 style.css 中添加 */
.code-block-wrapper {
  position: relative;
  margin: 1.5rem 0;
}

.code-copy-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 6px 10px;
  background: rgba(var(--accent-ig-rgb), 0.8);
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-size: 0.9rem;
  opacity: 0;
  transition: opacity 0.2s ease, background 0.2s ease;
  z-index: 10;
}

.code-block-wrapper:hover .code-copy-btn {
  opacity: 1;
}

.code-copy-btn:hover {
  background: rgba(var(--accent-ig-rgb), 1);
}

.code-copy-btn.copied {
  background: var(--accent-al);
}
```

**预期效果**: 提升代码复制的便利性

---

## 🟢 低优先级优化

### 9. 全站搜索功能

**建议**: 集成 [Algolia DocSearch](https://docsearch.algolia.com/) 或简单的客户端搜索

```javascript
// 简单的客户端搜索实现
function initSimpleSearch() {
  const searchInput = document.createElement('input');
  searchInput.type = 'search';
  searchInput.placeholder = '搜索课程...';
  searchInput.className = 'site-search';
  
  // 添加到header
  const header = document.querySelector('header');
  if (header) {
    header.appendChild(searchInput);
  }
  
  searchInput.addEventListener('input', debounce(function(e) {
    const query = e.target.value.toLowerCase();
    const subjects = document.querySelectorAll('.subject-list .btn');
    
    subjects.forEach(subject => {
      const text = subject.textContent.toLowerCase();
      if (text.includes(query)) {
        subject.style.display = '';
      } else {
        subject.style.display = 'none';
      }
    });
  }, 300));
}
```

---

### 10. 微交互动画优化

**建议**: 为关键交互添加细腻的动画反馈

```css
/* 按钮点击反馈 */
.btn:active {
  transform: scale(0.97);
  transition: transform 0.1s ease;
}

/* 卡片悬停效果 */
.card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12) !important;
}

/* 链接下划线动画 */
#content-container a {
  position: relative;
  text-decoration: none;
  color: var(--accent-ig);
}

#content-container a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent-ig);
  transition: width 0.3s ease;
}

#content-container a:hover::after {
  width: 100%;
}
```

---

### 11. 内容可读性优化

**建议**: 优化排版参数

```css
/* 在 style.css 中调整 */
#content-container {
  line-height: 1.8; /* 从 1.6 增加到 1.8 */
  font-size: 1.05rem; /* 略微增大字号 */
}

#content-container p {
  margin-bottom: 1.2em;
  letter-spacing: 0.01em; /* 增加字距 */
}

#content-container h2,
#content-container h3 {
  letter-spacing: -0.02em; /* 标题略微紧缩 */
  font-weight: 600;
}

/* 提升数学公式可读性 */
.MathJax, mjx-container {
  font-size: 1.12em !important; /* 从 1.08 增加到 1.12 */
  line-height: 1.5 !important; /* 从 1.4 增加到 1.5 */
}
```

---

## 📊 实施优先级建议

### 第一阶段（立即实施）
1. [x] 条件加载MathJax资源（2026年10月13日实现并验证）
2. ✅ 移动端按钮布局优化
3. [x] PDF链接加载状态（2026年10月13日实现并验证）

### 第二阶段（1-2周内）
4. [x] 图片懒加载（2026年10月13日实现并验证）
5. ✅ 无障碍访问改进
6. ✅ 主题感知图片背景

### 第三阶段（长期规划）
7. ✅ TOC阅读进度指示
8. [x] 代码块复制功能（2026年10月13日实现并验证）
9. ✅ 搜索功能
10. ✅ 微交互优化

---

## 🎯 预期总体效果

实施这些优化后，预期能够实现：

- 📈 **首屏加载时间减少 30-40%**
- 🎨 **用户满意度提升 20-30%**
- ♿ **无障碍评分提升到 WCAG 2.1 AA级**
- 📱 **移动端体验评分从 85 提升到 95+**
- 🚀 **整体性能评分从 Good 提升到 Excellent**

---

## 📝 备注

本次四项优化的浏览器回归检查见 `scripts/test-ux-optimizations.js`，在 Jekyll 构建后运行，需要环境中已有 Playwright。其他条目的既有标记不代表本次重新验收；文中的性能和评分提升数字仍是预期，尚未通过生产环境测量确认。

- 所有优化都应该在测试环境中先验证
- 建议使用 Lighthouse 测试性能变化
- 考虑用户反馈进行迭代改进
- 保持与现有设计风格的一致性

---

**文档维护**: 请在实施每项优化后更新此文档的完成状态
