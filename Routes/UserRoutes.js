const express = require('express')
const {CreatUser, GetUser,GetUserById,deleteUser} = require('../Controllers/UserController')

const router = express.Router()

//CREAR UN NUEVO USUARIO
router.post('/', CreatUser);

//OBTENER TODOS LOS USUARIOS
router.get('/', GetUser);

//OBTENER USUARIO POR ID
router.get('/:id', GetUserById);

//ELIMINAR UN USUARIO POR ID
router.delete('/:id',deleteUser);

module.exports = router;