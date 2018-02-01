import React, { Component } from "react";
import ProjectLists from "../components/ProjectLists";

class CurrentProjects extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Current Projects</h1>
          <ProjectLists/>
          <button className="btn btn-primary">ADD NEW PROJECT</button>
        </div>
      </div>
    );
  }
}

export default CurrentProjects;
