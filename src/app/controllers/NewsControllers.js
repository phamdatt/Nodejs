class NewsControllers {
    index(request, response) {
        response.render('news');
    }
}
module.exports = new NewsControllers;