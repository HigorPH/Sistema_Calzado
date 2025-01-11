const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("Sistema_Calzado", "postgres", "159753", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;

// Probar conexión
sequelize
  .authenticate()
  .then(() => console.log("Conexión a la base de datos exitosa"))
  .catch((err) => console.error("No se pudo conectar:", err));
