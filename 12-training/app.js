const express = require('express');
const app = express();
const path = require('path');
const PORT = 8000;

app.set('views', path.join(__dirname + '/views')); //
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const indexRouter = require('./routes/index.js');
app.use(indexRouter);

app.get('*', (req, res) => {
  res.render('404');
});

app.listen(PORT, () => {
  console.log(`Port ${PORT} is opening`);
});
