import express from "express";
const controller = require("./Teacher.controller");
let router = express.Router();

module.exports = function(app) {
  router.post("/create", controller.create);
  router.get("/get", controller.get);
  router.delete("/delete", controller.deleteTeacher);
  router.put("/update", controller.update);
  app.use("/teacher", router);
}