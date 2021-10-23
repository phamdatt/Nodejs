const Banner = require('../model/Banner')
class BannerController {
    getBanner(request, response, next) {
        Banner.find({}).then((resp) => {
            response.json({
                code: 0,
                payload: resp
            })
        }).catch(next);
    }
}
module.exports = new BannerController;