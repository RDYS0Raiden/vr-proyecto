const LogicaNegocios = require('../Logica De Negocio/datosLN');
const resultados = require('../Logica De Negocio/practicasLN');
const { generarToken } = require('../auth');

  
  exports.login = async (req, res) => {
      const { username, password } = req.body;
  
      try {
          const resultado = await LogicaNegocios.login(username, password);
  
          if (resultado.success) {
              // Generar el token
              const token = generarToken(resultado.user);
  
              res.json({
                  mensaje: 'Login exitoso',
                  user: resultado.user,
                  token: token,
              });
          } else {
              res.json({ mensaje: resultado.message });
          }
      } catch (error) {
          res.json({ mensaje: error.message });
      }
  };
  
  exports.verificarAccesoDescarga = async (req, res) => {
    const { username } = req.body;
  
    try {
      const resultado = await LogicaNegocios.validarAccesoDescarga(username);
  
      if (resultado.acceso) {
        res.json({
          mensaje: 'Acceso concedido',
          accesoDescarga: true,
          rol: resultado.rol
        });
      } else {
        res.json({
          mensaje: 'Acceso denegado',
          accesoDescarga: false
        });
      }
    } catch (error) {
      res.json({ mensaje: error.message });
    }
  };

  //
  exports.loginIN = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Llamar a la lógica de negocio para autenticar al usuario
        const resultado = await LogicaNegocios.logini(username, password);

        if (resultado.success) {
            // Generar el token
            const token = generarToken(resultado.user);

            res.json({
              success: true,
              mensaje: 'Login exitoso',
              user: {
                  username: resultado.user.username,
                  rol: resultado.user.rol, // Incluye el rol
              },
              token: token,
            });
        } else {
            res.json({ success: false, mensaje: resultado.message });
        }
    } catch (error) {
        console.error('Error en el login:', error.message);
        res.status(500).json({ success: false, mensaje: 'Error interno del servidor' });
    }
};
  

  //
  