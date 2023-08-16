let promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    // resolve('완료');
    reject(new Error('에러 발생!'));
  }, 1000);
});
// 결과로 promise 객체의 프로퍼티는
// state는 fulfilled,
// result는 '완료'

// let promise2 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     reject(new Error('에러 발생!'));
//   }, 1000);
// });
// 결과로 promise2 객체의 프로퍼티는
// state는 rejected
// result는 new Error('에러 발생!')  = 에러객체

promise.then(
  function (a) {
    console.log(a);
  },
  function (b) {
    console.log(`${b}ㅋㅋㅋ`);
  }
);

promise
  .then(function (a) {
    console.log(a);
  })
  .catch(function (error) {
    console.log(error.message);
  });

// new Promise((resolve, reject) => {
//   setTimeout(() => resolve('결과'), 2000);
// })
//   .finally(() => console.log('프라미스가 준비되었습니다.'))
//  .then((result) => console.log(result));
