const Products = require("../model/Products");
// const { multipleMongooseObject } = require('../../util/mongosee')
class SitesControllers {
  index(request, response, next) {
    Products.find({})
      .then((products) => {
        response.json({
          code: 0,
          payload: products,
        });
      })
      .catch(next);
  }
  getProductDetail(request, response, next) {
    Products.findOne({ _id: request.params.productId })
      .then((products) => {
        response.json({
          code: 0,
          payload: products,
        });
      })
      .catch(next);
  }
  getProductRelate(request, response, next) {
    Products.find({ catId: request.params.catId })
      .then((products) => {
        response.json({
          code: 0,
          payload: products,
        });
      })
      .catch(next);
  }
  getProductFavorite(request, response, next) {
    Products.find({ favorite: true })
      .then((products) => {
        response.json({
          code: 0,
          payload: products,
        });
      })
      .catch(next);
  }
  removeFavorite(request, response, next) {
    const id = request.params.productId;
    const updateObject = {
      favorite: false,
    };
    Products.updateOne({ _id: id }, { $set: updateObject })
      .exec()
      .then(() => {
        console.log(updateObject);
        response.status(200).json({
          code: 0,
          message: "Course is updated",
          payload: updateObject,
        });
      })
      .catch((err) => {
        response.status(500).json({
          code: 1,
          success: false,
          message: "Server error. Please try again.",
        });
      });
  }
  addFavorite(request, response, next) {
    const id = request.params.productId;
    const updateObject = {
      favorite: true,
    };
    Products.updateOne({ _id: id }, { $set: updateObject })
      .exec()
      .then(() => {
        console.log(updateObject);
        response.status(200).json({
          code: 0,
          message: "Course is updated",
          payload: updateObject,
        });
      })
      .catch((err) => {
        response.status(500).json({
          code: 1,
          success: false,
          message: "Server error. Please try again.",
        });
      });
  }

  getTodayDeal(request, response) {
    Products.findOne({ deal: true }, function (err, data) {
      if (err) {
        response.json({
          code: 1,
          message: 'error'
        });
      } else {
        response.json({
          code: 0,
          message: 'success',
          payload: [data]
        });
      }
    })
  }
}
module.exports = new SitesControllers();
