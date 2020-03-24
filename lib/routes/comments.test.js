require('dotenv').config();

const request = require('supertest');
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

  // PASS
  it('gets a comment by id', () => {
    return Comment.create({
      handle: 'Cody',
      text: 'Jose'
    })
      .then(comment => {
        return request(app)
          .get(`/api/v1/comments/${comment.id}`);
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          handle: 'Cody',
          text: 'Jose',
          __v: 0
        });
      });
  });
  // PASS
  it('deletes a comment', () => {
    return Comment.create({
      handle: 'Cody',
      text: 'Jose'
    })
      .then(comment => {
        return request(app)
          .get(`/api/v1/comments/${comment.id}`);
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          handle: 'Cody',
          text: 'Jose',
          __v: 0
        });
      });
  });

  // NEED TO WRITE
  it('creates a comment on a tweeet', () => {
    return Comment.create({
      handle: 'Cody',
      text: 'Jose'
    })
      .then(comment => {
        return request(app)
          .get(`/api/v1/comments/${comment.id}`);
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          handle: 'Cody',
          text: 'Jose',
          __v: 0
        });
      });
  });
  // NEED TO WRITE
  it('updates a comment', () => {
    return Comment.create({
      handle: 'Cody',
      text: 'Jose'
    })
      .then(comment => {
        return request(app)
          .get(`/api/v1/comments/${comment.id}`);
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          handle: 'Cody',
          text: 'Jose',
          __v: 0
        });
      });
  });
});
