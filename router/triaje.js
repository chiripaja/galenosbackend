// host + /api/triaje
const {Router}=require('express')
const { findTriajeAllFecha,findTriajeFechaServicio  } = require('../controller/TriajeController')

const router=Router()

router.get("/",findTriajeAllFecha)
      .get("/:fecha",findTriajeFechaServicio)
module.exports = router 