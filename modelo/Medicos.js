
const {  DataTypes } = require('sequelize');
const sequelize = require('../sequilize/sequilize');

const Medicos = sequelize.define('Medicos', {
    idmedico: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    Colegiatura: {
        type: DataTypes.STRING
    },
    IdEmpleado:{
        type: DataTypes.STRING
    },
    LoteHIS:{
        type: DataTypes.STRING
    },
    idColegioHIS:{
        type: DataTypes.STRING
    },
    me:{
        type: DataTypes.STRING
    },
    egresado:{
        type: DataTypes.STRING
    }


}, {
    tableName: 'Medicos',
    timestamps: false
});

Medicos.associate=models=>{
    Medicos.hasMany(models.ci)
}

module.exports = Medicos