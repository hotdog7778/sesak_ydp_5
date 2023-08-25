//module
const express = require('express');
const app = express();

//ejs
app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static'));

//json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router로 프록시
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

//error-page
app.get('*', (req, res) => {
  res.render('404');
});

app.listen(8888, () => console.log('서버시작, 8888'));
