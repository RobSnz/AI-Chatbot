const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    unique: true,
    required: true,
    type: String
  },
  name: {
    unique: false,
    required: true,
    type: String
  },
  password: {
    unique: false,
    required: true,
    type: String
  },
  email: {
    unique: false,
    required: true,
    type: String
  },
  organization: {
    unique: false,
    required: true,
    type: String
  }, 
}, {
  timestamps: true,
});

userSchema.pre('save',function(next){
  if(!this.isModified('password'))
    return next();
  bcrypt.hash(this.password,10,(err,passwordHash)=>{
    if(err)
      return next(err);
    this.password = passwordHash;
    next();
  });
});

userSchema.methods.comparePassword = function(password,cb){
  bcrypt.compare(password,this.password,(err,isMatch)=>{
    if(err)
    {
      return cb(err);
    }
    else{
      if(!isMatch)
        return cb(null,isMatch);
      return cb(null,this);
    }
  });
}

module.exports = mongoose.model('User', userSchema);