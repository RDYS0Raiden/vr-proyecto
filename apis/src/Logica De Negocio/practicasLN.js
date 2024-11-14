// src/Logica De Negocio/practicasLN.js
const ObjectPersonDAL = require('../DAL/objectperson');
const objectpracticas = require('../DAL/objectPractis');

exports.practicasagregadas = async (user, puntageRESTA, tiempoRESTA, puntageINS, tiempoINS, puntageCARI, tiempoCARI, puntageINYE, tiempoINYE, puntageCUEST_EN, puntageCUEST_OP) => {
    try {
        const resultado = await objectpracticas.agregarPracticas(
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

        return resultado;
    } catch (error) {
        return error.message;
    }
};

exports.actualizarPractica = async (user, puntageRESTA, tiempoRESTA, puntageINS, tiempoINS, puntageCARI, tiempoCARI, puntageINYE, tiempoINYE, puntageCUEST_EN, puntageCUEST_OP) => {
    try {
        const resultado = await objectpracticas.actualizarPracticas(
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

        return resultado;
    } catch (error) {
        return error.message;
    }
};
