import React, { Component } from "react";
import ProjectListItem from "../components/ProjectListItem";

class CurrentProjects extends Component {
  render() {
    return (
      <div style={{ marginTop: "20px" }}>
        <h1>Current Projects</h1>
        <ul className="list-group list-group-flush">
          {/* map through database to display projectlistItem */}
          <ProjectListItem/>
        </ul>
        <button className="btn btn-outline-primary" style={{ marginTop: "20px" }}>ADD NEW PROJECT</button>
        <hr/>
        <div className="d-flex justify-content-between">
          <button className="btn btn-outline-success">SAVE PROJECT</button>
          <button className="btn btn-outline-danger">DELETE SELECTED PROJECTS</button>
        </div>
      </div>
    );
  }
}

export default CurrentProjects;
