var express = require('express');
var router = express.Router()
const categoryControllers = require('../app/controllers/CategoryController')
router.get('/get_category', categoryControllers.getCategory);

module.exports = router;