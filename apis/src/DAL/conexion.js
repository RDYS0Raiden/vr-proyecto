const mongoose = require('mongoose');
require('dotenv').config(); // Cargar variables de entorno desde el archivo .env

const url = process.env.DB_URL; // Acceder a la variable de entorno

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error al conectar con MongoDB'));
db.once('open', function callback() {
    // La conexión a la base de datos se ha establecido
});

module.exports = db;
