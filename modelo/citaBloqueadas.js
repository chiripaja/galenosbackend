
const {  DataTypes } = require('sequelize');
const SIGHBD = require('../sequilize/SIGH');

const CitasBloqueadas = SIGHBD.define('CitasBloqueadas', {
    idCitaBloqueada: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    IdUsuario: {
        type: DataTypes.STRING
    },
    Fecha:{
        type: DataTypes.STRING
    },
    HoraInicio:{
        type: DataTypes.STRING
    },
    HoraFin:{
        type: DataTypes.STRING
    },
    FechaBloqueo:{
        type: DataTypes.STRING
    },
    HoraBloqueo:{
        type: DataTypes.STRING
    },
    IdMedico:{
        type: DataTypes.STRING
    }

}, {
    tableName: 'CitasBloqueadas',
    timestamps: false
});

module.exports = CitasBloqueadas