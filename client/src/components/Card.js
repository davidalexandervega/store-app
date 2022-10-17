import React from 'react';

const Card = (props) => {
  const data = props.data;
  const image = require(`../assets/images/id${data.id}.png`);

  return (
    <div className="card">
      <div className="cardImg">
        <img src={image} alt={data.name} />
      </div>
      <div className="cardName">
        {' '}
        {data.name} <b>${data.price}</b>
      </div>
      <div className="cardDesc"> {data.description}</div>
      <div className="cardButton" onClick={() => props.add(data)}>
        add to cart
      </div>
    </div>
  );
};

export default Card;
