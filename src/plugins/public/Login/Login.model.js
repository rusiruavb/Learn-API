const { students } = require("../../../lib/db");
const User = require("../../core/student/User.model");
const Teacher = require("../../core/teacher/Teacher.model");

module.exports = (sequelize, Sequelize) => {
  const Login = sequelize.define("Logins", {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    date: {
      type: Sequelize.DATE,
      allowNull: false
    },
    userid: {
      type: Sequelize.STRING(11),
      allowNull: false
    },
    usercode: {
      type: Sequelize.STRING(13),
      allowNull: false,
    }
  });

  return Login;
}