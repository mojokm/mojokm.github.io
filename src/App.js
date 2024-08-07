import React, { useState } from 'react';
import './App.css';

const menuItems = {
  dineIn: [
    { name: 'Cocktail A', image: 'image1.jpg', flavor: 'Fruity', alcoholContent: '12%', price: '$10' },
    { name: 'Cocktail B', image: 'image2.jpg', flavor: 'Spicy', alcoholContent: '15%', price: '$12' },
    // Add 8 more items here
  ],
  takeaway: [
    { name: 'Cocktail C', image: 'image3.jpg', flavor: 'Sweet', alcoholContent: '10%', price: '$8' },
    { name: 'Cocktail D', image: 'image4.jpg', flavor: 'Bitter', alcoholContent: '14%', price: '$11' },
    // Add 8 more items here
  ]
};

function App() {
  const [menuType, setMenuType] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Interactive Drink Menu</h1>
        <div>
          {!menuType ? (
            <>
              <button onClick={() => setMenuType('dineIn')}>Dine In Menu</button>
              <button onClick={() => setMenuType('takeaway')}>Takeaway Menu</button>
            </>
          ) : (
            <>
              <button onClick={() => setMenuType(null)}>Back to Menu</button>
              <div className="menu">
                {menuItems[menuType].map((item, index) => (
                  <div key={index} className="menu-item">
                    <img src={item.image} alt={item.name} />
                    <h2>{item.name}</h2>
                    <p>Flavor: {item.flavor}</p>
                    <p>Alcohol Content: {item.alcoholContent}</p>
                    <p>Price: {item.price}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
