// host + /api/atencionesce
const {Router}=require('express')
const { findCExFecha } = require('../controller/AtencionesController')
const router=Router()

router.get('/',findCExFecha)

module.exports=router