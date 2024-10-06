import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar.jsx';
import Home from './components/Home/Home.jsx';
import Publications from './components/Publications/Publications.jsx';
import CV from './components/CV/cv.jsx';
import Blog from './components/Blog/Blog.jsx';
import ReadingList from './components/ReadingList/ReadingList.jsx';
import Travel from './components/Travel/Travel.jsx';
import Research from './components/Research/research.jsx';
import Teaching from './components/Teaching/teaching.jsx';
//<Route path="/readinglist" component={ReadingList} />
//<Route path="/travel" component={Travel} />

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/cv" component={CV} />
          <Route path="/research" component={Research} />
          <Route path="/teaching" component={Teaching} />
          <Route path="/publications" component={Publications} />
          <Route path="/blog" component={Blog} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
