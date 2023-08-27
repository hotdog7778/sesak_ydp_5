const express = require('express');
const app = express();
const router = require('./routes/route');

app.set('view engine', 'ejs');
app.set('/views', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', router);

app.listen(8889, () => console.log('서버시작, 8889'));
