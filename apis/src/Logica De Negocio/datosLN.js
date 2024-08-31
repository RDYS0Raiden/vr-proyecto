const ObjectPersonDAL = require("../DAL/objectperson");
const ObjectReglas = require("../DAL/objectPractis");


exports.datosAgregados = async (name,lastname,username,rol,password,correo,numerophone) => {
    
  try {
    const resultado = await ObjectPersonDAL.agregarDatoUsuario(
      name,
      lastname,
      username,
      rol,
      password,
      correo,
      numerophone,

    );
    
    
    return resultado;
  } catch (error) {
    // La excepción de la DAL se propaga a la lógica de negocios
    return error.message;
  }

};

exports.login = async (username, password) => {
  try {
    const user = await ObjectPersonDAL.buscarUsuarioPorUsername(username);
    if (!user) {
      return { success: false, message: 'Usuario no encontrado' };
    }
    const isMatch = await user.comparePassword(password);
    if (isMatch) {
      return { success: true, user };
    } else {
      return { success: false, message: 'Contraseña incorrecta' };
    }
  } catch (error) {
    return { success: false, message: error.message };
  }
};