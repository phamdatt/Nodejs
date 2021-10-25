const Cards = require('../model/Card')
class CardController {
    index(request, response) {
        Cards.find({
            productId: '123',
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
}
module.exports = new CardController;