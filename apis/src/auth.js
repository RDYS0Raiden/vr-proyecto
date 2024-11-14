const jwt = require('jsonwebtoken');

// Clave secreta para firmar los tokens (debe estar en tu archivo .env)
const SECRET_KEY = process.env.JWT_SECRET || 'mi_secreta_clave';

// Función para generar el token
function generarToken(user) {
    const payload = {
        id: user._id,
        username: user.username,
        rol: user.rol,
    };
    return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
}

// Función para verificar el token
function verificarToken(req, res, next) {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ mensaje: 'Acceso denegado. Token no proporcionado.' });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ mensaje: 'Token inválido o expirado.' });
    }
}

module.exports = {
    generarToken,
    verificarToken,
};
