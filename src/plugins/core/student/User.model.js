const { logins } = require("../../../lib/db");
const loginModel = require("../../public/Login/login.model");

module.exports = (sequelize, Sequelize) => {
  const Student = sequelize.define("Student", {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    studentid: {
      type: Sequelize.STRING(11),
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
    gender: {
      type: Sequelize.STRING(8),
      allowNull: false,
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
    address1: {
      type: Sequelize.STRING(200),
      allowNull: false,
    },
    address2: {
      type: Sequelize.STRING(200),
      allowNull: true,
    },
    city: {
      type: Sequelize.STRING(200),
      allowNull: true,
    },
    phonenumber: {
      type: Sequelize.STRING(10),
      allowNull: false,
    },
    role: {
      type: Sequelize.STRING(20),
      allowNull: false,
    }
  });

  return Student;
}