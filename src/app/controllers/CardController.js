const Cards = require("../model/Card");
const Products = require("../model/Products");
class CardController {
  index(request, response) {
    response.render("add_to_card");
  }
  getCart(request, response, next) {
    Cards.find({})
      .populate("itemList")
      .then((resp) => {
        response.json({
          payload: resp,
        });
      })
      .catch(next);
  }
  addToCart(request, response, next) {
    var cards = {
      userId: request.body.userId,
      itemList: request.body.productId,
      quantity: request.body.quantity,
      price: request.body.price,
    };
    Cards.create(cards, function (err, item) {
      if (err) {
        return next(err);
      } else {
        response.json({
          code: 0,
          message: "success",
          payload: item,
        });
      }
    });
  }

  updateCart(request, response) {}
  removeItemCart(request, response) {}
}
module.exports = new CardController();
