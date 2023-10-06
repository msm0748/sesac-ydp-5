import React from 'react';
import { useCallback, useState, useEffect } from 'react';
import axios from 'axios';

// useCallback
// - 매번 함수를 생성하지 않고, 함수를 기억해두었다가 필요할 때마다 함수를 재사용
export default function UseCallback2({ postId }) {
  const [post, setPost] = useState([]);

  // [before]
  // const getPost = async () => {
  //   // 데이터 요청
  //   const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${postId}`);
  //   console.log(response);
  //   setPost(response.data);
  // };

  // [after]
  // useCallback 훅으로 메모이제이션 -> 의존성 배열에 있는 postId가 변경되지 않는 한
  // 컴포넌트는 리렌더링되지 않음
  // => 필요한 순간에만 api 요청을 날림!!
  const getPost = useCallback(async () => {
    // 데이터 요청
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${postId}`);
    console.log(response);
    setPost(response.data);
  }, [postId]);

  // useEffect 의존성 배열에 "함수"
  // 컴포넌트가 리렌더링 -> 함수 재생성 (주소값 변경) -> getPost 재호출
  useEffect(() => {
    getPost();
  }, [getPost]);

  return (
    <div>
      <h1>useCallback ex2</h1>
      {post.id ? post.title : '로딩중'}
    </div>
  );
}
