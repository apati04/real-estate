import React, { Component } from 'react';
import ContentLayout from '../layout/ContentLayout';
import { connect } from 'react-redux';
import { fetchProjectPostsIfNeeded } from '../../actions';
import { Spin } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import PropertyList from './PropertyList';
class PropertyDashboard extends Component {
  componentDidMount() {
    this.props.fetchProjectPostsIfNeeded(this.props.match.params._id);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.postsInProject !== this.props.postsInProject) {
      this.props.fetchProjectPostsIfNeeded(nextProps.match.params._id);
    }
  }
  renderPosts = () => {
    const { items } = this.props.posts;
    const projectId = this.props.match.params._id;
    return <PropertyList projectId={projectId} posts={items} />;
  };
  render() {
    const { posts, project } = this.props;
    return (
      <ContentLayout>
        {posts.isFetching === false ? (
          <div>
            <h2>Project {project.title}</h2>
            {this.renderPosts()}
            <div>
              <button
                className="btn btn-outline-danger"
                onClick={() => {
                  this.props.history.goBack();
                }}
              >
                <i className="fas fa-undo" /> BACK
              </button>
              <Link
                className="btn btn-outline-info float-right"
                to={`/projects/${this.props.match.params._id}/new`}
              >
                <i className="fas fa-plus-circle" /> ADD PROPERTY
              </Link>
            </div>
          </div>
        ) : (
          <div className='d-flex justify-content-center mt-5'>
            <Spin size='large' tip='Fetching building list...'/>
          </div>
        )}
      </ContentLayout>
    );
  }
}

function mapStateToProps(state, ownProps) {
  console.log('posts: ', state);
  return {
    posts: state.postsInProject[ownProps.match.params._id] || {},
    project: state.projects[ownProps.match.params._id] || {}
  };
}

export default withRouter(
  connect(mapStateToProps, { fetchProjectPostsIfNeeded })(PropertyDashboard)
);
