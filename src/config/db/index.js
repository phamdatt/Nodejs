const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb+srv://tiendatt3009:12345678A@cluster0.fxgxb.mongodb.net/phamtiendat');
        console.log("Connect Successfully")
    } catch {
        console.log("Fail");
    }
}
module.exports = { connect }