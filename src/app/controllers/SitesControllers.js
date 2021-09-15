const Products = require('../model/Products');
// const { multipleMongooseObject } = require('../../util/mongosee')
class SitesControllers {
    // index(request, response, next) {

    //     Products.find({}).then((products) => {
    //         response.render('home', {
    //             products: multipleMongooseObject(products)
    //         })
    //     }).catch(next);
    // }
    index(request, response, next) {

        Products.find({}).then((products) => {
            response.json({
                code: 0,
                payload: products
            })
        }).catch(next);
    }
}
module.exports = new SitesControllers;