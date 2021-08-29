const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/phamtiendat');
        console.log("Connect Successfully")
    } catch {
        console.log("Fail");
    }
}
module.exports = { connect }