console.log(document);
console.log($(document));

// 1. Load Event
// in js
document.addEventListener('DOMContentLoaded', function () {
  console.log('dom트리 완성');
});

$(document).ready(function () {
  console.log('ready-dom트리 완성');
});

$(function () {
  console.log('안녕');
});

// 2. Mouse Event
$('.p-msg').click(function () {
  $('.p-msg').css('color', 'red');
});

// 이전에 해본 방식
//$('.num').on('click', function () {
//  $('.num').css('color', 'blue');
//});

//$('.num').click(function () {
// 이벤트가 4번 발생한다.

// 매번 .num 클래스를 가진 요소 4개가 모두 css가 변경된다.
//$('.num').css('color', 'blue');

// 매번 자기자신의 css가 변경된다.
//$(this).css('color', 'blue');
//});

// click in js
const nums = document.querySelectorAll('.num');
console.log('nums', nums);
for (let num of nums) {
  console.log('num', nums);
  num.addEventListener('click', function () {
    console.log(this);
    this.style.color = 'blue';
  });
}

// mouseover(): 요소에 마우스를 올렸을 때
$('.numbers').on('mouseover', function () {
  $(this).css('background-color', 'skyblue');
  $(this).append('<div>111</div>');
});

// hover(): 마우스 올리고 땟을때
// 호버는 마우스오버+마우스아웃 과 같음
// $('.div-hover').hover(
//   function () {
//     $(this).addClass('hover');
//   },
//   function () {
//     $(this).removeClass('hover');
//   }
// );

$('.div-hover').hover(function () {
  $(this).toggleClass('hover');
});

// scroll()
// 윈도우 창을 스크롤 할 떄
// in jq

// // case jq
// $(window).scroll(function () {
//   console.log('scrolling!!!');
// });

// // case jq
// $(window).on('scroll', function () {
//   console.log('scrolling!!!');
// });

// // in js
// window.addEventListener('scroll', function () {
//   console.log('scrolling Js!!!');
// });

// 3. Key Event
$('.input-key').on('keydown', function (e) {
  // e: 이벤트 객체
  console.log(e);
  console.log(e.code); // 눌려진 키의 고유 코드
  console.log(e.key); // input에 입력된 값

  if (e.code === 'ArrowUp') {
    console.log('⬆');
  } else if (e.code === 'ArrowDown') {
    console.log('⬇');
  } else {
    console.log('others');
  }
});

// 4. Form Event
$('#todo-form').on('submit', function (e) {
  //   console.log(e); // 이벤트 객체
  e.preventDefault(); // 이벤트의 기본동작을 막는 메서드
  // 지금 발생한 이벤트가 "submit"이기 때문에 submit 이벤트의 기본 동작인 "새로고침"을 막음

  // 퀴즈
  // 1. name 속성값이 todo인 요소를 선택하고 해당 요소의 value를 todo 변수에 저장
  // 2. todos 클래스를 갖는 요소를 선택
  //    -> li 요소에 todo 변수의 값을 텍스트로 갖게 한 후 todos 클래스 요소에 추가
  // 3. name 속성값이 todo인 요소의 value 초기화

  //   console.log($([(name = 'todo')]));
  const todo = $("[name = 'todo']").val();

  $('.todos').append(`<li>${todo}</li>`);

  $("[name = 'todo']").val('');
});

// e.preventDefault() 또 다른 예제
$('a#inactive').on('click', function (e) {
  e.preventDefault(); // a태그의 기본 동작 막음. a태그의 기본동작은 href 링크로 이동임.
  $('#text').append('동작안함');
  // 여기서 확인할 수 있는건 preventDefault() 로 a태그의 기본 동작 만 막는 다는 것
});

// this
// 그 함수가 속해 있던 객체를 참조
// - 뭔가를 클릭할 때 불러오는 함수 (콜백함수)에서 this는 그 "뭔가"를 의미
const btns = document.querySelectorAll('.btn');
const spans = document.querySelectorAll('.span');

function setBgColor() {
  this.style.backgroundColor = 'royalblue';
}
function setBgColor2(elem, color) {
  elem.style.backgroundColor = color;
}

for (let btn of btns) {
  //   btn.addEventListener('click', function () {
  //     console.log(this);
  //     this.style.backgroundColor = 'royalblue';
  //   });
  // btn.addEventListener('click', setBgColor2(this, black)); // 매개변수를 사용할 수 없음. 이때는 익명함수를 사용해야함
  btn.addEventListener('click', function () {
    setBgColor2(this, 'black');
  });
}

for (let span of spans) {
  //   span.addEventListener('click', function () {
  //     console.log(this);
  //     this.style.backgroundColor = 'royalblue';
  //   });
  span.addEventListener('click', setBgColor);
}
