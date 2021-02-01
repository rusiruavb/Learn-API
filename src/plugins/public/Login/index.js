import express from "express";
const router = express.Router();
const controller = require("./Login.controller");

module.exports = function(app) {
  router.post("/studentlogin", controller.studentlogin);
  app.use("/login", router);
}