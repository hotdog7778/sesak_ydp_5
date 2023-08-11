// 자바 스크립트 형변환
// String()

// Number() null을 숫자로 변환시 0, undefined을 숫자로 변환시  NaN
// 전달받은 문자열의 처음과 끝 공백을 무시합니다. 문자열이 비어있으면 0을 반환
let str = " ";
console.log(Number(str)); // 0

// Boolean() 1을 true로 , 0을 false로
// 숫자0, null, undefined, NaN, "" 형변환 시 false
// 그 외의 값 형변환시 true
Boolean(1) // true
Boolean(0) // false
Boolean("hello") // 문자열 true
Boolean(" ") // 공백 true
Boolean("0") // 문자0 true
Boolean("") // 빈문자열 false

