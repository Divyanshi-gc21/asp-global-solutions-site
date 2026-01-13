// Form submission service
const db = require('../config/database');
const { AppError } = require('../utils/errors');
const { validateEmail } = require('../utils/validators');

class FormService {
  async submitContactForm(name, email, message) {
    // Validation
    if (!name || name.trim().length === 0) {
      throw new AppError('Name is required', 400);
    }
    if (!validateEmail(email)) {
      throw new AppError('Invalid email format', 400);
    }
    if (!message || message.trim().length === 0) {
      throw new AppError('Message is required', 400);
    }

    const result = await db.run(
      'INSERT INTO submissions (name, email, message) VALUES (?, ?, ?)',
      [name, email, message]
    );

    return {
      id: result.id,
      message: 'Thank you for your submission. We will get back to you soon.'
    };
  }

  async getSubmissions(status = null) {
    const query = status
      ? 'SELECT * FROM submissions WHERE status = ? ORDER BY created_at DESC'
      : 'SELECT * FROM submissions ORDER BY created_at DESC';
    
    const params = status ? [status] : [];
    return db.all(query, params);
  }

  async markAsRead(submissionId) {
    await db.run(
      'UPDATE submissions SET status = ? WHERE id = ?',
      ['read', submissionId]
    );
  }
}

module.exports = new FormService();
