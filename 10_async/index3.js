/* 
async await

async : 
 - 함수 앞에 붙이는 키워드 
 - 그 함수는 프로미스를 반환한다.

await : 
 - 프로미스 객체의 실행이 완료되기를 기다림
 - await 뒤에는 프로미스가 오게 된다.
*/

// 1초 뒤에 과일 배열을 출력하는 코드
function fetchFruits() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const fruits = ['사과', '레몬', '수박'];
      resolve(fruits);
      // reject(new Error('알 수 없는 에러 발생!! 아이템을 가져올 수 없음!!'));
    }, 1000);
  });
}

fetchFruits()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (errer) {
    console.log(error);
  });
