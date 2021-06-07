import React from 'react';
import './App.css';

import { Route, HashRouter as Router, Link, useHistory } from 'react-router-dom';

import Animals from '../Animals/Animals.jsx';
import Plants from '../Plants/Plants.jsx';
import Home from '../Home/Home.jsx';

function App() {
  const history = useHistory();



  return (
    // Don't do history things before level Router is made on...
    
    <Router>
      <div className="App">
        <h1>SPAs!</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/animals">Animals</Link>
            </li>
            <li>
              <Link to="/plants">Plants</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/animals">
          <Animals />
        </Route>
        <Route path="/plants">
          <Plants />
        </Route>
      </div>
    </Router>
  );
}

export default App;
