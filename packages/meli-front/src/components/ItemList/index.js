import React from 'react';

const ItemList = ({ items, ...rest }) => {
  return (
    <div>
      {items.map((item, index) => {
        return (
          <div>
            <img src={item.picture} />
            <h1>{`${item.price.currency} ${item.price.amount},${item.price.decimals}`}</h1>
            <h3>{item.title}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
