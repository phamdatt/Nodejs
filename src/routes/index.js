const newsRouter = require('./news')
function route(app) {
    app.get('/', (request, response) => {
        response.render('home'); // di den file home
    })
    app.use('/news', newsRouter);
}
module.exports = route;