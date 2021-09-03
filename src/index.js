const express = require('express') // su dung package express
const socketio = require('socket.io')
const morgan = require('morgan') //su dung package morgan ->xem request , hoac dung de debug
const expressHandlebars = require('express-handlebars'); // su dung template
const path = require('path') //lay duong dan
const http = require('http')
const app = express()
const port = 3000 // khoi tao port
const db = require('./config/db/index')
const server = http.createServer(app);
const io = socketio(server);
io.on('connection', socket => {
    console.log('new web sockesssssssssst');
    // lang nghe khi nguoi dung ket noi
    socket.broadcast.emit('message', 'a user join room');
    //lang nghe khi nguoi dung ngat ket noi
    socket.on('disconnect', () => {
        io.emit('message', 'user has left the room')
    })
    //listen for chatMessage
    socket.on('chatMessage', (msg) => {
        io.emit('message', msg);
    })

})



//Connect db
// db.connect();
const route = require('../src/routes/index')
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resource/views')) // cau hinh duong dan cho views
app.use(express.static(path.join(__dirname, 'public')));
//Router
//Logger
app.use(morgan('combined'))
//Template engine
app.engine('hbs', expressHandlebars({
    extname: '.hbs'
}));

// Route init
route(app)

//IP :127.0.0.1 - localhost
server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})