const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const db = require('./config/database');
const { errorHandler } = require('./utils/errors');
const postRoutes = require('./routes/posts');
const formRoutes = require('./routes/forms');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(express.static('../'));

// Initialize database and start server
const startServer = async () => {
  try {
    await db.initDb();
    console.log('✓ Database initialized');

    // Routes
    app.use('/api/posts', postRoutes);
    app.use('/api/forms', formRoutes);

    // Health check
    app.get('/api/health', (req, res) => {
      res.json({ status: 'ok', timestamp: new Date().toISOString() });
    });

    // 404 handler
    app.use((req, res) => {
      res.status(404).json({ success: false, message: 'Route not found' });
    });

    // Error handler
    app.use(errorHandler);

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
