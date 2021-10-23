const newsRouter = require('./news')
const sitesRouter = require('./sites')
const bannerRouter = require('./banner')
const categoryRouter = require('./category')
function route(app) {
    app.use('/', sitesRouter);
    app.use('/search', newsRouter);
    app.use('/banner', bannerRouter)
    app.use('/category', categoryRouter)
}
module.exports = route