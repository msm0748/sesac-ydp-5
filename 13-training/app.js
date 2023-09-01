const express = require('express');
const app = express();
const PORT = 8000;

// multer 관련 설정
const multer = require('multer');
const path = require('path'); // 경로에 관한 내장 모듈
const upload = multer({
  dest: 'uploads/', // dest: 클라이언트가 업로드한 파일을 저장할 서버측 경로
});
// multer 세부 설정
const uploadDetail = multer({
  // storage: 저장할 공간에 대한 정보
  // done(null, xx) 여기서 null은 error를 의미하는 매개변수
  // 에러가 없으므로 "null"이라고 전달하여 콜백 함수를 호출!
  storage: multer.diskStorage({
    destination(req, file, done) {
      // done: callback
      done(null, 'uploads/'); // 파일을 업로드할 경로 설정
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname); // 파일 "확장자"를 추출
      done(null, path.basename(req.body.id, ext) + ext);
    },
  }),
  // limits: 파일 제한 정보
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/test', (req, res) => {
  res.send({ desc: '난 객체다' });
});

app.post('/signUp', uploadDetail.single('userfile'), (req, res) => {
  console.log(req.file); // { 파일_정보 }
  console.log(req.body);

  const fileName = req.file.filename;
  const filePath = '/' + req.file.destination + fileName;
  res.render('result', { user: req.body, filePath });
});

app.listen(PORT, function () {
  console.log(`Port ${PORT} is opening!`);
});
