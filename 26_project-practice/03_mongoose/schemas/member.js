const mongoose = require('mongoose');

const { Schema } = mongoose;

const member = new Schema({
  username: {
    type: String,
  },
});

module.exports = mongoose.model('Member', member, 'member');
