import express from "express";
const controller = require("./User.controller");
let router = express.Router();

module.exports = function(app) {
  router.post("/create", controller.create);
  router.get("/get", controller.findOne);
  router.get("/getall", controller.findAll);
  router.put("/update/:id", controller.updateUser);
  router.delete("/delete/:id", controller.deleteUser);
  app.use("/user", router);
}