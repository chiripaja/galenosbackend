const {response}=require('express');
const { QueryTypes } = require('sequelize');
const SIGHEXTERNA = require('../sequilize/SIGHEXTERNA.JS');


const findTriajeAllFecha=async(req, res=response)=>{
    try {
        const empleado = await SIGHEXTERNA.query("SELECT dbo.atencionesCE.idAtencion, sigh.dbo.Atenciones.IdCuentaAtencion, sigh.dbo.Pacientes.NroHistoriaClinica, sigh.dbo.Pacientes.ApellidoPaterno,sigh.dbo.Pacientes.ApellidoMaterno, sigh.dbo.Pacientes.PrimerNombre, dbo.atencionesCE.TriajeFecha, sigh.dbo.Servicios.Nombre AS Consultorio, sigh.dbo.Atenciones.FechaIngreso AS FechaCita,e.Usuario FROM sigh.dbo.Atenciones LEFT OUTER JOIN sigh.dbo.Servicios ON sigh.dbo.Atenciones.IdServicioIngreso = sigh.dbo.Servicios.IdServicio LEFT OUTER JOIN sigh.dbo.Pacientes ON sigh.dbo.Atenciones.IdPaciente = sigh.dbo.Pacientes.IdPaciente RIGHT OUTER JOIN dbo.atencionesCE ON dbo.atencionesCE.idAtencion = sigh.dbo.Atenciones.IdAtencion INNER JOIN SIGH.dbo.empleados e on e.idempleado=dbo.atencionesCE.TriajeIdUsuario where CONVERT(DATE,TriajeFecha)='2023-12-29' order by  dbo.atencionesCE.TriajeFecha DESC", { type: QueryTypes.SELECT });    
        res.status(200).json(empleado)
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const findTriajeFechaServicio=async(req,res=response)=>{
    try {
        const data=await SIGHEXTERNA.query("SELECT dbo.atencionesCE.idAtencion, sigh.dbo.Atenciones.IdCuentaAtencion, sigh.dbo.Pacientes.NroHistoriaClinica, sigh.dbo.Pacientes.ApellidoPaterno,sigh.dbo.Pacientes.ApellidoMaterno, sigh.dbo.Pacientes.PrimerNombre, dbo.atencionesCE.TriajeFecha, sigh.dbo.Servicios.Nombre AS Consultorio, sigh.dbo.Atenciones.FechaIngreso AS FechaCita,e.Usuario FROM sigh.dbo.Atenciones LEFT OUTER JOIN sigh.dbo.Servicios ON sigh.dbo.Atenciones.IdServicioIngreso = sigh.dbo.Servicios.IdServicio LEFT OUTER JOIN sigh.dbo.Pacientes ON sigh.dbo.Atenciones.IdPaciente = sigh.dbo.Pacientes.IdPaciente RIGHT OUTER JOIN dbo.atencionesCE ON dbo.atencionesCE.idAtencion = sigh.dbo.Atenciones.IdAtencion INNER JOIN SIGH.dbo.empleados e on e.idempleado=dbo.atencionesCE.TriajeIdUsuario where CONVERT(DATE,TriajeFecha)=:fecha order by  dbo.atencionesCE.TriajeFecha DESC", 
        { 
            replacements: { fecha: req.params.fecha },
            type: QueryTypes.SELECT             
        });    
        res.status(200).json(data)
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

module.exports={
    findTriajeAllFecha,
    findTriajeFechaServicio
}

