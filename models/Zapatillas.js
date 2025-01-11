const {DataTypes} = require ('sequelize')
const sequelize = require('../db');
const Category = require('./Category');
const Clientes = require('./Clientes');

const Zapatillas = sequelize.define('Zapatillas', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion : {
        type: DataTypes.STRING,
    },
    precio : {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
    },
    stock : {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
});

//DEFINIR RELACIONES

Zapatillas.belongsTo(Category)
Category.hasMany(Zapatillas)

Zapatillas.belongsTo(Clientes)
Clientes.hasMany(Zapatillas)

module.exports = Zapatillas