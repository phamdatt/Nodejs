const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Banners = new Schema({
  title: String,
  image: [],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Banners", Banners);
