import React from 'react';
import './App.css';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar.jsx';
import Home from './components/Home/Home.jsx';
import CV from './components/CV/CV.jsx';
import Blog from './components/Blog/Blog.jsx';
import Research from './components/Research/Research.jsx';
import Teaching from './components/Teaching/Teaching.jsx';
import Lab from './components/Lab/Lab.jsx';
import { Container } from 'react-bootstrap';

function AppContent() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main id="main-content">
        <Container fluid className="px-0 main-content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/research" element={<Research />} />
            <Route path="/lab" element={<Lab />} />
            <Route path="/teaching" element={<Teaching />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </Container>
      </main>
      <footer className="footer mt-auto py-3">
        <Container>
          <div className="text-center text-muted">
            © {new Date().getFullYear()} David H Smith IV
          </div>
        </Container>
      </footer>
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

export default App;
