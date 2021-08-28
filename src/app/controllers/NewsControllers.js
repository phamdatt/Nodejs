class NewsControllers {
    index(request, response) {
        response.render('news');
    }
    show(request, response) {
        response.render('news-detail');
    }
}
module.exports = new NewsControllers;