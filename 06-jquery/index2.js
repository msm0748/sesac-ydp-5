// val() - value
function getValue() {
  // js
  // const inputVal = document.querySelector('input').value;
  // alert(inputVal);

  // jquery
  const value = $('input').val();
  alert(value);
}
function setValue() {
  // js
  // document.querySelector('input').value = '하이하이~';

  // jquery
  $('input').val('안뇽안뇽~');
}

// css()
function changeCssJS() {
  const span = document.querySelector('span');
  span.style = 'font-size: 20px; color: red';
}
function changeCssJquery() {
  // case1
  // $('span').css('font-size', '40px');
  // $('span').css('color', 'blue');

  // case2, css 여러 속성 한번에 적용
  $('span').css({
    fontSize: '40px',
    color: 'blue',
  });
}

function getCssJquery() {
  console.log(document.querySelector('span').style.color);
  // console.log($('span').css('color'));
}

// attr()
function changeAttrJS() {
  // 퀴즈: a 태그를 선택하고, href 속성 값을 naver 주소로 변경
  const a = document.querySelector('a');
  a.href = 'https://naver.com';
  a.innerText = 'naver';
}
function changeAttrJquery() {
  $('a').attr('href', 'https://daum.net');
}

// text()
function changeTextJS() {
  // 퀴즈: p-text 클래스를 갖는 요소 선택하고, 요소의 텍스트를 임의의 값으로 변경
  document.querySelector('.p-text').innerText = '안뇽!';
}
function changeTextJquery() {
  $('.p-text').text('하이룽');
}

// html()
function changeHtmlJS() {
  // 퀴즈 : p-html 클래스 갖는 요소 선택하고, <h3>javascript</h3>로 변경
  document.querySelector('.p-html').innerHTML = '<h3>javascript</h3>';
}

function changeHtmlJquery() {
  $('.p-html').html('<h3>jquery</h3>');
}

// append()
function appendJS() {
  const li = document.createElement('li');
  li.className = 'red';
  li.innerText = '마지막 js';
  document.querySelector('.colors').appendChild(li);
}

function appendJquery() {
  $('.colors').append('<li>마지막 jquery</li>');
}

// prepend()
function prependJS() {
  const li = document.createElement('li');
  li.className = 'red';
  li.innerText = '첫번째 js';
  document.querySelector('.colors').prepend(li);
}

function prependJquery() {
  $('.colors').prepend('<li>첫번째  jquery</li>');
}

// before()
function beforeJS() {
  const li = document.createElement('li');
  li.innerText = 'green 클래스를 갖는 요소의 이전 형제 요소로 추가(js)';

  document.querySelector('.green').before(li);
  // 1. green 클래스를 갖는 요소 선택하고
  // 2. li 태그 요소를 생성한 후
  // 3. li 태그의 텍스트로 'green 클래스를 갖는 요소의 이전 형제 요소로 추가(js)' 추가
  // 4. green 클래스를 갖는 요소의 "바로 이전 형제 요소"로 li 요소 추가
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/before
}

function beforeJquery() {
  $('.green').before('<li>green 클래스를 갖는 요소의 다음 형제 요소로 추가(jquery)</li>');
}

// after()
function afterJS() {
  const li = document.createElement('li');
  li.innerText = 'green 클래스를 갖는 요소의 다음 형제 요소로 추가(js)';

  document.querySelector('.green').after(li);
  // 1. green 클래스를 갖는 요소 선택하고
  // 2. li 태그 요소를 생성한 후
  // 3. li 태그의 텍스트로 'green 클래스를 갖는 요소의 다음 형제 요소로 추가(js)' 추가
  // 4. green 클래스를 갖는 요소의 "바로 다음 형제 요소"로 li 요소 추가
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/after
}

function afterJquery() {
  $('.green').after('<li>green 클래스를 갖는 요소의 다음 형제 요소로 추가(jquery)</li>');
}

// 요소 삭제하기
// remove()
function removeJS() {
  document.querySelector('#li2').remove();
  // li2 아이디를 갖는 요소를 선택하여 그 요소를 삭제
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/remove
}

function removeJquery() {
  $('#li2').remove();
}

// empty()
function emptyJS() {
  document.querySelector('.nums').innerHTML = '';
  // 참고! js에는 empty 메서드가 없습니다~ 따라서 아래와 같이 코드를 적용해주세요
  // ul 태그이자 num 클래스를 갖는 요소를 선택후
  // 해당 요소의 HTML을 빈 문자열 '' 로 설정 (innerHTML)
}

function emptyJquery() {
  $('.nums').empty();
}

// 요소 탐색하기
function findParent() {
  // child2 클래스 갖는 요소의 부모 요소
  console.log(document.querySelector('.child2').parentElement);
  console.log($('.child2').parent());
}

function findParents() {
  // JS 없습니다! 패스~~
  console.log($('.child2').parents());
}

function findNext() {
  // child2 클래스 갖는 요소의 다음 형제 요소
  console.log(document.querySelector('.child2').nextElementSibling);
  console.log($('.child2').next());
}

function findPrev() {
  // child2 클래스 갖는 요소의 이전 형제 요소
  console.log(document.querySelector('.child2').previousElementSibling);
  console.log($('.child2').prev());
}

function findChildren() {
  // parent 클래스 갖는 요소의 자식 요소
  console.log(document.querySelector('.parent').children);
  console.log($('.parent').children());
}

// 클래스 조작하기
function addClass() {
  // hi 아이디 갖는 요소 선택하여 "fs-50" 클래스 추가
  // document.querySelector('#hi').classList.add('fs-50');
  $('#hi').addClass('fs-50');
}

function removeClass() {
  // hi 아이디 갖는 요소 선택하여 "fs-50" 클래스 삭제
  // document.querySelector('#hi').classList.remove('fs-50');
  $('#hi').removeClass('fs-50');
}

function hasClass() {
  // hi 아이디 갖는 요소 선택하여 "fs-50" 클래스 포함 여부 확인
  // console.log(document.querySelector('#hi').classList.contains('fs-50'));
  console.log($('#hi').hasClass('fs-50'));
}

function toggleClass() {
  // hi 아이디 갖는 요소 선택하여 "fs-50" 클래스 토글 (있으면 삭제, 없으면 추가)
  // document.querySelector('#hi').classList.toggle('fs-50');
  $('#hi').toggleClass('fs-50');
}
