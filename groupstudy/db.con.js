const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: '127.0.0.1',
  port: '3306',
  user: 'user2',
  password: 'q1w2e3r4!',
  database: 'prac',
});

module.exports = mysqlConnection;

// connection.connect(); // DB 접속
// // let sql = "SELECT * FROM testTable"; // SQL 문 작성
// let sql = 'SELECT * FROM tb'; // SQL 문 작성

// // 쿼리 보내기
// connection.query(sql, function (error, results, fields) {
//   if (error) {
//     console.error(error);
//   }
//   console.log(results);
// });
// connection.end();
