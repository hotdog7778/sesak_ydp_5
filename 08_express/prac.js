// 실습
// 1. /Login 경로로 들어오면 로그인 페이지(ejs)를 응답
// 2. /register 경로로 요청이 들어오면 회원가입 페이지(ejs)를 응답
const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

// 미들웨어 등록
app.use('/views', express.static(__dirname + '/views')); 
app.use('/public', express.static(__dirname + '/static')); 
// app.use('브라우저경로', express.static(__dirname + '실제정적파일의 폴더 위치')); 


// (임시) 데이터베이스에서 가져온 회원정보 (id,pw)
const idFromDB = 'banana';
const pwFromDB = '1234qwer'

app.get('/', function (req, res) {
  res.render('main', { 
    userId: idFromDB,
    userPw: pwFromDB,
    btns: ['배', '감', '귤'],
    isLogin: true,
  });
});
app.get('/login', function (req, res) {
  res.render('login');
});
app.get('/signup', function (req, res) {
  res.render('signup');
});

app.get('/sesac', function (request, response) {
  response.send('<h1>새싹 영등포캠퍼스 5기 수업중~</h1>');
});

app.listen(PORT, function () {
  console.log('Server Start up');
});
