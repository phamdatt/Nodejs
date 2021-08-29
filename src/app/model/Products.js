const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Products = new Schema({
    name: String,
    description: String,
    image: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Products', Products);
