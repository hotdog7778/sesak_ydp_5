// 시퀄라이즈 모듈 호출
const Sequelize = require('sequelize');

// .env
const { DB_ENV } = process.env;

// config.json 파일을 불러와서 DB 연결 정보를 제공
const config = require(__dirname + '/../config/config.json')[DB_ENV];
const db = {};

// config를 이용해서 시퀄라이즈 객체 설정 및 생성
let sequelize = new Sequelize(config.database, config.username, config.password, config);

const User = require('./User')(sequelize, Sequelize);
const Study = require('./Study')(sequelize, Sequelize);
// const UserStudy = require('./UserStudy')(sequelize, Sequelize);

// 관계 설정
// User 와 Study 는 다대다 == UserStudy

// User.belongsToMany(Study, { through: 'UserStudy' });
// User.belongsToMany(Study, { as: 'study', through: 'UserStudy', foreignKey: 'study_id' });
User.belongsToMany(Study, {
  as: 'Tasks', // 별칭
  through: 'worker_tasks', // 중간 테이블 이름
  foreignKey: 'user_id', // User 모델의 외래 키 열 이름
  otherKey: 'study_id', // Study 모델의 외래 키 열 이름
});

// Study.belongsToMany(User, { through: 'UserStudy' });
Study.belongsToMany(User, { as: 'user', through: 'UserStudy', foreignKey: 'user_id' });

const UserStudy = sequelize.define('UserStudy', {});

db.sequelize = sequelize; // DB연결정보를 가진 시퀄라이저
db.Sequelize = Sequelize; // 시퀄라이저 모듈

db.User = User;
db.Study = Study;
db.UserStudy = UserStudy;

module.exports = db;
