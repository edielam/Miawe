// HomePage.js

import React from 'react';

export default function HomePage() {

  return (
    <div className="home-page">
      <header>
        <h1>Welcome to Community Marketplace!</h1>
      </header>

      <main>
        <p>Browse local services or list your business today!</p>
        <button>Browse Services</button> 
      </main>

      <footer>
        <p>&copy; 2023 Community Marketplace</p>  
      </footer>
    </div>
  );

}