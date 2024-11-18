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

exports.guardarPuntajeCuestionarioOP = async (req, res) => {
    try {
        const { username, puntageCUEST_OP } = req.body;

        if (!username) {
            return res.status(400).json({ mensaje: "El campo 'username' es requerido." });
        }

        const usuario = await objectPerson.buscarUsuarioPorUsernamep(username);
        if (!usuario) {
            return res.status(404).json({ mensaje: "Usuario no encontrado." });
        }

        const resultado = await objectPractis.guardarOActualizarPuntajeOP(usuario._id, puntageCUEST_OP);
        return res.status(200).json({ mensaje: resultado });
    } catch (error) {
        console.error("Error en guardarPuntajeCuestionarioOP:", error.message);
        res.status(500).json({ mensaje: "Error al guardar o actualizar el puntaje.", error: error.message });
    }
};

exports.guardarPuntajeICDAS = async (req, res) => {
    try {
      const { username, puntageICDAS } = req.body;
  
      if (!username) {
        return res.status(400).json({ mensaje: "El campo 'username' es requerido." });
      }
  
      const usuario = await objectPerson.buscarUsuarioPorUsernamep(username);
      if (!usuario) {
        return res.status(404).json({ mensaje: "Usuario no encontrado." });
      }
  
      const resultado = await objectPractis.guardarOActualizarPuntajeICDAS(usuario._id, puntageICDAS);
      return res.status(200).json({ mensaje: resultado });
    } catch (error) {
      console.error("Error en guardarPuntajeICDAS:", error.message);
      res.status(500).json({ mensaje: "Error al guardar o actualizar el puntaje ICDAS.", error: error.message });
    }
};

exports.guardarPuntajeInyeccion = async (req, res) => {
    try {
        const { username, puntageINYE } = req.body;

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

        // Guardar o actualizar el puntaje de INYE
        const resultado = await objectPractis.guardarOActualizarPuntajeINYE(usuario._id, puntageINYE);
        return res.status(200).json({ mensaje: resultado });
    } catch (error) {
        console.error("Error en guardarPuntajeInyeccion:", error.message);
        res.status(500).json({ mensaje: "Error al guardar o actualizar el puntaje.", error: error.message });
    }
};

exports.guardarPuntajeINS = async (req, res) => {
    try {
        const { username, puntageINS } = req.body;

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

        // Guardar o actualizar el puntaje INS
        const resultado = await objectPractis.guardarOActualizarPuntajeINS(usuario._id, puntageINS);
        return res.status(200).json({ mensaje: resultado });
    } catch (error) {
        console.error("Error en guardarPuntajeINS:", error.message);
        res.status(500).json({ mensaje: "Error al guardar o actualizar el puntaje INS.", error: error.message });
    }
};