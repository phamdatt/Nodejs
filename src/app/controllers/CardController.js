const Cards = require("../model/Card");
const Products = require("../model/Products");
class CardController {
  index(request, response) {
    response.render("add_to_card");
  }
  addToCart(req, res) {
    const quantity = req.body.quantity ?? 1;
    const owner = req.body.owner;

    Products.findById({ _id: req.body.productId }, function (err, foundProduct) {
      if (err) {
        console.log(err);
      }
      let product = {
        owner: '',
        totalPrice: 0,
        items: '',
        quantity: 0,
      };
      product = {
        owner: owner,
        totalPrice: quantity * foundProduct.price,
        items: req.body.productId,
        quantity: quantity,
      };
      Cards.findOne({ items: req.body.productId }, function (err, sucess) {
        if (sucess) {
          Cards.updateMany({
            totalPrice: sucess.totalPrice + quantity * foundProduct.price,
            quantity: sucess.quantity + quantity
          }, function (err, data) {
            if (err) {
              res.json({
                code: 1,
                message: 'error'
              })
            } else {
              res.json({
                code: 0,
                message: 'success',
                payload: data,
              })
            }
          })
        } else {
          Cards.create(product, function (err, data) {
            if (err) {
              console.log(err)
              res.json({
                code: 1,
                message: err,
              });
            } else {
              res.json({
                code: 1,
                message: "success",
                payload: data,
              });
            }
          })
        }
      })

    })
  };

  getCart(req, res, next) {
    Cards.find({})
      .populate("items")
      .then((resp) => {
        res.json({
          payload: resp,
        });
      })
      .catch(next);
  }

}
module.exports = new CardController();
