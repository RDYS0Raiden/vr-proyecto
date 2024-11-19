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
        res.status(400).json({ mensaje: resultado });
      }
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al registrar el usuario.' });
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
//bloque de codigo tabla web

const Estudiantes = require('../entidades/usuarios');
const Practicas = require('../entidades/practicas');
const Usuarios = require('../entidades/usuarios'); 
exports.listarEstudiantesConPracticas = async (req, res) => {
  try {
      // Buscar a todos los estudiantes con estado activo
      const estudiantes = await Usuarios.find({ rol: 'estudiante', estado: true });

      // Buscar las prácticas relacionadas para cada estudiante
      const estudiantesConPracticas = await Promise.all(estudiantes.map(async (estudiante) => {
          const practicas = await Practicas.find({ user: estudiante._id });
          return {
              ...estudiante._doc, // Desestructurar los datos del estudiante
              practicas, // Agregar las prácticas encontradas
          };
      }));

      res.status(200).json(estudiantesConPracticas);
  } catch (error) {
      console.error("Error al listar estudiantes con prácticas:", error);
      res.status(500).json({ mensaje: "Error al listar estudiantes con prácticas" });
  }
};



// Ajusta la ruta según tu estructura

// Método para buscar estudiantes por nombre y correo
exports.buscarEstudiantes = async (req, res) => {
    try {
        const { nombre, correo } = req.query; // Obtener los parámetros de búsqueda

        // Construir un filtro dinámico
        const filtro = {};
        if (nombre) {
            filtro.name = { $regex: nombre, $options: 'i' }; // Búsqueda insensible a mayúsculas
        }
        if (correo) {
            filtro.correo = { $regex: correo, $options: 'i' }; // Búsqueda insensible a mayúsculas
        }

        // Buscar estudiantes que coincidan con el filtro
        const estudiantes = await Estudiantes.find(filtro).lean();

        // Para cada estudiante, buscar sus prácticas
        const estudiantesConPracticas = await Promise.all(
            estudiantes.map(async (estudiante) => {
                const practicas = await Practicas.find({ user: estudiante._id }).lean();
                return { ...estudiante, practicas };
            })
        );

        res.json(estudiantesConPracticas); // Devolver estudiantes con sus prácticas
    } catch (error) {
        console.error('Error al buscar estudiantes:', error);
        res.status(500).json({ mensaje: 'Error al buscar estudiantes.' });
    }
};

exports.eliminarEstudiante = async (req, res) => {
  try {
      const { id } = req.params; // Obtener el ID del estudiante desde los parámetros
      const estudiante = await Estudiantes.findByIdAndUpdate(
          id,
          { estado: false }, // Cambiar el estado a false
          { new: true } // Devolver el documento actualizado
      );

      if (!estudiante) {
          return res.status(404).json({ mensaje: 'Estudiante no encontrado.' });
      }

      res.json({ mensaje: 'Estudiante eliminado lógicamente.', estudiante });
  } catch (error) {
      console.error('Error al eliminar estudiante:', error);
      res.status(500).json({ mensaje: 'Error al eliminar estudiante.' });
  }
};

// Restaurar estudiante (cambiar estado a true)
exports.restablecerEstudiante = async (req, res) => {
  try {
      const { id } = req.params; // Obtener el ID del estudiante desde los parámetros
      const estudiante = await Estudiantes.findByIdAndUpdate(
          id,
          { estado: true }, // Cambiar el estado a true
          { new: true } // Devolver el documento actualizado
      );

      if (!estudiante) {
          return res.status(404).json({ mensaje: 'Estudiante no encontrado.' });
      }

      res.json({ mensaje: 'Estudiante restablecido.', estudiante });
  } catch (error) {
      console.error('Error al restablecer estudiante:', error);
      res.status(500).json({ mensaje: 'Error al restablecer estudiante.' });
  }
};


exports.listarEstudiantesEliminados = async (req, res) => {
  try {
      const estudiantes = await Estudiantes.find({ estado: false });
      res.json(estudiantes);
  } catch (error) {
      console.error('Error al listar estudiantes eliminados:', error);
      res.status(500).json({ mensaje: 'Error al listar estudiantes eliminados.' });
  }
};


exports.buscarEstudiantesEliminados = async (req, res) => {
  try {
      const { nombre, correo } = req.query;

      // Crear un filtro dinámico dependiendo de si nombre y/o correo están presentes
      const filtro = { estado: false };
      if (nombre) filtro.name = { $regex: nombre, $options: 'i' }; // Búsqueda insensible a mayúsculas
      if (correo) filtro.correo = { $regex: correo, $options: 'i' };

      const estudiantes = await Estudiantes.find(filtro);
      res.json(estudiantes);
  } catch (error) {
      console.error('Error al buscar estudiantes eliminados:', error);
      res.status(500).json({ mensaje: 'Error al buscar estudiantes eliminados.' });
  }
};


exports.listarEstudiantes = async (req, res) => {
  try {
      // Filtrar solo los usuarios con rol 'estudiante'
      const estudiantes = await Usuarios.find({ rol: 'estudiante', estado: true }); // Solo activos
      res.json(estudiantes);
  } catch (error) {
      console.error("Error al listar estudiantes:", error.message);
      res.status(500).json({ mensaje: 'Error al obtener estudiantes.' });
  }
};

//cierre de bloque 
