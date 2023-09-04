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
router.get('/user/profile', ctrr.getUserProfile);
router.post('/user/profile/edit', ctrr.editProfile);
router.delete('/user/profile/delete', ctrr.deleteProfile);

router.get('/logout', (req, res) => {
  // TODO: 세션 삭제
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
      return;
    }
    res.redirect('/');
  });
});

module.exports = router;
