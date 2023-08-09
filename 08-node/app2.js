//case 1
// const math2 = require('./math2');

// console.log('더해', math2.add(10, 5));
// console.log('빼', math2.subtract(10, 5));
// console.log('곱해', math2.multiply(10, 5));
// console.log('나눠', math2.divide(10, 5));

const { add, subtract, multiply, divide } = require('./math2');

console.log('더해', add(10, 5));
console.log('빼', subtract(10, 5));
console.log('곱해', multiply(10, 5));
console.log('나눠', divide(10, 5));
