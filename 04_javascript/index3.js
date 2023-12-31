console.log('connected!');

// 변수선언 키워드 1. var
var a;
console.log(a); // undefined 출력
a = 2;
console.log(a); // 2

// var 변수의 특이점
// 변수 선언전에 값을 할당
aa = 123;
console.log(aa); // 123

// 변수선언 키워드 2. let
let b;
console.log(b); // undefined 출력
b = 7;
console.log(b); // 7

let b2 = 77; // 변수선언 & 할당
console.log(b2); // 77
b2 = 78;
console.log(b2); // 78

// 변수선언 키워드 3. const
// 변수선언과 할당이 동시에 되어야 한다.
// 상수를 저장할 때 사용
const c = 3;
console.log(c); // 3
// c = 33;
console.log(c); // 브라우저 콘솔에서 에러 출력. Uncaught TypeError: Assignment to constant variable.

/*
변수 이름 규칙 (=> 식별자 규칙) 
식별자: 이름을 붙일 때 사용하는 단어 (변수명, 함수명 등등)
 - 키워드(예약어) 사용 불가능
    - 키워드란? 특별한 역할을 이미 하고 있는 단어
    - ex. let, var, const, void, return, for, while, class, if, else, ....
 - 숫자 시작 X
 - 특수문자 _, $ 만 허용
 - 공백문자 X

(관례) 두단어 이상 -> camelCase
ex) redApple
*/

let text = '안녕하세요';
let text2 = '하이';
let gender = '남자';
console.log(text);
console.log(text2);
console.log(text + text2);
console.log(text, text2, '가나다라');
console.log(`${text} 저는 tgkim 입니다. 저의 성별은 ${gender} 입니다.`);

let num = 100;
let num2 = 0.12;
console.log(num, num2);
console.log(num + num2);
console.log(num + 1);
console.log(num - 1);
console.log(num * 1);
console.log(num / 1);

let isWater = true;
let hasApple = false;
console.log(isWater, hasApple);

let temp = null;
console.log(temp);

// undefined
let x;
console.log(x);

// 6. array(배열)
// 배열의 이름 : fruits
// 배열 안에 있는 데이터 하나하나 : 배열의 원소(아이템)
// 배열의 위치 : index : 0부터 시작
// 배열의 길이(크기) : 원소의 개수와 동일

const fruits2 = new Array('orange', 'pineapple', 'grape', 'apple');
console.log(fruits2[1]);

const fruits = ['orange', 'pineapple', 'grape', 'apple'];
console.log(fruits);
console.log(fruits[0]);

// js 에서는 배열 원소의 자료형이 달라도 됨!
const data = [1, '홍길동', false, null, undefined];
console.log(data);

// let data = [1, '홍길동', false, null, undefined];
// data = [2, 0];
// console.log(data);

// Array 안에 Array 들어갈 수 있음. 중첩 가능 => 2차언 배열
const korean = [
  ['가', '나', '다'],
  ['라', '마', '바'],
  ['사', '아', '자'],
];
console.log(korean);

console.log(korean[0]);
console.log(korean[1]);
console.log(korean[2]);

console.log(korean[0][0]);
console.log(korean[0][1]);
console.log(korean[0][2]);

console.log(korean[0][0]);
console.log(korean[1][1]);
console.log(korean[2][2]);

// korean 배열에서 '가자' 글씨 출력하기
console.log(korean[0][0] + korean[2][2]);

// 3차원 배열에서 숫자 8 출력
const nums = [
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [7, 8, 9],
    [10, 11, 12],
  ],
];
console.log(nums[1][0][1]);

// 7. object (key: value)
const cat = {
  name: '나비',
  age: 1,
  isCute: true,
  mew: function () {
    return '냐옹';
  },
};
console.log(cat); // object 출력

// object의 속성(key)에 접근하는 방법
// (1) 점 표기법. 점표기법으로는 변수를 사용할 수 없는것 같다. tempVal을 넣으니 언디파인남.
console.log(cat.name);
console.log(cat.age);
console.log(cat.mew());
// (2) 대괄호 표기법. key가 변수에 저장되어 있을때 주로 사용
console.log(cat['name']);
console.log(cat['age']);
const tempVal = 'name';
console.log(cat[tempVal]);

// typeof : 자료형 확인할 수 있는 키워드
console.log(typeof '문자'); // string
console.log(typeof 1234); // number
console.log(typeof 3.14); // number
console.log(typeof true); // boolean
console.log(typeof false); // boolean
console.log(typeof null); // object ** 특이케이스 ** typeof null의 결과가 object인 것은 버그
console.log(typeof undefined); // undefined
console.log(typeof fruits);
console.log(typeof cat);

// 자신을 소개하는 object 형태의 변수를 선언
// let me = {
//   name: '김태균',
//   age: 32,
//   job: '백수',
// };
// console.log(me);

// 형변환
// 성적 평균 구하는 프로그램 만들기

// let mathScore = prompt('수학점수 입력');
// console.log(mathScore, typeof mathScore);
// prompt 로 입력받은 값은 String 타입으로 반환 됩니다.
// let engScore = prompt('영어점수 입력');
// console.log(engScore, typeof engScore);

// let avg = (mathScore + engScore) / 2;
// 그래서 mathScore + engScore 연산은 num 타입끼리의 연산이 아닌 String 타입 끼리의 연산이 됩니다.
// 이후 /2 를했을때 2는 num타입이며, String 타입과 num 타입의 연산이 진행됩니다. 그리고 num 타입으로 자동 형변환 됩니다.

// console.log(`수학과 영어의 평균 점수는 ${avg}점 입니다.`);

// 1. String(): 문자로 형변환
let str1 = true;
let str2 = 123;
let str3 = null;

console.log(String(str1), typeof String(str1));
console.log(String(str2), typeof String(str2));
console.log(String(str3), typeof String(str3));
console.log(str1.toString(), typeof str1.toString());

// 2. Number(): 숫자로 형변환
let n1 = true;
let n2 = false;
let n3 = '123.9'; // string
console.log(Number(n1), typeof Number(n1)); // ture는 number 로 형변환 되어 1 출력한다.
console.log(Number(n2), typeof Number(n2)); // false는 number 로 형변환 되어 0 출력한다.
console.log(Number(n3), typeof Number(n3)); // 123.9
console.log(parseInt(n3, 10)); // 123 ** 문자열을 10진수 숫자로 변환시켜준다.
console.log(parseFloat(n3, 10)); // 123.9 ** 소수점 까지 포함한 숫자로 변환

// 형변환 실습
let mathScore = '77';
let engScore = '88';

let numMathScore = Number(mathScore);
let numEngScore = Number(engScore);

let avgScore = (numMathScore + numEngScore) / 2;

console.log(avgScore);

// +) null, undefined를 숫자로 바꾼다면?
console.log(Number(undefined), typeof Number(undefined)); // NaN(Not a Number) Number ** 숫자가 아니라는 값이 나오지만 자료형 타입은 Number
console.log(Number(null), typeof Number(null)); // 0 Number
