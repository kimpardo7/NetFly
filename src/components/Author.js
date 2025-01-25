import React from 'react';
import { useParams } from 'react-router-dom';

export default function Author() {
  const { name } = useParams();
  
  return (
    <div>
      <h1>Author: {name}</h1>
      <p>This is the profile page of {name}.</p>
    </div>
  );
} 