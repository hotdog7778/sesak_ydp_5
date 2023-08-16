const call = (name) => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log(name);
      resolve(name);
    }, 1000);
  });
};
function back() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('back');
      resolve('back');
    }, 1000);
  });
}
function hell() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('callback hell');
    }, 1000);
  });
}

async function exec(who) {
  let user = await call(who);
  console.log(user + '님 환영합니다.');
  let file = await back();
  console.log(file + '을 실행했구나');
  hell();
}

exec('Kim');
