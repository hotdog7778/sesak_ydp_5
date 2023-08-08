// require 외부 모듈 가져오는 메서드
// 경로를 적지 않았기 때문에 NodeJS 자체 라이브러리에서 모듈을 찾게 됩니다.
const mysql = require('mysql2');

// DB connection 정보 설정
const connection = mysql.createConnection({
    host : '127.0.0.1',
    port : '3306',
    user : 'user2',
    password : 'q1w2e3r4!',
    database : 'prac'
})

connection.connect(); // DB 접속
// let sql = "SELECT * FROM testTable"; // SQL 문 작성
let sql = "SELECT * FROM tb"; // SQL 문 작성

// 쿼리 보내기
connection.query(sql, function(error, results, fields) {
    if(error){
        console.error(error);
    }
    console.log(results)
})
connection.end();