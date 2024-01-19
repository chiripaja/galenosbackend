const {response}=require('express');
const SIGHBD = require('../sequilize/SIGH');
const { QueryTypes } = require('sequelize');
const empleadoDTO = require('../modelo/empleadoDTO');
const jwt = require('jsonwebtoken')
 
const findAll=async(req, res=response)=>{
    try {
        const empleado = await SIGHBD.query("select top 10 * from Empleados ", { type: QueryTypes.SELECT });    
        res.status(200).json(empleado)
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const auth = async (req, res) => {     
    try {
        const { Usuario } = req.body;
     
        const user = await empleadoDTO.findOne({ where: { Usuario: Usuario } })
        if (!user) {
            return res.status(401).json({ message: 'Credenciales incorrectas' });
        }
        const token = jwt.sign({ IdEmpleado: user.IdEmpleado, usuario: user.Usuario }, '@ndresRoblesOliveros', { expiresIn: '8h' })
        res.status(200).json(token)
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

module.exports={
    findAll,
    auth
}