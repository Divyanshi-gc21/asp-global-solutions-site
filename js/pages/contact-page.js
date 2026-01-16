// Contact Page Logic
class ContactPage {
  constructor() {
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.updateYear();
  }

  setupEventListeners() {
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => this.handleContactSubmit(e));
    }
  }

  // ============ Contact Form ============
  async handleContactSubmit(e) {
    e.preventDefault();

    const nameEl = document.getElementById('contactName');
    const emailEl = document.getElementById('contactEmail');
    const messageEl = document.getElementById('contactMessage');

    const name = nameEl ? (nameEl.value || '').trim() : '';
    const email = emailEl ? (emailEl.value || '').trim() : '';
    const message = messageEl ? (messageEl.value || '').trim() : '';

    if (!name || !email || !message) {
      UIManager.showAlert('Please fill in all fields', 'error');
      return;
    }

    if (!UIManager.validateEmail(email)) {
      if (emailEl) UIManager.showFieldError(emailEl, 'Please enter a valid email');
      return;
    }

    const submitBtn = e.target.querySelector('button[type="submit"]');
    UIManager.showLoading(submitBtn);

    try {
      await apiService.submitContactForm({ name, email, message });
      UIManager.hideLoading(submitBtn);
      e.target.reset();
      UIManager.showAlert('Thank you! Your message has been sent successfully.', 'success');
    } catch (error) {
      UIManager.hideLoading(submitBtn);
      UIManager.showAlert(error.message || 'Failed to send message', 'error');
    }
  }

  updateYear() {
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.contactPage = new ContactPage();
});
