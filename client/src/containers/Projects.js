import React, { Component } from 'react';
import ContentLayout from '../components/layout/ContentLayout';
import ProjectDashboard from '../components/projects/ProjectDashboard';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Projects extends Component {
  componentDidMount() {
    this.props.fetchCurrentUserData();
  }

  render() {
    return (
      <ContentLayout>
        <div id="mapbox" />
        <h1>CURRENT PROJECTS</h1>
        <ProjectDashboard />
      </ContentLayout>
    );
  }
}

function mapStateToProps({ currentUser }) {
  return { currentUser };
}

export default connect(mapStateToProps, actions)(Projects);
