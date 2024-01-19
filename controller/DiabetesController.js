const {response}=require('express');
const moment = require('moment');
const SIGHBD = require('../sequilize/SIGH');
const { QueryTypes } = require('sequelize');
const api_diabetes = require('../modelo/apiDiabetes');
const enviosdiabetes = require('../modelo/enviosdiabetes');

const findApiDiabetesFecha=async(req, res=response)=>{    
    try {
        const data = await SIGHBD.query(`select top 20 a.IdAtencion,'00048' as eess, p.NroHistoriaClinica as histcli,
        p.ApellidoPaterno as apepat, p.ApellidoMaterno as apemat, 
        CONCAT(p.PrimerNombre, ' ', p.SegundoNombre) AS nombres,
        CAST(p.IdTipoSexo AS VARCHAR) as sexo,FORMAT(p.FechaNacimiento, 'yyyy-MM-dd') as fecha_nac,
        CAST(a.Edad AS VARCHAR) as edad, '7'  as instruccion,
        CAST(p.IdDocIdentidad AS varchar) as tipodoc,p.NroDocumento as dni,
        CAST (p.IdDistritoDomicilio AS varchar) as ubigeo_res,
        p.DireccionDomicilio as direccion, p.Telefono as celular,
        FORMAT(a.FechaIngreso, 'yyyy-MM-dd') as fecha_cap,'1' as tcaso,
        '1' as tdiabetes, ace.TriajePeso as peso,TriajeTalla as talla, 
        CAST( ROUND(CAST(ace.TriajePeso AS FLOAT) / POWER(CAST(ace.TriajeTalla AS FLOAT) / 100, 2),1) AS varchar) AS imc, 
        PARSENAME(REPLACE(ace.TriajePresion, '/', '.'), 2) AS sistolica, 
        PARSENAME(REPLACE(ace.TriajePresion, '/', '.'), 1) AS diastolica,
        '102' as glicemia,'2' as evaluado,
        ed.fechaenvio,
		ed.codigo_respuesta
        from sigh.dbo.Atenciones a 
        LEFT OUTER JOIN sigh.dbo.Servicios s ON a.IdServicioIngreso = s.IdServicio         
        LEFT OUTER JOIN sigh.dbo.Pacientes  p ON p.IdPaciente = a.IdPaciente  
        LEFT OUTER JOIN sigh.dbo.AtencionesDatosAdicionales ada on ada.idAtencion=a.IdCuentaAtencion 
        left outer join sigh.dbo.enviosdiabetes ed on ed.cuentaid=a.IdCuentaAtencion
        left join SIGH_EXTERNA.dbo.atencionesCE ace on ace.idAtencion=a.IdAtencion 
        where ace.TriajePeso>'1.00'
		order by a.IdAtencion desc`, 
        { 
            model: api_diabetes,
            mapToModel: true 
        });    
        res.status(200).json(  data  );
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}



const findApiDiabetesById=async(req, res=response)=>{    
    try {
        const data = await SIGHBD.query(`select top 20 a.IdAtencion,'00048' as eess, p.NroHistoriaClinica as histcli,
         p.ApellidoPaterno as apepat, p.ApellidoMaterno as apemat, 
         CONCAT(p.PrimerNombre, ' ', p.SegundoNombre) AS nombres,
         CAST(p.IdTipoSexo AS VARCHAR) as sexo,FORMAT(p.FechaNacimiento, 'yyyy-MM-dd') as fecha_nac,
         CAST(a.Edad AS VARCHAR) as edad, '7'  as instruccion,
         CAST(p.IdDocIdentidad AS varchar) as tipodoc,p.NroDocumento as dni,
         CAST (p.IdDistritoDomicilio AS varchar) as ubigeo_res,
         p.DireccionDomicilio as direccion, p.Telefono as celular,
         FORMAT(a.FechaIngreso, 'yyyy-MM-dd') as fecha_cap,'1' as tcaso,
         '1' as tdiabetes, ace.TriajePeso as peso,TriajeTalla as talla, 
         CAST( ROUND(CAST(ace.TriajePeso AS FLOAT) / POWER(CAST(ace.TriajeTalla AS FLOAT) / 100, 2),1) AS varchar) AS imc, 
         PARSENAME(REPLACE(ace.TriajePresion, '/', '.'), 2) AS sistolica, 
         PARSENAME(REPLACE(ace.TriajePresion, '/', '.'), 1) AS diastolica,
         '102' as glicemia,'2' as evaluado from sigh.dbo.Atenciones a 
         LEFT OUTER JOIN sigh.dbo.Servicios s ON a.IdServicioIngreso = s.IdServicio         
         LEFT OUTER JOIN sigh.dbo.Pacientes  p ON p.IdPaciente = a.IdPaciente  
         LEFT OUTER JOIN sigh.dbo.AtencionesDatosAdicionales ada on ada.idAtencion=a.IdCuentaAtencion 
         left join SIGH_EXTERNA.dbo.atencionesCE ace on ace.idAtencion=a.IdAtencion where IdCuentaAtencion=:id`, 
        { 
            replacements: { id: req.params.id },
            model: api_diabetes,
            mapToModel: true 
        });    
        res.status(200).json(  data  );
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}



const CreateIngresoApi=async(req,res=response)=>{
    
    const { 
        estado,
        cuentaid,
        codigo_respuesta           
    } = req.body;
   
    
    try {     
        const {estado, cuentaid,codigo_respuesta} = req.body;
        const fechaActual = moment(new Date()).format('YYYY-MM-DD HH:mm:ss.SSS'); 
        const [user, created] = await enviosdiabetes.findOrCreate({
            where: { cuentaid: cuentaid },
            defaults: {
                cuentaid,
                estado,
                codigo_respuesta,
                fechaenvio: fechaActual,
                fechaactualizacion:fechaActual
            },
        });
        if (!created) {
            return res.status(400).json({ success: false, msj: "El numero de cuenta ya fue ingresado." })
        }
        res.status(200).send({ success: true, message: "registro correcto" });
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

module.exports={
    findApiDiabetesFecha,
    findApiDiabetesById,
    CreateIngresoApi
}