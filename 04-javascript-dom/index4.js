// js Event(이벤트)
// 어떤 사건을 의미
// ex. 버튼 클릭, 웹페이지 로드, 키가 눌렸을 때, ...

// 이벤트에 "함수" 등록 방법 2가지
// - HTML 상에서 onXXX 속성으로 등록
// - js 에서 listener 를 사용해 등록

// 1. onXXX 속성으로 등록
function clickH1() {
  alert('제목 클릭!');
}

// 2. addEventListener
const btn1 = document.querySelector('.btn--black');
const btn2 = document.querySelector('.btn--green');
const btn3 = document.querySelector('.btn--blue');
const btn4 = document.querySelector('.btn--red');
const container = document.querySelector('#container');
// addEventListener(이벤트 종류, 이벤트가 발생했을 때 일어날 일 함수로 작성)
btn1.addEventListener('click', () => {
  alert('버튼 1을 클릭하셨네요 !');
});
btn1.addEventListener('mouseover', () => {
  btn1.style.backgroundColor = 'aqua';
});

btn1.addEventListener('mouseout', () => {
  btn1.style.backgroundColor = 'rgb(44, 44, 44)';
});

btn2.addEventListener('click', () => {
  const div = document.createElement('div');
  div.style.backgroundColor = 'pink';
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
  this.style.backgroundColor = 'yellow';
  this.style.color = '#000';
  console.log(this); // 자기 자신 btn4
  // !! 화살표 함수 사용시 this 대상이 window로 바뀜
  // console.log(this.parentNode); // this를 이용해 부모에 접근 가능
}

const btn = document.querySelector('button');
const input = document.querySelector('input');
btn.addEventListener('click', (event) => {
  // event 객체
  console.log(event); // 이벤트 객체에 대한 정보 출력
});

input.addEventListener('keydown', function (e) {
  console.log(e.code);
  console.log(e.key);

  if (e.code === 'ArrowUp') {
    console.log('😇');
  } else if (e.code === 'ArrowDown') {
    console.log('🥲');
  } else {
    console.log('others');
  }
});

// 폼 이벤트
const todoForm = document.getElementById('todo-form');
const todos = document.querySelector('.todos');

todoForm.addEventListener('submit', (e) => {
  // console.log(e);
  e.preventDefault(); // 폼 submit 이벤트가 새로고침 되는 걸 막음

  const todoInput = document.querySelector('input[name="todo"]');
  console.dir(todoInput);

  const newTodo = todoInput.value.trim();

  if (newTodo !== '') {
    const newTodoLi = document.createElement('li'); // <li></li>
    newTodoLi.append(newTodo);
    todos.append(newTodoLi);
  }
  // input 창 초기화
  todoInput.value = '';
  todoInput.focus();
});

// change: input요소에 변경이 일어나고, 다른 요소를 클릭해서
// input이 포커스 아웃(blur)처리되었을 때 일어나는 이벤트
const chgInput = document.querySelector('#change-input');
chgInput.addEventListener('change', function (e) {
  console.log('change!!!', e.target.value);
});

// input에 값이 입력될 때마다 이벤트 발생
chgInput.addEventListener('input', function (e) {
  console.log('changing!!!', e.target.value);
  const div = document.querySelector('.intro');
  div.textContent = this.value;
});
