console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.title);
console.log(document.URL);
// console.log(document.domain);

// document 객체를 이용해 HTML 요소 선택
// 1. getElementById
console.log(document.getElementById('green')); // HTML 파일에서 요소를 잘 찾아서 <div class="others" id="green"></div> 를 콘솔에 보여준다
console.log(document.getElementById('red'));

// 2. getElementsByClassName
console.log(document.getElementsByClassName('pink')); // 유사 배열입니다. 배열은 아니며 배열이 아니라서 forEach 는 동작하지 않습니다.
console.log(document.getElementsByClassName('pink')[1]);

// 3. getElementsTagName
console.log(document.getElementsByTagName('div'));

// 4. getElementsByName
console.log(document.getElementsByName('id'));

// 5. querySelector(css selector) ** 맨처음 발견한 요소 하나만 가져옵니다.
console.log(document.querySelector('.pink'));
console.log(document.querySelector('.others'));
console.log(document.querySelector('#others'));
console.log(document.querySelector('[name="id"]'));

// 6. querySelectorAll
console.log(document.querySelectorAll('.pink'));
console.log(document.querySelectorAll('.others'));
console.log(document.querySelectorAll('#others'));
console.log(document.querySelectorAll('[name="id"]'));

// 유사 배열 (HTMLCollection, NodeList)
// [] 식으로 생긴 배열을 의미. 배열은 아님!!
// index, length 는 가지고 있습니다.
// 배열과 달리 사용가능한 메서드가 제한

// NodeList -> forEach(), for of 반복문 사용 가능 합니다. (for in 과 for of는 좀 다르네)
// NodeList 라 forEach() 가능한 케이스
let nodeListExam = document.querySelectorAll('.pink');
nodeListExam.forEach((e) => console.log(e));
console.log('-----------------------');
for (let e of nodeListExam) {
  console.log(e);
}
console.log('-----------------------');

// HTMLCollection 라 forEach() 불가능한 케이스
let htmlCollectionExam = document.getElementsByClassName('pink');
// htmlCollectionExam.forEach((e) => console.log(e));
// >> 위 코드는 Uncaught TypeError: htmlCollectionExam.forEach is not a function 발생

// HTMLCollection 을 배열로 변환해서 오류가 안나게 해보기
let cast = Array.from(htmlCollectionExam);
cast.forEach((e) => console.log(e));
