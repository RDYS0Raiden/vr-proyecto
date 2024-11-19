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
      await Reglas.updateOne(
          { user: userId },
          {
              $set: {
                  puntageCUEST_EN: puntageCUEST_EN
                  
              },
          },
          { upsert: true } // Crea el documento si no existe
      );
      return "Puntaje EN guardado o actualizado correctamente.";
  } catch (error) {
      console.error("Error al guardar o actualizar el puntaje EN:", error.message);
      throw error;
  }
}


async function guardarOActualizarPuntajeOP(userId, puntageCUEST_OP) {
  try {
      // Usamos updateOne con $set para actualizar o crear el campo
      await Reglas.updateOne(
          { user: userId },
          {
              $set: {
                  puntageCUEST_OP: puntageCUEST_OP
                  
              },
          },
          { upsert: true } // Crea el documento si no existe
      );
      return "Puntaje OP guardado o actualizado correctamente.";
  } catch (error) {
      console.error("Error al guardar o actualizar el puntaje OP:", error.message);
      throw error;
  }
}


async function guardarOActualizarPuntajeICDAS(userId, puntageICDAS) {
    try {
      await Reglas.updateOne(
        { user: userId },
        {
          $set: {
            puntageICDAS: puntageICDAS,
          },
        },
        { upsert: true }
      );
      return "Puntaje ICDAS guardado o actualizado correctamente.";
    } catch (error) {
      console.error("Error al guardar o actualizar el puntaje ICDAS:", error.message);
      throw error;
    }
  }

  async function guardarOActualizarPuntajeINYE(userId, puntageINYE) {
    try {
        await Reglas.updateOne(
            { user: userId },
            {
                $set: {
                    puntageINYE: puntageINYE
                    
                },
            },
            { upsert: true } // Crea el documento si no existe
        );
        return "Puntaje INYE guardado o actualizado correctamente.";
    } catch (error) {
        console.error("Error al guardar o actualizar el puntaje INYE:", error.message);
        throw error;
    }
}


async function guardarOActualizarPuntajeINS(userId, puntageINS) {
  try {
      // Usar updateOne con upsert para guardar o actualizar el puntaje de INS
      await Reglas.updateOne(
          { user: userId },
          {
              $set: {
                  puntageINS: puntageINS
              },
          },
          { upsert: true } // Crea el documento si no existe
      );
      return "Puntaje INS guardado o actualizado correctamente.";
  } catch (error) {
      console.error("Error al guardar o actualizar el puntaje INS:", error.message);
      throw error;
  }
}

// objectPractis.js

async function guardarOActualizarPuntajeRECO(userId, puntageRECO) {
    try {
        // Usar updateOne con upsert para actualizar o crear el puntaje de RECO
        await Reglas.updateOne(
            { user: userId },
            {
                $set: {
                    puntageRECO: puntageRECO,
                },
            },
            { upsert: true } // Crea el documento si no existe
        );
        return "Puntaje RECO guardado o actualizado correctamente.";
    } catch (error) {
        console.error("Error al guardar o actualizar el puntaje RECO:", error.message);
        throw error;
    }
}

// objectPractis.js

async function guardarOActualizarPuntajeRESTA(userId, puntageRESTA) {
  try {
      // Usar updateOne con upsert para actualizar o crear el puntaje de RESTA
      await Reglas.updateOne(
          { user: userId },
          {
              $set: {
                  puntageRESTA: puntageRESTA,
              },
          },
          { upsert: true } // Crea el documento si no existe
      );
      return "Puntaje RESTA guardado o actualizado correctamente.";
  } catch (error) {
      console.error("Error al guardar o actualizar el puntaje RESTA:", error.message);
      throw error;
  }
}




module.exports = {
    agregarPracticas,actualizarPracticas,
    guardarOActualizarPuntaje,guardarOActualizarPuntajeOP,
    guardarOActualizarPuntajeICDAS,guardarOActualizarPuntajeINYE,
    guardarOActualizarPuntajeINS,guardarOActualizarPuntajeRECO,guardarOActualizarPuntajeRESTA,
}