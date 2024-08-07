// src/pages/TakeawayMenu.js
import React, { useState, useEffect } from 'react';
import MenuItem from '../components/MenuItem';
import menuData from '../data/menu.json';

const TakeawayMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    setMenu(menuData.takeaway);
  }, []);

  return (
    <div>
      <h2>Takeaway Menu</h2>
      <div className="menu">
        {menu.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default TakeawayMenu;
