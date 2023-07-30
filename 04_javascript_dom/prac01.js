// 검증
const check = {
    numCheck(a, b) {
        if (Number.isNaN(a) || Number.isNaN(b)) {
            alert("숫자입력하슈");
            return;
        }
    }
}
// 계산
const cal = {
    add(a, b) { return a + b },
    sub(a, b) { return a - b; },
    mul(a, b) { return a * b },
    div(a, b) { return a / b },
};
// 계산하기 버튼 구현
let btn1 = document.getElementById('operate');
btn1.addEventListener('click', function () {
    let inputData = document.querySelectorAll('.data');
    let inputOper = document.querySelectorAll('.oper');
    let data = [];
    let oper = [];
    let space = false;
    // forEach써보기
    inputData.forEach((e) => {
        if (e.value === '') {
            space = true;
        }
        data.push(Number(e.value.trim()))
    })
    inputOper.forEach((e) => {
        if (e.value === '') {
            space = true;
        }
        oper.push(String(e.value.trim()))
    })
    // 공백
    if (space) {
        alert("입력값이 없슈")
        return;
    }
    // 검증
    check.numCheck(data[0], data[1])
    // 연산수행
    let result = 0;
    if (oper[0] === '+') {
        result = cal.add(data[0], data[1])
    } else if (oper[0] === '-') {
        result = cal.sub(data[0], data[1])
    } else if (oper[0] === '*') {
        result = cal.mul(data[0], data[1])
    } else if (oper[0] === '/') {
        result = cal.div(data[0], data[1])
    } else {
        alert("사칙 연산만 가능합니다. ex) + , - , * , / ")
        return;
    }
    console.log(result)
    // 연산 결과를 결과 박스에 넣기
    document.getElementById('result').value = String(result);
})

// 초기화 버튼 구현 (이터레이터로 해보기)
let btnInit = document.getElementById('init');
btnInit.addEventListener('click', function () {
    //이터레이터 생성    
    let divsList = document.querySelectorAll('.divs').values();
    // 첫 HTMl 요소의 주소와 데이터를 temp에 할당
    let temp = divsList.next();
    while (!temp.done) {
        temp.value.value = '';
        temp = divsList.next(); //temp를 초기화 해준다.
    }
})

// 피연산자 검증 : 피연산자에 Number.isNaN() 을 사용해서 검증했음
// 공백 검증 : 공백일 경우 바로 리턴할 수 있도록 개선
// 연산자 부호 검증 : if로 String 비교 > 다른방법 있나 찾아보면서 공부해보기

/* 
이터레이터
let divsList = document.querySelectorAll('.divs').values();    
console.log(divsList)
divsList 는 이터레이터
console.log(divsList.next()); 
divsList.next()는 .divs 클래스 하나씩 지정하는 함수. 
divsList.next().value >> 값1 박스 껍데기(HTMl요소(한줄의) 전체데이터)
divsList.next().value.value >> 내가구할값(요소중에서 계산기에서 인풋박스에 숫자넣은거의 값)
divsList.next() 이값이 done 인지 아닌지 알아야함

*/