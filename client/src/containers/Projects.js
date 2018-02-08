import React, { Component } from "react";
import ProjectList from "./ProjectList";
import { connect } from "react-redux";
import * as actions from "../actions";

class Projects extends Component {

  componentDidMount() {
    this.props.fetchCurrentUserData();
  }

  render() {
    return (
      <div>
        <ProjectList/>
      </div>
    );
  }
}

function mapStateToProps({ currentUser, propData }) {
  return { currentUser };
}

export default connect(mapStateToProps, actions)(Projects);
