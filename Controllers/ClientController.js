const Clientes = require('../models/Clientes')


const createCliente = async(req,res) => {
    try {
        const cliente = await Clientes.create(req.body)
        res.status(201).json(cliente);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

const getAllCliente = async(req,res) => {
    try {
        const cliente = await Clientes.findAll();
        res.status(200).json(cliente);
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
};

const deleteCliente = async(req,res) => {
    try {
        const cliente = await Clientes.findByPk(req.params.id);
        if(cliente){
            await user.destroy();
            res.status(204).send();
        }else {
            res.status(404).json({message: 'Usuario no encontrado'});
        }

    } catch (error) {
        res.status(500).json({message : error.message});
    }
};

const updateCliente = async (req, res) => {
    try {
        const cliente = await Clientes.findByPk(req.params.id);
        if (cliente) {
            await cliente.update(req.body);
            res.status(200).json(cliente);

        }else{
            res.status(404).json({message: 'Usuario no encontrado'})
        }
    } catch (error) {
        res.status(500).json({message: error.message});
        
    }
};


const GetClientebyId = async (req,res) => {
    try {
        const cliente = await Clientes.findByPk(req.params.id);
        if (cliente) {
            res.status(200).json(cliente);
        }else{
            res.status(400).json({ message: 'Cliente no encontrado'});
        }
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};

module.exports = {createCliente, getAllCliente, deleteCliente, updateCliente, GetClientebyId}