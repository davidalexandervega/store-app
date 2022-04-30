import React from 'react';
import CartItem from '../components/CartItem';

const Cart = (props) => {
  const catalog = props.catalog;

  const cart = props.cart;
  let filteredCart = [];
  let subtotal = 0;

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].quantity !== 0) {
      filteredCart.push(cart[i]);
    }
  }

  const addTotal = () => {
    for (let i = 0; i < filteredCart.length; i++) {
      let item = filteredCart[i];
      subtotal += catalog[item.id].price * item.quantity;
    }
    return subtotal;
  };

  return (
    <div id="cart">
      <div id="cartItems">
        {filteredCart.map((obj) => (
          <CartItem
            catalog={catalog}
            cart={cart}
            cartItem={obj}
            key={obj.id}
            setCart={props.setCart}
          />
        ))}
      </div>
      {filteredCart.length > 0 && (
        <div id="cartSummary">
          <div id="cartDescription">
            your subtotal is <br></br>
            <b>${addTotal()}</b>
          </div>
          <div id="checkout">checkout</div>
        </div>
      )}
      {filteredCart.length === 0 && (
        <div id="emptyCart">your cart is currently empty.</div>
      )}
    </div>
  );
};

export default Cart;
