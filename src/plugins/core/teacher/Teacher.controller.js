import db from "../../../lib/db";
// import handleResponse from "../../../lib/response.handler";
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
    .then(req.handleResponse.handleError(res))

  Teacher.create(teacher)
    .then(req.handleResponse.respond(res))
    .catch(req.handleResponse.handleError(res))
}

export function get(req, res) {
  const {teacherpk} = req.body;
  Teacher.findByPk(teacherpk)
    .then(req.handleResponse.respond(res))
    .catch(req.handleResponse.handleError(res))
}

export function update(req, res) {
  const {teacherid, firstname, lastname, email, password, phonenumber1, phonenumber2, website, role} = req.body;
  const teacher = {teacherid, firstname, lastname, email, password, phonenumber1, phonenumber2, website, role};

  Teacher.findOne({where: {teacherid: teacherid}})
    .then(() => {
      Teacher.update(teacher, {where: {teacherid: teacherid}})
        .then(req.handleResponse.respond(res))
        .catch(req.handleResponse.handleError(res, "Error with update user"))
    })
}

export function deleteTeacher(req, res) {
  const {teacherpk} = req.body;

  Teacher.destroy({where: {id: teacherpk}})
    .then(req.handleResponse.respond(res))
    .catch(req.handleResponse.handleError(res))
}