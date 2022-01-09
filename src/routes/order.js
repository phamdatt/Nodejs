var express = require("express");
var router = express.Router();
const orderControllers = require("../app/controllers/OrdersControllers");
router.post("/addOrder", orderControllers.addOrder);
router.get("/getOrderDetail/orderId=:orderId", orderControllers.getOrderDetail);
router.get("/getOrderList", orderControllers.getOrderList);
module.exports = router;
