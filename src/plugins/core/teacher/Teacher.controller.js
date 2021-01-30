import db from "../../../lib/db";
import handleResponse from "../../../lib/response.handler";
const Teacher = db.teachers;
const Op = db.Sequelize.Op;

export function create(req, res, next) {
  const {firstname, lastname, email, password, phonenumber1, phonenumber2, website, role} = req.body;
  // create teacher id
  const year = new Date().getFullYear();
  const L1 = firstname.substr(0, 1); 
  const L2 = lastname.substr(0, 1); 
  const teacherid = L1+L2+year;
  const teacher = {teacherid, firstname, lastname, email, password, phonenumber1, phonenumber2, website, role};

  Teacher.findOne({where: {email: email}})
    .then(() => {throw new Error("Teacher already exists")})

  Teacher.create(teacher)
    .then(handleResponse.respond(res))
    .catch(handleResponse.handleError(res, "Error with create teacher"))
}

export function get(req, res) {

}

export function update(req, res) {
  const {teacherid, firstname, lastname, email, password, phonenumber1, phonenumber2, website, role} = req.body;
  const teacher = {teacherid, firstname, lastname, email, password, phonenumber1, phonenumber2, website, role};

  Teacher.findOne({where: {teacherid: teacherid}})
    .then(() => {
      Teacher.update(teacher, {where: {teacherid: teacherid}})
        .then(handleResponse.respond(res))
        .catch(handleResponse.handleError(res, "Error with update user"))
    })
}