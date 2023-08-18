const express = require('express');
const app = express();

//ejs
app.set('view engine', 'ejs');
app.set('/views', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('dynamic');
});

app.get('/ajax', (req, res) => {
  res.send(req.query);
});
app.post('/ajax', (req, res) => {
  res.send(req.body);
});

app.get('/axios', (req, res) => {
  res.send(req.query);
});
app.post('/axios', (req, res) => {
  res.send(req.body);
});

app.get('/fetch', (req, res) => {
  res.send(req.query);
});
app.post('/fetch', (req, res) => {
  res.send(req.body);
});

app.listen(8888, () => console.log('서버시작'));

// res.send(req.body)
// res.send("안뇽")
// res.send("<h1>안뇽</h1>");
// res.send(['apple', 'banana']);
// res.json(req.body)
// req.body의 데이터형태는 클라이언트가 보내준대로임
