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

module.exports = router;