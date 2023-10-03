const express = require('express');
const dbCon = require('./db.con');
const app = express();

//ejs
app.set('view engine', 'ejs');
app.use('/views', 'views');

//json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routing
app.get('/', (req, res) => {
  res.render('index');
});

app.post('/insertDB', (req, res) => {
  // 1. 프론트로부터 form 데이터를 받아서
  const msg = '백엔드';
  res.send(req.body);

  dbCon.query();

  // 2. DB에 저장
});

app.listen(8081, () => console.log('8081 포트, 서버 시작'));
dbCon.connect();

// DB 연결 됐나 테스트해봄
// let sql = 'DESC tb';
// dbCon.query(sql, function (error, results, fields) {
//   if (error) {
//     console.error(error);
//   }
//   console.log(results);
// });
// dbCon.end();
