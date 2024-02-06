const {response}=require('express');
const { QueryTypes, Op } = require('sequelize');
const SIGHBD = require('../sequilize/SIGH');
const servicioDTO = require('../modelo/serviciosDTO');





const findServIdNomAll=async(req,res=response)=>{
    try {
        const data = await servicioDTO.findAll({
            attributes:['IdServicio','Nombre'],
            where: {
                IdTipoServicio: '1'
            },
            order: [['Nombre', 'ASC']] 
        })
        res.status(200).json(data)
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}


const findServiciosPorFechas=async(req,res)=>{
    
    const arregloNumeros = req.params.id.split(',').map(numero => parseInt(numero, 10));

    console.log(arregloNumeros)
    try {
        const data = await servicioDTO.findAll({
            attributes:['IdServicio','Nombre'],
            where: {
                IdServicio:{
                    [Op.in]:arregloNumeros
                }
            },
            order: [['Nombre', 'ASC']] 
        })
        res.status(200).json(data)
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

module.exports={
    findServIdNomAll,
    findServiciosPorFechas
}