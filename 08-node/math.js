const add = (a, b) => a + b;
const PI = 3.141592;
const E = 2.718;

// add 라는 함수를 다른 js 파일에서 쓸 수 있도록 내보내기
module.exports = {
  add,
  PI,
  E,
};
