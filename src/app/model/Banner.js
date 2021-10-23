const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Banners = new Schema({
    bannerTop: String,
    image: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Banners', Banners);
