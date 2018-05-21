import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProjectPostsIfNeeded } from '../../actions';
import ContentLayout from '../layout/ContentLayout';
import ProjectsMap from '../maps/projects/ProjectsMap';

class ProjectMapView extends Component {
  render() {
    return (
      <ContentLayout>
        <ProjectsMap />
      </ContentLayout>
    );
  }
}
function mapStateToProps({ postsInProject, projects, mapData }, ownProps) {
  return {
    posts: postsInProject[ownProps.match.params._id] || {},
    project: projects[ownProps.match.params._id] || {}
  };
}
export default connect(mapStateToProps, { fetchProjectPostsIfNeeded })(
  ProjectMapView
);
