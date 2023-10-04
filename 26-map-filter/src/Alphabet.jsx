import { useState } from 'react';

function Alphabet() {
  // const [alphabet, setAlphabet] = useState(['b', 'a', 'n', 'a', 'n', 'a']);
  const [alphabet, setAlphabet] = useState([
    {
      id: 1,
      alpha: 'a',
    },
    {
      id: 2,
      alpha: 'p',
    },
    {
      id: 3,
      alpha: 'p',
    },
    {
      id: 4,
      alpha: 'l',
    },
    {
      id: 5,
      alpha: 'e',
    },
  ]);

  const [inputAlpha, setInputAlpha] = useState('');
  const handleChange = (e) => {
    setInputAlpha(e.target.value);
  };

  const addAlpha = () => {
    const newAlpha = alphabet.concat({
      id: alphabet.length + 1,
      alpha: inputAlpha,
    });

    setAlphabet(newAlpha);
  };

  const deleteAlpha = (targetId) => {
    console.log(targetId);

    const newAlpha = alphabet.filter((alpha) => alpha.id !== targetId);
    setAlphabet(newAlpha);
  };

  const handleKeyDown = (e) => {
    if (e.code === 'Enter') addAlpha();
    return;
  };

  return (
    <div>
      <input
        type="text"
        placeholder="알파벳 입력"
        value={inputAlpha}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button type="button" onClick={addAlpha}>
        Add
      </button>
      <ol>
        {/* {alphabet.map((v, i) => (
          <li key={i}>{v}</li>
        ))} */}
        {alphabet.map((v) => (
          <li key={v.id} onDoubleClick={() => deleteAlpha(v.id)}>
            {v.alpha}
          </li>
        ))}
      </ol>
    </div>
  );
}
export default Alphabet;
