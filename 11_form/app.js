const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('/views', 'views');

// 미들웨어 bodyParser 등록
app.use(express.urlencoded({ extended: true })); // post 요청으로 들어오는 모든 형식의 데이터를 파싱
app.use(express.json()); // json 형식으로 데이터를 주고 받음

// 라우팅
app.get('/', (req, res) => {
  res.render('index', { title: '폼 전송을 연습!' });
});

app.get('/getForm', (req, res) => {
  console.log(req.query);
  //
  res.render('result', {
    title: 'GET 요청',
    userInfo: req.query,
  });
});

app.post('/postForm', (req, res) => {
  console.log(req.body);
  //res.send('POST 요청 성공');
  res.render('result', {
    title: 'POST 요청',
    userInfo: req.body,
  });
});

app.get('/prac', (req, res) => {
  res.render('prac/index');
});

app.get('/prac/join', (req, res) => {
  res.render('prac/join', {
    memberInfo: req.query,
  });
});

app.listen(PORT, () => {
  console.log(`${PORT} 포트로 서버 시작`);
});
