'use strict';

const Sequelize = require('sequelize');
const env = 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// 필요한 모델을 만들어야 한다. 여기서 모델은 DB작업을 해줄 놈
// 모델을 반환하는 함수를 정의하러 /models/member.js 파일로 가자
// 이 모델을 회원 모델이라고 이름 지어봄 (회원가입, 탈퇴, 로그인 작업하니까)
db.Member = require('./Member')(sequelize, Sequelize);

module.exports = db;
