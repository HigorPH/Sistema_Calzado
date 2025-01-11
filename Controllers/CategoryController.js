const Category = require('../models/Category')

const CreateCategory = async (req,res) => {
    try {
        const category = await Category.create(req.body);
        res.status(201).json(category );
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};

const getCategory = async (req,res) => {
    try {
        const category = await Category.findAll();
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

const deleteCategory = async (req, res) => {
    try {
        const category = await Category.findByPk(req.params.id);
        if (category) {
            await category.destroy();
            res.status(204).send()
        }else{
            res.status(404).json({message: "Categoria no encontrada"});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

module.exports = {CreateCategory, getCategory,deleteCategory};