const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const cardSchema = new Schema({
    userId: {
        type: String,
        ref: 'Account'
    },
    items: [
        {
            item: {
                type: mongoose.Schema.Types.ObjectID, ref: 'Products'
            },
            qty: { type: Number, default: 1 },
            price: { type: Number, default: 0 }
        }
    ]
})
module.exports = mongoose.model('Cards', cardSchema);