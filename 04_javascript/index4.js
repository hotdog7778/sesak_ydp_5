// 연산자

// 대입 연산자(=)E
// : 변수에 값을 "할당"할 때 사용하는 연산자

// 산술 연산자
// 사칙연산: +, -, /, *
// 나머지 연산: %
// 거듭제곱 연산: **

let a = 5;
let b = 2;

console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a * b);
console.log(a % b);
console.log(a ** b);

// 비교 연산자
// 동등 비교 (같음(동등): ==, === // 같지 않음(부등): !=, !==)
// ==, !=: "값"만 비교 => type 비교하지 않는 관대한 연산자다!
// ===, !==: "값"과 "type" 모두 비교 => 엄격한 연산자
console.log(1 == 1); // true
console.log(1 == 2); // false
console.log(1 != 2); // true
console.log(1 != 1); // false
console.log('1' == 1); // true
console.log('1' != 1); // false
console.log('--------------------');

console.log(1 === 1); // true
console.log(1 === 2); // false
console.log(1 !== 2); // true
console.log(1 !== 1); // false
console.log('1' === 1); // false
console.log('1' !== 1); // true
console.log('--------------------');

// 크기 비교
// >, <, >=, <=
console.log(2 > 1); // true
console.log(2 >= 2); // true
console.log(2 < 1); // false
console.log(2 <= 2); // true

console.log(1 >> '2');
