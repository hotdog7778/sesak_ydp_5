// 선택적 매개변수는 맨 뒤로
function print(a: number, b: number, c?: number): void {
  console.log(a);
  console.log(b);
  console.log(c);
}

print(2, 4, 6);
print(2, 4);

// 매개변수에 기본값 할당 가능
function print2(a: number, b: number, c = 100): void {
  console.log('print2>>');
  console.log(a);
  console.log(b);
  console.log(c);
}

print2(2, 4, 6);
print2(2, 4);

// 매개변수가 없는 함수
function sayHello(): void {
  console.log('hello');
}
sayHello();

function sayHello2(): string {
  return 'hello~2';
}
console.log(sayHello2());

function concatString(x: string, y: string): string {
  return x + y;
}
concatString('안녕', '하세유');

function circleArea(r: number): number {
  return r * r * Math.PI;
}
console.log(circleArea(5));

// 화살표 함수
const squareArea = (x: number, y: number): number => {
  return x * y;
};

// 화살표 하수 & return 구문 생략
const triangleArea = (w: string, h: string): number => (parseInt(w, 10) * parseInt(h, 10)) / 2;
console.log(triangleArea('3', '4'));

// interface 정의시 함수 타입 표현
interface Greet {
  name: string;
  hi(): string;
  bye(a: number): string;
}

const sesac: Greet = {
  name: 'sesac',
  hi() {
    return '여기는' + this.name + '캠퍼스';
  },
  bye(a: number) {
    return `작별 인사를 ${a}번 했습니다.`;
  },
};

console.log(sesac.hi());
console.log(sesac.bye(5));

// never
// : 함수의 끝에 절대 도달하지 않는 경우
function goingOn(): never {
  while (true) {
    console.log('go!');
  }
} // 무한루프에 빠져 함수에 끝에 도달할 수 없음

// 오버라이딩 vs 오버로딩
// 1. 오버라이딩
// - Class 에서 상속 > 하위클래스가 상위 클래스의 메소드를 상속받을때 같은 이름의 함수(메서드)를 재정의
// 2. 오버로딩
// - 함수의 이름은 같지만, 매개변수 or 반환타입이 다른 여러 함수들을 가질 수 있음

// 타입스크립트 오버로딩
// - 선언부: 매개변수의 타입과 반환 타입만 지정
// - 구현부: 실제 함수의 구현 (function body)
// => 함수 이름 동일

function sum(a: string, b: string): string; //선언부
function sum(a: number, b: number): string; //선언부

function sum(a: any, b: any): any {
  return a + b;
} // 구현부

console.log(sum('가', '나'));
console.log(sum(10, 20));
// console.log(sum(10, '야호')); // 에러
