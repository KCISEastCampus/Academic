function initImageModal() {
  if (document.getElementById('imageModalOverlay')) return;
  const chinese = document.documentElement.lang === 'zh-CN';
  document.body.insertAdjacentHTML('beforeend', `
    <dialog id="imageModalOverlay" class="image-modal-overlay" aria-label="${chinese ? '图片放大' : 'Enlarged image'}">
      <button id="imageModalClose" class="image-modal-close" type="button" autofocus aria-label="${chinese ? '关闭图片' : 'Close image'}">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
        </svg>
      </button>
      <button id="imageModalZoom" class="image-modal-zoom" type="button" aria-pressed="false">${chinese ? '放大 4 倍' : 'Zoom 4×'}</button>
      <div class="image-modal-content" tabindex="0" role="region" aria-label="${chinese ? '图片，可滚动查看细节' : 'Image; scroll to view details'}"><img id="imageModalImg" alt=""></div>
    </dialog>
  `);
  const overlay = document.getElementById('imageModalOverlay');
  const modalImg = document.getElementById('imageModalImg');
  const closeBtn = document.getElementById('imageModalClose');
  const zoomBtn = document.getElementById('imageModalZoom');
  let zoomed = false;
  let opener;
  let previousOverflow;

  document.getElementById('content-container')?.querySelectorAll('img').forEach(img => {
    // Keep existing image links and picture/source relationships intact.
    if (img.closest('a, button')) return;
    const target = img.closest('picture') || img;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'image-zoom-trigger';
    button.setAttribute('aria-label', (chinese ? '放大图片：' : 'Enlarge image: ') + (img.alt || (chinese ? '图示' : 'Diagram')));
    button.setAttribute('aria-haspopup', 'dialog');
    target.before(button);
    button.appendChild(target);
    button.addEventListener('click', () => {
      if (overlay.open) return;
      opener = button;
      previousOverflow = document.body.style.overflow;
      modalImg.src = img.dataset.lazyPending === 'true' ? img.dataset.src : (img.currentSrc || img.src);
      modalImg.alt = img.alt;
      overlay.classList.add('active');
      overlay.showModal();
      document.body.style.overflow = 'hidden';
      closeBtn.focus();
    });
  });

  closeBtn.addEventListener('click', () => overlay.close());
  zoomBtn.addEventListener('click', () => {
    const width = modalImg.getBoundingClientRect().width;
    if (!width) return;
    zoomed = !zoomed;
    modalImg.style.width = zoomed ? `${width * 4}px` : '';
    overlay.classList.toggle('is-zoomed', zoomed);
    zoomBtn.setAttribute('aria-pressed', String(zoomed));
    zoomBtn.textContent = zoomed ? (chinese ? '适合屏幕' : 'Fit to screen') : (chinese ? '放大 4 倍' : 'Zoom 4×');
  });
  overlay.addEventListener('click', event => {
    if (event.target === overlay) overlay.close();
  });
  // Native dialog keeps focus inside, makes the background inert and handles Escape.
  overlay.addEventListener('close', () => {
    overlay.classList.remove('active');
    overlay.classList.remove('is-zoomed');
    zoomed = false;
    zoomBtn.setAttribute('aria-pressed', 'false');
    zoomBtn.textContent = chinese ? '放大 4 倍' : 'Zoom 4×';
    modalImg.style.width = '';
    modalImg.removeAttribute('src');
    document.body.style.overflow = previousOverflow;
    if (opener?.isConnected) opener.focus();
  });

}

document.addEventListener('DOMContentLoaded', () => setTimeout(initImageModal, 300));
