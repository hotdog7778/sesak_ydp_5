const math = require('./math2');

console.log(math); // { add: [Function: add], PI: 3.141592, E: 2.718 }

console.log(typeof math);
console.log(math.PI);
console.log(math.E);
console.log(math.add(1, 2));
console.log(math.sub(4, 2));
console.log(math.mul(4, 2));
console.log(math.div(5, 2));
console.log(math.add(math.PI, math.E));
// console.log(add(3, 4)); 에러

// 구조분해 한 후에는  math.add 에서 math 생략 가능
const { add, sub, PI, E } = require('./math2');
console.log('----');
console.log(add(10, 10));
console.log(sub(10, 10));
