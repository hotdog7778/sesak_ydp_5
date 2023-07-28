// pass by value
// : 원시 타입은 값(value)이 복사되어 전달
let num = 1;
let num2 = num;
console.log(num, num2); // 1 1
console.log(num === num2); // true

num = 5; // 1 -> 5
console.log(num, num2); // 5 1
console.log(num === num2); // false

// pass by reference
const obj = { one: 1, two: 2 };
const obj2 = obj;
console.log(obj, obj2); // { one: 1, two: 2 }
console.log(obj === obj2); // true

obj.five = 5;
console.log(obj, obj2); // { one: 1, two: 2, five: 5 }
console.log(obj === obj2); // true
// obj와 obj2는 현재 같은 데이터도 같고 참조값(address, 주소)도 같다

//////
const obj3 = { one: 1, two: 2 };
const obj4 = { one: 1, two: 2 };
console.log(obj3, obj4);
console.log(obj3 === obj4); // false
// why? obj3와 obj4는 현재 같은 데이터를 같지만, 서로 다른 별도의 객체
// 즉, 참조값(address, 주소)가 다르다

obj3.five = 5;
console.log(obj3, obj4);
console.log(obj3 === obj4);

///////////
const arr = [1, 2];
const arr2 = arr;
// arr과 arr2 서로 같은 참조값을 가짐

console.log(arr, arr2);
console.log(arr === arr2); // true

arr.push(5);
console.log(arr, arr2);
console.log(arr === arr2); // true

const arr3 = [1, 2];
const arr4 = [1, 2];
console.log(arr3, arr4);
console.log(arr3 === arr4);

arr3.push(5);
console.log(arr3, arr4);
console.log(arr3 === arr4);
///////
// obj = { hi: 'hi' }; // obj가 const 로 선언되어 재할당 불가능
// 즉, obj가 참조하고 있는 주소를 바꿀 수 없음

///////
// 객체 리터럴 (object literal), 딕셔너리
// : key-value 쌍으로 이루어진 데이터 구조

// js에서 객체는 여러 의미
// typeof [] -> object, typeof {} -> object
// 이 때의 객체는 광범위한 의미의 "객체"

/////////////////////////////////////////////
console.clear();

// js 표준 내장 객체
// 1. Date 객체: 시간, 날짜

// 날짜 생성하여 저장
let now = new Date(); // 현재 일시
console.log(now);

// 타임스탬프(timestamp)
// : 1970년 1월 1일을 기준으로 흘러간 밀리초(ms)를 나타내는 정수
// new Date(timestamp)
let jan_01_1970 = new Date(0);
console.log(jan_01_1970);

let jan_02_1970 = new Date(24 * 3600 * 1000);
console.log(jan_02_1970);

// new Date(date_string)
let date1 = new Date('2023-07-17');
console.log(date1);

let date2 = new Date('2023', '06', '17'); // MM(0(1월)~11(12월) 주의)
console.log(date2);

// Date 객체의 메서드
// ...
// 실습 문제
// getDay() 메서드를 이용
// Date 객체를 이용해 오늘 요일을 얻고, if or switch 구문을 이용해서 평일/주말을 구분해서 콘솔창에 출력하는 코드

let myDate = new Date();
let myDay = myDate.getDay();

switch (myDay) {
  case 6:
  case 7:
    console.log('주말 ');
    break;
  default:
    console.log('평일 ');
}
// 오늘이 무슨요일인지 까지 같이 출력해줄 수 있는 좋은방법이 있을까?

// Math 객체
// 수학적인 상수와 함수
// Math의 속성들
Math.E; // 자연로그
Math.PI; // 원주율
Math.SQRT2; // 2의 제곱근
// Math의 메서드들
// ...
// 0 <= Math.random() < 1
console.log(Math.random()); // 정수만 나오는게 아님
console.log(Math.floor(Math.random() * 10)); // 0 ~ 9

// 실습 퀴즈
// 1 ~ 100
console.log(Math.floor(Math.random() * 100) + 1);
// 20 ~ 22
console.log(Math.floor(Math.random() * 3) + 20);
console.log(Math.floor((Math.floor(Math.random() * 11) + 100) / 5));
