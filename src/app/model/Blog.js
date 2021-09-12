
const mongoose = require('mongoose');
const { countDocuments } = require('./Products');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: String, // String is shorthand for {type: String}
    author: String,
    body: String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    }
});
module.exports = mongoose.model('Blog', Blog);
function saveData(res, resp) {
    blogSchema.save({
        title: res.title,
        author: res.userId,
        body: res.body,
        comments: [{ body: String, date: Date }],
        date: { type: Date, default: Date.now },
        hidden: Boolean,
        meta: {
            votes: Number,
            favs: Number
        }
    })
}
