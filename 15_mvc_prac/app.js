const express = require('express');
const app = express();
const router = require('./routes/Rmain');

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const cors = require('cors');
app.use(cors());

app.use('/', router);

//error-page
app.get('*', (req, res) => {
  res.render('404');
});

app.listen(8888, () => console.log('서버시작, 8888'));
