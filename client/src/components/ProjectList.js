import React from "react";
import ProjectListItem from "./ProjectListItem";
import { Link } from 'react-router-dom';

const CurrentProjects = () => {
  return (
    <div style={{ marginTop: "20px" }}>
      <ul className="list-group list-group-flush">
        {/* map through database to display projectlistItem */}
        <ProjectListItem/>
      </ul>
      <button className="btn btn-raised btn-primary" style={{ marginTop: "20px" }}>ADD NEW PROJECT</button>
      <hr/>
      <div className="d-flex justify-content-between">
        <Link to='/project/new' className="btn btn-raised btn-success">SAVE PROJECT</Link>
        <button className="btn btn-raised btn-danger">DELETE SELECTED PROJECTS</button>
      </div>
    </div>
  );
}

export default CurrentProjects;
