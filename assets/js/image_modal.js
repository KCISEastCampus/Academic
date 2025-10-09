// 图片模态框功能
function initImageModal() {
  // 创建模态框HTML
  const modalHTML = `
    <div id="imageModal" class="image-modal">
      <span class="close">&times;</span>
      <img id="modalImage" alt="放大图片">
    </div>
  `;
  
  // 添加模态框到页面
  if (!document.getElementById('imageModal')) {
    document.body.insertAdjacentHTML('beforeend', modalHTML);
  }
  
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const closeBtn = modal.querySelector('.close');
  
  // 为所有内容区域的图片添加点击事件
  const contentContainer = document.getElementById('content-container');
  if (contentContainer) {
    const images = contentContainer.querySelectorAll('img');
    
    images.forEach(img => {
      img.addEventListener('click', function() {
        modal.classList.add('active');
        modalImg.src = this.src;
        modalImg.alt = this.alt || '放大图片';
        
        // 防止页面滚动
        document.body.style.overflow = 'hidden';
      });
    });
  }
  
  // 关闭模态框的方法
  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
  
  // 点击关闭按钮关闭模态框
  closeBtn.addEventListener('click', closeModal);
  
  // 点击模态框背景关闭
  modal.addEventListener('click', function(e) {
    if (e.target === modal || e.target === modalImg) {
      closeModal();
    }
  });
  
  // ESC键关闭模态框
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
  
  // 触摸支持（移动端）
  let touchStartY = 0;
  modal.addEventListener('touchstart', function(e) {
    touchStartY = e.touches[0].clientY;
  });
  
  modal.addEventListener('touchend', function(e) {
    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartY - touchEndY;
    
    // 向上滑动超过50px关闭模态框
    if (Math.abs(diff) > 50) {
      closeModal();
    }
  });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
  // 延迟初始化，确保内容已经加载
  setTimeout(initImageModal, 500);
});