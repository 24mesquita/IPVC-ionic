
import Sequelize from "sequelize";

const dbInstance = new Sequelize({
  host: "localhost",
  port: 3000,
  username: "myUsername",
  password: "MySecretPassword",
  database: "db_ionic",
  dialect: "mysql",
});

export { dbInstance };
