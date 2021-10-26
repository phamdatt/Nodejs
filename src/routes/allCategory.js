var express = require('express');
var router = express.Router()
const AllCategoryController = require('../app/controllers/AllCategoryController')
router.get('/get_category_by_slug/slug=:slug/catId=:catId', AllCategoryController.getCategoryBySlug);
module.exports = router;