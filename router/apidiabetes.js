// host + /api/apidiabetes
const {Router}=require('express')
const { findApiDiabetesFecha, findApiDiabetesById, CreateIngresoApi } = require('../controller/DiabetesController')
const router=Router()

router.get('/',findApiDiabetesFecha)
        .get('/:id',findApiDiabetesById)
        .post('/create',CreateIngresoApi)

module.exports=router