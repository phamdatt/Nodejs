const newsRouter = require('./news')
const sitesRouter = require('./sites')
function route(app) {
    app.use('/', sitesRouter);
    app.use('/search', newsRouter);
}
module.exports = route