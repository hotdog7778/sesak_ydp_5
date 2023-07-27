// 3-1

// 2또는 5의 배수 합
let sum = 0;
for(let i=1; i <= 100; i++){
    if( (i%2 === 0) || (i%5 === 0) ){
        sum += i
    }
}
console.log(sum);

// 13의 배수이면서 홀수를 찾기
let receivedStr = prompt("숫자를 입력하세요 [범위 : 10000 이하] \n 13의배수이면서 홀수이면 yes 아니면 no");
let num = Number(receivedStr);

if( num < 0 || num > 10000) {
    alert("범위를 벗어났습니다.");
} else {
    ((num%13)===0) && ((num%2)===1) ? alert("yes") : alert("no");
}

// 구구단

for(let i = 2; i < 10; i++){
    console.log("---"+i+"단---");
    for(let j = 1; j<10; j++){
        console.log(i+" x "+j+" = "+(i*j))
    }
}