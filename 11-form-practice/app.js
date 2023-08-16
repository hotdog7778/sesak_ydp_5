const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('/views', 'views');
// 미들웨어(middleware)
// : 요청(req)과 응답(res)의 중간에서 작업하는 코드
// app.use()

// req.body 객체를 해석할 수 있도록 body-parser 미들웨어 등록
app.use(express.urlencoded({ extended: true })); // post 요청으로 들어오는 모든 형식의 데이터를 파싱
app.use(express.json()); // json 형식으로 데이터를 주고 받음

app.get('/', (req, res) => {
  res.render('main');
});
app.get('/practice1', (req, res) => {
  res.render('practice1');
});
app.get('/practice2', (req, res) => {
  res.render('practice2');
});

app.get('/result1', (req, res) => {
  let getReqJson = req.query;
  res.render('result', { user: getReqJson });
});
app.post('/result2', (req, res) => {
  let postReqJson = req.body;
  res.render('result', { user: postReqJson });
});

app.listen(PORT, () => {
  console.log(`${PORT} is opening!`);
});
