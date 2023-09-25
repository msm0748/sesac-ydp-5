import logo from './logo.svg';
import './App.css';
import FunctionComponent from './FunctionComponent';
import ClassComponent from './ClassComponent';
import Button from './Button';
import Test from './Test';
import Test2 from './Test2';
import Quiz from './Quiz';
import Img from './48163.jpg';

function App() {
  const valid = () => {
    console.log('콘솔 띄우기 성공');
  };
  return (
    <div className="App">
      {/* <FunctionComponent name="영등포 새싹" />
      <FunctionComponent />
      <hr />
      <ClassComponent />
      <Button link="https://google.com">Google</Button>

      <Test />
      <Test2 /> */}
      <Quiz imgSrc={Img} author="이미예" price="35,000" type="자기 계발서" valid={valid} />
    </div>
  );
}

export default App;
