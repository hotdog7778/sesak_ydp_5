const http = require('http');
// require 외부 모듈 가져오는 메서드
// 경로를 적지 않았기 때문에 NodeJS 자체 라이브러리에서 모듈을 찾게 됩니다.
const mysql = require('mysql')

// DB connection 정보 설정
const connection = mysql.createConnection({
    host : 'localhost' ,
    port : '3306' ,
    user : 'tgkim' ,
    password : 'showme123',
    database : 'tgkim'
})

connection.connect(); // DB 접속
let sql = "SELECT * FROM testTable"; // SQL 문 작성

// 쿼리 보내기
connection.query(sql, function(error, results, fields) {
    if (error) throw error;
    console.log(results[0])
})
connection.end()




const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});