var express = require('express');
var router = express.Router()
const accountController = require('../app/controllers/AccountController')
router.get('/', accountController.index);
module.exports = router;