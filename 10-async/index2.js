// Promise (프로미스)
// - 비동기 함수를 동기처리하기 위해 만든 객체
// - 미래에 실패/성공에 대한 결과 값을 "약속" 한다는 의미
// - 성공, 실패 분리해서 반환
//      - 성공, 실패에 대핸 결과는 then, catch 메서드로 이어 받아서 처리 가능
// => 성공이든 실패든 무언가의 "최종 결과"
// resolved: 성공
// rejected: 실패

// 1. promise를 생성하는 코드
// function promise1(flag) {
//   return new Promise(function (resolve, reject) {
//     if (flag) {
//       resolve(`현재 프로미스의 상태는 fulfilled(이행)! then 메서드로 연결~ 이 때 flag 값은 ${flag}!`);
//     } else {
//       reject(`현재 프로미스의 상태는 rejected(거절)! catch 메서드로 연결~ 이 때 flag 값은 ${flag}!`);
//     }
//   });
// }

// 2. promise를 사용(소비)하는 코드
// promise1(0)
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

///////////////////////////////
// 프로미스 예제

// function goMart() {
//   console.log('마트에 가서 어떤 음료를 살지 고민한다...');
// }

// function pickDrink() {
// //   3초 기다린 후에 코드 실행 (= 3초 고민함)
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('고민 끝!!!');
//       product = '제로콜라';
//       // price = 2000;
//       price = 4000;

//       if (price <= 2000) {
//         resolve();
//       } else {
//         reject();
//       }
//     }, 3000);
//   });
// }

// function pay() {
//   console.log(`상품명: ${product}, 가격: ${price}`);
// }

// function nopay() {
//   console.log('금액 부족ㅜㅜㅜ');
// }

// let product;
// let price;

// goMart();
// pickDrink().then(pay).catch(nopay);

////////////////////////////////////////
// 3. 프로미스 체이닝(chaining)
// 함수를 이용해 (4 + 3) * 2 -1  = 13을 연산
// sub(mul(odd(4, 3),2, 1)) : odd: mul -> sub

// case1. 콜백함수로 처리한다면?
// function add(n1, n2, callback) {
//   setTimeout(() => {
//     const result = n1 + n2;
//     callback(result);
//   }, 3000);
// }

// function mul(n, callback) {
//   setTimeout(() => {
//     const result = n * 2;
//     callback(result);
//   }, 700);
// }

// function sub(n, callback) {
//   setTimeout(() => {
//     const result = n - 1;
//     callback(result);
//   }, 700);
// }

// add(4, 3, function (x) {
//   console.log('1: ', x);
//   mul(x, function (y) {
//     console.log('2: ', y);
//     sub(y, function (z) {
//       console.log('3: ', z);
//     });
//   });
// });

// case2. 프로미스 체이닝 적용!

// 함수를 이용해 (4 + 3) * 2 -1  = 13을 연산
// sub(mul(odd(4, 3),2, 1)) : odd: mul -> sub

// case1. 콜백함수로 처리한다면?
// function add(n1, n2, callback) {
//   setTimeout(() => {
//     const result = n1 + n2;
//     callback(result);
//   }, 3000);
// }

// function mul(n, callback) {
//   setTimeout(() => {
//     const result = n * 2;
//     callback(result);
//   }, 700);
// }

// function sub(n, callback) {
//   setTimeout(() => {
//     const result = n - 1;
//     callback(result);
//   }, 700);
// }

// add(4, 3, function (x) {
//   console.log('1: ', x);
//   mul(x, function (y) {
//     console.log('2: ', y);
//     sub(y, function (z) {
//       console.log('3: ', z);
//     });
//   });
// });

// case2. 프로미스 체이닝 적용!
function add(n1, n2) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const result = n1 + n2;
      resolve(result);
    }, 1000);
  });
}

function mul(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const result = n * 2; // 14
      //   resolve(result); // resolve(14)
      reject(new Error('의도적으로 발생시킨 에러!!!'));
    }, 700);
  });
}

function sub(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const result = n - 1;
      resolve(result); // resolve(13)
    }, 500);
  });
}

add(4, 3)
  .then(function (result) {
    console.log('1: ', result); // 7
    return mul(result); // return mul(7)
  })
  .then(function (result) {
    console.log('2: ', result); // 14
    return sub(result); // return sub(14)
  })
  .then(function (result) {
    console.log('3: ', result); // 13
  })
  .catch(function (error) {
    console.log(error);
  });
