const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var cartSchema = new Schema({
  owner: String,
  totalPrice: { type: Number, default: 0 },
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: "Products",
    },
  ],
  quantity: Number,
});
module.exports = mongoose.model("Cards", cartSchema);

