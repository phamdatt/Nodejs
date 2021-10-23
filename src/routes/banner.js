var express = require('express');
var router = express.Router()
const bannerControllers = require('../app/controllers/BannerController')
router.get('/get_banner', bannerControllers.getBanner);
module.exports = router;