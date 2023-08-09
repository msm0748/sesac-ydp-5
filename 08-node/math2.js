const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// case1. 객체로 감싸서 내보내기
// module.exports = {
//   add,
//   subtract,
//   multiply,
//   divide,
// };

// case2. 하나씩 내보내기
// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.E = E;

// case2를 더 간단히!
exports.add = add;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;
