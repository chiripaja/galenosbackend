const {response}=require('express');
const { QueryTypes, Op } = require('sequelize');
const SIGHBD = require('../sequilize/SIGH');
const citasDTO = require('../modelo/citasDTO');

const findIdserviciosxcita=async(req,res=response)=>{
    try {
        const arrayid=[]
        const data = await citasDTO.findAll({
            attributes: [[SIGHBD.fn('DISTINCT', SIGHBD.col('IdServicio')), 'IdServicio']],
            where: {
                fecha: req.params.fecha
            }
        })
        const idServiciosArray= data.map(item =>{    
            arrayid.push(item.dataValues.IdServicio)
        } );
        res.status(200).json(arrayid)
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

module.exports={
    findIdserviciosxcita
}