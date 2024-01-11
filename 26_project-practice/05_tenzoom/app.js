const dotenv = require('dotenv');
dotenv.config();
const { PORT } = process.env;

const express = require('express');
const app = express();
const indexRouter = require('./routes/index');

// sequelize 모듈을 불러옵니다.
const { sequelize } = require('./models/index');

const cookieParser = require('cookie-parser');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// cookie-parser 미들웨어를 사용하여 쿠키를 파싱합니다.
// 쿠키에 JWT를 넣어서 보내보려고
app.use(cookieParser());

app.use('/', indexRouter);

app.get('*', (req, res) => {
  res.render('404');
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`server open on port ${PORT}`);
  });
});

// 404응답 미들웨어
// app.use((req, res, next) => {
//   const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
//   error.status = 404;
//   next(error);
// });

// // 에러처리 미들웨어
// // 마지막으로 로직처리하는 컨트롤러에서도 (req, res, next) 이런식으로 next 넣어줘야함
// app.use((err, req, res, nest) => {
//   res.locals.message = err.message;
//   res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
//   res.status(err.status || 500);
//   res.send('error');
// });
