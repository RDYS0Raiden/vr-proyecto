const express = require('express');
const router = express.Router();
const DatosController = require('../controllers/webcontroller');
const logincontroller = require('../controllers/logincontroller');
router.post('/crear',DatosController.datosAgregados);
router.post('/addpract',DatosController.addpracticas);
router.post('/login',logincontroller.login);
router.post('/verificar',logincontroller.verificarAccesoDescarga);
module.exports = router;