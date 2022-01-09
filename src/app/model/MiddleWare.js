const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const middleWareScheme = new Schema({
    name: String,
    slug: String.apply,
    image: [{
        imageThumnail: String,
    }],
    price: Number,
});
module.exports = mongoose.model('Middle', middleWareScheme);
