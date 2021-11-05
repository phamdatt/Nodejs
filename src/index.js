const express = require("express"); // su dung package express
const morgan = require("morgan"); //su dung package morgan ->xem request , hoac dung de debug
const expressHandlebars = require("express-handlebars"); // su dung template
var methodOverride = require("method-override");
const path = require("path"); //lay duong dan'
const http = require("http");
const app = express();
const server = http.createServer(app);
const port = 3000; // khoi tao port
const db = require("./config/db/index");

//Connect db
db.connect();
const route = require("../src/routes/index");
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resource", "views")); // cau hinh duong dan cho views
app.use(express.static(path.join(__dirname, "public")));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

//Logger
app.use(morgan("combined"));
//Template engine
app.engine(
  "hbs",
  expressHandlebars({
    extname: ".hbs",
  })
);
app.use(methodOverride("_method"));

// Route init
route(app);

//IP :127.0.0.1 - localhost

server.listen(port, () => {
  console.log(`Example app listening at http://127.0.0.1:${port}`);
});
