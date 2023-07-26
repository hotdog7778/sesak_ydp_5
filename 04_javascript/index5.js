// 함수

// 함수 정의(선언) : 함수를 생성
// 함수 호출 : 함수를 사용

// 함수 선언
function helloWorld() {
  console.log('Hello, World');
}
// 함수 호출
helloWorld();

// 함수 선언
function helloWorld2() {
  return 'Hello, World2';
  // return (반환값)
  // : 함수 내부 코드의 최종 결과값
  // return 키워드를 만나면 거기서 함수 실행 중단
}
console.log(helloWorld2());

// 2. 함수 표현식(Function Expression)
const helloWorld3 = function () {
  console.log('Hello, World 3');
};

const helloWorld4 = function () {
  return 'Hello, World 4';
};

// 함수 호출
helloWorld3();
console.log(helloWorld4());

// 매개변수가 있는 함수
function hello1(text) {
  return text;
}
console.log(hello1('안녕하세요!'));

const apple = '사과는 맛있군';
console.log(hello1(apple));

const myNum = 8;
console.log(hello1(myNum));

// 함수 선언
function hello2(text, name) {
  return `${text} ${name}`;
}
console.log(hello2('안녕', 'Joe'));
console.log(hello2(1234, 9876));

// 함수 선언
function hello3(text, name) {
  console.log(`${text} ${name}`);
}
hello3('안녕하세요', '반갑습니다');

// 3. 화살표 함수 (arrow function)
// 함수 선언 문법이 간결합니다.
const myFunc1 = (x) => x;
/* 위에 작성한 함수와 같은 동작
function myFunc1(x) {
    return x;
}
*/
const mySum = (a, b) => a + b;
console.log(mySum(5, 2));

const myMulti = (a, b) => {
  let result = a * b;
  return result;
};
console.log(myMulti(3, 4));

// 호이스팅(hosting) -> 함수&변수에서 다 발생함
// : "끌어올리다" 사전적 의미
// 함수에서는 "함수 선언문" 호이스팅 대상이 됨
// : 코드가 실행되기 전에 함수 선언을 최상단으로 끌어올리는 현상
// 참고) 변수에서는 "var"이 호이스팅의 대상 (let, const 는 X)

myHello(); // 함수 호출 이후 선언한 형태
function myHello() {
  console.log('hello~~~');
}

// 함수 표현식
// - 함수표현식으로 정의된 함수는 호이스팅의 대상이 되지 않습니다.
// - 함수 호출 이후 선언한 형태는 불가능
// myHello2(); // ReferenceError 발생
const myHello2 = function () {
  console.log('hello~~~2');
};

// js 함수 실습 1
// 함수선언 사용
function multiply(num1, num2) {
  return num1 * num2;
}
console.log(multiply(5, 10));

// 화살표 함수 사용
const multiply2 = (num1, num2) => num1 * num2;
console.log(multiply2(1, 2));

// 함수 표현식 사용
const multiply3 = function (num1, num2) {
  return num1 * num2;
};
console.log(multiply3(5, 3));

// js 함수 실습 2
function square(n1) {
  console.log(n1 ** 2);
}
square(5);

// 화살표 함수 사용
const square2 = (n1) => console.log(n1 ** 2);
square2(7);

// 함수 표현식 사용
const square3 = function (n1) {
  console.log(n1 ** 2);
};
square3(3);
