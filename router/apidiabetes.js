// host + /api/apidiabetes
const {Router}=require('express')
const { findApiDiabetesFecha, findApiDiabetesById, CreateIngresoApi,findApiDiabetesFechaPrueba } = require('../controller/DiabetesController')
const router=Router()

router.get('/',findApiDiabetesFecha)
        .get('/prueba',findApiDiabetesFechaPrueba)
        .get('/:id',findApiDiabetesById)
        .post('/create',CreateIngresoApi)

module.exports=router