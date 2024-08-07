// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import IndoorMenu from './pages/IndoorMenu';
import TakeawayMenu from './pages/TakeawayMenu';
import './App.css';

const App = () => (
  <Router>
    <nav>
      <Link to="/indoor">Indoor Menu</Link>
      <Link to="/takeaway">Takeaway Menu</Link>
    </nav>
    <Switch>
      <Route path="/indoor" component={IndoorMenu} />
      <Route path="/takeaway" component={TakeawayMenu} />
    </Switch>
  </Router>
);

export default App;
