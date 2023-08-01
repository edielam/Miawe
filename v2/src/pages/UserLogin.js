// UserLoginPage.js

import React, { useState } from 'react';

export default function UserLoginPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // call login API
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>User Login</h1>
      
      <input 
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} 
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}  
      />

      <button type="submit">Login</button>
    </form>
  );

}