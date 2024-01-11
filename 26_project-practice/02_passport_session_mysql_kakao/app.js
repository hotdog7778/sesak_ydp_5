const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const nunjucks = require('nunjucks');
const dotenv = require('dotenv');
const passport = require('passport');

dotenv.config();
const pageRouter = require('./routes/page');
const authRouter = require('./routes/auth');
const { sequelize } = require('./models/index');
const passportConfig = require('./passport/index');

const app = express();

passportConfig(); // 패스포트 설정

app.set('port', process.env.PORT || 8001);

app.set('view engine', 'html');
nunjucks.configure('views', {
  express: app,
  watch: true,
});

sequelize
  .sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
    console.log(err);
  });

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);

app.use(passport.initialize()); // req 객체에 위에서 설정한 passport 설정을 심는다 >> 그리고 사용할 수 있는 메서드들도 심는다.
// req.login() 메서드처럼..  >> passport.serializeUser()메서드 호출한다
// req.isAuthenticated() >> 로그인 중이면 true 반환

app.use(passport.session()); // req.session 객체에 passport 정보를 저장

app.use('/auth', authRouter);
app.use('/', pageRouter);

// 404응답 미들웨어
app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

// 에러처리 미들웨어
// 마지막으로 로직처리하는 컨트롤러에서도 (req, res, next) 이런식으로 next 넣어줘야함
app.use((err, req, res, nest) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

// 앱에 포트 연결
app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});
