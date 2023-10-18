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

  const dispatch = useDispatch();

  const plus = () => dispatch(increment());
  const minus = () => dispatch(decrement());
  return (
    <div className="Box">
      <h2>Box4: {number}</h2>
      <button onClick={plus}>Plus</button>
      <button onClick={minus}>minus</button>
    </div>
  );
};

export default App;
