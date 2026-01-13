// Form controller
const formService = require('../services/formService');
const { asyncHandler } = require('../utils/errors');

exports.submitContactForm = asyncHandler(async (req, res) => {
  const { name, email, message } = req.body;

  const result = await formService.submitContactForm(name, email, message);

  res.status(201).json({
    success: true,
    message: result.message,
    data: result
  });
});

exports.getSubmissions = asyncHandler(async (req, res) => {
  const status = req.query.status || null;
  const submissions = await formService.getSubmissions(status);

  res.status(200).json({
    success: true,
    data: submissions
  });
});

exports.markAsRead = asyncHandler(async (req, res) => {
  await formService.markAsRead(req.params.id);

  res.status(200).json({
    success: true,
    message: 'Submission marked as read'
  });
});
