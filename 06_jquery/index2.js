// val() - value
function getValue() {
  // js 작성
  // const inputVal = document.querySelector('input').value;
  // alert(inputVal);

  // jq 작성
  const value = $('input').val();
  alert(value);
}
function setValue() {
  // js 작성
  // document.querySelector('input').value = 'js로 작성';

  // jq 작성
  $('input').val('jq로 작성');
}

// css()
function changeCssJS() {
  const span = document.querySelector('span');
  span.style = 'font-size: 20px; color: red';
}

function changeCssJquery() {
  // 한줄로 쓰기
  // $('span').css('font-size', '40px');
  // $('span').css('color', 'skyblue');

  // 위 두줄을 합쳐서 작성하기!
  $('span').css({
    fontSize: '40px',
    color: 'skyBlue',
  });
}

function getCssJquery() {
  // jq
  console.log($('span').css('color'));

  // js
  console.log(document.querySelector('span').style.color);
}

// attr()
function changeAttrJS() {
  // a 태그를 선택하고, href 속성 값을 naver 주소로 변경
  const myVal = document.querySelector('a').href;
  myVal.href = 'https://naver.com';
}

function changeAttrJquery() {
  $('a').attr('href', 'https://daum.net');
}

// text()
function changeTextJS() {
  // p-text 클래스를 갖는 요소 선택, 요소의 텍스트를 임의의 값으로 변경
  const myVal = document.querySelector('.p-text');
  myVal.textContent = Math.floor(Math.random() * 10 + 1);
}
function changeTextJquery() {
  $('.p-text').text('바보');
}

// html()
function changeHtmlJS() {
  // p-html 클래스를 갖는 요소 선택, <h3>javascript</h3>로 변경
  const myVal = document.querySelector('.p-html');
  myVal.innerHTML = '<h3>javascript</h3>';
}
function changeHtmlJquery() {
  $('.p-html').html('<h3>jquery</h3>');
}

// 요소 추가하기
// append()
function appendJS() {
  // 1. colors 클래스 갖는 요소 선택하고
  // 2. li 태그 요소를 생성한 후
  // 3. li 태그의 텍스트로 '마지막 자식으로 추가된 js' 추가
  // 4. colors 클래스를 갖는 요소에 "맨 마지막 자식"으로 li 요소 추가
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/append
  const ul = document.querySelector('.colors');
  const lastLi = document.createElement('li');
  lastLi.textContent = '마지막 자식으로 추가된 js';
  ul.append(lastLi);
}

function appendJquery() {
  $('.colors').append('<li>마지막 자식으로 추가된 jq</li>');
}

// prepend()
function prependJS() {
  // 1. color 클래스 갖는 요소 선택하고
  // 2. li 태그 요소를 생성한 후
  // 3. li 태그의 텍스트로 '첫 자식으로 추가된 js' 추가
  // 4. color 클래스를 갖는 요소에 "가장 첫 자식"으로 li 요소 추가
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/prepend

  const ul = document.querySelector('.colors');

  // 아래 두줄을 한줄로 할 수 있나?
  const fstLi = document.createElement('li');
  fstLi.textContent = '첫 자식으로 추가된 js';

  ul.prepend(fstLi);
}

function prependJquery() {
  $('.colors').prepend('<li>첫 자식으로 추가된 jq</li>');
}

// before()
function beforeJS() {
  // 1. green 클래스를 갖는 요소 선택하고
  // 2. li 태그 요소를 생성한 후
  // 3. li 태그의 텍스트로 'green 클래스를 갖는 요소의 이전 형제 요소로 추가(js)' 추가
  // 4. green 클래스를 갖는 요소의 "바로 이전 형제 요소"로 li 요소 추가
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/before
  const green = document.querySelector('.green');
  const li = document.createElement('li');
  li.textContent = '이전 형제 요소로 추가(js)';
  green.before(li);
}

function beforeJquery() {
  $('.green').before('<li>이전 형제 요소로 추가(jq)</li>');
}

