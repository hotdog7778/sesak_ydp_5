/*
getElementById
getElementsByClassName
getElementsTagName
getElementsByName
>> 복수의 요소를 가져올경우 HTMLCollection
>> HTMLCollection는 forEach 를 사용할수 없다.

querySelector : 맨처음 발견한 요소 하나만 가져옵니다.
querySelectorAll : 
>> 복수의 요소를 가져올 경우 NodeList

*/

// 요소를 가져와 변수에 저장
let element1 = document.getElementById('data1');
console.log(element1);

// 요소안에 '가' 라는 값을 변수에 저장
let value1 = document.getElementById('data1').innerHTML;
value1 = document.getElementById('data1').innerText;
value1 = document.getElementById('data1').textContent;
console.log(value1)