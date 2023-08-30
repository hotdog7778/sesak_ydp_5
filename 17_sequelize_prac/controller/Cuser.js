const model = require('../model/User');

// TODO: 컨트롤러 코드
const renIndex = (req, res) => {
  res.render('index');
};

const getSignUpPage = (req, res) => {
  res.render('signup');
};

const signUp = (req, res) => {
  const userInfo = req.body;

  model.createUserInfo(userInfo, () => {
    res.send({
      success: true,
      msg: '회원가입 성공',
    });
  });
};

const getSignInPage = (req, res) => {
  res.render('signin');
};
const signIn = (req, res) => {
  const reqBody = req.body;
  const { userId, userPw } = reqBody;

  model.checkUser(userId, userPw, (resultRows) => {
    const foundUserRow = resultRows.find((e) => e.userid === userId);
    //console.log(foundUserRow);
    if (foundUserRow) {
      if (foundUserRow.pw === userPw) {
        res.send({
          success: true,
          msg: '로그인 성공',
          userInfo: foundUserRow,
        });
      } else {
        res.send({
          success: false,
          msg: '로그인 실패 - 패스워드 오류',
        });
      }
    } else {
      // res.status(401).send({
      res.send({
        success: false,
        msg: '로그인 실패 - 아이디 오류',
      });
    }
  });
};

const userProfile = async (req, res) => {
  const currentUserId = req.body.userid;
  try {
    const currentUserInfo = await model.foundUserInfo(currentUserId);
    // console.log(currentUserInfo); // userid: 'apple', name: 'apple', pw: '1234' }
    // console.log(currentUserInfo[0].userid);
    // console.log(currentUserInfo.name);
    // console.log(currentUserInfo.pw);
    await res.render('profile', {
      success: true,
      userInfo: currentUserInfo[0],
    });
  } catch (err) {
    //console.log('Error:', err);
    res.render('profile', {
      success: false,
      data: err,
    });
  }
};

const editProfile = (req, res) => {
  // console.log(req.body); // { userid: 'apple', password: '1234', name: 'apple' }
  const reqUserInfo = req.body;
  model.updateUserInfo(reqUserInfo, () => {
    res.send({
      isUpdate: true,
      msg: '수정 되었습니다.',
    });
  });
};

const deleteProfile = (req, res) => {
  // console.log(req.body); // { userId: 'apple' }
  const { userId } = req.body;
  model.deleteUserInfo(userId, () => {
    res.send({
      isDelete: true,
      msg: '삭제 되었습니다.',
    });
  });
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
