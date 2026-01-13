// Common functionality for all pages (auth, navigation, year)
class CommonApp {
  constructor() {
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.updateYear();
  }

  setupEventListeners() {
    // Navigation toggle
    const navToggle = document.getElementById('navToggle');
    if (navToggle) {
      navToggle.addEventListener('click', () => this.toggleNav());
    }

    // Navigation active state
    this.setupNavigationActiveState();
  }

  toggleNav() {
    const nav = document.getElementById('mainNav');
    if (nav) nav.classList.toggle('open');
  }

  setupNavigationActiveState() {
    const navLinks = document.querySelectorAll('.nav a');
    const currentPath = window.location.pathname;

    // Set active class based on current page
    navLinks.forEach(link => {
      const linkPath = link.getAttribute('href');
      if (linkPath === currentPath || (currentPath === '/' && linkPath === 'index.html')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }

      link.addEventListener('click', (e) => {
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));
        // Add active class to clicked link
        e.target.classList.add('active');
      });
    });
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
  window.app = new CommonApp();
});
