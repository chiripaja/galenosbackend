// host + /api/refcon
const {Router}=require('express')
const { findMedicoXServicio, findCitaBloqueadoxmedico, eliminarCitaBloqueada } = require('../controller/RefConController')



const router=Router()

router.get("/medicoxservicio/:fecha/:idservicio",findMedicoXServicio)
      .get("/citabloqueadaxmedico/:fecha/:idmedico",findCitaBloqueadoxmedico)
      .delete("/citasbloqueadas/:id",eliminarCitaBloqueada)
module.exports = router 