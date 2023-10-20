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

// type && interface
// 1. interface
interface Student {
  name: string;
  isPassed: boolean;
}

const student1: Student = {
  name: 'jinheyong',
  isPassed: true,
};

const student2: object = {
  name: 'jinheyong',
  isPassed: true,
  addr: 'seoul',
};

// interface 상속
// type Score = 'A+' | 'A' | 'B' | 'C' | 'D' | 'F';
enum Score {
  Aplus = 'A+',
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  F = 'F',
}

interface BaseballClub extends Student {
  position: string;
  height: number;
  readonly backNumber?: number; // backNumber 키가 필수가 아니게 됨
  [grade: number]: Score;
}

const otani: BaseballClub = {
  name: 'otani',
  isPassed: true,
  position: 'pitcher',
  height: 193,
  backNumber: 17,
  // 1: 'A+', // 학년: 점수
  // 2: 'NP', // 학년: 점수
  1: Score.A, // 학년: 점수
};

console.log(otani);

otani.position = '투수';
otani['height'] = 200;

// otani.backNumber = '19'; // backNumber는 readonly인 키라서 변경 불가

console.log(otani);

// type vs enum
type BreakPoint = 500 | 700 | 1000;
enum BreakPointEnum {
  SM = 500,
  MD = 700,
  LG = 1000,
}

// const width1: BreakPoint = 550
const width1: BreakPointEnum = BreakPointEnum.SM;
console.log(width1);

// 교차 타입: 두개 이상의 타입을 합치는 것
interface Toy {
  name: string;
  start(): void;
}

interface Car {
  name: string;
  color: string;
  price: number;
}

type ToyCar = Toy & Car;
const toyCar: ToyCar = {
  name: 'tayo',
  start() {
    console.log('출발~~');
  },
  color: 'blue',
  price: 5000,
};

// 2. type
type Gender = 'F' | 'M';
type Person = {
  name: string;
  age?: number;
  like?: string[];
  gender: Gender;
};

let daniel: Person = {
  name: 'daniel',
  age: 20,
  gender: 'F',
  like: ['minji', 'hani'],
};

// 실습
interface Game {
  title: string;
  price: number;
  category: string;
  platform: string;
  desc?: string;
}
