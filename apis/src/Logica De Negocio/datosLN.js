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
//codigo login que devuelve rol
exports.logini = async (username, password) => {
  try {
    // Buscar el usuario por nombre de usuario
    const user = await ObjectPersonDAL.buscarUsuarioPorUsername(username);

    if (!user) {
      return { success: false, message: 'Usuario no encontrado' };
    }

    // Comparar la contraseña
    const isMatch = await user.comparePassword(password);
    if (isMatch) {
      return {
        success: true,
        user: {
          username: user.username,
          rol: user.rol, // Incluir el rol del usuario
        },
      };
    } else {
      return { success: false, message: 'Contraseña incorrecta' };
    }
  } catch (error) {
    return { success: false, message: error.message };
  }
};

//
//bloque de codigo para la tabla web
const Usuarios = require('../entidades/usuarios');
const Practicas = require('../entidades/practicas');

// Obtener estudiantes junto con sus prácticas
exports.obtenerEstudiantesConPracticas = async () => {
    try {
        const estudiantes = await Usuarios.find({}, 'name correo estado') // Obtiene los campos necesarios
            .lean() // Convierte el resultado a objetos JS puros
            .exec(); // Ejecuta la consulta

        for (let estudiante of estudiantes) {
            const practicas = await Practicas.find({ user: estudiante._id }); // Encuentra las prácticas del estudiante
            estudiante.practicas = practicas; // Añade las prácticas al objeto estudiante
        }

        return estudiantes;
    } catch (error) {
        throw new Error('Error al obtener estudiantes y sus prácticas: ' + error.message);
    }
};

//cierre de bloque