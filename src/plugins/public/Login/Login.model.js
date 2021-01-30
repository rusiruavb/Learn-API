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
    token: {
      type: Sequelize.STRING(2500),
      allowNull: false
    }
  });

  return Login;
}