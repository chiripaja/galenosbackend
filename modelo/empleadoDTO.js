const { Sequelize, DataTypes } = require('sequelize');
const SIGHBD = require('../sequilize/SIGH');


const empleadoDTO = SIGHBD.define('Empleados', {
    IdEmpleado: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true,
    },
    Usuario: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'Empleados',
    timestamps: false
});

module.exports = empleadoDTO 