import React from 'react';

const CartItem = (props) => {
  const catalog = props.catalog;

  const cart = props.cart;
  const setCart = props.setCart;
  const cartItem = props.cartItem;
  const data = catalog[cartItem.id];
  const image = require(`../assets/images/id${data.id}.png`);

  const cartUp = () => {
    let newCart = [...cart];
    const item = newCart[data.id];
    item.quantity++;
    setCart(newCart);
  };

  const cartDown = () => {
    let newCart = [...cart];
    const item = newCart[data.id];
    item.quantity--;
    setCart(newCart);
  };

  const cartRemove = () => {
    let newCart = [...cart];
    newCart[data.id].quantity = 0;
    setCart(newCart);
  };
  return (
    <div className="cartItem">
      <div className="cartImg">
        <img src={image} alt={data.name} />
      </div>
      <div className="cartDetails">
        <div className="cartName">
          {data.name} <b>${data.price}</b>
        </div>
        <div className="cartDesc">{data.description}</div>
        <div className="cartQuantity">
          {cart[data.id].quantity > 1 && (
            <div className="cartDown" onClick={() => cartDown()}>
              {'<'}
            </div>
          )}
          {cart[data.id].quantity === 1 && <div className="cartDownNull"></div>}
          <div className="cartNumber">{cartItem.quantity}</div>
          <div className="cartUp" onClick={() => cartUp()}>
            {'>'}
          </div>
        </div>
        <div className="cartRemove" onClick={() => cartRemove()}>
          remove
        </div>
      </div>
    </div>
  );
};

export default CartItem;
