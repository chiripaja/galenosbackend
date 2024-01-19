const {response}=require('express');
const SIGHBD = require('../sequilize/SIGH');
const { QueryTypes } = require('sequelize');

const findCExFecha=async(req, res=response)=>{
    try {
        const data = await SIGHBD.query("select a.IdAtencion,p.ApellidoPaterno,p.ApellidoMaterno,p.PrimerNombre,p.NroHistoriaClinica,p.FechaNacimiento,a.FechaIngreso,a.HoraIngreso,a.HoraEgreso,s.Nombre,ace.TriajeEdad from Atenciones a inner join Pacientes p on a.IdPaciente=p.IdPaciente inner join Servicios s on s.IdServicio=a.IdServicioIngreso left join SIGH_EXTERNA..atencionesCE ace on ace.idAtencion=a.IdAtencion where  a.IdServicioIngreso=35 and CONVERT( date,FechaIngreso)='2023-12-28' and idEstadoAtencion=1", { type: QueryTypes.SELECT });    
        res.status(200).json(data)
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

module.exports={
    findCExFecha
}