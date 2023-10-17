const express = require('express');
const session = require('express-session');
const app = express();
const PORT = 8000;
const cookieParser = require('cookie-parser');
const router = require('./routes/user');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// cookie-parser 미들웨어를 사용하여 쿠키를 파싱합니다.
// 쿠키에 JWT를 넣어서 보내보려고
app.use(cookieParser());

app.use('/', router);

app.get('*', (req, res) => {
  res.render('404');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
