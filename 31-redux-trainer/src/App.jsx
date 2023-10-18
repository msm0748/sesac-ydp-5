import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { deposit, withdraw } from './store/moneySlice';

function App() {
  const [number, setNumber] = useState('');
  const money = useSelector((state) => state.money.value);
  const dispatch = useDispatch();
  const onChange = (e) => {
    setNumber(Number(e.target.value));
  };

  const depositingMoney = () => {
    setNumber('');
    dispatch(deposit(number));
  };

  const withdrawMoney = () => {
    setNumber('');
    dispatch(withdraw(number));
  };
  return (
    <div>
      <h1>코딩온 은행</h1>
      <h2>잔액 : {money}</h2>
      <input type="text" value={number} onChange={onChange} />
      <button onClick={depositingMoney}>입금</button>
      <button onClick={withdrawMoney}>출금</button>
    </div>
  );
}

export default App;
