import React from 'react';
import { Link } from 'react-router-dom';

export default function Categories() {
  return (
    <div>
      <h1>Categories</h1>
      <ul>
        <li><Link to="/category/1">Category 1</Link></li>
        <li><Link to="/category/2">Category 2</Link></li>
        <li><Link to="/category/3">Category 3</Link></li>
      </ul>
    </div>
  );
} 