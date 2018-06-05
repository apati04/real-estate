import React from 'react';
import ProjectList from './ProjectList';
import ProjectCreate from './ProjectForm/ProjectCreate';
import ContentLayout from '../layout/ContentLayout';
const ProjectDashboard = () => {
  return (
    <ContentLayout>
      <div style={{ marginTop: '20px' }}>
        <ProjectList />
        <ProjectCreate />
      </div>
    </ContentLayout>
  );
};

export default ProjectDashboard;
