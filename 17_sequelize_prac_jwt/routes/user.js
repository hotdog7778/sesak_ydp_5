const express = require('express');
const router = express.Router();
const ctrr = require('../controller/Cuser');
const controller = require('../controller/JwtTest');
const { verifyToken } = require('../middlewares/jwt');

// 토큰 확인
router.get('/tokenTest', verifyToken, controller.tokenTest);

// 메인 페이지 렌더링
router.get('/', controller.renIndex);

// 회원가입 페이지 렌더링
router.get('/user/signup', controller.getSignUpPage);

// 회원가입 처리
router.post('/user/signup', controller.signUp);

// 로그인 페이지 렌더링
router.get('/user/signin', controller.getSignInPage);

// 로그인 처리 (토큰 생성)
router.post('/user/signin', controller.signIn);

// ###############

// 첫페이지 렌더링
// router.get('/', ctrr.renIndex);

// 회원가입 페이지 렌더링
// router.get('/user/signup', ctrr.getSignUpPage);

// 회원가입 처리
// router.post('/user/signup', ctrr.signUp);

// 로그인 페이지 렌더링
// router.get('/user/signin', ctrr.getSignInPage);

// 로그인 처리
// router.post('/user/signin', ctrr.signIn);

// 회원정보 수정 페이지 렌더링
// router.get('/user/profile', ctrr.getUserProfile);

// 회원정보 수정 처리
// router.post('/user/profile/edit', verifyToken, ctrr.editProfile);

// 회원 탈퇴 처리
// router.delete('/user/profile/delete', verifyToken, ctrr.deleteProfile);

// 로그아웃 처리
// router.get('/logout', ctrr.logout);

module.exports = router;
