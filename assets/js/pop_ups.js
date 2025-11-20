(function() {
  // Create modal HTML
  const modalHTML = `
    <div class="modal fade" id="infoModal" tabindex="-1" aria-labelledby="infoModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="infoModalLabel">Notice</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body" id="infoModalBody">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  `;

  // Inject modal on load
  document.addEventListener('DOMContentLoaded', function() {
    if (!document.getElementById('infoModal')) {
      document.body.insertAdjacentHTML('beforeend', modalHTML);
    }
  });

  // Helper to show modal
  window.showInfoModal = function(message, title = "Notice") {
    const modalEl = document.getElementById('infoModal');
    if (!modalEl) {
      // Try to inject if not present (e.g. called before DOMContentLoaded)
      document.body.insertAdjacentHTML('beforeend', modalHTML);
      // Re-get element
      return setTimeout(() => showInfoModal(message, title), 50);
    }

    const modalBody = document.getElementById('infoModalBody');
    const modalTitle = document.getElementById('infoModalLabel');
    
    if (modalBody) modalBody.textContent = message;
    if (modalTitle) modalTitle.textContent = title;

    // Use Bootstrap 5 API
    if (window.bootstrap && window.bootstrap.Modal) {
      // Check if instance exists
      let modal = bootstrap.Modal.getInstance(modalEl);
      if (!modal) {
        modal = new bootstrap.Modal(modalEl);
      }
      modal.show();
    } else {
      // Fallback if bootstrap JS not ready
      alert(message);
    }
  };
})();

// Global functions for backward compatibility
window.notAbletoAccess = function() {
  showInfoModal("内容因维护，暂停访问，感谢您的理解与支持！", "维护通知");
};

window.underConstruction = function() {
  showInfoModal("内容正在建造中，暂时停止访问，感谢您的理解与支持！", "建设中");
};

window.engUnderConstruction = function() {
  showInfoModal("The content is under construction and access is temporarily suspended. Thank you for your understanding and support!", "Under Construction");
};

window.engPlaningConstruction = function() {
  showInfoModal("The content is being planned and constructed. If you are willing to provide help or ideas, please send an email to report@kcisec.site.", "Planning Phase");
};

window.engNotAbletoAccess = function() {
  showInfoModal("The content is temporarily inaccessible due to maintenance. Thank you for your understanding and support!", "Maintenance");
};

window.engUnderReview = function() {
  showInfoModal("The content is under review and access is temporarily suspended. Thank you for your understanding and support!", "Under Review");
};