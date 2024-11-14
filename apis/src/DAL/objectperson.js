// objectperson.js
const DatosUsuario = require("../entidades/usuarios");

// Función para agregar un nuevo dato de usuario
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
    const nuevoDatoUsuario = new DatosUsuario({
      name,
      lastname,
      username,
      rol,
      password,
      correo,
      numerophone,
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

// Función para buscar usuario por username
async function buscarUsuarioPorUsername(username) {
  try {
    console.log("Buscando usuario con username:", username);
    const usuario = await DatosUsuario.findOne({ username: username });
    console.log("Resultado de la búsqueda:", usuario);
    return usuario;
  } catch (error) {
    console.error("Error al buscar usuario:", error.message);
    throw error;
  }
}

// Función para validar acceso a descarga
async function validarAccesoDescarga(username) {
  try {
    const usuario = await buscarUsuarioPorUsername(username);

    if (usuario) {
      return {
        acceso: true,
        rol: usuario.rol,
      };
    } else {
      return {
        acceso: false,
        rol: null,
      };
    }
  } catch (error) {
    throw error;
  }
}
// objectperson.js

// Función para buscar usuario por username
async function buscarUsuarioPorUsernamep(username) {
    try {
        if (!username) {
            console.error("El campo 'username' está vacío o no fue proporcionado.");
            return null;
        }
        console.log("Buscando usuario con username:", username);
        const usuario = await DatosUsuario.findOne({ username: username });
        if (!usuario) {
            console.error("Usuario no encontrado para el username:", username);
        }
        return usuario;
    } catch (error) {
        console.error("Error al buscar usuario:", error.message);
        throw error;
    }
}


// Exportar funciones
module.exports = {
  agregarDatoUsuario,
  buscarUsuarioPorUsername,buscarUsuarioPorUsernamep,
  validarAccesoDescarga,
};
