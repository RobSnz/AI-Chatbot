const router = require('express').Router();
let Rating = require('../models/rating.model');

router.route('/').get((req, res) => {
  Rating.find()
    .then(rating => res.json(rating))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  console.log(req.body)
  const username = req.body.username;
  const rating = req.body.rating;
  
  const newRating = new Rating({
    username,
    rating
  });

  newRating.save()
  .then(() => res.json('Rating saved!'))
  .catch(err => res.status(400).json('err: ' + err));
});

router.route('/:id').get((req, res) => {
  Rating.findById(req.params.id)
    .then(converastion => res.json(rating))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;