// practicasController.js
const objectPractis = require('../DAL/objectPractis');
const objectPerson = require('../DAL/objectperson');

exports.guardarPuntajeCuestionario = async (req, res) => {
    try {
        const { username, puntageCUEST_EN } = req.body;

        console.log("Datos recibidos en la solicitud:", req.body);

        // Verificar si el username está definido
        if (!username) {
            return res.status(400).json({ mensaje: "El campo 'username' es requerido." });
        }

        // Buscar al usuario por username
        const usuario = await objectPerson.buscarUsuarioPorUsernamep(username);
        if (!usuario) {
            return res.status(404).json({ mensaje: "Usuario no encontrado." });
        }

        // Guardar o actualizar el puntaje
        const resultado = await objectPractis.guardarOActualizarPuntaje(usuario._id, puntageCUEST_EN);
        return res.status(200).json({ mensaje: resultado });
    } catch (error) {
        console.error("Error en guardarPuntajeCuestionario:", error.message);
        res.status(500).json({ mensaje: "Error al guardar o actualizar el puntaje.", error: error.message });
    }
};
