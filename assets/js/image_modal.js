// 图片模态框功能 - 完全重构版本
function initImageModal() {
  // 创建模态框容器 - 使用 SVG 关闭图标确保完美居中
  const modalHTML = `
    <div id="imageModalOverlay" class="image-modal-overlay">
      <button id="imageModalClose" class="image-modal-close" aria-label="关闭图片">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="image-modal-content">
        <img id="imageModalImg" alt="放大图片">
      </div>
    </div>
  `;
  
  // 添加模态框到页面
  if (!document.getElementById('imageModalOverlay')) {
    document.body.insertAdjacentHTML('beforeend', modalHTML);
  }
  
  const overlay = document.getElementById('imageModalOverlay');
  const modalImg = document.getElementById('imageModalImg');
  const closeBtn = document.getElementById('imageModalClose');
  
  // 为所有内容区域的图片添加点击事件
  const contentContainer = document.getElementById('content-container');
  if (contentContainer) {
    const images = contentContainer.querySelectorAll('img');
    
    images.forEach(img => {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', function(e) {
        e.stopPropagation();
        openModal(this.src, this.alt);
      });
    });
  }
  
  // 打开模态框
  function openModal(src, alt) {
    modalImg.src = src;
    modalImg.alt = alt || '放大图片';
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  
  // 关闭模态框
  function closeModal() {
    if (!overlay.classList.contains('active')) return;
    
    overlay.classList.remove('active');
    
    // 等待动画结束后清理
    setTimeout(() => {
      if (!overlay.classList.contains('active')) {
        modalImg.src = '';
        document.body.style.overflow = '';
      }
    }, 300);
  }
  
  // 关闭按钮点击事件
  closeBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    closeModal();
  });
  
  // 点击背景关闭
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) {
      closeModal();
    }
  });
  
  // 点击图片内容区域关闭
  const contentArea = overlay.querySelector('.image-modal-content');
  contentArea.addEventListener('click', closeModal);
  
  // ESC键关闭
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeModal();
    }
  });
  
  // 移动端触摸支持
  let touchStartY = 0;
  overlay.addEventListener('touchstart', function(e) {
    touchStartY = e.touches[0].clientY;
  }, { passive: true });
  
  overlay.addEventListener('touchend', function(e) {
    const touchEndY = e.changedTouches[0].clientY;
    const diff = Math.abs(touchStartY - touchEndY);
    
    if (diff > 80) {
      closeModal();
    }
  }, { passive: true });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(initImageModal, 300);
});