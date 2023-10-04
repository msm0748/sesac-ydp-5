import { useState } from 'react';
import { useRef } from 'react';

function RefSample2() {
  // 1. ref 객체 만들기
  const id = useRef(0);
  const [number, setNumber] = useState(10);

  const handleClick = () => {
    id.current++;
  };

  const handleClick2 = () => {
    setNumber((prev) => prev + 1);
  };
  return (
    <div>
      <p>함수형 컴포넌트에서 버튼 클릭시 id 값을 1씩 증가</p>
      <p>{id.current}</p>
      <button onClick={handleClick}>+</button>

      <p>비교, state는 ref와 다르게 값이 변경되면 리렌더링 되는 것을 확인</p>
      <p>{number}</p>
      <button onClick={handleClick2}>+</button>
    </div>
  );
}
export default RefSample2;
