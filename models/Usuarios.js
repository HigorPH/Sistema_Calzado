const {DataTypes} = require ('sequelize')
const sequelize = require('../db')

const Usuarios = sequelize.define('Usuarios',{
    nombre: {
        type : DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING
    },
    dni: {
        type: DataTypes.INTEGER(8,2),
        allowNull: false
    },
    roll: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Usuarios;