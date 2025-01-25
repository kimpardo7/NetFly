import React from 'react';
import { useParams } from 'react-router-dom';

export default function Article() {
  const { id } = useParams();
  
  return (
    <div>
      <h1>Article {id}</h1>
      <p>This is the content of article {id}.</p>
    </div>
  );
} 