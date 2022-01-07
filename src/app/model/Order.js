const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const orderScheme = new Schema({
    orderId: String,
    name: String,
    itemList: [{
        type: Schema.Types.ObjectId,
        ref: "Products",
    }],
    totalPrice: Number,
    email: String,
    address: String,
    orderStatus: Number,
    phone: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Orders", orderScheme);
