var express = require("express");
var router = express.Router();
const accountController = require("../app/controllers/AccountController");
router.post("/register", accountController.register);
router.post("/changePassword", accountController.changePassword);
router.post("/login", accountController.login);
router.get("/getUserInfo/email=:email", accountController.getUserInfo);
module.exports = router;
