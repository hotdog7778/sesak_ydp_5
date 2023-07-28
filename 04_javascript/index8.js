// 문자열 관련 내장 메서드
let str1 = 'Strawberry Moon';
let str2 = '    Strawberry Moon    ';

// 문자열 인덱싱
console.log(str1[0]);
console.log(str1[0] + str1[12]);

// Sonny
console.log(str1[0] + str1[12] + str1[14] + str1[14] + str1[9]);

// 문자열의 길이 (length는 메서드가 아닌 "속성")
console.log(str1.length);
console.log(str2.length);

// 대/소문자 변환
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());

// 양끝 공백 제거
console.log(str2.trim());
console.log(str2.trim().length); // 'Strawberry Moon'.length 와 동일

// indexOf() 글자 위치 찾기
// 위치(index): 0부터 시작
console.log(str1.indexOf('w'));
console.log(str1.indexOf('r'));
console.log(str1.indexOf('x')); // 존재하지 않는 문자에 대해 검색하면 -1 반환

// slice() 문자열 자르기
console.log(str1.slice(11)); // 11 번 위치의 글자 ~ 끝
console.log(str1.slice(1, 5)); // start(1) ~ end-1(4)까지 자르기

// replace() 문자열 바꾸기
console.log(str1.replace('a', 'x'));
console.log(str1.replace('r', 'x'));
console.log(str1.replaceAll('r', '*'));

// split() 문자열 쪼개기 (배열로 변환)
let date = '23.03.10';
console.log(date.split('.'));
console.log(date.split('3'));

// repeat()
console.log('hi'.repeat(5));

////////////////////////////////////////
// 배열 내장 메서드
let arr1 = [1, 2, 3, 4, 5];
let arr2 = ['quokka', 'rabbit', 'puppy', 'hamster'];

// 배열에 값 추가
// arr1[5] = 6; // arr1 배열의 5번 인덱스에 6이라는 값 추가
// arr1[8] = 100; // 인덱스 건너뛰면 빈 값(empty)이 들어가게 됨

// push(): 끝에 요소 추가
arr1.push(6);
arr1.push(10);
console.log(arr1);

// pop(): 맨 끝 요소 제거
arr1.pop();
console.log(arr1);

// unshift(): 맨 앞에 요소 추가
arr1.unshift('cat');
console.log(arr1);

// shift(): 맨 앞에 요소 제거
arr1.shift();
console.log(arr1);

// includes(요소): 요소 있는지 없는지 검사 (true, false)
console.log(arr2.includes('quokka'));
console.log(arr2.includes('apple'));

// reverse()
console.log(arr1.reverse());
console.log(arr1); // 원본 배열이 변경된 것

// join(): join 안의 문자열 기준으로 병합
console.log(arr2);
console.log(arr2.join(''));
console.log(arr2.join('-'));

// 메서드 체이닝
// 여러 메소드를 연결해서 사용하는 개념!
console.log('hello'.split(''));
console.log('hello'.split('').reverse());
console.log('hello'.split('').reverse().join(''));

// 배열에서 반복문
// - 기본 for문
// - for of 문
// - forEach() 메서드

// 기본 for문
const arr3 = [1, 2, 3, 5, 6, 7];
const alphabets = ['a', 'b', 'c', 'd'];

for (let a = 0; a < arr3.length; a++) {
  console.log(arr3[a]);
}

// for of 문
for (let alpha of alphabets) {
  console.log(alpha);
}

console.log('----------------------');

// forEach 문
alphabets.forEach(function (alpha) {
  console.log(alpha);
});

console.log('----------------------');

// forEach 문
alphabets.forEach(function (alpha, idx, arr) {
  // alpha : 현재밸류값을 의미. 반복중 현재값
  // idx : 반복중 현재의 인덱스 값
  // arr : 반복하는 배열의 전체값
  console.log(alpha);
  console.log('인덱스는 :' + idx);
  console.log(arr);
});

console.log('----------------------');

// 배열의 합
let numbers = [1, 2, 3, 4, 5, 6];
var sum1 = 0;
var sum2 = 0;
var sum3 = 0;

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
  sum1 += numbers[i];
}

console.log('----------------------');

for (let num of numbers) {
  console.log(num);
  sum2 += num;
}

console.log('----------------------');

numbers.forEach((num) => {
  sum3 += num;
});

console.log(sum1, sum2, sum3);

console.log('----------------------');

// map. filter, find 메서드
const arr4 = [1, 2, 3, 4, 5];

// arr4 배열의 모든 요소를 만나서 실행문을 수행한 후 리턴한다. 그러면 요소들의 값이 순차적으로 바뀌던가 할 수 있습니다.
// map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.
const mapResult = arr4.map(function (e) {
  return e * 2;
});
console.log(mapResult);
// 화살표 함수로 바꿔보기
arr4.map((e) => e * 2);

// filter()
// filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.
// 테스트 통과한다는게 true라는거
const filterResult = arr4.filter(function (e) {
  return e > 2;
});
console.log(filterResult); // 결과로 배열요소 1,2 는 사라집니다.
// 화살표 함수로 바꿔보기
arr4.filter((e) => e > 2);

// find()
// find() 메서드는 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환합니다. 그런 요소가 없다면 undefined를 반환합니다.
const findResult = arr4.find((k) => k > 2);
console.log(findResult);
// 일반 함수로 바꿔보기
arr4.find(function (k) {
  k > 2;
});

console.log('----------------------');

// 실습 문제
const words = ['dog', 'cat', 'rabbit', 'apple', 'wow'];
// 1. 글자 수가 3개 초과인 단어만 필터링
const result1 = words.filter((e) => e.length > 3);
console.log(result1);

// 2. 글자에 'a' 문자가 포함되어 있는 단어만 필터링
const result2 = words.filter((e) => e.includes('a'));
console.log(result2);
// String.prototype.includes()
// includes() 메서드는 하나의 문자열이 다른 문자열에 포함되어 있는지를 판별하고, 결과를 true 또는 false 로 반환합니다. 검색 시 대소문자를 구분합니다.
