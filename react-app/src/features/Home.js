import React, { useState } from 'react';
import axios from 'axios';

import Product from './Product';
import Addform from './Product/Addform';
import { useEffect } from 'react';

let currentProductId = 9;

export default function Home() {
    const [products, setProducts] = useState([]);

    function addProduct(product) {
      const newProduct = { id: ++currentProductId, ...product };
      setProducts([...products, newProduct]);
    }

    useEffect(() => {
    async function getProducts() {
      const products = await axios.get(
        'https://68e9f962f1eeb3f856e5959c.mockapi.io/data'
      );
      setProducts(products.data);
    }

    getProducts();
    }, []);

    return (
      <>
      <h1>New Products</h1>
      {
        products.length > 0 ? (
          <ul className="Home__products">
            {products.map((product) => (
              <Product key={product.id} item={product} />
            ))}
          </ul>
        ) : (
          <div>Loading products....</div>
        )
      }
      <Addform addProduct={addProduct} />
    </>
    )
}
