// only typescript type

// Tuple
let drink: [string, string] = ['사이다', '롯데'];
drink[0] = 'cider';
drink[1] = 'lotte';

// drink.push('얏호'); // tuple 한계
console.log(drink);

// readonly: 요소 타입 순서와 같이 고정
let drink2: readonly [string, number] = ['사이타', 2200];
// drink2.push('얏호'); // error

type productInfo = [number, string, number]; // type 별칭으로 type 선언

let product1: productInfo = [1, '로지텍 MX master3', 130000];
let product2: productInfo = [2, '로지텍 MX master3', 52000];
// let product3: [number, string, number] = [2, '로지텍 MX master3', 'Apple']; // type error

// Enum
enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
}

enum Cafe {
  americano = '아메리카노',
  latte = '카페라떼',
}

console.log(Auth.admin);
console.log(Cafe.latte);

enum Cake {
  choco,
  vanilla,
  kiwi = '키위 케이크',
}

console.log(Cake.choco);
console.log(Cake.kiwi);

/////////////////////////////////////////
// any
let val: any;
val = true;
val = '하이';
val = 10000;
val = { name: 'sesac' };

// 암묵적으로 any
let val2;
val2 = false;
val2 = '바이';
console.log(val2);

let olimpic_newgame: readonly [object, boolean] = [{ name: '쇼트트랙', type: '혼성계주' }, true];
// olimpic_newgame[1] = false;

enum Auth2 {
  admin = 2,
  user = 3,
  guest = 4,
}

enum Cafe2 {
  americano = '아메리카노',
  latte = '카페라떼',
}

console.log(Auth2[3]); // 출력 가능
// console.log(Cafe2['아메리카노']); // 출력 불가능

///////////////////////////////////////////////////////////
// type & interface

// 1. interface
interface Student {
  name: string;
  isPassed: boolean;
}

const student1: Student = {
  name: 'jinheyong',
  isPassed: true,
  // addr: 'seoul',
};

const student2: object = {
  name: 'jinheyong',
  isPassed: true,
  addr: 'seoul',
};

// interface 상속
// A+, A, B, C, D, F
type Score = 'A+' | 'A' | 'B' | 'C' | 'D' | 'F';
interface BaseballClub extends Student {
  position: string;
  height: number;
  readonly backNumber?: number; // ?: 있어도 되고 없어도 됨
  // [grade: number]: string;
  [grade: number]: Score;
}

const otani: BaseballClub = {
  name: 'ontani',
  isPassed: true,
  position: 'pitcher',
  height: 193,
  1: 'A+', // 학년: 점수
  // 2: 'NP', // error
};
console.log(otani);

otani.position = '투수';
otani['height'] = 200;
console.log(otani);

// type vs enum
type Bp1 = 500 | 700 | 1000;
enum Bp2 {
  SM = 500,
  MD = 700,
  LG = 1000,
}

const width1: Bp1 = 500;
const width2: Bp2 = Bp2.SM;

// 교차 타입: 두개 이상의 타입을 합치는 것
interface Toy {
  name: string;
  start(): void;
}

interface Car {
  name: string;
  color: string;
  price: number;
}

type ToyCar = Toy & Car;
const toyCar: ToyCar = {
  name: 'tayo',
  start() {
    console.log('출바아알알~');
  },
  color: 'blue',
  price: 5000,
};

// 2. type
type Gender = 'F' | 'M';
type Person = {
  name: string;
  age?: number;
  like?: string[];
  gender: Gender;
};

let daniel: Person = {
  name: 'daniel',
  gender: 'F',
  age: 20,
  like: ['minji', 'hani'],
};
