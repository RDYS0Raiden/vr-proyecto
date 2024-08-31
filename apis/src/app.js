const express = require('express');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const db = require('../src/DAL/conexion');
const cors = require('cors');
const routerTemp= require('./routers/router')
const { body, validationResult } = require('express-validator');
const app = express();
require('dotenv').config();
// Configurar express
app.use(express.urlencoded({ extended: true }));
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
// Configurar express-session
app.use(session({
  secret: '1235asdesas',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 30 * 60 * 1000, // 30 minutos
  },
}));

// Configurar connect-flash
app.use(flash());


app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});
// Importar la configuración de Passport

// Configurar Passport para tu aplicación Express
app.use(passport.initialize());
app.use(passport.session());



// Configurar Express
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.static('public'));

// Configurar rutas
app.use('/', routerTemp);

// Iniciar servidor
app.listen(4000, () => {
  console.log('server UP! en http://localhost:4000');
});
