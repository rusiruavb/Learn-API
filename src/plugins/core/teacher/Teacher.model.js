const { logins } = require("../../../lib/db");
const loginModel = require("../../public/Login/login.model");

module.exports = (sequelize, Sequelize) => {
  const Teacher = sequelize.define("Teacher", {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    teacherid: {
      type: Sequelize.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    firstname: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    lastname: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
    email: {
      type: Sequelize.STRING(200),
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING(200),
      allowNull: false,
    },
    phonenumber1: {
      type: Sequelize.STRING(10),
      allowNull: false,
    },
    phonenumber2: {
      type: Sequelize.STRING(10),
      allowNull: false,
    },
    website: {
      type: Sequelize.STRING(120),
      allowNull: true,
    }
  });

  return Teacher;
}