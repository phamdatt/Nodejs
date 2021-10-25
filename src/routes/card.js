var express = require('express');
var router = express.Router()
const cardController = require('../app/controllers/CardController')
router.get('/', cardController.index);
module.exports = router;