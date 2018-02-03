import React, { Component } from "react";
import ProjectListItem from "../components/ProjectListItem";

class CurrentProjects extends Component {
  render() {
    return (
      <div style={{ marginTop: "20px" }}>
        <div>
          <h1>Current Projects</h1>
          <ul className="list-group list-group-flush">
            {/* map through database to display projectlistItem */}
            <ProjectListItem/>
          </ul>
          <button className="btn btn-primary" style={{ marginTop: "20px" }}>ADD NEW PROJECT</button>
        </div>
      </div>
    );
  }
}

export default CurrentProjects;
