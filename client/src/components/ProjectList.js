import React from 'react';
import ProjectListItem from './ProjectListItem';

const CurrentProjects = () => {
  return (
    <div style={{ marginTop: '20px' }}>
      <ul className="list-group list-group-flush">
        <ProjectListItem />
      </ul>
      <button
        className="btn btn-raised btn-primary"
        style={{ marginTop: '20px' }}
      >
        <i className="fas fa-plus-circle" /> ADD NEW PROJECT
      </button>
      <hr />
      <div className="d-flex justify-content-between">
        <button className="btn btn-raised btn-default">
          <i className="fas fa-save" /> SAVE PROJECT
        </button>
        <button className="btn btn-raised btn-danger">
          <i className="fas fa-trash-alt" /> DELETE SELECTED PROJECTS
        </button>
      </div>
    </div>
  );
};

export default CurrentProjects;
