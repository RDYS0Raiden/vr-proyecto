const express = require('express');
const router = express.Router();
const DatosController = require('../controllers/webcontroller');
const logincontroller = require('../controllers/logincontroller');
const practicasController = require('../controllers/practicasController');
const { verificarToken } = require('../auth');


router.post('/addpract', verificarToken, DatosController.addpracticas);
router.post('/login',logincontroller.login);
router.post('/verificar',logincontroller.verificarAccesoDescarga);
router.post('/crear', DatosController.datosAgregados);

router.post('/guardarPuntaje', practicasController.guardarPuntajeCuestionario);
router.post('/guardarPuntajeOP', practicasController.guardarPuntajeCuestionarioOP);
router.post("/guardarPuntajeICDAS", practicasController.guardarPuntajeICDAS);
router.post('/guardarPuntajeINYE', practicasController.guardarPuntajeInyeccion);
router.post('/guardarPuntajeINS', practicasController.guardarPuntajeINS);
router.post('/guardarPuntajeRECO', practicasController.guardarPuntajeRECO);
router.post('/guardarPuntajeRESTA', practicasController.guardarPuntajeRESTA);
//nuevo con todo los cambios nuevos

module.exports = router;