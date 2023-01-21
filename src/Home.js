import React from 'react';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="header">
        <h1>My Portfolio</h1>
        <nav>
          <a href="/#about">About</a>
          <a href="/#projects">Projects</a>
          <a href="contact">Contact</a>
        </nav>
      </div>
      <div className="about" id="about">
        <h2>About</h2>
        <p>Hello, my name is John Doe and I am a web developer.</p>
      </div>
      <div className="projects" id="projects">
        <h2>Projects</h2>
        <ul>
          <li>Project 1</li>
          <li>Project 2</li>
          <li>Project 3</li>
        </ul>
      </div>
      <div className="contact" id="contact">
        <h2>Contact</h2>
        <p>Email: johndoe@example.com</p>
        <p>Phone: 555-555-5555</p>
      </div>
    </div>
  );
};

export default Homepage;
