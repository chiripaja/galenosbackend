const { Sequelize, DataTypes } = require('sequelize');
const SIGHBD = require('../sequilize/SIGH');



const servicioDTO = SIGHBD.define('Servicios', {
    IdServicio: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true,
    },
    Nombre: {
        type: DataTypes.STRING
    },
    IdEspecialidad: {
        type: DataTypes.STRING
    },
    IdTipoServicio: {
        type: DataTypes.STRING
    },
    Codigo: {
        type: DataTypes.STRING
    },
    SVG: {
        type: DataTypes.STRING
    },
    IdProducto: {
        type: DataTypes.STRING
    },
    soloTipoSexo: {
        type: DataTypes.STRING
    },
    maximaEdad: {
        type: DataTypes.STRING
    },
    codigoServicioSEM: {
        type: DataTypes.STRING
    },
    ubicacionSEM: {
        type: DataTypes.STRING
    },
    codigoServicioHIS: {
        type: DataTypes.STRING
    },
    costoCeroCE: {
        type: DataTypes.STRING
    },
    MinimaEdad: {
        type: DataTypes.STRING
    },
    idEstado: {
        type: DataTypes.STRING
    },
    Triaje: {
        type: DataTypes.STRING
    },
    EsObservacionEmergencia: {
        type: DataTypes.STRING
    },
    UsaModuloNinoSano: {
        type: DataTypes.STRING
    },
    UsaModuloMaterno: {
        type: DataTypes.STRING
    },
    UsaGalenHos: {
        type: DataTypes.STRING
    },
    TipoEdad: {
        type: DataTypes.STRING
    },
    UsaFUA: {
        type: DataTypes.STRING
    },
    codigoServicioSuSalud: {
        type: DataTypes.STRING
    },
    codigoServicioFUA: {
        type: DataTypes.STRING
    },
    FuaTipoAnexo2015: {
        type: DataTypes.STRING
    },
    codigoServicioRenaes: {
        type: DataTypes.STRING
    },
    terapiaTipo: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'Servicios',
    timestamps: false
});

module.exports = servicioDTO