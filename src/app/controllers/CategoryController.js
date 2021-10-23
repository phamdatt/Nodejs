const Category = require('../model/Category')
class CategoryController {
    getCategory(request, response, next) {
        Category.find({}).then((resp) => {
            response.json({
                code: 0,
                payload: resp,
            })
        }).catch((next) => {
            response.json({
                code: 1,
                payload: "sai",
            })
        })
    }

}
module.exports = new CategoryController;