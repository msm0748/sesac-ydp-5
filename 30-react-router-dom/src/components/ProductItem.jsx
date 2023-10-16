import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductItem({ product }) {
  const { id, title, email } = product;
  return (
    <Link to={`/products/${id}`}>
      <ul>
        <li>
          <h2>{title}</h2>
        </li>
        <li>
          <p>{email}</p>
        </li>
      </ul>
    </Link>
  );
}
