import React from 'react';

export default function PostItem({ posts }) {
  return (
    <div>
      <h1>Post List</h1>
      {posts.length === 0 ? (
        <div>Loading...</div>
      ) : (
        posts.map((v) => (
          <div key={v.id} className="item">
            <h2>{v.title}</h2>
            <p>{v.body}</p>
          </div>
        ))
      )}
    </div>
  );
}
