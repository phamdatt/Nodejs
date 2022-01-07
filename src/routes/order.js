var express = require("express");
var router = express.Router();
const orderControllers = require("../app/controllers/OrdersControllers");
router.post("/addOrder", orderControllers.addOrder);
router.get("/getOrderDetail/orderId=:orderId", orderControllers.getOrderDetail);
module.exports = router;
