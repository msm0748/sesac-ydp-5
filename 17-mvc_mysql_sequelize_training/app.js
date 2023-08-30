const express = require('express');
const app = express();
const PORT = 8000;
const db = require('./models');

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// TODO: 라우팅 분리
// 기본 주소: localhost:PORT/user <- 주의!!
const indexRouter = require('./routes/user');
app.use('/user', indexRouter);

// TODO: 404 에러 처리
app.get('*', (req, res) => {
  res.render('404');
});

db.sequelize.sync({ force: false }).then(() => {
  // force: false; 실제 데이터베이스에 테이블이 존재하지 않으면 모델에 정의한대로 생성
  // force: true; 데이터베이스에 테이블 있어도 무조건 생성
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
