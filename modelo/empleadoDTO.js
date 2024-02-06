const { Sequelize, DataTypes } = require('sequelize');
const SIGHBD = require('../sequilize/SIGH');


const empleadoDTO = SIGHBD.define('Empleados', {
    IdEmpleado: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true,
    },
    Nombres: {
        type: DataTypes.STRING
    },
    ApellidoPaterno:{
        type: DataTypes.STRING
    },
    Usuario:{
        type: DataTypes.STRING
    },
    ClaveVWeb:{
        type: DataTypes.STRING
    }

}, {
    tableName: 'Empleados',
    timestamps: false
});

module.exports = empleadoDTO 