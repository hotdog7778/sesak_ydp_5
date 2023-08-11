////// 구조 분해 할당

//// 1. 배열 구조 분해
// 이름은 상관없고 순서가 가장 중요합니다.

const arr1 = [1,2,3,4,5];
const arr2 = ['a','b','c'];

// const [one, two, three, four, five] = arr1;
// console.log(one, two, three, four, five); // 1,2,3,4,5

const [a, b, c] = arr2;
console.log(a,b,c); // a b c

// 스왑
let num1 = 1;
let num2 = 3;
console.log(num1, num2); // 1 3
[num2, num1] = [num1, num2];
console.log(num1, num2); // 3 1

// 구조분해 하면서 값을 할당
const lists = ['apple', 'grape'];
[f1, f2, f3 = 'oragne'] = lists;
console.log(f1, f2, f3)

// 할당연산자 우측에 문자열
const [q,w,e] = "abc";
console.log(q,w,e) // a b c

// 할당 연산자 우측에 반복 가능한 객체
let [one, two, three] = new Set([1, 2, 3]);
console.log(one, two, three); // 1 2 3

// 할당 연산자 좌측에 '할당할 수 있는 모든 것'이 올수 있음
let user = {};
[user.name, user.surname] = "tg kim".split(' ');
console.log(user.name, user.surname); // tg kim

// entries()로 반복
let user2 = {
    name: "John",
    age: 30
  };  
// 객체의 키와 값 순회하기
for (let [key, value] of Object.entries(user2)) {
    console.log(key, value);
// console.log(`${key}:${value}`); // name:John, age:30이 차례대로 출력
}

// ... 으로 나머지
const soa = [1, 2, 3];
const sob = [4, 5];
const spread = [...soa, ...sob];
console.log(spread); // [ 1, 2, 3, 4, 5 ]
console.log(spread[0]); // 1

let [soa1, soa2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(soa1) // Julius
console.log(soa2) // Caesar
console.log(rest) // [ 'Consul', 'of the Roman Republic' ]

function get(a, ...rest) {
    console.log('a:'+a);
    console.log('rest:'+rest);
}
const test = [ 'q','w','e','r'];
get(1,...test);

//// 2. 객체 구조 분해 할당
// 키 이름이 중요하고(똑같아야함), 순서는 중요하지 않습니다.
const obj = {
    title: '엘리멘탈',
    content: '재밌음',
    num: 5,
}
// const {num, title, content} = obj;
// console.log(title,content,num); // 엘리멘탈 재밌음 5
// 키를 추가하면서 구조 분해
const {num, title, content, stat = 3} = obj;
console.log(title,content,num, stat); // 엘리멘탈 재밌음 5 3

const {p1, p2, p3} = obj;
console.log(p1, p2, p3); // undefined undefined undefined

const {title:a1, content:a2, num:a3} = obj;
console.log(a1, a2, a3); // 엘리멘탈 재밌음 5

// spread in object
const chip = {
    base: 'chip',
    company: 'lotte',
}
const potatoChip = {
    ...chip,
    in: 'potato',
}
const sweetPotatochip = {
    ...chip,
    flavor: 'sweet potato',
}
console.log(chip);
console.log(potatoChip);
console.log(sweetPotatochip);



// 실습
function getInfo(lecture) {
    // TODO: 구조 분해 할당을 사용하여 값 추출
    let {name,part,leader} = lectureInfo;

    // TODO: 출력 문장 생성
    const output = `${name} 강의는 ${part} 개발을 공부합니다. 수업의 리더는 ${leader} 입니다.`

    return output;
}

const lectureInfo = {
    name: 'SESAC x CODINGOn',
    part: 'WEB',
    leader: 'Sean',
};

const result = getInfo(lectureInfo);
console.log(result); // SESAC x CODINGOn 강의는 WEB 개발을 공부합니다. 수업의 리더는 Sean 입니다.

// 실습
const word1 = "abc";
const word2 = "xyz";
const result2 = [...word1, ...word2];
console.log(result2)