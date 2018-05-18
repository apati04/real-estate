import React from 'react';
import { NavLink } from 'react-router-dom';
import ProjectList from './ProjectList';
import ProjectCreate from './ProjectCreate';
import ContentLayout from '../layout/ContentLayout';
const ProjectDashboard = () => {
  return (
    <ContentLayout>
      <div style={{ marginTop: '20px' }}>
        <ProjectList />
        <ProjectCreate />
        <hr />
      </div>
    </ContentLayout>
  );
};

export default ProjectDashboard;
