let express = require("express");
let app = express();
let router = require("./routes/index");
let bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", router);

module.exports = app;
