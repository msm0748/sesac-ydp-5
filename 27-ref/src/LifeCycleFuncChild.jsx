import React, { useEffect } from 'react';
import { useState } from 'react';

export default function LifeCycleFuncChild({ number }) {
  const [input, setInput] = useState('');

  // useEffect(() => {
  //   console.log('컴포넌트 마운트!!!');
  // }, []);
  return <div>LifeCycleFuncChild</div>;
}
