const User = require ('../models/Usuarios');


//CREAR NUEVO USUARIO

const CreatUser = async (req,res) =>{
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
};

//OBTENER TODOS LOS USUARIOS

const GetUser = async (req,res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

// OBTEN USUARIO POR ID

const GetUserById = async (req,res) => {
    try {
        const users = await User.findByPk(req.params.id);
        if (users) {
            res.status(200).json(user);
        }else{
            res.status(400).json({ message: 'Usuario no encontrado'});
        }
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};


//ELIMINAR USUARIO

const deleteUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            await user.destroy();
            res.status(204).send(); 
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



module.exports = {CreatUser, GetUser,GetUserById,deleteUser}