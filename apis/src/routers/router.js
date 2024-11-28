const express = require('express');
const router = express.Router();
const DatosController = require('../controllers/webcontroller');
const logincontroller = require('../controllers/logincontroller');
const practicasController = require('../controllers/practicasController');
const { verificarToken } = require('../auth');
//
const WebController = require('../controllers/webcontroller');

//
router.post('/addpract', verificarToken, DatosController.addpracticas);
router.post('/login',logincontroller.login);
//
router.post('/logini',logincontroller.loginIN);
//
router.post('/verificar',logincontroller.verificarAccesoDescarga);
router.post('/crear', DatosController.datosAgregados);

router.post('/guardarPuntaje', practicasController.guardarPuntajeCuestionario);
router.post('/guardarPuntajeOP', practicasController.guardarPuntajeCuestionarioOP);
router.post("/guardarPuntajeICDAS", practicasController.guardarPuntajeICDAS);
router.post('/guardarPuntajeINYE', practicasController.guardarPuntajeInyeccion);
router.post('/guardarPuntajeINS', practicasController.guardarPuntajeINS);
router.post('/guardarPuntajeRECO', practicasController.guardarPuntajeRECO);
router.post('/guardarPuntajeRESTA', practicasController.guardarPuntajeRESTA);
//nuevo con todo los cambios nuevos eliminacion del .git
//bloque de codigo para poder ver a los estudiantes en una tabla:

// Rutas para manejo de estudiantes
router.get('/estudiantesConPracticas' , WebController.listarEstudiantesConPracticas);
router.get('/buscarEstudiantes', WebController.buscarEstudiantes);

// Ruta para eliminación lógica
router.put('/eliminarEstudiante/:id', WebController.eliminarEstudiante);

// Ruta para restaurar estudiante
router.put('/restablecerEstudiante/:id', WebController.restablecerEstudiante);
router.get('/estudiantesEliminados', WebController.listarEstudiantesEliminados);
router.get('/buscarEstudiantesEliminados', WebController.buscarEstudiantesEliminados);
router.get('/estudiantes', WebController.listarEstudiantes);

//cierre del bloque 
module.exports = router;