import { useState } from 'react';
function FunHandlerEx() {
  const [title, setTitle] = useState('Hello World');
  const handleClick = () => {
    setTitle('Goodbye World!');
  };
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={handleClick}>클릭</button>
    </div>
  );
}
export default FunHandlerEx;
