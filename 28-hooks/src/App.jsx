import logo from './logo.svg';
import './App.css';
import UseMemoEx from './components/UseMemoEx';
import UseCallback from './components/UseCallback';
import UseCallback2 from './components/UseCallback2';
import UseReducer from './components/UseReducer';
import useTitle from './hooks/useTitle';
import Faq from './components/Faq';

function App() {
  useTitle('hihi');
  return (
    <div className="App">
      <UseMemoEx />
      <UseCallback />
      <UseCallback2 postId={7} />
      <UseReducer />
      <hr />
      <Faq />
    </div>
  );
}

export default App;
