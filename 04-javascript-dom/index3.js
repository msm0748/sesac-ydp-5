const div1 = document.getElementById('div1');
console.log(div1);

// 태그 내부 내용 변경
// innerHTML : 태그 사용 가능
// div1.innerHTML = '여기는 <b>첫번째</b> 태그!';

// innerText, textContent : 태그가 문자(기호)로 그대로 노출
// div1.innerText = '여기는 <b>첫번째</b> 태그!';

// 속성(attribute) 변경
// setAttribute(속성명, 변경할 속성 값) -> 속성 값을 "설정"
const naver = document.getElementById('naver');
naver.setAttribute('href', 'https://google.com');

const pooh = document.getElementById('pooh');
pooh.setAttribute('src', './img/grass.png');

console.log(pooh.src);

// 속성 얻기(가져오기)
// getAttribute(속성명) -> 속성 값 "얻기"
console.log(pooh.getAttribute('src'));

// 참고! . 연산자로 속성에 접근하고 = 할당 연산자로 속성 값 변경 가능
document.getElementById('naver').href = '#';

// CSS 지정
const h1 = document.querySelector('h1');
const list = document.querySelectorAll('ul > li'); // 유사 배열

// list.forEach(el => )
// style 속성을 이용해 css 지정 가능
// style.xxx (xxx: camelCase)
// list[0].style.backgroundColor = 'purple';
// list[0].style.fontSize = '40px';
// list[0].style.color = 'yellow';

for (let li of list) {
  li.style.backgroundColor = 'purple';
  li.style.fontSize = '40px';
  li.style.color = 'yellow';
}

// CSS 지정 2. classList 활용
// xxx.classList.add('className') : 클래스명 추가
// xxx.classList.remove('className') : 클래스명 제거
// xxx.classList.contains : 있는지 없는지 확인 (boolean)
// xxx.classList.toggle : 있으면 제거, 없으면 추가

// h1.classList.add('add-h1');
// h1.classList.remove('add-h1');
// console.log(h1.classList.contains('add-h1'));

// if (h1.classList.contains('add-h1')) {
//   h1.innerText = '하하하하하하하하핳';
// } else {
//   h1.innerText = '이히히히히히히히힣';
// }

h1.classList.toggle('add-h1');

// 요소 찾기
// 계층 구조 (형제, 자식, 부모, 조상, 자손)

const friends = document.querySelector('#friends');
const tigger = document.querySelector('#tigger');

// 1. 자식 요소
console.log(friends.children); // 유사 배열. 자식 모두 선택
console.log(friends.children[0]);

// 2. 부모 요소
console.log(tigger.parentNode);
console.log(tigger.parentNode.parentNode);

// 3. 형제 요소
console.log(tigger.previousElementSibling);
console.log(tigger.nextElementSibling);

// 요소 생성, 추가, 삭제
const container = document.querySelector('.container');
const p = document.createElement('p');
p.textContent = '새로 추가된 p 요소 입니다.';
p.style.fontWeight = 700;
p.style.backgroundColor = 'red';

// 새로 만든 요소를 추가해보자 !
// x.append(y): x 요소의 맨 마지막 자식으로 y 요소가 추가
container.append(p);

const p2 = document.createElement('p');
const p3 = document.createElement('p');
p2.innerHTML = 'p2';
p3.innerHTML = 'p3';
p2.classList.add('p-2');
p3.classList.add('p-3');

container.append(p2, p3); // 여러개 추가도 가능!

// x.prepend(y): x요소의 맨 처음 자식으로 y 요소가 추가
console.log(friends);
const li1 = document.createElement('li');
li1.textContent = '캉가';
friends.prepend(li1);
const li0 = document.createElement('li');
li1.innerHTML = '<b>친구들을 소개합니다</b>';
friends.prepend(li0);

// 요소 삭제
// x.remove(): x 요소 삭제
// x.removeChild(y): x의 자식요소인 y가 삭제
const firstLi = document.querySelector('li');
console.log(firstLi);

const ul = firstLi.parentNode;
ul.removeChild(firstLi);
