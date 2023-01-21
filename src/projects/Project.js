import React from 'react';

function Project({ match }) {
  const projectId = match.params.id;

  return (
    <div>
      <h2>Project {projectId}</h2>
      <p>A more detailed description of the project.</p>
      <img src={`/images/project-${projectId}.jpg`} alt="Project Screenshot" />
    </div>
  );
}

export default Project;
