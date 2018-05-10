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
        <div className="d-flex justify-content-between">
          <button className="btn btn-raised btn-danger">
            <i className="fas fa-trash-alt" /> DELETE SELECTED PROJECTS
          </button>
        </div>
      </div>
    </ContentLayout>
  );
};

export default ProjectDashboard;
