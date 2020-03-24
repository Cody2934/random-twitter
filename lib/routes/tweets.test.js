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

  // PASS
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
  // PASS
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
  // PASS
  it('creates new tweet', () => {
    return request(app)
      .post('/api/v1/tweets')
      .send({
        handle: 'Ricky',
        text: 'Bobby'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          handle: 'Ricky',
          text: 'Bobby',
          __v: 0
        });
      });
  });
  // PASS
  it('gets all tweets', () => {
    return Tweet.create({
      handle: 'THATS MR', text: 'PIG'
    })
      .then(() => {
        return request(app)
          .get('/api/v1/tweets');
      })
      .then(res => {
        expect(res.body).toEqual([{
          _id: expect.any(String),
          handle: 'THATS MR',
          text: 'PIG',
          __v:0
        }]);
      });
  });
  



  // NEED TO WRITE
  it('updates tweet by id', () => {
    return Tweet.create({
      handle: 'Cody',
      text: 'Jose1'
    })
      .then(tweet => {
        return request(app)
          .get(`/api/v1/tweets/${tweet.id}`);
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          handle: 'Cody',
          text: 'Jose1',
          __v: 0
        });
      });
  });
  
});
