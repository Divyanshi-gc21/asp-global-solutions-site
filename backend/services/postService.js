// Post service layer
const db = require('../config/database');
const { AppError } = require('../utils/errors');

class PostService {
  async createPost(title, content, imageUrl = null) {
    if (!title || title.trim().length === 0) {
      throw new AppError('Title is required', 400);
    }

    const result = await db.run(
      'INSERT INTO posts (title, content, image_url) VALUES (?, ?, ?)',
      [title, content || '', imageUrl]
    );

    return this.getPostById(result.id);
  }

  async getPostById(id) {
    const post = await db.get(`
      SELECT p.*, u.username, u.firstName, u.lastName, u.profile_picture
      FROM posts p
      LEFT JOIN users u ON p.user_id = u.id
      WHERE p.id = ?
    `, [id]);

    if (!post) {
      throw new AppError('Post not found', 404);
    }

    return post;
  }

  async getAllPosts(limit = 20, offset = 0) {
    const posts = await db.all(`
      SELECT p.*, u.username, u.firstName, u.lastName, u.profile_picture
      FROM posts p
      LEFT JOIN users u ON p.user_id = u.id
      WHERE p.status = 'published'
      ORDER BY p.created_at DESC
      LIMIT ? OFFSET ?
    `, [limit, offset]);

    const countResult = await db.get('SELECT COUNT(*) as total FROM posts WHERE status = ?', ['published']);

    return {
      posts,
      total: countResult.total,
      limit,
      offset
    };
  }

  async getUserPosts(userId, limit = 20, offset = 0) {
    const posts = await db.all(`
      SELECT p.*, u.username, u.firstName, u.lastName, u.profile_picture
      FROM posts p
      JOIN users u ON p.user_id = u.id
      WHERE p.user_id = ?
      ORDER BY p.created_at DESC
      LIMIT ? OFFSET ?
    `, [userId, limit, offset]);

    return posts;
  }

  async updatePost(postId, title, content, imageUrl) {
    const post = await db.get('SELECT id FROM posts WHERE id = ?', [postId]);

    if (!post) {
      throw new AppError('Post not found', 404);
    }

    await db.run(
      'UPDATE posts SET title = ?, content = ?, image_url = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
      [title, content, imageUrl, postId]
    );

    return this.getPostById(postId);
  }

  async deletePost(postId) {
    const post = await db.get('SELECT id FROM posts WHERE id = ?', [postId]);

    if (!post) {
      throw new AppError('Post not found', 404);
    }

    await db.run('DELETE FROM posts WHERE id = ?', [postId]);
  }
}

module.exports = new PostService();
