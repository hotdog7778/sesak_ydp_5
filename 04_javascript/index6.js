// 조건문

// if문
if (5 > 3) {
  console.log('깡');
}

// let number = Number(prompt('숫자를 입력해주세요!'));

// if (number > 10) {
//   console.log('입력한 수는 10 보다 큽니다.');
// } else {
//   console.log('입력한 수는 10 보다 작거나 같습니다.');
// }

// if (number > 10) {
//   console.log('입력한 수는 10 보다 큽니다.');
// } else if (number === 10) {
//   console.log('입력한 수는 10 입니다.');
// } else {
//   console.log('입력한 수는 10 보다 작습니다.');
// }

// if (number > 100 || number < 0) {
//   console.log('범위를 지켜주세요 0~100 입니다.');
// } else if (number >= 90) {
//   console.log('A');
// } else if (number >= 80) {
//   console.log('B');
// } else if (number >= 70) {
//   console.log('C');
// } else if (number >= 60) {
//   console.log('D');
// } else {
//   console.log('F');
// }

// if 문 실습
// let age = Number(prompt('나이를 입력하세요'));

// if (age >= 20) {
//   console.log('성인');
// } else if (age >= 17) {
//   console.log('고등학생');
// } else if (age >= 17) {
//   console.log('중학생');
// } else if (age >= 17) {
//   console.log('초등학생');
// } else if (age >= 0) {
//   console.log('유아');
// } else {
//   console.log('제대로 입력해주세요');
// }

// 중첩 if 문 (id, pw 검사하는 함수)
// let userId = 'user01';
// let userPw = '1234';

// function loginUser() {
//   let inputId = prompt('아이디를 입력해 주세요');
//   let inputPW = prompt('비밀번호를 입력해 주세요');

//   // userId와 inputId가 같다면
//   //  - userPw와 inputPW 를 비교
//   // inputId에 빈값이 입력됐다면
//   //  - '아이디 입력 안함' 문구 반환
//   // 두 경우가 아니라면 (inputId 가 틀렸을 때)
//   //  - '아이디 틀림' 문구 반환

//   if (userId === inputId) {
//     if (userPw === inputPW) {
//       return '정상 로그인';
//     } else {
//       return '암호 오류로 정상 로그인되지 않았습니다.';
//     }
//   } else if (userId === '') {
//     return '아이디가 입력되지 않았습니다.';
//   } else {
//     return '아이디 오류로 정상 로그인되지 않았습니다.';
//   }
// }

// let a = loginUser();
// alert(a);

// switch 문
// break: 조건을 빠져나갈때 사용하는 키워드
// - default는 필수가 아니지만 쓰길 권장, 모든 케이스가 아닐경우를 놓칠 수 있음
let a = 5;
switch (a) {
  case 3:
    console.log('a = 3');
    break;
  case 4:
    console.log('a = 4');
    break;
  case 5:
    console.log('a = 5');
    break;
  default:
    console.log('a = ??');
}

// if (number > 100 || number < 0) {
//   console.log('범위를 지켜주세요 0~100 입니다.');
// } else if (number >= 90) {
//   console.log('A');
// } else if (number >= 80) {
//   console.log('B');
// } else if (number >= 70) {
//   console.log('C');
// } else if (number >= 60) {
//   console.log('D');
// } else {
//   console.log('F');
// }

let score = 100;
let numScore = parseInt(score / 10);

switch (numScore) {
  case 10:
  case 9:
    console.log('A');
    break;
  case 8:
    console.log('B');
    break;
  case 7:
    console.log('C');
    break;
  case 6:
    console.log('D');
    break;
  default:
    console.log('F');
}

// 삼항 연산자
num = 1;
num % 2 === 1
  ? console.log('참입니다. 홀수')
  : console.log('거짓입니다. 따라서 짝수');

// 실습
let now = new Date().getHours();
console.log(now);
now < 12 ? console.log('오전') : console.log('오후');
