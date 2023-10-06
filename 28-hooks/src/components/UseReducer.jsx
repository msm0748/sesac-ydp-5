import React, { useReducer } from 'react';

const initState = { value: 0 };
const reducer = (prevState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { value: prevState.value + 1 };
    case 'DECREMENT':
      return { value: prevState.value - 1 };
    case 'RESET':
      return initState;
    default:
      return { value: prevState.value };
  }
};

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initState);

  const increment = () => dispatch({ type: 'INCREMENT' });
  const decrement = () => dispatch({ type: 'DECREMENT' });
  const reset = () => dispatch({ type: 'RESET' });

  return (
    <div>
      <h1>useReducer ex</h1>
      <h2>{state.value}</h2>
      <button onClick={increment}>Plus</button>
      <button onClick={decrement}>Minus</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
