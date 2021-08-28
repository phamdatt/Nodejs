var express = require('express')
var router = express.Router()
const sitesControllers = require('../app/controllers/SitesControllers')

router.use('/', sitesControllers.index);

module.exports = router;