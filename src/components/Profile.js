import React from 'react';
import { useParams } from 'react-router-dom';

export default function Profile() {
  const { id } = useParams();
  
  return (
    <div>
      <h1>Profile</h1>
      {id ? (
        <p>Viewing profile {id}</p>
      ) : (
        <p>Your profile page</p>
      )}
    </div>
  );
} 