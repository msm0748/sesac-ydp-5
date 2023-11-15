import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Chat from './Chat';

const socket = io('http://localhost:8000');

function App() {
  const [message, setMessage] = useState([]);
  const [nickName, setNickName] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [userList, setUserList] = useState();

  console.log(disabled);

  const handleNickName = (e) => {
    setNickName(e.target.value);
  };

  useEffect(() => {
    // socket.on('joinRoom', (data) => {
    //   console.log(data.id);
    // });

    // 닉네임 중복, alert 창 띄우기
    socket.on('error', (data) => {
      alert(data);
    });

    socket.on('entrySuccess', (nick) => {
      setDisabled(true);
      console.log(nick);
    });

    socket.on('updateNick', (nickObjs) => {
      console.log(nickObjs, 'nickObjs');
      // nickObjs: {socket.id: nick1, socket.id: nick2, ...}

      // TODO: nickObjs 반복 돌아서 option 태그 추가
      // option 태그의 value 속성 값은 socket.id, option 태그의 컨텐츠는 nick 값
      setUserList(nickObjs);
    });
  }, []);

  const handleJoinRoom = () => {
    socket.emit('setNick', nickName);
  };
  return (
    <div className="m-10">
      <div className="flex items-center gap-4">
        <div>
          <label htmlFor="nickname">닉네임</label>
          <span> : </span>
          <input
            type="text"
            id="nickname"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:outline-none py-2 px-3"
            onChange={handleNickName}
            maxLength="6"
            disabled={disabled}
          />
        </div>
        <div>
          <button
            disabled={disabled}
            className="bg-white hover:bg-gray-100 text-gray-800 font-medium py-1 px-2 border border-gray-400 rounded shadow"
            onClick={handleJoinRoom}
          >
            설정
          </button>
        </div>
      </div>
      <div>{nickName}</div>
      {disabled && <Chat userList={userList} />}
    </div>
  );
}

export default App;
