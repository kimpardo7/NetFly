import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Example components for different routes
const Home = () => (
  <div>
    <h1>Welcome to Home</h1>
    <p>This is the home page of our React Router v6 example.</p>
  </div>
);

const About = () => (
  <div>
    <h1>About Us</h1>
    <p>Learn more about our project.</p>
  </div>
);

const Contact = () => (
  <div>
    <h1>Contact Us</h1>
    <p>Get in touch with us.</p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App; 