import Sequelize from "sequelize";
import dbConfig from "../config/db.config";

const sequelize = new Sequelize(dbConfig.development.DB, dbConfig.development.USER, dbConfig.development.PASSWORD, { 
  host: dbConfig.development.HOST, 
  dialect: dbConfig.development.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.development.pool.max,
    min: dbConfig.development.pool.min,
    acquire: dbConfig.development.pool.acquire,
    idle: dbConfig.development.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.students = require("../plugins/core/student/User.model")(sequelize, Sequelize);
db.teachers = require("../plugins/core/teacher/Teacher.model")(sequelize, Sequelize);
db.logins = require("../plugins/public/Login/Login.model")(sequelize, Sequelize);

module.exports = db;