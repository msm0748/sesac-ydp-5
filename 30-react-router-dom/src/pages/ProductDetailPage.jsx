import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function ProductDetailPage() {
  const [data, setData] = useState([]);
  const { productId } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h1>ProductDetailPage</h1>
      <button onClick={() => navigate(-1)}>목록보기</button>
      <button onClick={() => navigate('/')}>홈으로 이동하기</button>
      <ul>
        <li>상품번호: {productId}</li>
        <li>상품명: {productInfo.name}</li>
        <li>판매자: {productInfo.email}</li>
        <li>상세설명: {productInfo.body}</li>
      </ul>
    </div>
  );
}
