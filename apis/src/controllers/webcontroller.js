const LogicaNegocios = require('../Logica De Negocio/datosLN');
const resultados = require('../Logica De Negocio/practicasLN');
exports.datosAgregados= async (req, res) => {
    
  const {
    name,
    lastname,
    username,
    rol,
    password,
    correo,
    numerophone,
    status=true,  
    } = req.body;

    
  try {
      const resultado = await LogicaNegocios.datosAgregados(
        name,
  lastname,
  username,
  rol,
  password,
  correo,
  numerophone,  
      );
      // El controlador solo necesita comprobar el mensaje de éxito
      if (resultado === '¡Registro guardado correctamente!') {
        res.json({ mensaje: resultado });
      } else {
        res.json({ mensaje: resultado });
      }
    } catch (error) {
      res.json({ mensaje: error.message });
    }
};

exports.addpracticas= async (req, res) => {
    
  const {
    user,
    puntageRESTA,
    tiempoRESTA,
    
    puntageINS,
    tiempoINS,
    
    puntageCARI,
 
    tiempoCARI,
    
    puntageINYE,
    tiempoINYE,

    puntageCUEST_EN,
    puntageCUEST_OP,

    } = req.body;

    
  try {
      const resultado = await resultados.practicasagregadas(
        user,
        puntageRESTA,
        tiempoRESTA,
        
        puntageINS,
        tiempoINS,
        
        puntageCARI,
     
        tiempoCARI,
        
        puntageINYE,
        tiempoINYE,

      puntageCUEST_EN,
      puntageCUEST_OP

      );
      // El controlador solo necesita comprobar el mensaje de éxito
      if (resultado === '¡Practica guardada correctamente!') {
        res.json({ mensaje: resultado });
      } else {
        res.json({ mensaje: resultado });
      }
    } catch (error) {
      res.json({ mensaje: error.message });
    }
};
// Resto de tu código en LogicaNegocios.js

