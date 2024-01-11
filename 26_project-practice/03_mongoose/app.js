const express = require('express');
const connect = require('./schemas/index');
const path = require('path');
const indexRouter = require('./routes/index');

const nunjucks = require('nunjucks');

const app = express();
app.set('port', process.env.PORT || 3002);

app.set('view engine', 'html');
nunjucks.configure('views', {
  express: app,
  watch: true,
});

// 몽고 디비에 연결
connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const MembershipMemberStudy = require('./schemas/membershipMemberStudy');

app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/comments', commentsRouter);

// app.use((req, res, next) => {
//   const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
//   error.status = 404;
//   next(error);
// });

// app.use((err, req, res, next) => {
//   res.locals.message = err.message;
//   res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
//   res.status(err.status || 500);
//   res.render('error');
// });

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});
