// 타입스크립트 basic type

let a: number = 1;
a = 2;
// a = 'hello'; // type error JS에서는 에러로 잡지 않음
console.log(a);

let b: string = 'str';
let c: boolean = true;
let d: undefined;
let e: null = null;

// 사실 타입추론 한다 (암묵적으로)
let aa = 1;
let bb = 'hi';
let cc = false;

// 배열
let numArr: number[] = [1, 2, 3, 4, 5]; // 배열 원소 타입은 Number 라는 의미
// numArr = ['a','b','c'] // type error
let strArr: Array<string> = ['apple', 'banana', 'melon'];

// 배열 원소가 여러 타입
// in Js
let tempArr = [1, true, 'string'];
// in Ts
let tempArrTs: (number | boolean | string)[] = [1, true, 'string'];
let tempArrTs2: Array<boolean | null | number[]> = [true, false, null, [1, 2, 3]];
let tempArrTsAny: any[] = [1, 2, 3, 'wow', true, null];

// object
// object 속 키:밸류의 타입은?
let obj1: object = {
  name: 'sean',
  grade: 1,
};

// Tuple
let drink: [string, string] = ['사이다', '롯데'];
drink[0] = 'cider';
drink[1] = 'lotte';
console.log(drink);

// 동작하긴 하는데 이런식으로 Tuple을 쓰는건 Tuple을 쓰는 의미가 없다. 지양 하자
drink.push('dd');
console.log(drink);

// readonly: 요소 타입 순서와 길이 고정
let drinkReadOnly: readonly [string, number] = ['콜라', 2200];
console.log(drinkReadOnly);
// drinkReadOnly.push('dd'); // TSError: ⨯ Unable to compile

// Tuple ex
type productInfo = [number, string, number];
let product1: productInfo = [1, '로지텍 MX master3', 130000];
let product2: productInfo = [2, '로지텍 K380', 52000];
// let product3: [number, string, number] = [2, '로지텍 K380', 'apple']; // 타입에러

// Enum
enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
}

enum Cafe {
  americano = '아메리카노',
  latte = '카페라떼',
}

console.log(Auth.admin);
console.log(Cafe.latte);

console.log(Auth[1]); // 출력 가능
// console.log(Cafe[1]); // 출력 불가능 // 왜?

enum Cake {
  choco,
  vanulla,
  kiwi = '키위 케이크',
}

console.log(Cake.choco); // 0
console.log(Cake.vanulla); // 1
console.log(Cake.kiwi); // 키위 케이크

////
// any 명시적 사용
let val: any;
val = true;
val = '하이';
val = 10000;
val = { name: 'sesac' };

// any 암묵적 사용
let val2;
val2 = false;
val2 = '바이';

// 실습
let newgame: readonly [object, boolean] = [{ name: '쇼트트랙', type: '혼성계주' }, true];
