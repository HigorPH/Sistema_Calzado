const express = require ('express');
const {CreateZapatilla,getAllZapatilla,getZapatillaByName,deleteZapatilla,updateZapatilla,getAll} = require('../Controllers/ZapatillasController');

const router = express.Router()

//CREAR UNA ZAPATILLA NUEVA
router.post('/', CreateZapatilla);

//OBTENER TODAS LAS ZAPATILLAS
router.get('/', getAllZapatilla);

//OBTENER ZAPATILLA POR NOMBRE
router.get('/nombre/:nombre', getZapatillaByName);

//ELIMINAR ZAPATILLA POR ID
router.delete('/:id', deleteZapatilla);

//ACTUALIZAR ZAPATILLA POR ID
router.put('/:id', updateZapatilla);

//QUE ME TRAIGA ZAPATILLAS POR NOMBRE Y EL ID DE CATEGORIA
router.get('/zapatilla/zapatillas',getAll)

module.exports = router;