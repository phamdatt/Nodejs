const Products = require('../model/Products');

class SitesControllers {
    index(request, response) {
        response.render('login');
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
    home(request, response) {
        response.render('home');
    }

}
module.exports = new SitesControllers;