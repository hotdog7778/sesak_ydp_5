// 클래스
// : 객체 생성 템플릿 => 객체를 만들기 위해 사용
// 집이라는 현실 세계의 객체를 만들어보자!
/* 
속성: 
    만들어진 연도(Number)
    집의 이름(String)
    창문 갯수(Number)
메서드:
    2023 - 만들어진 연도 콘솔창에 출력하는 "건물의 나이 메소드"
    창문의 갯수 콘솔창에 출력하는 메소드
*/
class House {
    year;

    // 생성자 함수
    // 클래스를 이용해 객체를 생성할 때 마다 속성을 초기화
    constructor(year, name, window) {
        this.year = year;
        this.name = name;
        this.window = window;
    }

    // 메서드
    getAge() {
        console.log((this.year))
    }
    getName() {
        console.log((this.name))
    }
    getWindow() {
        console.log((this.window))
    }
}
const house1 = new House('1992년','동원빌라','3개');
house1.getAge();
house1.getName();
house1.getWindow();
console.log(house1);
console.log(house1.name);

const house2 = new House('2007','자이','10개')

// 클래스 상속
// parent : House
// children : Apartment
class Apartment extends House {
    constructor(year, name, window, floor, windowMaker) {
        super(year, name, window);
        this.floor = floor;
        this.windowMaker = windowMaker;
    }
    getAptInfo() {
        return `${this.year}에 지어진 ${this.name} 아파트의 총 층수는 ${this.floor} , 창문갯수는 ${this.window}`;
    }

    // 오버라이딩
    getWindow(){
        return `${this.window}의 창문은 ${this.windowMaker} 에서 만들었습니다.`
    }
}

let aprtment = new Apartment('1992년', '수자인', '3개', '20충', 'KCC');
console.log(aprtment.getAptInfo());
console.log(aprtment.getWindow());

//
class MyClass {
    x;
    y;
    setX = (a) => {
        this.x = a;
    }
    setY = (b) => {
        this.y = b;
    }
    
    getX = () => {
        return this.x;
    }
    getY = () => {
        return this.y;
    }
}
let com = new MyClass();
com.getX();
console.log(com.x);
com.setX(1)
console.log(com.x);