// Post controller
const postService = require('../services/postService');
const { asyncHandler } = require('../utils/errors');

exports.createPost = asyncHandler(async (req, res) => {
  const { title, content, imageUrl } = req.body;

  // Since auth is removed, use a default anonymous user ID
  const anonymousUserId = 1;
  const post = await postService.createPost(anonymousUserId, title, content, imageUrl);

  res.status(201).json({
    success: true,
    message: 'Post created successfully',
    data: post
  });
});

exports.getPost = asyncHandler(async (req, res) => {
  const post = await postService.getPostById(req.params.id);

  res.status(200).json({
    success: true,
    data: post
  });
});

exports.getAllPosts = asyncHandler(async (req, res) => {
  const limit = Math.min(parseInt(req.query.limit) || 20, 100);
  const offset = parseInt(req.query.offset) || 0;

  const result = await postService.getAllPosts(limit, offset);

  res.status(200).json({
    success: true,
    data: result
  });
});

exports.getUserPosts = asyncHandler(async (req, res) => {
  const limit = Math.min(parseInt(req.query.limit) || 20, 100);
  const offset = parseInt(req.query.offset) || 0;

  const posts = await postService.getUserPosts(req.user.id, limit, offset);

  res.status(200).json({
    success: true,
    data: posts
  });
});

exports.updatePost = asyncHandler(async (req, res) => {
  const { title, content, imageUrl } = req.body;

  const post = await postService.updatePost(req.params.id, req.user.id, title, content, imageUrl);

  res.status(200).json({
    success: true,
    message: 'Post updated successfully',
    data: post
  });
});

exports.deletePost = asyncHandler(async (req, res) => {
  await postService.deletePost(req.params.id, req.user.id);

  res.status(200).json({
    success: true,
    message: 'Post deleted successfully'
  });
});
