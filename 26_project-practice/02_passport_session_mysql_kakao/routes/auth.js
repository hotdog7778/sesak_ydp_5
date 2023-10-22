const express = require('express');
const passport = require('passport');

const { isLoggedIn, isNotLoggedIn } = require('../middlewares/index');
const { join, login, logout } = require('../controllers/auth');

const router = express.Router();

// POST /auth/join
router.post('/join', isNotLoggedIn, join);

// POST /auth/login
router.post('/login', isNotLoggedIn, login);

// GET /auth/logout
router.get('/logout', isLoggedIn, logout);

// GET /auth/kakao
router.get('/kakao', passport.authenticate('kakao')); // 카카오 로그인 전략을 호출
// 처음에는 카카오 로그인 창으로 리다이렉트 한다. (이 과정을 수행하는 코드가 어딨지.. 모르겠음)
// 로그인 창에서 로그인 성공여부 결과를 /auth/kakao/callback 로 받는다.

// --
// GET /auth/kakao/callback
// 카카오로부터 응답을 받을 api
router.get(
  '/kakao/callback',
  passport.authenticate('kakao', {
    // 카카오 로그인 전략 수행
    // 카카오 로그인 성공시 내부적으로 req.login() 을 호출해서 유저 식별값을 이경우 세션에 저장한다. (세션말고 다른것 쓰는경우는 아직모름)
    // 따라서 콜백을 따로 실행시킬 필요없음

    // 로그인에 실패했을때 어디로 이동시킬지 적는다
    failureRedirect: '/?error=카카오톡로그인 실패',
  }),
  // 다음 미들웨어
  (req, res) => {
    // 로그인에 성공했을때 어디로 이동할지
    res.redirect('/');
  }
);

module.exports = router;
