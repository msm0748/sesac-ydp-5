import React, { useEffect } from 'react';
import { useState } from 'react';
import PostItem from './PostItem';
import axios from 'axios';

export default function PostList() {
  const [posts, setPosts] = useState([]);

  const getData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setPosts(response.data);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getData();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div className="list">
      <PostItem posts={posts} />
    </div>
  );
}
