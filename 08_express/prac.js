// 실습
// 1. /Login 경로로 들어오면 로그인 페이지(ejs)를 응답
// 2. /register 경로로 요청이 들어오면 회원가입 페이지(ejs)를 응답
const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', function (req, res) {
  res.render('main');
});
app.get('/login', function (req, res) {
  res.render('login');
});
app.get('/signup', function (req, res) {
  res.render('signup');
});

app.listen(PORT, function () {
  console.log('Server Start up');
});
