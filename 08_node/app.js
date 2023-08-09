// math 파일에서 정의한 add 함수를 불러와서 쓰기
const add = require('./math');

console.log(add); // [Function: add]

let result = add(1, 2);
console.log(result); // 3
