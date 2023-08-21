const multer = require('multer');
const upload = multer({
  dest: 'uploads/',
});
const express = require('express');
const app = express();

//ejs
app.set('view engine', 'ejs');
app.set('/views', 'views');
//json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
});

//upload.single('userfile') 결과로 req.file 객체가 생성된다.
app.post('/upload', upload.single('userfile'), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.send('file upload complete');
});

app.listen(8888, () => console.log('서버시작'));
