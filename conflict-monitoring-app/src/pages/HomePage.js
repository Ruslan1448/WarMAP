// src/pages/HomePage.js
import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="intro">
        <h2>Welcome to Conflict Monitoring</h2>
        <p>Our platform provides real-time monitoring of international conflicts across the globe. Stay informed about the latest developments in conflict zones and understand the context behind each crisis.</p>
      </section>
      
      <section className="features">
        <h3>Features</h3>
        <ul>
          <li>Interactive map with conflict zones highlighted</li>
          <li>Detailed information about each conflict</li>
          <li>Regular updates and notifications</li>
          <li>Historical data and analysis</li>
        </ul>
      </section>
      
      <section className="about">
        <h3>About Us</h3>
        <p>We are a team of dedicated researchers and developers committed to providing accurate and up-to-date information on international conflicts. Our goal is to raise awareness and promote understanding of complex global issues.</p>
      </section>
    </div>
  );
};

export default HomePage;
