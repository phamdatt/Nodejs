const AllCategory = require('../model/AllCategory')
class AllCategoryController {
    getCategoryBySlug(request, response) {

        AllCategory.find({ slug: request.params.slug, parentId: request.params.parentId }).then((resp) => {
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
module.exports = new AllCategoryController;