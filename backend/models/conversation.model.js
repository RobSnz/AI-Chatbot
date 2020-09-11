const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const connversationSchema = new Schema({
  username: { type: String, required: true },
  text: { type: String, required: true }
}, {
  timestamps: true,
});

const Conversation = mongoose.model('Conversation', connversationSchema);

module.exports = Conversation;