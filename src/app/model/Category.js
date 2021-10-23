const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Category = new Schema({
    name: String,
    catId: Number,
    image: String,
    slug: String,
    childCategory: [
        {
            name: String,
            childCategory: [],
            slug: String,
            createdAt: { type: Date, default: Date.now },
            updatedAt: { type: Date, default: Date.now },
        }
    ],
    banner: Array,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Category', Category);
