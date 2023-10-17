const express = require('express');
const session = require('express-session');
const app = express();

// Env
const PORT = 8080;
const SESSION_KEY = 'MySessionSecretKey'; // 세션 ID 생성에 사용하는 키

// EJS 템플릿 엔진으로 테스트
app.set('view engine', 'ejs');

// express-session 미들웨어
app.use(
  session({
    secret: SESSION_KEY,
    resave: false, // default 는 true
    saveUninitialized: false, // default 는 true
    // store: MemoryStore, // default
    cookie: {
      path: '/', // default
      httpOnly: true, // default
      secure: false, // default
      maxAge: 10 * 60000, // default는 NULL
    },
    name: 'connect.sid', // default
  })
);

app.use((req, res, next) => {
  console.log(req.sessionStore); // check session Store

  //모든 세션(연결)들을 볼수있음
  req.sessionStore.all((err, sessions) => {
    console.log('seesions', sessions);
    next();
  });
});

app.get('/', (req, res) => {
  res.render('sessionTest');
});
app.get('/login', (req, res) => {
  // 로그인 과정 생략

  // 회원인거 확인 후 세션에 저장 > 세션 초기화 및 저장 진행
  req.session.isLogin = true;

  res.send(req.session.isLogin);
});
app.get('/profile', (req, res) => {
  if (req.session.isLogin) {
    res.send('로그인 되어있기 때문에 회원 정보를 보여줘도 됌');
    return;
  }
  res.status(401).send('로그인이 필요합니다.');
});
app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
      return;
    }
    res.send({
      msg: '로그아웃 됨',
      reqSession: req.session,
    });
  });
});

app.listen(PORT, () => {
  console.log('서버시작' + PORT);
});
