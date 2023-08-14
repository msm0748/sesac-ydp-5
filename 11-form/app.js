const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('/views', 'views');
// : 요청 req, res의 중간에 작업하는 코드
// app.use()

// req.body 객체를 해석할 수 있도록 body-parser 미들웨어
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 라우팅(Routing) - 주소 설정
// GET '/' => index.ejs를 보여줌
app.get('/', (req, res) => {
  // res.render(ejs_경로, 데이터)
  // ejs_경로: views/ 폴더 내부 ejs 파일의 주소
  // 데이터: 뷰에 넣어줄 정보
  res.render('index', { title: '폼 전송을 연습해보자!' });
});

// GET '/getForm' => 임의의 메세지 전송
// get 방식은 클라이언트에서 보낸 데이터가 req.query에 저장
app.get('/getForm', (req, res) => {
  console.log(req.query);
  // res.send('get 요청 성공');
  res.render('result', {
    title: 'Get 요청',
    userInfo: req.query,
  });
});

// POST "/postForm" => 임의의 메세지 전송
// post 방식은 클라이언트에서 보낸 데이터가 req.body에 저장
app.post('/postForm', (req, res) => {
  console.log(req.body);
  // res.send('post 요청 성공');
  res.render('result', {
    title: 'Post 요청',
    userInfo: req.body,
  });
});

app.get('/quiz', (req, res) => {
  res.render('quiz', { title: '퀴즈를 풀어보자!' });
});

app.get('/quizGetForm', (req, res) => {
  res.render('quizResult', { title: '당신의 정보는 !!', userInfo: req.body });
});

app.listen(PORT, () => {
  console.log(`${PORT} is open!`);
});
