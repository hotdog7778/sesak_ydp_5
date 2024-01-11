const express = require('express');
// const User = require('../schemas/user');
const MembershipMemberStudy = require('../schemas/membershipMemberStudy');
const Member = require('../schemas/member');
const StudyGroup = require('../schemas/studyGroup');
const router = express.Router();

router.post('/', async (req, res, next) => {
  // console.log('aaa');
  const result = await Member.create({
    username: 'tgkim',
  });

  console.log(result);

  res.send(result);
});

module.exports = router;
