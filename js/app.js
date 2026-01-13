// Main Application Logic
class Application {
  constructor() {
    this.postsOffset = 0;
    this.postsLimit = 10;
    this.isLoadingMore = false;
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.loadPosts();
    this.updateYear();
  }
  setupEventListeners() {
    // Navigation toggle
    const navToggle = document.getElementById('navToggle');
    if (navToggle) navToggle.addEventListener('click', () => this.toggleNav());

    // Explore button
    const exploreBtn = document.getElementById('exploreBtn');
    if (exploreBtn) {
      exploreBtn.addEventListener('click', () => {
        const postsSection = document.getElementById('posts');
        if (postsSection) postsSection.scrollIntoView({ behavior: 'smooth' });
        else window.location.href = '/posts.html';
      });
    }

    // Post form (inline on posts page)
    const postForm = document.getElementById('postForm');
    if (postForm) postForm.addEventListener('submit', (e) => this.handlePostSubmit(e));

    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) contactForm.addEventListener('submit', (e) => this.handleContactSubmit(e));

    // Load more button
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) loadMoreBtn.addEventListener('click', () => this.loadMorePosts());

    // no post modal overlay handling (inline form used)
  }

  // ============ Navigation ============
  toggleNav() {
    const nav = document.getElementById('mainNav');
    nav.classList.toggle('open');
  }

  // ============ Posts ============
  async loadPosts() {
    try {
      this.postsOffset = 0;
      const container = document.getElementById('postsContainer');
      UIManager.setLoading(container, true);

      const response = await apiService.getAllPosts(this.postsLimit, this.postsOffset);
      this.renderPosts(response.data.posts, true);

      // Show load more if there are more posts
      if (response.data.total > response.data.posts.length) {
        document.getElementById('loadMoreBtn').style.display = 'block';
      } else {
        document.getElementById('loadMoreBtn').style.display = 'none';
      }
    } catch (error) {
      const container = document.getElementById('postsContainer');
      container.innerHTML = '<div class="alert alert-error">Failed to load posts</div>';
      console.error('Load posts error:', error);
    }
  }

  async loadMorePosts() {
    if (this.isLoadingMore) return;
    this.isLoadingMore = true;

    try {
      this.postsOffset += this.postsLimit;
      const response = await apiService.getAllPosts(this.postsLimit, this.postsOffset);
      this.renderPosts(response.data.posts, false);

      if (this.postsOffset + response.data.posts.length >= response.data.total) {
        document.getElementById('loadMoreBtn').style.display = 'none';
      }
    } catch (error) {
      UIManager.showAlert('Failed to load more posts', 'error');
      console.error('Load more error:', error);
    } finally {
      this.isLoadingMore = false;
    }
  }

  renderPosts(posts, replace = true) {
    const container = document.getElementById('postsContainer');
    const html = posts.map(post => this.createPostCard(post)).join('');

    if (replace) {
      container.innerHTML = html || '<div class="alert">No posts yet</div>';
    } else {
      container.innerHTML += html;
    }
  }

  createPostCard(post) {
    const date = UIManager.formatDate(post.created_at);
    const displayName = post.firstName && post.lastName
      ? `${post.firstName} ${post.lastName}`
      : post.username;
    const initials = UIManager.getInitials(displayName);

    return `
      <div class="card post-card">
        <div class="post-header">
          <div class="avatar" style="flex-shrink: 0;">${initials}</div>
          <div class="post-author">
            <span class="post-author-name">${displayName}</span>
            <span class="post-date">${date}</span>
          </div>
        </div>
        <h3 class="post-title">${this.escapeHtml(post.title)}</h3>
        <p class="post-content">${this.escapeHtml(post.content)}</p>
        ${post.image_url ? `<img src="${post.image_url}" alt="Post" style="width: 100%; border-radius: var(--radius-md); margin-bottom: var(--spacing-md); max-height: 300px; object-fit: cover;">` : ''}
        ${this.currentUser && this.currentUser.id === post.user_id ? `
          <div class="post-actions">
            <button class="btn btn-small btn-secondary flex-1" onclick="app.editPost(${post.id})">Edit</button>
            <button class="btn btn-small btn-danger flex-1" onclick="app.deletePost(${post.id})">Delete</button>
          </div>
        ` : ''}
      </div>
    `;
  }

  // ============ Post Management ============
  openPostModal() {
    UIManager.showModal(document.getElementById('postModal'));
  }

  closePostModal() {
    UIManager.hideModal(document.getElementById('postModal'));
    document.getElementById('postForm').reset();
  }

  async handlePostSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('[type="submit"]');
    const hideLoading = UIManager.showLoading(submitBtn);

    try {
      const title = document.getElementById('postTitle').value;
      const content = document.getElementById('postContent').value;
      const imageUrl = document.getElementById('postImage').value;

      if (!title.trim()) {
        UIManager.showFieldError(document.getElementById('postTitle'), 'Title is required');
        return;
      }

      await apiService.createPost(title, content, imageUrl);
      UIManager.showAlert('Post created successfully!', 'success');
      this.closePostModal();
      this.loadPosts();
    } catch (error) {
      UIManager.showAlert(error.message || 'Failed to create post', 'error');
      console.error('Post creation error:', error);
    } finally {
      hideLoading();
    }
  }

  async deletePost(postId) {
    if (!confirm('Are you sure you want to delete this post?')) return;

    try {
      await apiService.deletePost(postId);
      UIManager.showAlert('Post deleted successfully!', 'success');
      this.loadPosts();
    } catch (error) {
      UIManager.showAlert(error.message || 'Failed to delete post', 'error');
    }
  }

  editPost(postId) {
    UIManager.showAlert('Edit functionality coming soon!', 'info');
  }

  // ============ Contact Form ============
  async handleContactSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('[type="submit"]');
    const hideLoading = UIManager.showLoading(submitBtn);

    try {
      const name = document.getElementById('contactName').value;
      const email = document.getElementById('contactEmail').value;
      const subject = document.getElementById('contactSubject').value;
      const message = document.getElementById('contactMessage').value;

      // Validation
      if (!name.trim()) {
        UIManager.showFieldError(document.getElementById('contactName'), 'Name is required');
        return;
      }
      if (!UIManager.validateEmail(email)) {
        UIManager.showFieldError(document.getElementById('contactEmail'), 'Invalid email format');
        return;
      }
      if (!message.trim()) {
        UIManager.showFieldError(document.getElementById('contactMessage'), 'Message is required');
        return;
      }

      const response = await apiService.submitContactForm(name, email, subject, message);
      
      const statusDiv = document.getElementById('formStatus');
      statusDiv.className = 'form-status show alert alert-success';
      statusDiv.textContent = '✓ Thank you for your message! We will get back to you soon.';
      
      form.reset();
      setTimeout(() => {
        statusDiv.classList.remove('show');
      }, 5000);
    } catch (error) {
      const statusDiv = document.getElementById('formStatus');
      statusDiv.className = 'form-status show alert alert-error';
      statusDiv.textContent = error.message || 'Failed to send message';
      console.error('Contact form error:', error);
    } finally {
      hideLoading();
    }
  }

  // ============ Utilities ============
  updateYear() {
    document.getElementById('year').textContent = new Date().getFullYear();
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

// Initialize app
let app;
document.addEventListener('DOMContentLoaded', () => {
  app = new Application();
});
