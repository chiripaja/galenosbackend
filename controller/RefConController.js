const {response}=require('express');
const moment = require('moment');
const SIGHBD = require('../sequilize/SIGH');
const { QueryTypes, json } = require('sequelize');
const CitasBloqueadas = require('../modelo/citaBloqueadas');


const findMedicoXServicio=async(req, res=response)=>{  
    try {
        const data = await SIGHBD.query(`SELECT distinct c.IdMedico,e.ApellidoPaterno,e.ApellidoMaterno,e.Nombres FROM Citas c
        inner join Medicos m on m.IdMedico=c.IdMedico
        inner join Empleados e on e.IdEmpleado=m.IdEmpleado
        WHERE Fecha=:fecha and IdServicio=:idservicio`,
        { 
            replacements: { 
                fecha: req.params.fecha,
                idservicio: req.params.idservicio,
            },
            type: QueryTypes.SELECT             
        });    
        res.status(200).json(data);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const findCitaBloqueadoxmedico=async(req,res)=>{
    try {
        const data = await SIGHBD.query(`SELECT * FROM CitasBloqueadas 
        WHERE Fecha=:fecha and IdMedico=:idmedico`,{ 
            replacements: { 
                fecha: req.params.fecha,
                idmedico: req.params.idmedico,
            },
            type: QueryTypes.SELECT             
        });    
        res.status(200).json(data);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const eliminarCitaBloqueada=async(req,res)=>{
    try {
       /**/ const data=CitasBloqueadas.destroy({
            where: {
                IdCitaBloqueada: req.params.id
            }
          })
          res.status(200).json(data);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

module.exports={
    findMedicoXServicio,
    findCitaBloqueadoxmedico,
    eliminarCitaBloqueada
}
