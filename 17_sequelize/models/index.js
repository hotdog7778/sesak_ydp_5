'use strict';

// 시퀄라이즈 모듈 호출
const Sequelize = require('sequelize');

// config.json 파일을 불러와서 환경설정
const env = 'development';
const config = require(__dirname + '/../config/config.json')[env];

// 빈 db 객체 생성
const db = {};

// config를 이용해서 시퀄라이즈 객체 설정 및 생성
let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize; // DB연결정보를 가진 시퀄라이저
db.Sequelize = Sequelize; // 시퀄라이저 모듈

db.Visitor = require('./Visitor')(sequelize, Sequelize);

module.exports = db;
