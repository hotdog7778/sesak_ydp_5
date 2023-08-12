class Shape {
    constructor(width, height){
        this.width = width;
        this.height = height;
        console.log('부모생성자 실행')
    }
    getArea(){
        return this.width * this.height;
    }
}

module.exports = Shape;