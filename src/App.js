import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import './assets/global.css'
import catalog from './assets/catalog.json'

import Nav from "./components/Nav";
import Origin from "./Origin";
import Store from "./views/Store"
import Cart from "./views/Cart"

const App = () => {

  const [cart, setCart] = useState([])

  const initializeCart = () => {
    let initialCart = [];
    for (let i = 0; i < catalog.length; i++) {
      initialCart.push({
        id: i,
        quantity: 0
      })
    }
    setCart(initialCart);
  };

  const addToCart = (item) => {
    let newCart = [...cart];
    newCart[item.id].quantity++;
    setCart(newCart);
  }

  useEffect(() => {
    initializeCart();
  }, [])

  return (
    <BrowserRouter>
    <Nav cart={cart}/>
      <Routes>
        <Route path="/" element={<Origin />} />
        <Route path="/store" element={<Store add={addToCart}/>} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
