import React from 'react';
import ProjectList from './ProjectList';
import ProjectCreate from './ProjectForm/ProjectCreate';
import ContentLayout from '../layout/ContentLayout';
import requireAuth from '../requireAuth';
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

export default requireAuth(ProjectDashboard);
