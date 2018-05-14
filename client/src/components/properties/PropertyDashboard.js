import map from 'lodash/map';
import React, { Component } from 'react';
import ContentLayout from '../layout/ContentLayout';
import { connect } from 'react-redux';
import { fetchProjectPostsIfNeeded } from '../../actions';
import { Link } from 'react-router-dom';
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
    if (items.length === 0) {
      return <div>You have no posts.</div>;
    }
    return <PropertyList posts={items} />;
  };
  render() {
    const { isFetching, posts, project } = this.props;
    return (
      <ContentLayout>
        {posts.isFetching === false ? (
          <div>
            <h2>Project {project.title}</h2>
            {this.renderPosts()}
            <div>
              <Link
                className="btn btn-outline-info"
                to={`/projects/${this.props.match.params._id}/new`}
              >
                <i className="fas fa-plus-circle" /> ADD PROPERTY
              </Link>
              <Link
                className="btn btn-outline-danger float-right"
                to={`/projects/${this.props.match.params._id}`}
              >
                <i className="fas fa-undo" /> BACK
              </Link>
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </ContentLayout>
    );
  }
}

function mapStateToProps({ postsInProject, projects }, ownProps) {
  return {
    posts: postsInProject[ownProps.match.params._id] || {},
    project: projects[ownProps.match.params._id] || {}
  };
}

export default connect(mapStateToProps, { fetchProjectPostsIfNeeded })(
  PropertyDashboard
);
