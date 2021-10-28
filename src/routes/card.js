var express = require("express");
var router = express.Router();
const cardController = require("../app/controllers/CardController");
router.get("/", cardController.index);
router.get("/get_cart", cardController.getCart);
router.post("/add_to_cart", cardController.addToCart);
module.exports = router;
