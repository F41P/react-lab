import Navbar from './features/Navbar';
import Container from './features/Container';
import Home from './features/Home';
import GlobalStyle from './features/GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import AddForm from './features/Product/Addform';
import UpdateForm from './features/Product/UpdateForm';
import { useEffect, useState } from 'react';
import axios from 'axios';

let currentProductId = 9;

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const products = await axios.get(
        'https://68e9f962f1eeb3f856e5959c.mockapi.io/data'
      );
      setProducts(products.data);
    }
    getProducts();
  }, []);

  function addProduct(product) {
    const newProduct = { id: currentProductId++, ...product };
    setProducts([...products, newProduct]);
  }

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Container>
        {products.length > 0 ? (
          <Routes>
            <Route path="/create-product" element={<AddForm addProduct={addProduct} />} />
            <Route path="/update-product/:id" element={<UpdateForm />} />
            <Route path="/" element={<Home products={products} />} />
          </Routes>
        ) : (
          <div>Loading products....</div>
        )}
      </Container>
    </>
  );
}

export default App;