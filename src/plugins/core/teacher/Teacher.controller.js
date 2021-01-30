import db from "../../../lib/db";
import handleResponse from "../../../lib/response.handler";
const Teacher = db.teachers;
const Op = db.Sequelize.Op;

export function create(req, res) {
  const {firstname, lastname, email, password, phonenumber1, phonenumber2, website} = req.body;
  // create teacher id
  
}