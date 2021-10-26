const Cards = require('../model/Card')
const Products = require('../model/Products')
class CardController {
    index(request, response) {
        Cards.find({
        }).then((resp) => {
            response.json({
                code: 0,
                message: "success",
                payload: resp,
            })
        }).catch((error) => {
            response.json({
                code: 1,
                message: error,
                payload: [],
            })
        })
    }
    addToCart(request, response, next) {
        const quantity = req.body;
        Products.findById(request.params.productId).then((resp) => {
            const product = {
                item: foundProduct._id,
                qty: quantity,
                price: foundProduct.price * quantity,
            };
            Cards.userId = '11';
            Cards.items.push(product);
            Cards.save();
            response.json({
                code: 0,
                message: 'success',
                payload: [resp],
            })
        }).catch(next)
    }

    updateCart(request, response) {

    }
    removeItemCart(request, response) {

    }
}
module.exports = new CardController;