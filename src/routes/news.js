var express = require('express')
var router = express.Router()
const newsControllers = require('../app/controllers/NewsControllers')

router.use('/', newsControllers.index);

module.exports = router;