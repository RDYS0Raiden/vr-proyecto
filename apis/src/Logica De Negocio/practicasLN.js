const ObjectPersonDAL = require('../DAL/objectperson');
const objectpracticas = require('../DAL/objectPractis');

exports.practicasagregadas = async (user,puntageRESTA,tiempoRESTA,puntageINS,tiempoINS,puntageCARI,tiempoCARI,puntageINYE, tiempoINYE) => {
    
  try {
    const resultado = await objectpracticas.agregarPracticas(
      user,
      puntageRESTA,
      tiempoRESTA,
      
      puntageINS,
      tiempoINS,
      
      puntageCARI,
   
      tiempoCARI,
      
      puntageINYE,
      tiempoINYE

    );
    
    
    return resultado;
  } catch (error) {
    // La excepción de la DAL se propaga a la lógica de negocios
    return error.message;
  }
};


