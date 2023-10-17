const { Member } = require('../models/index');
const bcrypt = require('bcrypt');

// TODO: 컨트롤러 코드
const renIndex = (req, res) => {
  // 빈 세션 객체
  console.log('empty >>>>', req.session);
  console.log('empty >>>>', req.session.id);

  if (req.session.user) {
    res.render('index', {
      isLogin: true,
    });
  } else {
    res.render('index', {
      isLogin: false,
    });
  }
};

const getSignUpPage = (req, res) => {
  res.render('signup');
};

const signUp = async (req, res) => {
  const userInfo = req.body;
  //console.log(userInfo);
  // { userId: '', userPw: '', userNm: '' }
  let { userId, userPw, userNm } = userInfo;
  userPw = hashPassword(userPw);

  const result = await Member.create({
    userid: userId,
    name: userNm,
    pw: userPw,
  });
  res.send({ success: true, msg: '회원가입 성공' });
};

const getSignInPage = (req, res) => {
  if (req.session.user) {
    res.render('signin', {
      isLogin: true,
      user: req.session.user,
    });
  } else {
    res.render('signin', {
      isLogin: false,
    });
  }
};
const signIn = async (req, res) => {
  console.log(req.session.id);
  console.log(req.session);

  const { userId, userPw } = req.body;

  try {
    const result = await Member.findAll({
      where: {
        userid: userId,
      },
    });

    if (result.length) {
      const passCheck = comparePassword(userPw, result[0].dataValues.pw);
      if (passCheck) {
        req.session.user = userId;
        res.send({ success: true, msg: '로그인 성공', isLogin: true });
      } else {
        res.send({
          success: false,
          msg: '로그인 실패-암호 오류',
          isLogin: false,
        });
      }
    } else {
      res.send({
        success: false,
        msg: '로그인 실패-아이디 오류',
        isLogin: false,
      });
    }

    // Boolean(result.length)
    //   ? res.send({ success: true, msg: '로그인 성공' })
    //   : res.send({ success: false, msg: '로그인 실패' });
  } catch (err) {
    res.send({ success: false, msg: '서버 에러', isLogin: false });
  }
};

const userProfile = async (req, res) => {
  const currentUserId = req.body.userid;

  try {
    const result = await Member.findOne({ where: { userid: req.body.userid } });
    //console.log(result.dataValues);
    res.render('profile', {
      success: true,
      userInfo: result.dataValues,
    });
  } catch (err) {
    res.send({ success: false, msg: '서버 에러' });
  }
};

const editProfile = async (req, res) => {
  // console.log(req.body); // { userid: 'apple', password: '1234', name: 'apple' }
  const { userId, userPw, userNm } = req.body;

  try {
    await Member.update({ name: userNm, pw: userPw }, { where: { userid: userId } });
    res.send({ success: true, msg: '회원정보 업데이트 성공' });
  } catch (err) {
    res.send({ success: false, msg: '서버 에러' });
  }
};

const deleteProfile = async (req, res) => {
  // console.log(req.body); // { userId: 'apple' }
  const { userId } = req.body;
  try {
    await Member.destroy({
      where: { userid: userId },
    });
    res.send({ success: true, msg: '회원정보 삭제 성공' });
  } catch (err) {
    res.send({ success: false, msg: '서버 에러' });
  }
};

const getUserProfile = async (req, res) => {
  if (!req.session.user) {
    console.log('로그인 이력없음');
  }

  try {
    const result = await Member.findOne({
      where: { userid: req.session.user },
    });
    //console.log(result.dataValues);
    res.render('profile', {
      success: true,
      userInfo: result.dataValues,
      isLogin: true,
    });
  } catch (err) {
    res.send({ success: false, msg: '서버 에러' });
  }
};

const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
      return;
    }
    res.redirect('/');
  });
};

// password 해싱 함수. hash된 패스워드를 리턴함
const hashPassword = (password) => {
  let saltRounds = 10;
  return bcrypt.hashSync(password, saltRounds);
};

// 원문 비밀번호와 해시된 비밀번호가 일치하는 확인하는 함수
const comparePassword = (password, hashedPassword) => {
  return bcrypt.compareSync(password, hashedPassword);
};

module.exports = {
  renIndex,
  getSignUpPage,
  getSignInPage,
  signIn,
  userProfile,
  editProfile,
  deleteProfile,
  signUp,
  getUserProfile,
  logout,
};
