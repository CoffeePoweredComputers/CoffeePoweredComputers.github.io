import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
