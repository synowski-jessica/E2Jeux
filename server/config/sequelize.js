// sequelize.js
require("dotenv").config();

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
  }
);

sequelize
  .authenticate()
  .then(() => console.log("La connexion a été établie avec succès."))
  .catch((err) =>
    console.error("La connexion ne s'est pas faite à la base de données", err)
  );

module.exports = sequelize;
