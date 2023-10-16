import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div>
      <div>NotFoundPage</div>
      <Link to="/">홈으로 가기</Link>
    </div>
  );
}
