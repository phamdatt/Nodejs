class SitesControllers {
    index(request, response) {
        response.render('home');
    }
}
module.exports = new SitesControllers;