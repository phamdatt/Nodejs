const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Products = new Schema({
    name: String,
    description: String,
    catId: Number,
    color: [],
    disCount: Number,
    deal: Boolean,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    image: [],
    price:Number,
});
module.exports = mongoose.model('Products', Products);
