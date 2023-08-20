const express = require('express');
const app = express();

//ejs
app.set('view engine', 'ejs');
app.set('/views', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('main');
});

app.get('/join', (req, res) => {
  res.send(req.query);
});
app.post('/login', (req, res) => {
  res.send(req.body);
});

app.get('/omdbApi', (req, res) => {
  res.render('omdbApi');
});
app.get('/weatherApi', (req, res) => {
  res.render('weatherApi');
});
app.post('/weatherApiJson', (req, res) => {
  res.render(req.body);
});

app.listen(8888, () => console.log('서버시작'));
