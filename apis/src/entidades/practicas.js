const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const DatosUsu = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
  puntageRESTA: { type: Number, required: true },
  tiempoRESTA: { type: Number, required: true },
  
  puntageINS: { type: Number, required: true },
  tiempoINS:{type: Number, required: true},
  
  puntageCARI: { type: Number, required: true },
  //cantidadClicks:{type: Number, required: true},
  tiempoCARI: { type: Number, required: true },
  
  puntageINYE: {type:Number,required:true},
  tiempoINYE:{type:Number,required:true},

  puntageCUEST_EN: {type:Number,required:true},
  puntageCUEST_OP: {type:Number,required:true},
  puntageICDAS: { type: Number, required: true,},
  
});



module.exports = mongoose.model('practicas', DatosUsu);;
