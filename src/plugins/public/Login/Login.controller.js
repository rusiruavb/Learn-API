import db from "../../../lib/db";
const Student = db.students;
const Teacher = db.teachers;
const Login = db.logins;
const Op = db.Sequelize.Op;

export function studentlogin(req, res) {
  const {email, password} = req.body;

  Student.findOne({where: {email: email}})
    .then((response) => {
      if (response == null)  {
        req.handleResponse.notFound(response);
      } else {
        if (response.dataValues.password === password) {
          let date = new Date();
          let userid = response.dataValues.id;
          let usercode = response.dataValues.studentid;
          const data = {date, userid, usercode}
          Login.create(data)
            .then(() => {console.log("user logged")}) // need to fix this reponse handling issue
            // when I used handleResponse middleware to handle reponse, it not work as expected.
            // for instance, when use login to the system, the response handler shold give reponse
            // back to the frontend. But instead it will give an errro in the console.
            // and the frontend always waiting

            // this is test before merging
        } else {
          res.status(400).json({status: 400, message: "Passowrd is not matched"})
        }
      }
    })
}

export function teacherlogin(req, res) {

}