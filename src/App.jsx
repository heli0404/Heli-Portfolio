import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/Porfolio';
import Contact from './components/Contact';
import About from './components/About';
import Resume from './components/Resume';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import logo from './asset/logo.png';

function App() {
  return (
    <div className="App">
      <header className="header  text-white bg-dark py-3">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="logo">
          <img src={logo} alt="logo" style={{height:'50px'}}/>
          </div>
          <nav>
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/portfolio">Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/resume">Resume</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

  
      </main>

     

      <footer className="footer bg-dark text-white py-3">
        <div className="container text-center">
          <div className="social-icons mb-3">
            <a href="#" className="text-white mx-2"><FaWhatsappSquare /></a>
            <a href="#" className="text-white mx-2"><FaLinkedin /></a>
            <a href="#" className="text-white mx-2"><FaFacebook /></a>
          </div>
          <p className="mb-0">&copy; 2024 HELI NAYANI. All rights reserved.</p>
        </div>
        
      </footer>
    </div>
  );
}

export default App;
