const express = require('express');
const session = require('express-session');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: 'MySessionSecretKey',

    // resave 옵션은
    // 모든 request마다 기존에 있던 session에 아무런 변경사항이 없을 시에도
    // 그 session을 다시 저장하는 옵션입니다.
    // (매 request 마다 세션을 계속 다시 저장하는 것)
    resave: false, // 필수옵션 : 경량 세션을 강제로 활성화
    // 변경사항도 없는 session이 매번 다시 저장되는 걸 막음

    // saveUninitialized는 request가 들어오면 해당 request에서 새로 생성된 session에 아무런 작업이 이루어지지 않은 상황
    saveUninitialized: false, // 권장사항: 데이터가 존재할 때만 세션을 저장
    // true 라면 아무 내용 없는 session이 계속해서 저장될 수 있음

    cookie: {
      // document.cookie와 같은 자바스크립트로 쿠키를 조회하는 것을 막는 옵션
      // 브라우저에서 HTTP Only가 설정된 쿠키를 조회할 수 없다.
      // 서버로 HTTP Request 요청을 보낼때만 쿠키를 전송한다.
      // 이를 통해 XSS(Cross Site Scripting) 공격을 차단할 수 있다.
      httpOnly: true,
      maxAge: 60 * 60000, // 1h
    },
  })
);

// TODO: 라우팅 분리
// 기본 주소: localhost:PORT/user <- 주의!!
const router = require('./routes/user');
app.use('/', router);

// TODO: 404 에러 처리
app.get('*', (req, res) => {
  res.render('404');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/user`);
});
