const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  handle: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true,
  }
});


module.exports = mongoose.model('Tweet', schema);


// const mongoose = require('mongoose');

// const tweetSchema = new mongoose.Schema({
//   handle: {
//     type: String,
//     required: true
//   },
//   text: {
//     type: String,
//     required: true,
//   }
// });

// const schema = new mongoose.Schema({
//   tweets: [tweetSchema],
//   commentsId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Comment',
//     required: true
//   }
// });

// module.exports = mongoose.model('Tweet', schema);
