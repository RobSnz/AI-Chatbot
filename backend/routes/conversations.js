const router = require('express').Router();
let Conversation = require('../models/conversation.model');

router.route('/').get((req, res) => {
  Conversation.find()
    .then(conversation => res.json(conversation))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const text = req.body.text;

  const newConversation = new Conversation({
    username,
    text
  });

  newConversation.save()
  .then(() => res.json('Conversation added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

// router.route('/:id').get((req, res) => {
//   Conversation.findById(req.params.id)
//     .then(converastion => res.json(conversation))
//     .catch(err => res.status(400).json('Error: ' + err));
// });
// router.route('/:id').delete((req, res) => {
//   Conversation.findByIdAndDelete(req.params.id)
//     .then(() => res.json('Conversation deleted.'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

module.exports = router;