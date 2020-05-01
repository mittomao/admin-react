import React from 'react';
import './../App.css';
import Footer from './Footer';
import Menu from './Menu';
import Main from './Main';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="wrapper">
      <Menu></Menu>
      <Main></Main>
    </div>
    </Router>
  );
}

export default App;
