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
// (1) 점 표기법
console.log(cat.name);
console.log(cat.age);
console.log(cat.mew());
// (2) 대괄호 표기법. key가 변수에 저장되어 있을때 주로 사용
console.log(cat['name']);
console.log(cat['age']);
const tempVal = 'name';
console.log(cat[tempVal]);
console.log(cat.tempVal);
