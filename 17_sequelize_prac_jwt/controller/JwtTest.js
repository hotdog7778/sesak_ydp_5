const { Member } = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'jwtSecret';

// 토큰 확인 페이지
const tokenTest = (req, res) => {
  res.send(res.locals.decoded);
  // exp: 1697541810
  // iat: 1697541210
  // id: "tgkim"
  // iss: "NodeServer"
};

// 메인페이지 렌더
const renIndex = (req, res) => {
  try {
    // <% if(isLogin) {%>
    //   <p>로그인 on</p>
    //   <br />
    //   <%} else {%>
    //   <p>로그인 off</p>
    //   <br />
    //   <%}%>

    // 토큰 검증
    // verify(요청헤더에 저장된 토큰 , 비밀키)
    // 결과값으로 토큰의 내용이 반환
    // console.log(req.headers.authorization);
    // const jwtToken = jwt.verify(req.headers.authorization, JWT_SECRET) || '없음';
    // console.log(jwtToken);
    res.render('index', {
      isLogin: false,
      // jwtToken,
    });
  } catch (err) {
    res.render('index', {
      isLogin: false,
      // jwtToken: '없음',
    });
  }
};

// 회원가입 페이지 렌더
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

// 로그인 페이지 렌더링
const getSignInPage = (req, res) => {
  try {
    res.render('signin', {
      isLogin: true,
    });
  } catch (err) {
    res.render('signin', {
      isLogin: false,
    });
  }
};

// 로그인 처리 (토큰 생성)
const signIn = async (req, res) => {
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
        // 정상 로그인 되었을때 JWT 생성 로직
        // sign({토큰의 내용}, 토큰의 비밀 키, {토큰의 설정})
        // issuer 는 발급자임.
        const token = jwt.sign({ id: result[0].userid }, JWT_SECRET, { expiresIn: '10m', issuer: 'NodeServer' });
        console.log('컨트롤러 >> ', token);
        res.send({
          success: true,
          msg: '로그인 성공, 토큰 발행되었음',
          isLogin: true,
          token,
        });
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
  tokenTest,
};
