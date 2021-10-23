var express = require('express');
var router = express.Router()
const categoryControllers = require('../app/controllers/CategoryController')
router.get('/get_category', categoryControllers.getCategory);
router.get('/get_category_by_slug', categoryControllers.getCategoryBySlug);
module.exports = router;