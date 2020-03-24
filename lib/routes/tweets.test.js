require('dotenv').config();

const request = require('supertest');
const app = require('../app');
const connect = require('../utils/connect');
const mongoose = require('mongoose');
const Tweet = require('../models/Tweet');

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

  it('gets a tweet by id', () => {
    return Tweet.create({
      handle: 'Cody',
      text: 'Jose'
    })
      .then(tweet => {
        return request(app)
          .get(`/api/v1/tweets/${tweet.id}`);
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

  it('deletes a tweet', () => {
    return Tweet.create({
      handle: 'Cody',
      text: 'Jose'
    })
      .then(tweet => {
        return request(app)
          .get(`/api/v1/tweets/${tweet.id}`);
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
