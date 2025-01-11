const express = require("express");
const bodyparser = require("body-parser");
const sequelize = require("./db");
const Usuarios = require("./models/Usuarios");
const Clientes = require("./models/Clientes");
const Zapatillas = require("./models/Zapatillas");
const Category = require("./models/Category");

const UserRoutes = require('./Routes/UserRoutes')
const ClienteRoutes = require('./Routes/ClienteRoutes')
const ZapatillasRoutes = require('./Routes/ZapatillasRoutes')
const CategoryRouter = require('./Routes/CategoryRouter')

const app = express();
const port = 3000;

app.use(bodyparser.json());

//TRAER LAS RUTAS DE LOS CONTROLLERS
app.use('/users', UserRoutes)
app.use('/cliente', ClienteRoutes)
app.use('/categoria', CategoryRouter)
app.use('/zapatillas', ZapatillasRoutes)

//PROBANDO EL FUNCIONAMIENTO DEL SISTEMA
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Bienvenidos al sistema de Fabricación de Calzado");
});

//ESCANEO DEL SISTEMA, PROBANDO LA COMPATIBILIDAD
sequelize.sync({ alter: true })
    .then(() => {
        console.log('Tablas sincronizadas con éxito');
    })
    .catch((err) => {
        console.error('Error al sincronizar tablas:', err);
    });

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});