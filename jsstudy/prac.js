// 객체의 속성을 분해
const obj1 = {
    name: '홍길동',
    age: '32',
    height : '176cm',
    nono : 'nono'
}

// let name = arry.name;
// let age = arry.age;
// let height = arry.height;
// let nono = arry.nono;
// 이 코드를 아래처럼 바꿀 수 있습니다.
let { name, age, height, nono} = obj1;
console.log(name); // 홍길동
console.log(age); // 32
console.log(height); // 176cm
console.log(nono); // nono

// 객체의 속성 key이름이 저장하려고하는 변수의 이름과 같아야합니다.
// 아래의 경우 변수의 이름이 달라 출력되는 결과는 undefined 입니다.
let {a,b,c,d} = obj1;
console.log(a)
console.log(b)
console.log(c)
console.log(d)

// 메서드가 있는 객체
const candyMachine = {
    status: {
        name: 'node',
        count: '5',
    },
    getCandy() {
        this.status.count--;
        return this.status.count;
    },
};
// 객체를 구조분해
const {getCandy, status:{count}} = candyMachine;
console.log(count); // 5
// getCandy(); // this가 뭔가 문제가 있는지 오류가 납니다.
// getCandy() 함수의 this에는 status라는 프로퍼티가 존재하지 않기때문
// bind() 를 사용해줘야 하지만 아직 사용법을 모름 


// 배열의 요소를 분해
const arry1 = ['nodejs', {}, 10, false];
const [ node, , number, bool] = arry1;
console.log(node); // nodejs
console.log(number); // 10
console.log(bool); // false
