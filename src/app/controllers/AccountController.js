const Account = require("../model/Account");
const { check, validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class AccounController {
  index(request, response) {
    response.render("register");
  }
  async register(request, response) {
    console.log(request.body);
    const reqEmail = request.body.email;
    Account.findOne({ emai: reqEmail }, function (err, user) {
      if (err) {
        response.json({
          code: 1,
          message: err,
          payload: [],
        });
      }
      if (!user) {
        const newAccount = new Account({
          email: request.body.email,
          password: request.body.password,
          username: request.body.username,
          phonenumber: request.body.phonenumber,
          gender: request.body.gender,
          birthday: request.body.birthday,
        });
        Account.create(newAccount, function (err, data) {
          if (err) {
            response.json({
              code: 1,
              message: err,
              payload: [],
            });
          } else {
            response.json({
              code: 0,
              message: "success",
              payload: data,
            });
          }
        });
      } else {
        response.json({
          code: 1,
          message: "User already exist",
        });
      }
    });
  }
}
module.exports = new AccounController();
