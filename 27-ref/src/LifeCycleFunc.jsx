import React, { useEffect } from 'react';
import LifeCycleFuncChild from './LifeCycleFuncChild';
import { useState } from 'react';

export default function LifeCycleFunc() {
  const [number, setNumber] = useState();
  const [visible, setVisible] = useState();

  const changeNumber = () => {
    setNumber(number + 1);
  };

  const changeVisible = () => {
    setVisible(!visible);
  };

  return (
    <div style={{ background: 'red' }}>
      <button onClick={changeNumber}>Plus</button>
      <button onClick={changeVisible}>visible</button>
      {visible && <LifeCycleFuncChild />}
    </div>
  );
}
