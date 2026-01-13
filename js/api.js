// Centralized API service
const API_BASE_URL = 'http://localhost:5001/api';

class APIError extends Error {
  constructor(message, status, data) {
    super(message);
    this.status = status;
    this.data = data;
  }
}

class APIService {
  getHeaders() {
    return {
      'Content-Type': 'application/json',
    };
  }

  async handleResponse(response) {
    const data = await response.json();

    if (!response.ok) {
      throw new APIError(
        data.message || 'An error occurred',
        response.status,
        data
      );
    }

    return data;
  }

  async request(method, endpoint, body = null) {
    const url = `${API_BASE_URL}${endpoint}`;
    const options = {
      method,
      headers: this.getHeaders(),
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);
    return await this.handleResponse(response);
  }

  // Post endpoints
  async createPost(title, content, imageUrl = null) {
    let payload = {};
    if (title && typeof title === 'object') {
      payload = { title: title.title, content: title.content, imageUrl: title.imageUrl || null };
    } else {
      payload = { title, content, imageUrl };
    }
    return this.request('POST', '/posts', payload);
  }

  async getPost(id) {
    return this.request('GET', `/posts/${id}`);
  }

  async getAllPosts(limit = 20, offset = 0) {
    const params = new URLSearchParams({ limit, offset });
    return this.request('GET', `/posts?${params}`);
  }

  async getUserPosts(limit = 20, offset = 0) {
    const params = new URLSearchParams({ limit, offset });
    return this.request('GET', `/posts/my-posts?${params}`);
  }

  async updatePost(id, title, content, imageUrl = null) {
    return this.request('PUT', `/posts/${id}`, {
      title,
      content,
      imageUrl,
    });
  }

  async deletePost(id) {
    return this.request('DELETE', `/posts/${id}`);
  }

  // Form endpoints
  async submitContactForm(name, email, message) {
    let payload = {};
    if (name && typeof name === 'object') {
      payload = { name: name.name, email: name.email, message: name.message };
    } else {
      payload = { name, email, message };
    }
    return this.request('POST', '/forms/contact', payload);
  }

  async getSubmissions(status = null) {
    const params = status ? `?status=${status}` : '';
    return this.request('GET', `/forms/submissions${params}`);
  }

  async markSubmissionAsRead(id) {
    return this.request('PUT', `/forms/submissions/${id}/read`);
  }
}

const apiService = new APIService();

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = apiService;
}
