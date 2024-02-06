// host + /api/servicios
const {Router}=require('express')
const { findServIdNomAll, findServiciosPorFechas} = require('../controller/ServicioController')


const router=Router()

router.get("/",findServIdNomAll)
        .get("/findServiciosPorFechas/:id",findServiciosPorFechas)
        

module.exports = router 