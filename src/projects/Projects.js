import React from 'react';

function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <div className="card">
        <h3>Project 1</h3>
        <p>A brief description of the project.</p>
        <a href="/project/1">View more</a>
      </div>
      <div className="card">
        <h3>Project 2</h3>
        <p>A brief description of the project.</p>
        <a href="/project/2">View more</a>
      </div>
    </div>
  );
}

export default Projects;
