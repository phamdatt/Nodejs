const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const cardSchema = new Schema({
  userId: {
    type: String,
  },
  itemList: [
    {
      type: Schema.Types.ObjectId,
      ref: "Products",
    },
  ],
  quantity: Number,
  price: Number,
});
module.exports = mongoose.model("Cards", cardSchema);
