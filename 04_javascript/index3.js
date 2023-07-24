console.log('connected!')

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
console.log(b2) // 77
b2 = 78;
console.log(b2) // 78

// 변수선언 키워드 3. const
// 변수선언과 할당이 동시에 되어야 한다.
// 상수를 저장할 때 사용
const c = 3;
console.log(c) // 3
// c = 33;
console.log(c) // 브라우저 콘솔에서 에러 출력. Uncaught TypeError: Assignment to constant variable.

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
console.log(text)
console.log(text2)
console.log(text + text2)
console.log(text, text2, "가나다라")
console.log(`${text} 저는 tgkim 입니다. 저의 성별은 ${gender} 입니다.`)


let num = 100;
let num2 = 0.12;
console.log(num,num2);
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