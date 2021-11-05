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
  removeFavorite(request, response, next) {}
}
module.exports = new SitesControllers();
