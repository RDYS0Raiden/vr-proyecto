const ObjectPersonDAL = require("../DAL/objectperson");
const ObjectReglas = require("../DAL/objectPractis");


exports.datosAgregados = async (name,lastname,username,rol,password,correo,numerophone) => {
    

  try {
    // Verificar si el nombre de usuario ya existe
    const userExists = await ObjectPersonDAL.buscarUsuarioPorUsername(username);
    if (userExists) {
      return 'El nombre de usuario ya existe. Inténtalo de nuevo.';
    }
  
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
      return { 
        success: true, 
        user 
      };
    } else {
      return { success: false, message: 'Contraseña incorrecta' };
    }
  } catch (error) {
    return { success: false, message: error.message };
  }
};

// Nueva función para validar el acceso a la descarga
exports.validarAccesoDescarga = async (username) => {
  try {
    const accesoInfo = await ObjectPersonDAL.validarAccesoDescarga(username);
    return accesoInfo;
  } catch (error) {
    return { acceso: false, message: error.message };
  }
};