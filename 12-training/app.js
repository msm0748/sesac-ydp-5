const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('dynamic');
});

app.get('/quiz', (req, res) => {
  res.render('dynamic2');
});

app.get('/axios', (req, res) => {
  res.send(req.query);
});

const id = 'banana';
const pw = '4321';

app.post('/axios', (req, res) => {
  console.log(req.body);
  if (req.body.userId === id && req.body.userPw === pw) {
    res.send({ isSuccess: true, userId: req.body.userId });
  } else {
    res.send({ isSuccess: false });
  }
});

app.listen(PORT, () => {
  console.log(`Port ${PORT} is opening`);
});
