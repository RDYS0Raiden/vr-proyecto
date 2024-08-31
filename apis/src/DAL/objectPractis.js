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
      tiempoINYE
  
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
      tiempoINYE
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
module.exports = {
    agregarPracticas,
}