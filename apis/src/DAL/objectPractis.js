const Reglas = require('../entidades/practicas');
const DatosPersonas = require('../entidades/usuarios');


async function agregarPracticas(
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
  
  ) {
    try {
      var nuevoDatoUsuario = new Reglas({
        user,
      puntageRESTA,
      tiempoRESTA,
      
      puntageINS,
      tiempoINS,
      
      puntageCARI,
      //cantidadClicks:{type: Number, required: true},
      tiempoCARI,
      
      puntageINYE,
      tiempoINYE,

      puntageCUEST_EN,
      puntageCUEST_OP,

      });
  
      const resultado = await nuevoDatoUsuario.save();
  
      if (resultado) {
        return "¡Registro guardado correctamente!";
      } else {
        return "Ocurrió un error al guardar el registro.";
      }
    } catch (error) {
      throw error;
    }
  }

  async function actualizarPracticas(user, puntageRESTA, tiempoRESTA, puntageINS, tiempoINS, puntageCARI, tiempoCARI, puntageINYE, tiempoINYE, puntageCUEST_EN, puntageCUEST_OP) {
    try {
        const practicaActualizada = await Reglas.findOneAndUpdate(
            { user: user },
            {
                $set: {
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
                }
            },
            { new: true }
        );

        if (practicaActualizada) {
            return "¡Práctica actualizada correctamente!";
        } else {
            return "No se encontró la práctica para el usuario especificado.";
        }
    } catch (error) {
        throw error;
    }
}
async function guardarOActualizarPuntaje(userId, puntageCUEST_EN) {
  try {
      const practicaExistente = await Reglas.findOne({ user: userId });

      if (practicaExistente) {
          // Actualizar el puntaje
          practicaExistente.puntageCUEST_EN = puntageCUEST_EN;
          await practicaExistente.save();
          return "Puntaje actualizado correctamente.";
      } else {
          // Crear una nueva práctica
          const nuevaPractica = new Reglas({
              user: userId,
              puntageCUEST_EN: puntageCUEST_EN,
              puntageRESTA: 0,
              tiempoRESTA: 0,
              puntageINS: 0,
              tiempoINS: 0,
              puntageCARI: 0,
              tiempoCARI: 0,
              puntageINYE: 0,
              tiempoINYE: 0,
              puntageCUEST_OP: 0,
          });
          await nuevaPractica.save();
          return "Puntaje guardado correctamente.";
      }
  } catch (error) {
      console.error("Error al guardar o actualizar el puntaje:", error.message);
      throw error;
  }
}
module.exports = {
    agregarPracticas,actualizarPracticas,guardarOActualizarPuntaje
}