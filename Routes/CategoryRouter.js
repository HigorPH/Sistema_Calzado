const express = require('express');
const { CreateCategory, getCategory, deleteCategory } = require('../Controllers/CategoryController');

const router = express.Router();

// CREAR CATEGORÍA
router.post('/', CreateCategory);  // Se usa POST para crear una categoría

// OBTENER TODAS LAS CATEGORÍAS
router.get('/', getCategory);  // Se usa GET para obtener las categorías

// ELIMINAR UNA CATEGORÍA POR ID
router.delete('/:id', deleteCategory);  // Se usa DELETE para eliminar una categoría

module.exports = router;
