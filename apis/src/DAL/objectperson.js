const DatosUsuario = require("../entidades/usuarios");

// Función para agregar un nuevo dato de usuario en objectperson.js
async function agregarDatoUsuario(
  name,
  lastname,
  username,
  rol,
  password,
  correo,
  numerophone

) {
  try {
    var nuevoDatoUsuario = new DatosUsuario({
     name,
  lastname,
  username,
  rol,
  password,
  correo,
  numerophone
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

async function buscarUsuarioPorUsername(username) {
  try {
    const usuario = await DatosUsuario.findOne({ username: username });
    return usuario;
  } catch (error) {
    throw error;
  }
}

async function validarAccesoDescarga(username) {
  try {
    const usuario = await buscarUsuarioPorUsername(username);

    if (usuario) {
      // Si el usuario existe, devolvemos su rol y un indicador de acceso
      return {
        acceso: true,
        rol: usuario.rol
      };
    } else {
      // Si no existe, devolvemos que no tiene acceso
      return {
        acceso: false,
        rol: null
      };
    }
  } catch (error) {
    throw error;
  }
}

module.exports = {
  agregarDatoUsuario,buscarUsuarioPorUsername,validarAccesoDescarga,
  // Exporta otras funciones aquí si es necesario...
};
