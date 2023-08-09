const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

const PI = 3.141592;
const E = 2.718;

// 객체형식으로 exports
module.exports = {
  // add: add, // 키밸류가 같으니 생략해서 add , 만 적어도 된다.
  // PI: PI,
  // E: E,
  add,
  sub,
  mul,
  div,
  PI,
  E,
};

// 각각 exports
module.exports.add = add;
module.exports.PI = PI;
module.exports.E = E;

// 각각 exports
exports.add = add;
exports.PI = PI;
exports.E = E;
