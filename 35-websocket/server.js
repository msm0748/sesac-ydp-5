const ws = require('ws');
const PORT = 8000;
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('client');
});

const server = app.listen(PORT, () => {
  console.log('서버 연결 완료');
});

const wss = new ws.Server({ server });

const sockets = [];

wss.on('connection', (socket) => {
  console.log('클라이언트가 연결 되었습니다.');
  sockets.push(socket);
  // 클라이언트의 메세지 수신
  socket.on('message', (message) => {
    console.log(`클라이언트로 부터 받은 메시지 : ${message}`);

    sockets.forEach((socket) => {
      socket.send(`${message}`);
    });
  });

  socket.on('error', (error) => {
    console.error('오류 발생', error);
  });

  socket.on('close', () => {
    console.log('클라이언트와 연결이 종료되었습니다.');
  });
});
