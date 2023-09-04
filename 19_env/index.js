// console.log(process.env);

const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.get('/', (req, res) => {
  console.log(process.env.NAME);
  console.log(process.env.NODE);
  res.send('hello, world');
});

const PORT = process.env.PORT;
app.listen(PORT);
