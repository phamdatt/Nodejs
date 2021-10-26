var express = require('express')
var router = express.Router()
const sitesControllers = require('../app/controllers/SitesControllers')
router.get('/', sitesControllers.index);
router.get('/product_detail/productId=:productId', sitesControllers.getProductDetail)
router.get('/product_relate_to/catId=:catId', sitesControllers.getProductRelate)
module.exports = router;