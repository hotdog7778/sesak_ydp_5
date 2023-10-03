const e = require('express');
const model = require('../model/boardModel');

// 임시
const dbCon = require('../model/db.con');

const helloCtr = (req, res) => {
  res.render('mainPage');
};

const featuresCtr = (req, res) => {
  res.render('features');
};

const board = (req, res) => {
  res.render('board');
};

const postBoard = (req, res) => {
  // 요청온 req 를 받아서 DB에 저장
  // console.log(req.body);
  const { name, title, content } = req.body;

  const sql = `
  INSERT INTO noticeboard ( name, title, content )
    values ( "${name}", "${title}", "${content}" )
  `;

  dbCon.query(sql, (err, rows, fields) => {
    if (err) {
      console.log(err);
    } else {
      console.log('데이터 저장 완료');
    }
  });

  console.log('여기는 백엔드. DB에 저장 완료');
};

module.exports = {
  helloCtr,
  featuresCtr,
  board,
  postBoard,
};
