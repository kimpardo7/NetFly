import React from 'react';
import { Link } from 'react-router-dom';

export default function Articles() {
  return (
    <div>
      <h1>Articles</h1>
      <ul>
        <li><Link to="/article/1">Article 1</Link></li>
        <li><Link to="/article/2">Article 2</Link></li>
        <li><Link to="/article/3">Article 3</Link></li>
      </ul>
    </div>
  );
} 