const mongoose = require('mongoose');
const {Schema,model} = mongoose;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  name: {type:String,required:true},
  lastname: {type:String,required:true},
  username: {type:String,required:true},
  rol: {type:String,required:true},
  password: {type:String,required:true},
  correo: {type:String,required:true},
  numerophone: {type:String,required:true},
  estado: {type:Boolean,required:true,default: true}
});

userSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};
 
userSchema.methods.comparePassword = async function(password) {
  const isMatch = await bcrypt.compare(password, this.password);
  return isMatch;
};
 
// Asegúrate de llamar a `encryptPassword` antes de guardar un usuario en la base de datos.
// Por ejemplo, si estás utilizando Mongoose, puedes hacerlo en un middleware 'pre-save':
 
userSchema.pre('save', async function(next) {
  if (this.isModified('password') || this.isNew) {
    try {
      this.password = await this.encryptPassword(this.password);
      next();
    } catch (error) {
      next(error);
    }
  } else {
    next();
  }
});

module.exports = mongoose.model('user', userSchema);;