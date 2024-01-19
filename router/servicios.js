// host + /api/servicios
const {Router}=require('express')
const { findServIdNomAll } = require('../controller/ServicioController')

const router=Router()

router.get("/",findServIdNomAll)

module.exports = router 