import React from 'react';
import PropTypes from 'prop-types';

export default function PostItem({ posts }) {
  return (
    <div>
      {posts.length === 0 ? (
        <div>Loading...</div>
      ) : (
        posts.map((v) => (
          <div key={v.id}>
            <div>{v.title}</div>
            <div>{v.body}</div>
          </div>
        ))
      )}
    </div>
  );
}

PostItem.propTypes = {
  posts: PropTypes.array,
};
