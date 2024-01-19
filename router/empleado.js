// host + /api/empleado
const {Router}=require('express')
const { findAll, auth } = require('../controller/EmpleadoController')
const router=Router()

router.get("/",findAll)
      .post("/auth",auth)
      

module.exports = router 