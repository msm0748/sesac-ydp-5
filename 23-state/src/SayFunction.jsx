import { useState } from 'react';

function SayFunction() {
  console.log(useState('Welcome'));

  const [message, setMessage] = useState('welcome!');

  const onClickEnter = () => {
    setMessage('안녕하세요!');
  };
  const onClickLeave = () => {
    setMessage('안녕히가세요!');
  };
  return (
    <div>
      {/* 
        - HTML : onclick="onClickEvent()" -> 문자열 형식 호출문 등록
        - JS : addEventListener("click", onClickEvent) -> 괄호를 없애 함수를 바로 실행하지 않고, 클릭 발생했을 때 호출되도록
        - React : onClick={onClickEvent} -> JS와 동일
      */}
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1>{message}</h1>
    </div>
  );
}
export default SayFunction;
