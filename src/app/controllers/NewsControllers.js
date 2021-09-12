class NewsControllers {
    index(request, response) {
        console.log(request.query.q)
        response.render('news');
    }
}
module.exports = new NewsControllers;
