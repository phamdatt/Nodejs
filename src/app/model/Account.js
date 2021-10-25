const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const accountSchema = new Schema({
    userName: String,
    passWord: String,
    cardId: [
        {
            type: String,
            ref: 'Cards'
        }
    ]
})
module.exports = mongoose.model('Account', accountSchema);