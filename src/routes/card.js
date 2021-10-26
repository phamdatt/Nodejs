var express = require('express');
var router = express.Router()
const cardController = require('../app/controllers/CardController')
router.get('/', cardController.index);
router.post('/add_to_cart/productId=productId', cardController.addToCart);
module.exports = router;