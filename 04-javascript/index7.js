// 반복문

// for문
for (let i = 0; i < 10; i++) {
  // i가 0 ~ 9 총 10번 반복
  console.log('안녕', i);
}
console.log('--------');

// i += 2 // i = i + 2
for (let i = 0; i < 10; i += 2) {
  // i가 0 ~ 9 총 10번 반복
  console.log('안녕', i);
}
console.log('--------');

// 1 ~ 5 출력
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
console.log('--------');

// 5 ~ 1 출력
for (let i = 5; i >= 1; i--) {
  console.log(i);
}
console.log('--------');

// 1부터 n까지의 합 구하기
let n = 10; // 어떤 숫자까지 합을 구할지에 대한 n
let sum = 0; // 합을 저장할 변수
for (let i = 1; i <= n; i++) {
  // sum 변수에 값을 재할당 (이전 sum 변수의 값 + 현재 반복변수 i 값)
  sum = sum + i;
  //   console.log(i, sum);
}
console.log(sum);
console.log('--------');

const fruits = ['사과', '배', '포도', '딸기'];

console.log(fruits.length);
for (let f = 0; f < fruits.length; f++) {
  console.log(fruits[f]);
}

// 1 ~ 20 중에서 짝수일 때의 합 구하기
let num2 = 0;
let sum2;
//  - 1 ~ 20까지 숫자를 반복
// - 현재 반복 숫자가 짝수라면 sum2
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    sum2 += sum2;
  }
}

// while 문
let idx = 0;
while (idx < 10) {
  console.log('안녕', idx);
  idx++;
}

console.log('---------');
let idx2 = 0;
while (true) {
  console.log('안녕', idx2);
  idx2++;

  if (idx2 === 10) {
    break;
  }
}

// continue

let sum3 = 0;
for (let i = 0; i < 100; i++) {
  if (i % 2 === 0) {
    continue;
  }

  sum3 += i;
  console.log(i, sum3);
}
console.log(sum3);
