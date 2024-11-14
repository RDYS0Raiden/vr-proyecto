const express = require('express');
const router = express.Router();
const DatosController = require('../controllers/webcontroller');
const logincontroller = require('../controllers/logincontroller');
const practicasController = require('../controllers/practicasController');
const { verificarToken } = require('../auth');


router.post('/addpract', verificarToken, DatosController.addpracticas);
router.post('/login',logincontroller.login);
router.post('/verificar',logincontroller.verificarAccesoDescarga);


router.post('/guardarPuntaje', practicasController.guardarPuntajeCuestionario);

module.exports = router;