const express = require('express');
const formController = require('../controllers/formController');

const router = express.Router();

router.post('/contact', formController.submitContactForm);
router.get('/submissions', formController.getSubmissions);
router.put('/submissions/:id/read', formController.markAsRead);

module.exports = router;
