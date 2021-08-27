const express = require('express') // su dung package express
const morgan = require('morgan') //su dung package morgan ->xem request , hoac dung de debug
const expressHandlebars = require('express-handlebars'); // su dung template
const path =require('path') //lay duong dan 
const app = express()
const port = 3000 // khoi tao port

//Router
//Logger
app.use(morgan('combined'))
//Template engine
app.engine('hbs', expressHandlebars({
    extname:'.hbs'
}));
app.set('view engine','hbs')
app.set('views', path.join(__dirname, 'resource/views')) // cau hinh duong dan cho views
app.get('/', (request, response) => {
    response.render('home'); // di den file home
})
app.get('/news', (request, response) => {
    response.render('news'); // di den file news
})


//IP :127.0.0.1 - localhost
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})