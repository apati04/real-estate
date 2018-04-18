import React, { Component } from "react";
import ContentLayout from '../components/layout/ContentLayout';
import ProjectList from "../components/ProjectList";
import { connect } from "react-redux";
import * as actions from "../actions";

class Projects extends Component {

  componentDidMount() {
    this.props.fetchCurrentUserData();
  }

  render() {
    return (
      <ContentLayout>
        <h1>CURRENT PROJECTS</h1>
        <ProjectList/>
      </ContentLayout>
    );
  }
}

function mapStateToProps({ currentUser }) {
  return { currentUser };
}

export default connect(mapStateToProps, actions)(Projects);
