import React, { useEffect, useRef, useState } from 'react';

export default function Chat({ userList, socket }) {
  const [message, setMessage] = useState('');
  const [data, setData] = useState([]);
  const inputRef = useRef(null);
  const messagesContainerRef = useRef(null);

  useEffect(() => {
    socket.on('newMessage', (data) => {
      setData((prev) => [...prev, data]);
    });
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
        {data.map((value) => (
          <div>{value}</div>
        ))}
      </div>
      <div>
        <select id="nick-list">
          <option value="all">전체</option>
          {Object.values(userList).map((value, i) => (
            <option value="value" key={i}>
              {value}
            </option>
          ))}
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
