// JQuery
// $(선택자).동작함수()
// $(): HTML 요소를 선택하는 함수
// 동작함수: 선택된 요소에 대해 원하는 동작 수행

console.log($('#div1'));

function submitJS() {
  const div1 = document.getElementById('div1');

  // div 내용을 변경 + CSS 변경
  div1.innerText = '반갑습니다';
  div1.setAttribute('style', 'border: 2px solid red;');
}

function submitJquery() {
  const div1 = $('#div1');
  div1.text('안녕히계세요!');
  div1.css('border', '2px dotted blue');
  // $('#div1').text('안녕히계세요!');
  // $('#div1').css('border', '2px dotted blue');
}

// li 요소를 클릭했을때 이벤트 리스너를 추가해 보겠습니다.
const namesJs = document.querySelectorAll('.name');
const namesJq = $('.name');

console.log(namesJs); // NodeList
console.log(namesJq); // jquery 객체

// js li 요소 클릭시 글씨 색상 hotPink
namesJs.forEach((e) => {
  e.addEventListener('click', () => {
    e.style.color = 'hotPink'; // 여기서 e 대신 this를 쓸때 에러가 나는 이유는 화살표 함수 때문
  });
});

// jq li 요소 클릭시 배경 색상 skyblue
namesJq.on('click', function () {
  // jq는 foreach를 안써도 그냥 반복이 된다.
  // console.log($('this'));
  $(this).css('background-color', 'skyblue');
});
