const mongoose = require('mongoose');
const Member = require('./member');
const StudyGroup = require('./studyGroup');

const { Schema } = mongoose;

// 중개 컬렉션 스키마
const membershipMemberStudy = new Schema({
  member: { type: Schema.Types.ObjectId, ref: 'Member' },
  study_group: { type: Schema.Types.ObjectId, ref: 'StudyGroup' },
});

module.exports = mongoose.model('MembershipMemberStudy', membershipMemberStudy, 'membership_member_study');
