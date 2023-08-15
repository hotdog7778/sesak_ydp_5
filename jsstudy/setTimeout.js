function sayHi(name, phrase) {
  console.log(name + ' 님 ' + phrase);
}

// setTimeout(sayHi('김태균', '안녕하세요'), 1000); 오류 발생
//setTimeout(sayHi, 1000, '김태균', '안녕하세요'); // 콜백함수 sayHi 에 매개변수를 전달

setTimeout(() => {
  console.log(`김태균 조용히해`);
}, 1000);

console.log('start');

/*
setTimeout(sayHi(), 1000);
>> setTimeout(sayHi() 의 반환값, 1000) 과 같다. 이렇게 작성하는걸 조심하자
*/

let timerId = setTimeout(function () {
  console.log('째깍1');
  timerId = setTimeout(function () {
    console.log('째깍2');
  }, 1000); // (*)
}, 1000);

// 함수 선언만 한것 같은데 바로 실행되는 이유. setTime아웃 함수는 실행읠 예약하기 떄문입니다.
// 주어진 코드에서 변수 timerId에 대입된 것은 setTimeout 함수의 반환 값입니다. setTimeout 함수는 타이머 ID를 반환하는데, 이 ID를 활용하여 타이머를 제어하거나 취소할 수 있습니다.

let test = function () {
  console.log('test 함수는 실행될까요');
};

/* 
일초 간격으로 숫자 출력하기
중요도: 5
from에 명시한 숫자부터 to에 명시한 숫자까지 출력해주는 함수 printNumbers(from, to)를 만들어보세요. 숫자는 일 초 간격으로 출력되어야 합니다.

두 가지 방법을 사용해 함수를 만드셔야 합니다.

setInterval을 이용한 방법
중첩 setTimeout을 이용한 방법 
*/

function printNumbers(from, to) {
  let current = from;

  setTimeout(function action() {
    if (current <= to) {
      console.log(current);
      current++;
      setTimeout(action, 1000);
    }
  }, 1000);
}

printNumbers(1, 5);
