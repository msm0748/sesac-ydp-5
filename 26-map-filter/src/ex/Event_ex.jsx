import { useRef } from 'react';
import { useState } from 'react';

function Event_ex() {
  const nameRef = useRef();
  const titleRef = useRef();
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [select, setSelect] = useState('작성자');
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  const handleSubmit = () => {
    if (name.trim() === '') return nameRef.current.focus();
    if (title.trim() === '') return titleRef.current.focus();
    setData((prev) => [...prev, { id: data.length + 1, title, name }]);
    setName('');
    setTitle('');
  };

  const handleSearch = () => {
    // if (select === '작성자') {
    //   const newData = data.filter((v) => v.name === select);
    // }
  };
  return (
    <div>
      <div style={{ border: '1px solid' }}>
        <label htmlFor="name">작성자 : </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="작성자"
          ref={nameRef}
        />
        <label htmlFor="title">제목 : </label>
        <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} ref={titleRef} />
        <button type="button" onClick={handleSubmit}>
          작성
        </button>
      </div>
      <div>
        <select onChange={(e) => setSelect(e.target.value)}>
          <option value="작성자">작성자</option>
          <option value="제목">제목</option>
        </select>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        <button type="button" onClick={handleSearch}>
          검색
        </button>
      </div>
      <div>
        <table border="1" cellSpacing="0" cellPadding="10">
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {data.map((v) => (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.title}</td>
                <td>{v.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Event_ex;
