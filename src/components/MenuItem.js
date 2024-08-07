import React from 'react';

const MenuItem = ({ item }) => (
  <div className="menu-item">
    <img src={item.image} alt={item.name} />
    <h3>{item.name}</h3>
    <p>Alcohol: {item.alcohol}</p>
    <p>Flavor: {item.flavor}</p>
    <p>Price: {item.price}</p>
  </div>
);

export default MenuItem;
