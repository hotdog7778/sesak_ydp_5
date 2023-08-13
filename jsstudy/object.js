let user = {
  // 객체
  name: 'John', // 키: "name",  값: "John"
  age: 30, // 키: "age", 값: 30
  'likes birds': true, // 복수의 단어는 따옴표로 묶어야 합니다.
};

let key = 'name'; // 사용자가 입력한 값을 key에 저장
console.log(user.key); //undefined >> key변수의 값인 name을 읽지 못한다.
console.log(user[key]); //John

// 객체에 프로퍼티 추가 (변수를 사용)
let key2 = 'gender'; // 사용자가 입력한 값을 key에 저장
user.key2 = 'Male'; // key2 변수를 'gender' 로 변환해서 프로퍼티 값으로 넣어주지 못한다.
console.log(user.gender); // undefined

// 객체 리터럴 안에 프로퍼티가 [] 로 둘러 쌓인경우
let fruit = 'apple';
let bag = {
  [fruit]: 5, // 변수 fruit에서 프로퍼티 이름을 동적으로 받아 옵니다.
};
console.log(bag.apple); // fruit에 "apple"이 할당되었다면, 5가 출력됩니다.

fruit = 'banana';
console.log(bag.banana); // undefined ** 객체가 생성될때 프로퍼티 이름을 동적으로 받아오는거지 그 이후에도 동적으로 바뀌는게 아님. 다시 객체를 생성하면 그때는 프로퍼티 이름이 banana인 객체가 생성될것임
console.log(bag); // { apple: 5 }

// 위와 동일하지만 다른 방식
let fruit2 = 'grape';
let bag2 = {};

bag2[fruit2] = 10; // 변수 fruit2을 사용해 프로퍼티 이름을 만들었습니다.
console.log(bag2); // { grape: 10 }

fruit2 = 'banana';
bag2[fruit2] = 11;
console.log(bag2); // { grape: 10, banana: 11 }

// 프로퍼티 존재 여부 확인하기
console.log('age' in user); // true
console.log('something' in user); // false

// for...in
console.log(user);
for (let key in user) {
  console.log(key);
}

const myUser = {};
myUser.name = 'John';
myUser.surname = 'Smith';
myUser.name = 'Pete';
console.log(myUser);
delete myUser.name;
console.log(myUser);

let isEmpty = function (obj) {
  for (key in obj) {
    if (key in obj) return false;
  }
  return true;
};

let schedule = {};

console.log(isEmpty(schedule)); // true

schedule['8:30'] = 'get up';

console.log(isEmpty(schedule)); // false

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
console.log(sum);

// 함수 호출 전
let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};

const multiplyNumeric = function (obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
};

multiplyNumeric(menu);
console.log(menu);
