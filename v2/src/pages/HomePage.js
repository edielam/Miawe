// HomePage.js

import React from 'react';
import '../styles/globalstyles.scss';

export default function HomePage() {

  return (
    <div>
      <header>
          <div class="container">
            
            <div class="logo">
              <img src="logo.png" alt="Community Marketplace"/>
            </div>
        
            <nav>
              <ul>
                <li><a href="#">Browse</a></li>
                <li><a href="#">Sell</a></li>
                <li><a href="#">Support</a></li>
              </ul>  
            </nav>
        
            <div class="auth">
              <button>Log In</button>
              <button>Sign Up</button>
            </div>
          
          </div>
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