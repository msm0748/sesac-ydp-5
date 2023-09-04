const express = require('express');
const session = require('express-session');
const dotenv = require('dotenv');

const { sequelize } = require('./models');
dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
    },
  })
);

const indexRouter = require('./routes/user');
app.use(indexRouter);

// TODO: 404 에러 처리
app.get('*', (req, res) => {
  res.render('404');
});

sequelize.sync({ force: false }).then(() => {
  // force: false; 실제 데이터베이스에 테이블이 존재하지 않으면 모델에 정의한대로 생성
  // force: true; 데이터베이스에 테이블 있어도 무조건 생성
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
