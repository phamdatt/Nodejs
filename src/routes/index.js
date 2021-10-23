const newsRouter = require('./news')
const sitesRouter = require('./sites')
const bannerRouter = require('./banner')
const categoryRouter = require('./category')
const allCategoryRouter = require('./allCategory')
function route(app) {
    app.use('/', sitesRouter);
    app.use('/search', newsRouter);
    app.use('/banner', bannerRouter);
    app.use('/category', categoryRouter);
    app.use('/search_category', allCategoryRouter)
}
module.exports = route