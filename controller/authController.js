const {response}=require('express');
const { QueryTypes, Op } = require('sequelize');
const SIGHBD = require('../sequilize/SIGH');
const empleadoDTO = require('../modelo/empleadoDTO');
const jwt = require('jsonwebtoken')

const loginUsuario=async(req,res=response)=>{
  
    const { usuario, password } = req.body;
    try {
      const empleadoFind=await empleadoDTO.findOne({where:{Usuario:usuario,ClaveVWeb:password}})
      
      if(empleadoFind==null){
          return res.status(400).json({
              ok:false,
              msg:"usuario y/o contraseña incorrecta."
          })
      }     
      const token2 = jwt.sign({ id: empleadoFind.IdEmpleado, usuario: empleadoFind.Nombres+' '+empleadoFind.ApellidoPaterno }, '@ndrecitoTuT3rr0r', { expiresIn: '12h' })
      console.log(token2)
      res.status(200).json(token2);
    } catch (error) {
      res.status(500).json({
          ok:false,
          msg:'Porfavor hable con el administrador..'
      })
    }
}

module.exports={
    loginUsuario
}