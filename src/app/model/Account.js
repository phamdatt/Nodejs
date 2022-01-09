const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const accountSchema = new Schema({
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  username: {
    type: String,
    required: true,
  },
  gender: {
    type: Number,
    required: true,
  },
  phonenumber: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Account", accountSchema);
