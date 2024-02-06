// host + /api/auth
const {Router}=require('express')
const { loginUsuario } = require('../controller/authController')

const router=Router()

router.post('/login',loginUsuario)
    .get('/ver',(req,res)=>{
        return res.status(400).json({
            ok:false,
            msg:"usuario y/o contraseña chamrae."
        })
    })

module.exports=router