import React, { Component } from 'react';
import './App.css';
import { HashRouter  as Router, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './components/Home';
import Publications from './components/Publications';
import CV from './components/cv';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/cv" component={CV} />
          <Route path="/publications" component={Publications} />
        </div>
      </Router>
    );
  }
}

export default App;
