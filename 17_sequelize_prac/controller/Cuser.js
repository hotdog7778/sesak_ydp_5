const { Member } = require('../models/index');

// TODO: 컨트롤러 코드
const renIndex = (req, res) => {
  res.render('index');
};

const getSignUpPage = (req, res) => {
  res.render('signup');
};

const signUp = async (req, res) => {
  const userInfo = req.body;
  //console.log(userInfo);
  // { userId: '', userPw: '', userNm: '' }
  const { userId, userPw, userNm } = userInfo;
  const result = await Member.create({
    userid: userId,
    name: userNm,
    pw: userPw,
  });
  res.send({ success: true, msg: '회원가입 성공' });
};

const getSignInPage = (req, res) => {
  res.render('signin');
};
const signIn = async (req, res) => {
  const reqBody = req.body;
  const { userId, userPw } = reqBody;
  try {
    const result = await Member.findAll({
      where: {
        userid: userId,
        pw: userPw,
      },
    });

    Boolean(result.length)
      ? res.send({ success: true, msg: '로그인 성공' })
      : res.send({ success: false, msg: '로그인 실패' });
  } catch (err) {
    res.send({ success: false, msg: '서버 에러' });
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
    await Member.update(
      { name: userNm, pw: userPw },
      { where: { userid: userId } }
    );
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

module.exports = {
  renIndex,
  getSignUpPage,
  getSignInPage,
  signIn,
  userProfile,
  editProfile,
  deleteProfile,
  signUp,
};
