import React, { useEffect, useRef, useState } from 'react';

export default function Chat({ userList, socket, nickName }) {
  const [message, setMessage] = useState('');
  const [data, setData] = useState([]);
  const inputRef = useRef(null);
  const messagesContainerRef = useRef(null);

  useEffect(() => {
    socket.on('newMessage', (data) => {
      setData((prev) => [...prev, data]);
    });
    socket.on('notice', (data) => {
      setData((prev) => [...prev, data]);
    });
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [data]);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };
  const handleSendMessage = () => {
    if (message.trim() === '') return;
    // "send" 이벤트 전송 { 닉네임, 입력창 내용 }
    socket.emit('send', message);
    setMessage('');
    inputRef.current.focus();
  };

  const handleOnKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col justify-between">
      <div className="bg-cyan-500 h-[600px] overflow-auto" ref={messagesContainerRef}>
        <ul className="flex flex-col gap-1 p-4">
          {data.map((value, index) => {
            if (value.to === 'system') {
              return (
                <li key={index} className="text-center">
                  <span>{value.data}</span>
                </li>
              );
            } else if (nickName === value.to) {
              return (
                <li key={index} className="bg-amber-200 w-fit p-2 rounded-md self-end">
                  <span>{value.to} : </span>
                  <span>{value.data}</span>
                </li>
              );
            } else {
              return (
                <li key={index} className="bg-white w-fit p-2 rounded-md">
                  <span>{value.to} : </span>
                  <span>{value.data}</span>
                </li>
              );
            }
          })}
        </ul>
      </div>
      <div>
        <select id="nick-list">
          <option value="all">전체</option>
          {Object.values(userList).map((value, index) => {
            if (value !== nickName) {
              return (
                <option value="value" key={index}>
                  {value}
                </option>
              );
            }
          })}
        </select>
        에게
        <input type="text" onChange={handleOnChange} value={message} ref={inputRef} onKeyUp={handleOnKeyUp} />
        <button type="button" onClick={handleSendMessage}>
          전송
        </button>
      </div>
    </div>
  );
}
