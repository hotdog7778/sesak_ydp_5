// 디스트럭처링(Destructuring)은 구조화된 배열 또는 객체를 Destructuring(비구조화, 파괴)하여 개별적인 변수에 할당하는 것이다.

// 구조분해
// 1. 객체 {} 를 구조분해
const cookie = {
  choco: '초코맛 쿠키',
  vanilla: '바닐라맛 쿠키',
  oragne: '오렌지맛 쿠키',
};

console.log(cookie);
console.log(cookie.choco);
console.log(cookie.oragne);
console.log(cookie.vanilla);
// 이렇게 cookie를 반복해서 사용하기 싫어서
// 객체를 구조분해 한다.
const { choco, vanilla, oragne } = cookie; // 여기서 순서는 중요하지 않고 키값만 일치하면 된다.
console.log(choco);
console.log(typeof choco); // string
console.log(oragne);
console.log(vanilla);

// 2. 배열 [] 를 구조분해
