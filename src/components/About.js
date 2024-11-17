import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';

const About = () => {
  const navigate = useNavigate();



  return (
    <div>
      {/* Navbar component */}
      <header>
        <nav id="navbar">
          <div id="logo">
            <img className="logo" src="./logo.jpg" alt="RandomFoodGenerator.com"  />
          </div>
          <button className="home-btn" onClick={() => navigate('/')}>
            Home
          </button>
        </nav>
      </header>

      {/* About Content */}
      <div className="about-container">
        <h1>About Us</h1>
        <p className="about-text">
          Welcome to our Random Food Generator! Our website helps users decide what to eat by suggesting dishes randomly based on chosen filters. Whether you're craving something specific or just feeling adventurous, we've got you covered!
        </p>
        <h2>Project Background</h2>
        <p className="about-text">
          This website was created as a part of a capstone project by Vibhuti Saini and J Harshitha, under the guidance of Prof. Karthika Natrajan. Our goal was to simplify meal selection and make food discovery a fun experience!
        </p>
      </div>
    </div>
  );
};

export default About;
