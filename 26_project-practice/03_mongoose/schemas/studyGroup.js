const mongoose = require('mongoose');

const { Schema } = mongoose;

const studyGroup = new Schema({
  name: {
    type: String,
  },
});

module.exports = mongoose.model('StudyGroup', studyGroup, 'study_group');
