import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Spin } from 'antd';
import { fetchProjectPostsIfNeeded, fetchProjects } from '../../actions';
import ContentLayout from '../layout/ContentLayout';
import ProjectsMap from '../maps/projects/ProjectsMap';

class ProjectMapView extends Component {
  componentDidMount() {
    this.props.fetchProjectPostsIfNeeded(this.props.match.params._id);
    this.props.fetchProjects();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.postsInProject !== this.props.postsInProject) {
      this.props.fetchProjectPostsIfNeeded(nextProps.match.params._id);
    }
  }

  renderMap = () => {
    const {
      posts,
      projects: { title }
    } = this.props;
    if (Array.isArray(posts.items) && posts.items.length > 0) {
      return <ProjectsMap posts={posts} projectName={title} />;
    }
    if (!Array.isArray(posts.items)) {
      return <h1 className='display-4 text-danger'>This project is empty</h1>
    }
    return (
      <div className='d-flex justify-content-center mt-5'>
        <Spin size='large' tip='Fetching map...'/>
      </div>
    );
  };
  render() {
    const { isFetching } = this.props;
    return (
      <ContentLayout>
        {isFetching ? <Spin /> : <Fragment>{this.renderMap()}</Fragment>}
      </ContentLayout>
    );
  }
}
function mapStateToProps({ postsInProject, projects }, ownProps) {
  return {
    posts: postsInProject[ownProps.match.params._id] || {},
    projects: projects[ownProps.match.params._id] || {}
  };
}
export default connect(mapStateToProps, {
  fetchProjectPostsIfNeeded,
  fetchProjects
})(ProjectMapView);
