import express from "express";
const controller = require("./Teacher.controller");
let router = express.Router();

module.exports = function(app) {
  router.post("/create", controller.create);
  app.use("/teacher", router);
}