import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './store/counterSlice';
function App() {
  return (
    <div className="App">
      <h1>React Redux Ex</h1>
      <Box1 />
    </div>
  );
}

const Box1 = () => {
  const number = useSelector((state) => state.counter.value);

  return (
    <div className="Box">
      <h2>Box1: {number}</h2>
      <Box2 />
    </div>
  );
};
const Box2 = () => {
  return (
    <div className="Box">
      <h2>Box2</h2>
      <Box3 />
    </div>
  );
};
const Box3 = () => {
  return (
    <div className="Box">
      <h2>Box3</h2>
      <Box4 />
    </div>
  );
};
const Box4 = () => {
  const number = useSelector((state) => state.counter.value);
  const isVisible = useSelector((state) => state.isVisible);
  const dispatch = useDispatch();

  const plus = () => dispatch(increment());
  const minus = () => dispatch(decrement());

  const onChange = () => dispatch({ type: 'CHANGE' });
  return (
    <div className="Box">
      <h2>Box4: {number}</h2>

      <h2>isVisible 값은 {isVisible ? '참' : '거짓'}</h2>
      <button onClick={plus}>Plus</button>
      <button onClick={minus}>minus</button>

      <button onClick={onChange}>CHANGE</button>
    </div>
  );
};

export default App;
