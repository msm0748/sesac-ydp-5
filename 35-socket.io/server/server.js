const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;
const { createServer } = require('http');
const { Server } = require('socket.io');

const httpServer = createServer(app);
const io = new Server(httpServer, {
  // 클라이언트 주소
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

// { socket.id: nick1 }
const nickObjs = {};

function updateList() {
  io.emit('updateNicks', nickObjs); // 전체 사용자 닉네임 모음 객체
}

io.on('connection', (socket) => {
  console.log('연결 완료!!!');

  // socket.emit('joinRoom', {
  //   id: socket.id,
  // });

  // emit() from server
  // - socket.emit(event_name, data): 해당 클라이언트에게만 이벤트, 데이터를 전송
  // - io.emit(event_name, data): 서버에 접속된 모든 클라이언트 전송
  socket.on('setNick', (nick) => {
    console.log(`닉네임 설정 완료 :: ${nick} 님 입장`);

    // 프론트에서 입력한 nick이 nickObjs 객체에 존재하는지 검사
    // 이미 존재; error 이벤트 + '이미 존재하는 닉네임 입니다.'
    // 새 닉니엠; notice 이벤트 + ${nick} 님이 입장하셨습니다.
    if (Object.values(nickObjs).indexOf(nick) > -1) {
      // 이미 존재하는 닉네임이 있음
      socket.emit('error', '이미 존재하는 닉네임 입니다.');
    } else {
      // 새로운 닉네임
      nickObjs[socket.id] = nick;
      console.log(nickObjs, '목록');
      io.emit('notice', { to: 'system', data: `${nick} 님이 입장하셨습니다.` }); // 전체 공지
      socket.emit('entrySuccess', nick); // 해당 소켓 데이터 전송
      updateList();
    }
  });

  // [실습3-3] 클라이언트 퇴장시
  // "notice" 이벤트로 퇴장 공지
  socket.on('disconnect', () => {
    console.log('접속 끊김 :: ', `${nickObjs[socket.id]} 님 퇴장 :: `, socket.id);

    io.emit('notice', { to: 'system', data: `${nickObjs[socket.id]} 님이 퇴장하셨습니다.` });
    delete nickObjs[socket.id];
    updateList();
  });

  socket.on('send', (data) => {
    io.emit('newMessage', { to: nickObjs[socket.id], data });
  });

  // [실습4] 채팅창 메세지 전송 Step1
  // send 이벤트를 받아서
  // 모두에게 newMessage 이벤트로 {닉네임, 입력창 내용} 데이터를 전송
});

httpServer.listen(PORT, () => {
  console.log('서버 실행');
});
