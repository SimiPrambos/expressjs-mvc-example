const express = require('express');
const router = express.Router();
const db = require('../config/database')
const BlogController = require('../controllers/BlogController')
const isNotEqualToOne = require('../middlewares/isNotEqualToOne')

router.get('/', BlogController.index)

// with middleware
router.get('/:post_id', isNotEqualToOne, BlogController.detail)

module.exports = router