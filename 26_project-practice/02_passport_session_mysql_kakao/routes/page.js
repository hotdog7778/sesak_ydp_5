const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('../middlewares/index');
const {
  renderProfile,
  renderJoin,
  renderMain,
} = require('../controllers/page');

const router = express.Router();

router.use((req, res, next) => {
  // res.locals 로 등록하는 이유는 템플릿 엔진에서 공통적으로 사용할 변수들이기 때문.
  res.locals.user = req.user;
  res.locals.followerCount = 0;
  res.locals.followingCount = 0;
  res.locals.followingIdList = [];
  next();
});

router.get('/profile', isLoggedIn, renderProfile);

router.get('/join', isNotLoggedIn, renderJoin);

router.get('/', renderMain);

module.exports = router;
