// 동기함수 내에서 동기적으로 실행된 콜백함수

// let myNum = function (callback) {
//   console.log('1');
//   callback();
//   console.log('2');
// };

// let myEng = function () {
//   console.log('a');
//   console.log('b');
// };

// console.log(Boolean(null));

// 콜백 속 콜백

let myFunc = () => {
  console.log('나의 함수 내부 코드');
};

// 비동기 함수인 setTimeout 함수를 호출
let myAsyncFunc = setTimeout(() => {
  console.log('첫번째 콜백 함수를 실행했습니다.');
  setTimeout(() => {
    console.log('두번째 콜백 함수를 실행했습니다.');
  }, 1000);

  console.log('첫번째 콜백 함수를 실행했습니다 2');
}, 1000);
