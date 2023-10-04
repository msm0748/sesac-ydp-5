import { useState } from 'react';

function CounterFunction() {
  const [number, setNumber] = useState(0);

  const handleIncrease = () => setNumber(number + 2);
  const handleDecrease = () => setNumber(number - 1);
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
    </div>
  );
}
export default CounterFunction;
