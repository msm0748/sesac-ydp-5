import { useState } from 'react';

function TextColor() {
  const [style, setStyle] = useState({
    text: '검정색',
    color: 'black',
  });

  const handleChangeColor = (text, color) => {
    setStyle({
      text,
      color,
    });
  };

  return (
    <div>
      <h1 style={{ color: style.color }}>{style.text} 글씨</h1>
      <button onClick={() => handleChangeColor('빨간색', 'red')}>빨간색</button>
      <button onClick={() => handleChangeColor('파란색', 'blue')}>파란색</button>
    </div>
  );
}
export default TextColor;
