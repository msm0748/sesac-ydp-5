import React from 'react';

export default function Chat({ userList }) {
  console.log(userList, 'userList');
  return (
    <div>
      <select id="nick-list">
        <option value="all">전체</option>
        {Object.values(userList).map((value, i) => (
          <option value="value" key={i}>
            {value}
          </option>
        ))}
      </select>
      에게
      <input type="text" />
      <button type="button">전송</button>
    </div>
  );
}
