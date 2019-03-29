import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import Navbar from'./components/NavBar';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div class='parallax'>
        <div id='stars0'></div>
        <div id='stars1'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
      
      <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/about" component={About} />
          </Switch>
      </Router></div>
    );
  }
}

export default App;
