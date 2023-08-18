const express = require('express');
const dbCon = require('./db.con');
const app = express();

//ejs
app.set('view engine', 'ejs');
app.set('/views', 'views');

//json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routing
app.get('/', (req, res) => {
  res.render('main');
});

app.listen(8080, () => console.log('서버 시작'));
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
