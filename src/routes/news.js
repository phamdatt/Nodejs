var express = require('express')
var router = express.Router()
const newsControllers = require('../app/controllers/NewsControllers')
router.get('/', newsControllers.index);
router.post('/', newsControllers.index);
module.exports = router;