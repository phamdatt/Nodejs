var express = require('express')
var router = express.Router()
const sitesControllers = require('../app/controllers/SitesControllers')

router.use('/login', sitesControllers.index);
router.use('/home', sitesControllers.home);

module.exports = router;