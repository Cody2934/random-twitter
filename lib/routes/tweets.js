const { Router } = require('express');
const Tweet = require('../models/Tweet');

module.exports = Router()

  // creates a tweet
  .post('/', (req, res, next) => {
    Tweet
      .create(req.body)
      .then(tweet => res.send(tweet))
      .catch(next);
  })

  // gets all tweets
  .get('/', (req, res, next) => {
    Tweet
      .find()
      .then(tweet => res.send(tweet))
      .catch(next);
  })

  // gets tweet by ID
  .get('/:id', (req, res, next) => {
    Tweet
      .findById(req.params.id)
      .then(tweet => res.send(tweet))
      .catch(next);
  })
  
  // update tweet by ID
  .patch('/:id', (req, res, next) => {
    Tweet
      .findByIdAndUpdate(req.params.id)
      .then(tweet => res.send(tweet))
      .catch(next);
  })

  // deletes tweet by ID
  .delete('/:id', (req, res, next) => {
    Tweet
      .create(req.body)
      .then(tweet => res.send(tweet))
      .catch(next);
  });

