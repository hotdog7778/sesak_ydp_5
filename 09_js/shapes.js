const Shape = require('./shape.js');

class Rectangle extends Shape {
    getDiagonal(){
        return Math.sqrt((this.width ** 2) + (this.height ** 2));
    }
}
class Triangle extends Shape {
    constructor(width, height){
        super(width, height);
        console.log('자식 Triangle 생성자 실행')
    }
    getArea(){
        return (this.width * this.height) / 2;
    }
}
class Circle extends Shape {
    constructor(radius){
        super();
        this.radius = radius;
        console.log('자식 Circle 생성자 실행')
    }
    getArea(){
        return ((this.radius) ** 2) * Math.PI  ;
    }
    getWidth(){
        return this.width;
    }
    getHeight(){
        return this.height;
    }
}

// let shape = new Shape(2,4);
// console.log(shape.getArea());

// let rectangle = new Rectangle(3,4);
// console.log(rectangle.getDiagonal());

// let triangle = new Triangle(5,6);
// console.log(triangle.getArea());

let circle = new Circle(3);
console.log(circle.getArea());
console.log(circle.getWidth());
console.log(circle.getHeight());

