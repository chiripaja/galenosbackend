const { Sequelize, DataTypes } = require('sequelize');
const SIGHBD = require('../sequilize/SIGH');

const enviosdiabetes = SIGHBD.define('enviosdiabetes', {
    cuentaid:{
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.STRING
    },
    codigo_respuesta:{
        type: DataTypes.STRING,
    },
    fechaenvio: {
        type: DataTypes.STRING,
    },
    fechaactualizacion: {
        type: DataTypes.STRING,
    }
}, {
    tableName: 'enviosdiabetes',
    timestamps: false
});

module.exports = enviosdiabetes