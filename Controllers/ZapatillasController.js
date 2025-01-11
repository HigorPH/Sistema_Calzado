const Zapatilla = require('../models/Zapatillas');
const {Op} = require('sequelize');

// Crear un nuevo usuario
const CreateZapatilla = async (req, res) => {
    try {
        const zapati = await Zapatilla.create(req.body);
        res.status(201).json(zapati);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener todas las zapatillas
const getAllZapatilla = async (req, res) => {
    try {
        const zapatis = await Zapatilla.findAll();
        res.status(200).json(zapatis);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Obtener una Zapatilla por nombre
const getZapatillaByName = async (req, res) => {
    try {
        const zapati = await Zapatilla.findAll ({
            where: {
                nombre: {
                    [Op.iLike]: `%${req.params.nombre}%`  // Busca coincidencias parciales
                }
            },
            attributes: ['nombre', 'descripcion', 'precio', 'stock','CategoryId', 'ClienteId']  // Ajusta los atributos que quieres devolver
        });

        if (zapati) {
            res.status(200).json(zapati);
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Eliminar una Zapatilla por ID
const deleteZapatilla = async (req, res) => {
    try {
        const zapati = await Zapatilla.findByPk(req.params.id);
        if (zapati) {
            await Zapatilla.destroy();
            res.status(204).send(); 
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateZapatilla = async (req, res) => {
    try {
        const zapati = await Zapatilla.findByPk(req.params.id);
        if (zapati) {
            await zapati.update(req.body);
            res.status(200).json(zapati);
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAll = async (req, res) => {
    try {
        // Obtener parámetros de consulta
        const { id, nombre, CategoryId } = req.query; // Usar req.query para parámetros de consulta
  
        // Construir el objeto de consulta dinámico
        const whereConditions = {};
  
        // Filtro por ID, si se proporciona
        if (id) {
            whereConditions.id = {
                [Op.iLike]: `%${id}%`  // Busca coincidencias parciales
            };
        }

         // Filtro por título, si se proporciona
        if (nombre) {
        whereConditions.nombre = {
            [Op.iLike]: `%${nombre}%`
        };
    }

        // Filtro por ID de categoría, si se proporciona
        if (CategoryId) {
            whereConditions.CategoryId = parseInt(CategoryId, 10); // Para IDs numéricos
        }
  
        // Consultar la base de datos con las condiciones construidas
        const zapati = await Zapatilla.findAll({
            where: whereConditions,
            attributes: ['nombre', 'descripcion', 'precio', 'stock', 'CategoryId']  // Ajusta los atributos que quieres devolver
        });
  
        // Verificar si se encontraron resultados
        if (zapati.length > 0) {
            res.status(200).json(zapati);
        } else {
            res.status(404).json({ message: 'No se encontraron tareas' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  };





module.exports = {CreateZapatilla, getAllZapatilla,getZapatillaByName,deleteZapatilla,updateZapatilla,getAll};