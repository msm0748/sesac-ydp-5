import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';

export default function ProductList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10');
      // console.log(response);
      const data = await response.json();
      setData(data);
    };

    getData();
  }, []);
  return (
    <div>
      {data.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}
