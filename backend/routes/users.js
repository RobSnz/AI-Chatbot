const router = require('express').Router();
let User = require('../models/user.model');

// const jwt = require('jsonwebtoken');
// process.env.SECRET_KEY = 'secret'

router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(User => res.json(User))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/register').post((req, res) => {
  const username = req.body.username;
  const name = req.body.name;
  const password = req.body.password;
  const email = req.body.email;

  const newUser = new User({
    username,
    name,
    password,
    email
  });

  User.findOne({
    email: req.body.email
  }).then(user => {
    if (!user) {
      newUser.save()
      .then(() => res.json('User registered!'))
      .catch(err => res.status(400).json('Error: ' + err));
    }
    else {
      res.json({error: 'user already exists'})
    }
  })
  .catch(err => {
    res.send(err + 'error')
  })
});

router.route('/login').post((req, res) => {
  User.findOne({
    email: req.body.email
  })
    .then(User => {
      if (User) {
        if(req.body.password == User.password){
          res.json('loged in')
        } else {
          res.json({error: 'password does not match'})
        }
      } else {
        res.json({error: 'user does not exist'})
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
});

module.exports = router;