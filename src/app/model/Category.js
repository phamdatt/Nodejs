const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Category = new Schema({
    name: String,
    category_Id: Number,
    image: String,
    slug: String,
    childCategory: [
        {
            name: String,
            category_Id: Number,
            childCategory: [
                {
                    name: String,
                    category_Id: Number,
                    childCategory: [],
                    slug: String,
                    createdAt: { type: Date, default: Date.now },
                    updatedAt: { type: Date, default: Date.now },
                }
            ],
            slug: String,
            createdAt: { type: Date, default: Date.now },
            updatedAt: { type: Date, default: Date.now },
        }
    ],
    banner: Array,
    parentId: Number,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Category', Category);
