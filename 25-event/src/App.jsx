import logo from './logo.svg';
import './App.css';
import SyntheticEvent from './SyntheticEvent.jsx';
import ClassBind from './ClassBind';
import Counter from './Counter';
import ClassHandler from './ex/Handler_ex';
import FunHandlerEx from './ex/Fun_Handler_ex';
import TextColor from './TextColor';
import ShowText from './ShowText';

function App() {
  return (
    <div className="App">
      <h1>리액트당</h1>
      <SyntheticEvent />
      <hr />
      <ClassBind />
      <hr />
      <Counter />
      <hr />
      <ClassHandler />
      <hr />
      <FunHandlerEx />
      <hr />
      <TextColor />
      <hr />
      <ShowText />
    </div>
  );
}

export default App;
