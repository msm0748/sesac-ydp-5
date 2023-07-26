// 조건문

// if문
if (5 > 3) {
  console.log('얍!!');
}

// let number = Number(prompt('숫자를 입력해주세요 !'));

// if (number > 10) {
//   console.log('입력한 수는 10보다 크군요!');
// } else {
//   console.log('입력한 수는 10보다 작거나 같네요 !');
// }

// if (number > 10) {
//   console.log('입력한 수는 10보다 크군요!');
// } else if (number === 10) {
//   console.log('입력한 수는 10이네요.');
// } else {
//   console.log('입력한 수는 10보다 작거나 같네요 !');
// }

// const age = Number(prompt('나이를 입력하세요.'));
// console.log(age);
// if (age >= 20) {
//   console.log('성인');
// } else if (age >= 17) {
//   console.log('고등학생');
// } else if (age >= 14) {
//   console.log('중학생');
// } else if (age >= 8) {
//   console.log('초등학생');
// } else {
//   console.log('유아');
// }

// 중첩 if문
// let userId = 'user001';
// let userPw = '1234';

// id, pw 검사하는 함수
// function loginUser() {
//   let inputId = prompt('아이디 입력');
//   let inputPw = prompt('비번 입력');

//   if (userId === inputId) {
//     if (userPw === inputPw) {
//       return '로그인 성공';
//     } else {
//       return '비번 오류! 로그인 실패';
//     }
//   } else if (inputId === '') {
//     return '아이디를 입력하세요.';
//   } else {
//     return '아이디 오류 ! 로그인 실패';
//   }
// }
// const result = loginUser();
// console.log(result);
// console.log(loginUser());

// switch 문
// let a = 7;
// switch (a) {
//   case 3:
//     console.log('a가 3이군요');
//     break;
//   case 4:
//     console.log('a가 4군요!');
//     break;
//   case 5:
//     console.log('a가 5군요');
//     break;
//   default:
//     console.log('a가 무슨 값인지 모르겠습니다.');
//     break;
// }

// let score = Number(prompt('학점을 입력하세요.'));

// switch (parseInt(score / 10)) {
//   case 10:
//     console.log('A');
//     break;
//   case 9:
//     console.log('B');
//     break;
//   case 8:
//     console.log('C');
//     break;
//   case 7:
//     console.log('D');
//     break;
//   case 6:
//     console.log('E');
//     break;
//   case 5:
//     console.log('F');
//     break;
//   default:
//     console.log('학사 경고 입니다.');
//     break;
// }

// 삼항 연산자
// let num = 5;
// if (num % 2 === 1) {
//   console.log('홀수');
// } else {
//   console.log('작수');
// }

// num % 2 === 1 ? console.log('홀수') : console.log('짝수');

let now = new Date().getHours();
now % 12 === 1 ? console.log('오전') : console.log('오후');