// after()
function afterJS() {
  // 1. green 클래스를 갖는 요소 선택하고
  // 2. li 태그 요소를 생성한 후
  // 3. li 태그의 텍스트로 'green 클래스를 갖는 요소의 다음 형제 요소로 추가(js)' 추가
  // 4. green 클래스를 갖는 요소의 "바로 다음 형제 요소"로 li 요소 추가
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/after
  const green = document.querySelector('.green');
  const li = document.createElement('li');
  li.textContent = '다음 형제 요소로 추가(js)';
  green.after(li);
}

function afterJquery() {
  console.log($('.green').after()); //  자기 자신 리턴함
  $('.green').after('<li>다음 형제 요소로 추가(jq)</li>');
}

// 요소 삭제하기
// remove()
function removeJS() {
  // li2 아이디를 갖는 요소를 선택하여 그 요소를 삭제
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/remove
  document.querySelector('#li2').remove();
}

function removeJquery() {
  $('#li2').remove();
}

// empty()
function emptyJS() {
  // 참고! js에는 empty 메서드가 없습니다~ 따라서 아래와 같이 코드를 적용해주세요
  // ul 태그이자 nums 클래스를 갖는 요소를 선택후
  // 해당 요소의 HTML을 빈 문자열 '' 로 설정 (innerHTML)
  document.querySelector('.nums').innerHTML = '';
}

function emptyJquery() {
  // 선택된 요소의 내용물을 비운다. 자식도 사라지겠지
  $('ul.nums').empty();
}

// 요소 탐색하기
function findParent() {
  // child2 클래스 갖는 요소의 부모 요소
  // js
  const js = document.querySelector('.child2').parentElement;
  console.log(js);

  // jq
  console.log($('.child2').parent());
}

function findParents() {
  // 선택된 요소의 부모 > 조상 > 그위 > .. 를 전부 배열형식으로 리턴합니다.
  // JS는 없습니다.

  // jq
  console.log($('.child2').parents());
}

function findNext() {
  // child2 클래스 갖는 요소의 다음 형제 요소
  const js = document.querySelector('.child2').nextElementSibling;
  console.log(js);

  //jq
  console.log($('.child2').next());
}

function findPrev() {
  // child2 클래스 갖는 요소의 이전 형제 요소

  // js
  const js = document.querySelector('.child2').previousElementSibling;
  console.log(js);

  // jq
  console.log($('.child2').prev());
}

function findChildren() {
  // parent 클래스 갖는 요소의 자식 요소

  // js
  const js = document.querySelector('.parent').childNodes; // 노드리스트 형태로 요소들이 저장됨
  //const el = document.querySelector('.parent').children; // HTMLCollection 형태로 요소들 저장
  //const el = document.querySelector('.parent').childElementCount; // 자식수
  console.log(js);

  // jq
  console.log($('.parent').children());
}

// 클래스 조작하기
function addClass() {
  // hi 아이디 갖는 요소 선택하여 "fs-50" 클래스 추가
  //   document.querySelector('#hi').classList.add('fs-50');
  $('#hi').addClass('fs-50');
}

function removeClass() {
  // hi 아이디 갖는 요소 선택하여 "fs-50" 클래스 삭제
  //   document.querySelector('#hi').classList.remove('fs-50');
  $('#hi').removeClass('fs-50');
}

function hasClass() {
  // hi 아이디 갖는 요소 선택하여 "fs-50" 클래스 포함 여부 확인
  //   document.querySelector('#hi').classList.contains('fs-50');
  console.log($('#hi').hasClass('fs-50'));
}

function toggleClass() {
  // hi 아이디 갖는 요소 선택하여 "bg-pink" 클래스 토글 (있으면 삭제, 없으면 추가)
  //   document.querySelector('#hi').classList.toggle('bg-pink');
  $('$hi').toggleClass('bg-pink');
}

// 4. Form Event
$('#todo-form').on('submit', function (zz) {
  console.log(zz);
  e;
  // 지금 발생한 이벤트가 submit 이기 때문에 submit 이벤트의 기본동작인 새로고침을 막음
});
