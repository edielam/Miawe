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

    <section id="hero">
      
      <div className="container">
        <h1>Find services from your community</h1> 
        <p>Support local businesses and professionals in your neighborhood</p>
        <button className="btn">Start Browsing</button>
      </div> 
    </section>
    <section id="featured" className="dot dot--2">
    
      <div className="container">
        <h2>Featured Providers</h2>
        
        <div className="providers">
          <a href="#" className="provider">
            <img src="../assets/images/service3.jpeg" alt="Provider 1"/>
            <h5>Michelle's Tutoring</h5>
            <a href="#"></a>
          </a>
        
          <a href="#" className="provider">
            <img src="src/assets/images/service1.jpeg" alt="Provider 2"/>
            <h5>John's Lawn Care</h5>
            <a href="#"></a>
          </a>

          <a href="#" className="provider">
            <img src="../assets/images/service2.jpeg" alt="Provider 3"/>
            <h5>Michelle's Tutoring</h5>
          </a>
        </div>

        <a href="#" className="btn">View All Providers</a>
        
      </div>
    </section>
    <section id="categories" className="dot dot--4">
    
      <div className="container">

        <h2>Browse by Category</h2>

        <div class="categories">
        
          <a href="#" className="category">
            
            <img src="../assets/images/sv1.jpeg" alt="Home Services"/>
            
            <h3>Home Services</h3>
          </a>

          <a href="#" className="category">
            <img src="../assets/images/sv2.jpeg" alt="Lessons & Tutoring"/>
            <h3>Lessons & Tutoring</h3>
          </a>

          <a href="#" className="category">
            <img src="../assets/images/sv33.jpeg" alt="Event Services"/>
            <h3>Event Services</h3>
          </a>

          <a href="#" className="category">
            <img src="../assets/images/sv4.png" alt="Wellness & Beauty"/>
            <h3>Wellness & Beauty</h3>
          </a>

        </div>
        
      </div>
    </section>
    <section id="benefits" className="dot dot--2">

      <div className="container">
      
        <h2>The Community Marketplace Benefits</h2>
        
        <p>Support small businesses, find trusted professionals, seamless payments</p>

        <div className="benefits">
        
          <div className="benefit">
            <img src="../assets/images/sv3.jpeg" alt="Keep Money Local"/>
            <p>Keep money local - grow your neighborhood economy</p>
          </div>
          <div className="benefit">
            <img src="../assets/images/sv3.jpeg" alt="Find Trusted Pros"/>
            <p>Find experienced, reviewed professionals you can trust</p>  
          </div>

          <div className="benefit">
            <img src="../assets/images/sv3.jpeg" alt="Keep Money Local"/>
            <p>Seamless booking and payments</p>
          </div>
        </div>
        
      </div>
    </section>
    <section id="testimonials" className="dot dot--1">

      <div className="container">
      
        <h2>What Our Customers Are Saying</h2>

        <div className="testimonials">
          <div className="testimonial">
            <img src="../assets/images/service1.jpeg" alt="Customer 1"/>
            <p>"I was able to quickly find an excellent math tutor for my daughter using Community Marketplace. The tutor comes highly reviewed and lives in our neighborhood, which is so convenient"</p>
            <h5>- Jane D.</h5>
          </div>
          <div className="testimonial">
            <img src="../assets/images/service1.jpeg" alt="Customer 1"/>
            <p>"My lawn has never looked better! The landscaper I hired through this site did an incredible job revitalizing my yard for a very fair price."</p>
            <h5>- Andrew P.</h5>
          </div>
          <div className="testimonial">
            <img src="../assets/images/service1.jpeg" alt="Customer 1"/>
            <p>"I used Community Marketplace to find a face painter and balloon artist for my daughter's birthday party. The entertainer kept 20 kids smiling and laughing the entire party! It was the easiest party I've ever thrown."</p>
            <h5>- Sarah B.</h5>
          </div>
        </div>
        /Users/eddie/Documents/dev Eddie/Miawe/v2/src/assets/images/service1.jpeg
      </div>
    </section>
    <section id="cta" className="dot dot--2">

      <div className="container">
      
        <h2>Ready to get started?</h2>
        <button className="btn">Sign Up Now</button>
        
      </div>
    </section>

  </main>
      <footer>
        <p>&copy; 2023 Community Marketplace</p>  
      </footer>
    </div>
  );

}