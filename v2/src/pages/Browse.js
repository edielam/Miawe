// BrowsePage.js

import React from 'react';

export default function BrowsePage() {

  const services = [
    {title: 'Gardening'},
    {title: 'Piano Lessons'},
    {title: 'Math Tutoring'},
    // etc
  ];

  return (
    <div className="browse-page">
      <h1>Browse Services</h1>

      <div className="service-list">
        {services.map(service => (
          <p key={service.title}>{service.title}</p>
        ))}
      </div>
    </div>
  );

}