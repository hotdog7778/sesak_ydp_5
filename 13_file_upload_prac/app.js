const express = require('express');
const app = express();
const PORT = 8000;

// TODO: multer 관련 설정

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// TODO: static 미들웨어 설정
// 1. uploads/ 폴더 접근 가능하도록
// 2. static/ 폴더 접근 가능하도록
const multer = require('multer');
const upload = multer({
  dest: 'uploads/', // dest: 클라이언트가 업로드한 파일을 저장할 서버측 경로
});

// TODO: 라우터 정의
// 1. GET /: index.ejs render
// 2. POST /result: result.ejs render
app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
