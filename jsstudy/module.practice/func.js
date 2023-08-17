// require로 모듈을 불러온다. (모듈이된 파일)
const { odd, even } = require('./var');
// 파일의 확장자는 생략하고 ./var
// 경로안에 index.js 파일은 파일명을 생략하고 경로만 적어줄 수 있다.
// 예를들어 ./dir/index.js 라면 ./dir 만 작성해도 된다.

function checkOddOrEven(num) {
  if (num % 2) {
    // 홀수이면
    return odd;
  }
  return even;
}

module.exports = checkOddOrEven;
