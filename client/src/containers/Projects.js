import React, { Component } from "react";
import ProjectList from "../components/ProjectList";
import { connect } from "react-redux";
import * as actions from "../actions";

class Projects extends Component {

  componentDidMount() {
    this.props.fetchCurrentUserData();
  }

  render() {
    return (
      <div className="container-fluid">
        <div id="mapbox"></div>
        <h1>CURRENT PROJECTS</h1>
        <ProjectList/>
      </div>
    );
  }
}

function mapStateToProps({ currentUser }) {
  return { currentUser };
}

export default connect(mapStateToProps, actions)(Projects);
