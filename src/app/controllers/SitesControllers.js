const Products = require('../model/Products');
class SitesControllers {
    index(request, response) {
        response.render('home');
        // response.json({
        //     name: 'test'
        // });
        // Products.find({}, function (err, products) {
        //     if (!err) {
        //         response.json(products);
        //     } else {
        //         response.status(400).json({
        //             error: 'Error',
        //         })
        //     }
        // });
    }
}
module.exports = new SitesControllers;