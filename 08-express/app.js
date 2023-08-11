const express = require('express');
const app = express();
const PORT = 8080;

// express 템플릿 엔진 종류 등록
app.set('view engine', 'ejs'); // express 템플릿 엔진 종류 드록
app.set('views', './views'); // 템플릿 엔진 파일을 조장할 위치 등록

// (임시) 데터이스에서 가온 회ㅓ 정보(id, pw)
const idFromDB = 'banana';
const pwdFromDB = '1234qwer';

// app.get (경로, 해당 경로로 들어왔을 때 실행할 함수)
app.get('/', function (req, res) {
  // res.send(x): x를 클라이언트한테 응답으로 보냄
  // res.send('<h1>Hello Express!!!</h1>');

  // res.render(ejs_filename): ejs file 이름을 찾아서 응답
  res.render('index', { userId: idFromDB, userPw: pwdFromDB, btns: ['사과', '오렌지', '키위'], isLogin: true });
});

app.get('/sesac', function (req, res) {
  res.send('<h1>새삭 영등포 캠퍼스 5기 수업중</h1>');
});

// 퀴즈
// 1. /login 경로로 요청이 들어오면 로그인 페이지(ejs)를 응답
app.get('/login', function (req, res) {
  res.render('login');
});

// 2. /register 경로로 요청이 들어오면 회원가입 페이지(ejs)를 응답
app.get('/register', function (req, res) {
  res.render('register');
});

// 서버가 실행할 PORT를 지정하고, 실행했을 때 콘솔로그를 찍음
app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}! http://localhost:${PORT}`);
});
