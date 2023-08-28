const mysql = require('mysql');
const conn = mysql.createConnection({
  host: '127.0.0.1',
  port: '3306',
  user: 'user98',
  password: '1234',
  database: 'sesac',
  charset: 'utf8mb4',
});

const getVisitors = (callback) => {
  conn.query('select * from visitor', (err, rows) => {
    if (err) {
      throw err;
    }
    console.log('model >>', rows);
    callback(rows);
  });
};

const postVisitor = (data, callback) => {
  conn.query(
    `insert into visitor values 
    (null, "${data.name}", "${data.comment}")`,
    (err, rows) => {
      if (err) {
        throw err;
      }
      console.log('model >>', rows);
      callback(rows.insertId);
    }
  );
};

module.exports = {
  getVisitors,
  postVisitor,
};
