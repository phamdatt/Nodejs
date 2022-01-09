const Account = require("../model/Account");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET =
  "sdjkfh8923yhjdksbfma@#*(&@*!^#&@bhjb2qiuhesdbhjdsfg839ujkdhfjk";
class AccounController {
  async register(request, response) {
    const email = request.body.email;
    const password = await bcrypt.hash(request.body.password, 10);
    const gender = request.body.gender;
    const username = request.body.username;
    const phonenumber = request.body.phonenumber;
    console.log(request.body)
    Account.findOne({ email: email }, function (err, user) {
      if (err) {
        response.json({
          code: 1,
          message: err,
        });
      }
      if (!user) {
        const user = new Account({
          email: email,
          password: password,
          gender: gender,
          username: username,
          phonenumber: phonenumber,
        });
        Account.create(user, function (err, data) {
          if (err) {
            console.log(err)
            response.json({
              code: 1,
              message: err,
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
          message: "User is exists",
        });
      }
    });
  }

  async login(request, response) {
    const { email, password } = request.body;
    const user = await Account.findOne({ email: email }).lean();

    if (!user) {
      return response.json({
        code: 1,
        message: "Invalid email/password",
      });
    }

    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        {
          id: user._id,
          email: user.email,
          password: await bcrypt.hash(password, 10),
        },
        JWT_SECRET
      );

      return response.json({
        code: 0,
        payload: {
          email: user.email,
          gender: user.gender,
          phonenumber: user.phonenumber,
          accesToken: token,
          username: user.username,
          birthday: user.birthday,
        },
      });
    }

    response.json({ code: 1, message: "Invalid email/password" });
  }

  getUserInfo(request, response) {
    const email = request.params.email;
    Account.findOne(
      {
        email: email,
      },
      function (err, user) {
        if (err) {
          response.json({
            code: 1,
            message: err,
          });
        } else {
          response.json({
            code: 0,
            message: user,
          });
        }
      }
    );
  }

  async changePassword(req, res) {
    const { token, newPassword, reNewPassword, oldPassword } = req.body;

    if (!newPassword || typeof newPassword !== "string") {
      return res.json({ status: "error", error: "Invalid password" });
    }
    try {
      const user = jwt.verify(token, JWT_SECRET);

      const _id = user.id;

      const password = await bcrypt.hash(newPassword, 10);
      if (await bcrypt.compare(oldPassword, user.password)) {
        if (newPassword === reNewPassword) {
          await Account.updateOne(
            { _id },
            {
              $set: { password },
            }
          );
          res.json({ status: "ok" });
        } else {
          res.json({
            status: "error",
            message: "Xác nhận mật khẩu không đúng",
          });
        }
      } else {
        res.json({ status: "error", message: "Mật khẩu cũ không chính xác" });
      }
    } catch (error) {
      console.log(error);
      res.json({ status: "error", error: ";))" });
    }
  }
}
module.exports = new AccounController();
