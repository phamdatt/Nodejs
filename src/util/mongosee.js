module.exports = {
    multipleMongooseObject: function (mongooses) {
        return mongooses.map(resp => resp.toObject());
    },
    mongooseObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
};
