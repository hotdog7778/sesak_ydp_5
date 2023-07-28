// js Event(이벤트)
// 어떤 사건을 의미
// ex. 버튼 클릭, 웹페이지 로드, 키가 눌렸을 때, ...

// 이벤트에 "함수" 등록 방법 2가지
// - HTML 상에서 onXXX 속성으로 등록
// - js 에서 listener 를 사용해 등록

// 1. onXX 속성으로 등록
function clickH1() {
  alert('제목 클릭!');
}

// 2. addEventListener
const btn1 = document.querySelector('.btn--black');
const btn2 = document.querySelector('.btn--green');
const btn3 = document.querySelector('.btn--blue');
const btn4 = document.querySelector('.btn--red');
const container = document.getElementById('container');

// (이벤트 종류, 이벤트가 발생했을때 일어날 일 함수로 작성)
btn1.addEventListener('click', function () {
  alert('버튼1 클릭했어요');
});
btn1.addEventListener('mouseover', function () {
  btn1.style.backgroundColor = 'aqua';
});
btn1.addEventListener('mouseout', function () {
  btn1.style.backgroundColor = 'black';
});

btn2.addEventListener('click', () => {
  const div = document.createElement('div');
  div.style.backgroundColor = 'red';
  div.innerHTML = 'HI!!!!!';
  container.append(div);
});

btn3.addEventListener('click', changeColor);
function changeColor() {
  const divs = document.querySelectorAll('#container div');
  for (let div of divs) {
    div.style.backgroundColor = 'skyblue';
  }
}

btn4.addEventListener('click', changeBtnColor);
function changeBtnColor() {
  console.log(this);
  console.log(this.parentNode);
  this.style.backgroundColor = 'yellow';
  this.style.color = 'black';
}

//

const btn = document.querySelector('button');
const input = document.querySelector('input');
// [이벤트 객체]
// 이벤트 발생 -> 브라우저는 발생한 이벤트에 대한 정보를 담은 "이벤트 객체(event object)"를 이벤트 리스터에 전달
// ex. mousedown 이벤트 발생 -> 이벤트 객체는 (마우스 좌표, 버튼 번호) 정보를 가짐
// ex. keydown 이벤트 발생 -> 이벤트 객체는 (키 코드값, 어떤 키가 눌렸는지에 대한 정보) 정보를 가짐
btn.addEventListener('click', function (event) {
  // event 객체
  console.log(event); // 이벤트 객체에 대한 정보 출력
});

input.addEventListener('keydown', function (e) {
  console.log(e.code); // 눌려진 키의 고유 코드
  console.log(e.key); // 값

  if (e.code === 'ArrowUp') {
    console.log('위');
  } else if (e.code === 'ArrowDown') {
    console.log('아래');
  } else {
    console.log('다른거');
  }
});

// 폼 이벤트
const todoForm = document.getElementById('todo-form');
const todos = document.querySelector('.todos');

// submit 이벤트는 add버튼을 누를때 나타나네요
todoForm.addEventListener('submit', (e) => {
  console.log('submit');
  e.preventDefault(); // 이번 submit 미벤트에 대해 새로고침 현상을 막음. 눈으로 확인해보기 위해서

  const todoInput = document.querySelector('input[name="todo"]');
  console.log(todoInput);
  console.dir(todoInput);
  console.dir(todoInput.value); // input에 입력된 값

  const newTodo = todoInput.value.trim;

  if (newTodo !== '') {
    const newTodoLi = document.createElement('li'); // <li></li>
    newTodoLi.append(newTodo); // <li>input입력값</li>
    todos.append(newTodoLi);
  }

  // 인풋에 쓴 값을 지워주기
  todoInput.value = '';
});

// change 이벤트 : input 요소에 변경이 일어나고, 다른 요소를 클릭해서
// input이 포커스 아웃 처리되어있을 때 일어나는 이벤트
const chgInput = document.querySelector('#change-input');
chgInput.addEventListener('change', function (e) {
  console.log('change!!!"', e.target.value);
});

// input에 변경이 있을때마다 이벤트가 발생
chgInput.addEventListener('input', function () {
  console.log('change!!!"');
  const div = document.querySelector('.intro');
  div.textContent = this.value;
});
