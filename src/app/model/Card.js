const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var cartSchema = new Schema({
  owner: { type: Schema.Types.ObjectID, ref: 'User' },
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

