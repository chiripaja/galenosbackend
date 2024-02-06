
const {  DataTypes } = require('sequelize');
const SIGHBD = require('../sequilize/SIGH');

const citasDTO = SIGHBD.define('Citas', {
    idcitas: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    fecha: {
        type: DataTypes.STRING
    },
    horainicio:{
        type: DataTypes.STRING
    },
    horafin:{
        type: DataTypes.STRING
    },
    idpaciente:{
        type: DataTypes.NUMBER
    },
    idestadocita:{
        type: DataTypes.NUMBER
    },
    idmedico:{
        type: DataTypes.NUMBER
    },
    idespecialidad:{
        type: DataTypes.NUMBER
    },
    idprogramacion:{
        type: DataTypes.NUMBER
    },
    idproducto:{
        type: DataTypes.NUMBER
    },
    fechasolicitud: {
        type: DataTypes.DATE
    },
    horasolicitud: {
        type: DataTypes.STRING
    },
    escitaadicional:{
        type: DataTypes.NUMBER
    },
    fechaadicional:{
        type: DataTypes.STRING
    }


}, {
    tableName: 'citas',
    timestamps: false
});

module.exports = citasDTO