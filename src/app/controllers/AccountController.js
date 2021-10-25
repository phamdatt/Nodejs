const Account = require('../model/Account')
class AccounController {
    index(request, response) {

        Account.find({
            userName: 'Pham Tien Dat'
        }).populate('cardId')
            .then((resp) => {
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
module.exports = new AccounController;