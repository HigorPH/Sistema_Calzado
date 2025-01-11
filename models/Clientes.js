const { DataTypes } = require("sequelize");
const sequelize = require("../db"); // Asegúrate de que 'db' sea el archivo donde exportas la instancia de Sequelize

const Clientes = sequelize.define(
  "Clientes",
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dni: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    zapatillasCompradas: {
      type: DataTypes.INTEGER,
      defaultValue: 0 
 }
  }  
);

module.exports = Clientes;
