// TODO: DB(mysql) 연결
// TODO: 모델 코드
const mysql = require('mysql');
const conn = mysql.createConnection({
  host: '127.0.0.1',
  port: '3306',
  user: 'user98',
  password: '1234',
  database: 'codingon',
  charset: 'utf8mb4',
});

const createUserInfo = (userInfo, cb) => {
  const sql = `INSERT INTO user (userid, name, pw) VALUES ('${userInfo.userId}', '${userInfo.userNm}', '${userInfo.userPw}')`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    cb();
  });
};

const checkUser = (id, pw, cb) => {
  conn.query('select * from user', (err, rows) => {
    if (err) {
      //   console.log(err);
      throw err;
    }
    cb(rows);
  });
};

const foundUserInfo = (id) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM user WHERE userid = "${id}"`;
    conn.query(sql, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

const updateUserInfo = (userInfo, callback) => {
  const { userid, password, name } = userInfo;
  const sql = `UPDATE user SET pw="${password}" , name="${name}"  WHERE userid="${userid}"`;

  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    callback();
  });
};

const deleteUserInfo = (userId, callback) => {
  conn.query(`delete from user where userid = "${userId}"`, (err, rows) => {
    if (err) {
      throw err;
    }

    callback();
  });
};

module.exports = {
  checkUser,
  foundUserInfo,
  updateUserInfo,
  deleteUserInfo,
  createUserInfo,
};
