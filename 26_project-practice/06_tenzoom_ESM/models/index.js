// 시퀄라이즈 모듈 호출
import config from '../config/config.js';
import { Sequelize } from 'sequelize';

// 모델 담을 빈객체
const db = {};
// config를 이용해서 시퀄라이즈 객체 설정 및 생성
// const sequelize = new Sequelize(config.database, config.username, config.password, config);
const sequelize = new Sequelize(config.database, config.username, config.password, config);

import Category from './Category.js';
import Group from './Group.js';
import GroupMember from './GroupMember.js';
import GroupRequest from './GroupRequest.js';
import SocialLogin from './SocialLogin.js';
import Timer from './Timer.js';
import User from './User.js';

// 모델 관계
// 한명의 유저는 여러개의 Timer를 가진다
// 사용자가 삭제되면 해당 사용자와 연결된 모든 타이머 자동 삭제 == onDelete: 'CASCADE'
User.hasMany(Timer, { foreignKey: 'user_id', onDelete: 'CASCADE' });
Timer.belongsTo(User, { foreignKey: 'user_id', onDelete: 'CASCADE' });

// 한명의 유저는 여러개의 소셜 로그인 방식을 가진다
User.hasMany(SocialLogin, { foreignKey: 'user_id', onDelete: 'CASCADE' });
SocialLogin.belongsTo(User, { foreignKey: 'user_id', onDelete: 'CASCADE' });

// 한명의 유저는 한개의 카테고리만
// 하나의 그룹은 한개의 카테고리만
User.belongsTo(Category, { foreignKey: 'category_name' });
Group.belongsTo(Category, { foreignKey: 'category_name' });

// GroupMember테이블을 매개로
// 유저:그룹 의 다대다 관계 설정
User.belongsToMany(Group, { through: GroupMember });
Group.belongsToMany(User, { through: GroupMember });

// 하나의 사용자는 여러 그룹에 요청
// 유저:그룹 의 다대다 관계 설정
// 아직 승인되지 않은 요청들을 확인할때 의미있는 데이터
User.belongsToMany(Group, { through: GroupRequest });
Group.belongsToMany(User, { through: GroupRequest });

db.sequelize = sequelize; // DB연결정보를 가진 시퀄라이저
db.Sequelize = Sequelize; // 시퀄라이저 모듈

db.Category = Category;
db.Group = Group;
db.GroupMember = GroupMember;
db.GroupRequest = GroupRequest;
db.SocialLogin = SocialLogin;
db.Timer = Timer;
db.User = User;

export default db;
