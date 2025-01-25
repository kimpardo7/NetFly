import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/sign-up">Sign Up</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/articles">Articles</Link></li>
          <li><Link to="/categories">Categories</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
} 