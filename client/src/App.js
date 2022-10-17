import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './assets/global.css';

import Nav from './components/Nav';
import Origin from './Origin';
import Store from './views/Store';
import Cart from './views/Cart';

const App = () => {
  const [catalog, setCatalog] = useState([]);
  const [cart, setCart] = useState([]);

  const fetchCatalog = async () => {
    const response = await axios.get('http://localhost:4000/api/items');
    setCatalog(response.data);
  };

  const initializeCart = () => {
    let initialCart = [];
    for (let i = 0; i < catalog.length; i++) {
      initialCart.push({
        id: i,
        quantity: 0,
      });
    }
    setCart(initialCart);
  };

  const addToCart = (item) => {
    let newCart = [...cart];
    newCart[item.id].quantity++;
    setCart(newCart);
  };

  useEffect(() => {
    fetchCatalog();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    initializeCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [catalog]);

  return (
    <BrowserRouter>
      <Nav cart={cart} />
      <Routes>
        <Route path="/" element={<Origin />} />
        <Route path="/store" element={<Store catalog={catalog} add={addToCart} />} />
        <Route path="/cart" element={<Cart catalog={catalog} cart={cart} setCart={setCart} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
