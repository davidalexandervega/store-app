import React from 'react';
import Card from '../components/Card.js';

const Store = (props) => {
  const catalog = props.catalog;

  return (
    <div id="store">
      {catalog.map((obj) => (
        <Card data={obj} key={obj.id} add={props.add} />
      ))}
    </div>
  );
};

export default Store;
