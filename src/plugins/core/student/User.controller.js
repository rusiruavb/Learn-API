import db from "../../../lib/db";
import handleResponse from "../../../lib/response.handler";
const User = db.students;
const Op = db.Sequelize.Op;

export function create(req, res) {
  const { firstname, lastname, gender, email, password, address1, address2, city, phonenumber, role } = req.body;
  // generate student id
  const year = new Date().getFullYear();
  const number = phonenumber.substr(4, 9); 
  const gen = gender.substr(0,1);
  const studentid = year+gen+number;
  // create student object
  const user = { studentid, firstname, lastname, gender, email, password, address1, address2, city, phonenumber, role};
  User.findOne({ where: {email: email}})
    .then(handleResponse.handleError(res, "User already exists"));
  
  User.create(user)
    .then(handleResponse.respond(res))
    .catch(handleResponse.handleError(res, "Error with create user"))
}

export function findOne(req, res) {
  const { primaryKey } = req.body;
  User.findByPk(primaryKey)
    .then(handleResponse.respond(res))
    .catch(handleResponse.handleError(res, "Error with find user"))
}

export function findAll(req, res) {
  User.findAll()
    .then(handleResponse.respond(res))
    .catch(handleResponse.handleError(res, "Error with get all users"))
}

export function updateUser(req, res) {
  const id = req.params.id;
  const { studentid, firstname, lastname, gender, email, password, address1, address2, city, phonenumber } = req.body;
  const user = { studentid, firstname, lastname, gender, email, password, address1, address2, city, phonenumber};
  User.findOne({where: {email: email}})
    .then(() => {
      User.update(user, {where: {id: id}})
        .then(handleResponse.respond(res))
        .catch(handleResponse.handleError(res, "Error with update user"))
    })
}

export function deleteUser(req, res) {
  const id = req.params.id;
  User.destroy({where: {id: id}})
    .then(handleResponse.respond(res))
    .catch(handleResponse.handleError(res, "Error with delete user"))
}