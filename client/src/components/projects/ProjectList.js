import React from 'react';
import ProjectListItem from './ProjectListItem';

const CurrentProjects = () => {
  return (
    <div style={{ marginTop: '20px' }}>
      <ul className="list-group list-group-flush">
        <ProjectListItem />
      </ul>
    </div>
  );
};

export default CurrentProjects;
