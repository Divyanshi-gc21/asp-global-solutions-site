// UI utilities for components and state management
class UIManager {
  // Show/hide loading spinner
  static showLoading(button) {
    if (!button) return;
    button.disabled = true;
    const originalText = button.textContent;
    button.innerHTML = '<span class="spinner"></span> Loading...';
    button.dataset.originalText = originalText;
    return () => UIManager.hideLoading(button);
  }

  static hideLoading(button) {
    if (!button) return;
    button.disabled = false;
    button.textContent = button.dataset.originalText || 'Submit';
  }

  // Show alert/toast messages
  static showAlert(message, type = 'success', duration = 3000) {
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.innerHTML = `
      <div>${message}</div>
      <button class="alert-close">✕</button>
    `;

    document.body.appendChild(alert);
    
    const closeBtn = alert.querySelector('.alert-close');
    closeBtn.addEventListener('click', () => alert.remove());

    if (duration > 0) {
      setTimeout(() => alert.remove(), duration);
    }

    return alert;
  }

  // Form validation
  static validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  static showFieldError(field, message) {
    const group = field.closest('.form-group');
    if (!group) return;

    group.classList.add('error');
    let errorDiv = group.querySelector('.form-error');
    if (!errorDiv) {
      errorDiv = document.createElement('div');
      errorDiv.className = 'form-error';
      group.appendChild(errorDiv);
    }
    errorDiv.textContent = message;
  }

  static clearFieldError(field) {
    const group = field.closest('.form-group');
    if (!group) return;

    group.classList.remove('error');
    const errorDiv = group.querySelector('.form-error');
    if (errorDiv) errorDiv.remove();
  }

  // Modal management
  static showModal(modalElement) {
    modalElement.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  static hideModal(modalElement) {
    modalElement.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Loading state for containers
  static setLoading(container, isLoading) {
    if (isLoading) {
      container.innerHTML = '<div class="loading"><span class="spinner"></span><span>Loading...</span></div>';
    }
  }

  // Format date
  static formatDate(dateString) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  }

  // Debounce function
  static debounce(func, delay) {
    let timeoutId;
    return function(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  }

  // Get initials from name
  static getInitials(name) {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  }
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = UIManager;
}
