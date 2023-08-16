async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('완료!'), 5000);
  });

  let result = await promise; // 프라미스가 이행될 때까지 기다림 (*)

  /////
  // 여기에 코드들은 프라미스가 이행된 후에나 실행됩니다.
  console.log('??????????');
  /////

  console.log(result); // "완료!"
}

f();
