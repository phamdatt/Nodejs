const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const cardSchema = new Schema({
    productId: String,
    catId: String,
    quantity: Number,
    totalPrice: Number,
})
module.exports = mongoose.model('Cards', cardSchema);