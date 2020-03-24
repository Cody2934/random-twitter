const { Router } = require('express');
const Comment = require('../models/Comment');

module.exports = Router()

  // create a comment
  .post('/', (req, res, next) => {
    Comment
      .create(req.body)
      .then(comment => res.send(comment))
      .catch(next);
  })

  // get comment by ID
  .get('/:id', (req, res, next) => {
    Comment
      .find()
      .then(comment => res.send(comment))
      .catch(next);
  })
  
  // update comment by ID
  .patch('/:id', (req, res, next) => {
    Comment
      .findByIdAndUpdate()
      .then(comment => res.send(comment))
      .catch(next);
  })

  // deletes a comment by ID
  .delete('/:id', (req, res, next) => {
    Comment
      .create(req.body)
      .then(comment => res.send(comment))
      .catch(next);
  });

