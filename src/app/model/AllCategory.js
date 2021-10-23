const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AllCategory = new Schema({
    id: Number,
    name: String,
    slug: String,
    parentId: Number,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model('AllCategory', AllCategory);
