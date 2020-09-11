const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ratingSchema = new Schema({
  username: { type: String, required: true },
  rating: { 
    type: Number,
    required: true,
    minlength: 1,
    maxlength: 5 
  }
}, {
  timestamps: true,
});

const Rating = mongoose.model('Rating', ratingSchema);

module.exports = Rating;