// src/pages/IndoorMenu.js
import React, { useState, useEffect } from 'react';
import MenuItem from '../components/MenuItem';
import menuData from '../data/menu.json';

const IndoorMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    setMenu(menuData.indoor);
  }, []);

  return (
    <div>
      <h2>Indoor Menu</h2>
      <div className="menu">
        {menu.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default IndoorMenu;
