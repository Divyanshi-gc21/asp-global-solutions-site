// Posts Page Logic
class PostsPage {
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
    // Post buttons
    // Post form listener (inline form)
    const postForm = document.getElementById('postForm');
    if (postForm) postForm.addEventListener('submit', (e) => this.handlePostSubmit(e));

    // Load more button
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
      loadMoreBtn.addEventListener('click', () => this.loadMorePosts());
    }

    // Clear button for inline form
    const postClearBtn = document.getElementById('postClearBtn');
    if (postClearBtn) postClearBtn.addEventListener('click', () => {
      const postForm = document.getElementById('postForm');
      if (postForm) postForm.reset();
    });
  }



  // ============ Posts ============
  async loadPosts() {
    const postsContainer = document.getElementById('postsContainer');
    if (!postsContainer) return;

    postsContainer.innerHTML = '<div class="loading"><span class="spinner"></span><span>Loading posts...</span></div>';

    try {
      const response = await apiService.getAllPosts(this.postsLimit, this.postsOffset);
      const data = response.data || response;
      this.renderPosts(data.posts || []);

      const loadMoreBtn = document.getElementById('loadMoreBtn');
      if (loadMoreBtn) {
        const hasMore = (data.total || 0) > (data.offset + (data.posts ? data.posts.length : 0));
        loadMoreBtn.style.display = hasMore ? 'block' : 'none';
      }
    } catch (error) {
      postsContainer.innerHTML = `<p class="error-message">Failed to load posts: ${error.message}</p>`;
    }
  }

  async loadMorePosts() {
    if (this.isLoadingMore) return;

    this.isLoadingMore = true;
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
      UIManager.showLoading(loadMoreBtn);
    }

    try {
      this.postsOffset += this.postsLimit;
      const response = await apiService.getAllPosts(this.postsLimit, this.postsOffset);
      const data = response.data || response;

      const postsContainer = document.getElementById('postsContainer');
      (data.posts || []).forEach(post => {
        postsContainer.appendChild(this.createPostCard(post));
      });

      const hasMore = (data.total || 0) > (data.offset + (data.posts ? data.posts.length : 0));
      if (!hasMore && loadMoreBtn) {
        loadMoreBtn.style.display = 'none';
      }
    } catch (error) {
      UIManager.showAlert('Failed to load more posts', 'error');
    } finally {
      this.isLoadingMore = false;
      if (loadMoreBtn) {
        UIManager.hideLoading(loadMoreBtn);
      }
    }
  }

  renderPosts(posts) {
    const postsContainer = document.getElementById('postsContainer');
    if (!postsContainer) return;

    postsContainer.innerHTML = '';

    if (posts.length === 0) {
      postsContainer.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">No posts yet. Be the first to share!</p>';
      return;
    }

    posts.forEach(post => {
      postsContainer.appendChild(this.createPostCard(post));
    });
  }



  createPostCard(post) {
    const card = document.createElement('div');
    card.className = 'post-card dynamic-card';
    card.style.cursor = 'pointer';

    const date = UIManager.formatDate(post.created_at);
    const author = post.author_name || post.firstName + ' ' + post.lastName || 'Anonymous';
    const contentPreview = this.escapeHtml(post.content.substring(0, 150));
    const wordCount = post.content.split(' ').length;
    const readTime = Math.ceil(wordCount / 200); // Average reading speed

    // Generate dynamic gradient background
    const gradients = [
      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
      'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
    ];
    const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];

    // Generate random icon for visual interest
    const icons = ['📝', '💭', '🌟', '🚀', '💡', '🎯', '🔥', '✨', '💫', '🎨'];
    const randomIcon = icons[Math.floor(Math.random() * icons.length)];

    // Determine post category based on content keywords
    const category = this.getPostCategory(post.content);
    const categoryColors = {
      'Technology': '#3b82f6',
      'Lifestyle': '#10b981',
      'Business': '#f59e0b',
      'Creative': '#8b5cf6',
      'Personal': '#ef4444',
      'Other': '#6b7280'
    };

    card.innerHTML = `
      <div class="post-card-header" style="background: ${randomGradient};">
        <div class="post-category-badge" style="background: ${categoryColors[category] || categoryColors.Other};">
          ${category}
        </div>
        <div class="post-icon">${randomIcon}</div>
      </div>

      <div class="post-card-content">
        <div class="post-meta">
          <div class="author-info">
            <div class="author-avatar">
              ${this.getAuthorInitials(author)}
            </div>
            <div class="author-details">
              <span class="author-name">${this.escapeHtml(author)}</span>
              <span class="post-date">${date}</span>
            </div>
          </div>
          <div class="post-stats">
            <span class="read-time">${readTime} min read</span>
          </div>
        </div>

        <h3 class="post-title">${this.escapeHtml(post.title)}</h3>

        <p class="post-preview">${contentPreview}${post.content.length > 150 ? '...' : ''}</p>

        <div class="post-actions">
          <div class="engagement-buttons">
            <button class="engagement-btn like-btn" onclick="event.stopPropagation(); window.postsPage?.toggleLike(${post.id})">
              ❤️ <span class="like-count">${Math.floor(Math.random() * 50) + 1}</span>
            </button>
            <button class="engagement-btn comment-btn" onclick="event.stopPropagation(); window.postsPage?.showComments(${post.id})">
              💬 <span class="comment-count">${Math.floor(Math.random() * 20) + 1}</span>
            </button>
            <button class="engagement-btn share-btn" onclick="event.stopPropagation(); window.postsPage?.sharePost(${post.id})">
              🔗 Share
            </button>
          </div>
        </div>
      </div>
    `;

    // Add hover effects
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-8px) scale(1.02)';
      card.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
      card.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
    });

    return card;
  }

  openPostModal() {
    // Scroll to inline create post section and focus title
    const section = document.getElementById('createPostSection');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const title = document.getElementById('postTitle');
      if (title) title.focus();
    }
  }

  closePostModal() {
    const postForm = document.getElementById('postForm');
    if (postForm) postForm.reset();
    const section = document.getElementById('createPostSection');
    if (section) section.classList.remove('active');
  }

  async handlePostSubmit(e) {
    e.preventDefault();

    const title = document.getElementById('postTitle').value;
    const content = document.getElementById('postContent').value;

    if (!title || !content) {
      UIManager.showAlert('Please fill in all fields', 'error');
      return;
    }

    const submitBtn = document.getElementById('postSubmitBtn');
    UIManager.showLoading(submitBtn);

    try {
      await apiService.createPost({ title, content });
      UIManager.hideLoading(submitBtn);
      this.closePostModal();
      UIManager.showAlert('Post created successfully!', 'success');
      this.postsOffset = 0;
      this.loadPosts();
    } catch (error) {
      UIManager.hideLoading(submitBtn);
      UIManager.showAlert(error.message || 'Failed to create post', 'error');
    }
  }

  getAuthorInitials(author) {
    if (!author || author === 'Anonymous') return 'A';
    const names = author.trim().split(' ');
    if (names.length === 1) return names[0].charAt(0).toUpperCase();
    return (names[0].charAt(0) + names[names.length - 1].charAt(0)).toUpperCase();
  }

  getPostCategory(content) {
    const lowerContent = content.toLowerCase();
    if (lowerContent.includes('javascript') || lowerContent.includes('python') || lowerContent.includes('code') || lowerContent.includes('programming')) {
      return 'Technology';
    } else if (lowerContent.includes('travel') || lowerContent.includes('food') || lowerContent.includes('health') || lowerContent.includes('fitness')) {
      return 'Lifestyle';
    } else if (lowerContent.includes('business') || lowerContent.includes('startup') || lowerContent.includes('money') || lowerContent.includes('work')) {
      return 'Business';
    } else if (lowerContent.includes('art') || lowerContent.includes('design') || lowerContent.includes('music') || lowerContent.includes('creative')) {
      return 'Creative';
    } else if (lowerContent.includes('personal') || lowerContent.includes('story') || lowerContent.includes('life') || lowerContent.includes('experience')) {
      return 'Personal';
    }
    return 'Other';
  }

  escapeHtml(text) {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
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
  window.postsPage = new PostsPage();
});
