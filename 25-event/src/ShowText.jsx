import { useState } from 'react';

function ShowText() {
  const [isShow, setIsShow] = useState(true);
  return (
    <div>
      <button onClick={() => setIsShow(!isShow)}>사라져라</button>
      <h1>{isShow ? '내가 없어져 볼게' : '얍'}</h1>
    </div>
  );
}
export default ShowText;
