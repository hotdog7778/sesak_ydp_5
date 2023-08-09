const fs = require('fs'); // 파일 관련 내장 모듈
const http = require('http'); // 내장 모듈
const server = http.createServer(function (request, response) {
  // 내용 직접 작성해서 사용하기
  // response.writeHead(200, { 'content-type': 'text/html; charset=utf8' }); // 응답 헤더
  // console.log('헤더 작성중');
  // response.write('<h1>Hello, Node.js!<h1>');
  // response.end('<p>My first node server! 한글도 가능</p>');

  // 파일 불러와서 사용하기
  //const data = fs.readFileSync('./index.html');
  //response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
  // response.write(data);
  //response.end(data);

  // try-catch 사용하기
  try {
    // 에러를 발생시키기 위해 없는 html 파일 불러온다.
    const data = fs.readFileSync('./index2.html');
    response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
    response.write(data);
    response.end();
  } catch (error) {
    console.error(error);
    console.log(error.name);
    console.log(error.message);
    response.writeHead(404);
    const error404 = fs.readFileSync('./404.html');
    response.write(error404);
    response.end(error.message);
  }
});
const PORT = 8000;

// request 이벤트
// server.on('request', function (req, res) {
//   console.log('request 이벤트 발생..');
// });
// connection 이벤트
// server.on('connection', function (req, res) {
//   console.log('connection 이벤트 발생..');
// });

// 서버 실행
server.listen(PORT, function () {
  console.log(`이 서버는 ${PORT} 포트로 받습니다.`);
});

// 10초 후 서버 종료
// setTimeout(function () {
//   console.log('서버종료');
//   server.close();
// }, 10000);
