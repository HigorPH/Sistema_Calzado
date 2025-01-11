const express = require('express')
const {createCliente,getAllCliente,deleteCliente,updateCliente, incrementZapatillas} = require('../Controllers/ClientController')

const router = express.Router();

//CREAR UN NUEVO USUARIO
router.post('/', createCliente);

//Obtener todos los usuarios
router.get('/', getAllCliente);

//Elimina un cliente por id
router.delete('/:id', deleteCliente);

//Actualiza el cliente por id
router.put('/:id', updateCliente);

module.exports = router;