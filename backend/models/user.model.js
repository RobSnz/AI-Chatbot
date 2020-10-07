const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    unique: false,
    type: String
  },
  name: {
    unique: false,
    type: String
  },
  password: {
    unique: false,
    type: String
  },
  email: {
    unique: true,
    type: String
  }
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;