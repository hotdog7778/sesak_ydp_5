// 내장 모듈
const crypto = require('crypto');

// crypto 단방향 암호화 구현
// createHash()
// : 지정한 해시 알고리즘으로 해시 객체를 생성하는 암호화 방식

const createHashedPassword = (password) => {
  //   return crypto.createHash('알고리즘').update(암호화 대상).digest('인코딩 방식');
  return crypto.createHash('sha512').update(password).digest('base64');
};

// 해시함수의 한계 : 암호화된 값을 역추적해서 원본 값을 찾아낼 수 있음.
// console.log(createHashedPassword('1234'));

// pbkdf2
// - 주로 비밀번호 저장시 사용
// - buffer 형식의 데이터를 반환 -> toString() 이용해 문자열로 변환

// 단방향 암호화 생성 함수
function saltAndHashPassword(password) {
  const salt = crypto.randomBytes(16).toString('base64'); // 임의의 salt 생성
  const iterations = 100; // 반복횟수
  const keylen = 64;
  const digest = 'sha512'; // 해시 알고리즘

  const hash = crypto
    .pbkdf2Sync(password, salt, iterations, keylen, digest)
    // 여기까지 반환값이 Buffer 형태
    .toString('base64');
  // buffer -> string 변환
  return {
    salt,
    hash,
  };
}

// 암호 비교 함수
function checkPassword(inputPassword, savedSalt, savedHash) {
  const iterations = 100; // 반복횟수
  const keylen = 64;
  const digest = 'sha512'; // 해시 알고리즘

  const hash = crypto
    .pbkdf2Sync(inputPassword, savedSalt, iterations, keylen, digest)
    .toString('base64');

  return savedHash === hash;
}

// 사용 예제
const password = '1234!';

const { salt, hash } = saltAndHashPassword(password);
console.log(`salt: ${salt}, hash: ${hash}`);

// const inputPassword = '1231!';
const inputPassword = '1234!';

const isMatch = checkPassword(inputPassword, salt, hash);

console.log('비밀번호 일치 여부:' + isMatch);
