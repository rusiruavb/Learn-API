export default {
  development: {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "RavB1998",
    DB: "learndb",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },
  production: {
    HOST: "sequelize-server.mysql.database.azure.com",
    USER: "rusiru98@sequelize-server",
    PASSWORD: "RavB1998",
    DB: "sequelizedb",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
}
