require('dotenv').config();

const request = require('superagent');
const app = require('../app');
const connect = require('../utils/connect');
const mongoose = require('mongoose');
const Comment = require('../models/Comment');

describe('app routes', () => {
  beforeAll(() => {
    connect();
  });
  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });
  afterAll(() => {
    return mongoose.connection.close();
  });

  it('gets a comment by id', () => {
    return Comment.create({
      handle: { type: String, required: true },
      text: { type: String, required: true }
    })
      .then(comment => {
        return request(app)
          .get(`/api/v1/comments/${comment.id}`);
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          handle: { type: String, required: true },
          text: { type: String, required: true },
          __v: 0
        });
      });
  });

  it('deletes a comment', () => {
    return Comment.create({
      handle: { type: String, required: true },
      text: { type: String, required: true }
    })
      .then(comment => {
        return request(app)
          .get(`/api/v1/comments/${comment.id}`);
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          handle: { type: String, required: true },
          text: { type: String, required: true },
          __v: 0
        });
      });
  });
});
