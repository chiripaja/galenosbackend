
const { Sequelize, DataTypes } = require('sequelize');
const SIGHBD = require('../sequilize/SIGH');

const api_diabetes = SIGHBD.define('api_diabetes', {
    IdAtencion: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    eess: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    histcli: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    apepat: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    apemat: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    nombres: {
        type: DataTypes.STRING
    },
    sexo: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    fecha_nac: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    edad: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    dni: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    ubigeo_res: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    celular: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    fecha_cap: {
        type: DataTypes.STRING,
    },
    tcaso: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    peso: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    talla: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    imc: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    sistolica: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    diastolica: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    evaluado: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    tdiabetes: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    gradoInstruccion: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    tipodoc: {
        type: DataTypes.NUMBER,
        allowNull: true,
        defaultValue: null
    }

}, {
    tableName: 'api_diabetes',
    timestamps: false,
});

module.exports = api_diabetes