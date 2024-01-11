import 'dotenv/config.js';
import express from 'express';
import cookieParser from 'cookie-parser';
import indexRouter from './routes/index.js';
const app = express();
const { PORT } = process.env;

// 삭제 방법 찾기
import { join } from 'path';
import { fileURLToPath } from 'url';
const __dirname = fileURLToPath(new URL('.', import.meta.url));
app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));
//

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser()); // cookie-parser 미들웨어를 사용하여 쿠키를 파싱합니다. // 쿠키에 JWT를 넣어서 보내보려고

app.use('/', indexRouter);

// 에러처리 하는 미들웨어를 사용하는걸로 업그레이드 해보기..
app.get('*', (req, res) => {
  res.render('404');
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`server open on port ${PORT}`);
  });
});

// app.listen(PORT, () => {
//   console.log(`server open on port ${PORT}`);
// });
