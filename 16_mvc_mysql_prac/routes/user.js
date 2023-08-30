// TODO: 라우트 설정
const express = require('express');
const router = express.Router();
const ctrr = require('../controller/Cuser');

router.get('/', ctrr.renIndex);
router.get('/user/signup', ctrr.getSignUpPage);
router.post('/user/signup', ctrr.signUp);
router.get('/user/signin', ctrr.getSignInPage);
router.post('/user/signin', ctrr.signIn);
router.post('/user/profile', ctrr.userProfile);
router.post('/user/profile/edit', ctrr.editProfile);
router.delete('/user/profile/delete', ctrr.deleteProfile);

module.exports = router;
