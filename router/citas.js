// host + /api/citas
const {Router}=require('express')
const { findIdserviciosxcita } = require('../controller/CitasController')
const router=Router()


router.get("/findIdserviciosxcita/:fecha",findIdserviciosxcita)
      
module.exports = router 