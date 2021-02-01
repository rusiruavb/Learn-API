import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import db from "./lib/db";
import responseHandler from "./lib/response.handler";

let app = express();
const PORT = process.env.PORT || 8558;
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
  req.handleResponse = responseHandler;
  next();
});

require("./plugins/core/student/index")(app)
require("./plugins/core/teacher/index")(app)
require("./plugins/public/Login/index")(app)

db.sequelize.sync();

app.route("/").get((req, res) => {
  res.send("Welcome to Enterprise API");
});

app.listen(PORT, err => {
  if (err) return console.log(`Cannot connect to server PORT ${PORT}`);
  console.log(`Server is up and running PORT ${PORT}`)
})