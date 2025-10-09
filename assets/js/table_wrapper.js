// 表格响应式包装器
function initTableWrapper() {
  const contentContainer = document.getElementById('content-container');
  if (!contentContainer) return;
  
  // 查找所有表格
  const tables = contentContainer.querySelectorAll('table');
  
  tables.forEach(table => {
    // 检查表格是否已经被包装
    if (table.parentElement.classList.contains('table-wrapper')) {
      return;
    }
    
    // 创建包装器
    const wrapper = document.createElement('div');
    wrapper.className = 'table-wrapper';
    
    // 将表格包装在wrapper中
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
    
    // 添加触摸滚动支持
    wrapper.addEventListener('touchstart', function(e) {
      this.style.webkitOverflowScrolling = 'touch';
    });
    
    // 滚动时隐藏提示
    wrapper.addEventListener('scroll', function() {
      if (this.scrollLeft > 10) {
        this.classList.add('scrolled');
      } else {
        this.classList.remove('scrolled');
      }
    });
  });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
  // 延迟初始化，确保内容已经加载
  setTimeout(initTableWrapper, 200);
  
  // 监听动态内容变化
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach(function(node) {
          if (node.nodeType === 1 && (node.tagName === 'TABLE' || node.querySelector('table'))) {
            setTimeout(initTableWrapper, 100);
          }
        });
      }
    });
  });
  
  const contentContainer = document.getElementById('content-container');
  if (contentContainer) {
    observer.observe(contentContainer, {
      childList: true,
      subtree: true
    });
  }
});