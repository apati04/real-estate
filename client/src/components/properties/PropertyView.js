import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContentLayout from '../layout/ContentLayout';
import { selectProjectItem, fetchProjectPostsIfNeeded } from '../../actions';
class PropertyView extends Component {
  componentDidMount() {
    this.props.fetchProjectPostsIfNeeded(this.props.match.params._id);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.postsInProject !== this.props.postsInProject) {
      this.props.fetchProjectPostsIfNeeded(nextProps.match.params._id);
    }
  }
  renderImage(post) {
    if (post) {
      return (
        <img
          src={`https://s3-us-west-1.amazonaws.com/rem-bucket-9818/${
            post.imageUrl
          }`}
        />
      );
    }
  }
  renderDetails() {
    const { currentProject, isFetching } = this.props;
    const postId = this.props.match.params.postId;
    if (currentProject.items.length > 0) {
      const post = currentProject.items.find(item => item._id === postId);
      console.log(post);
      return (
        <div>
          <h1>{post.address}</h1>
          <h2>{post.longitute || ''}</h2>
          <h2>{post.latitude || ''}</h2>
          {this.renderImage(post)}
        </div>
      );
    }
    return <div>Loading...</div>;
  }
  render() {
    return (
      <ContentLayout>
        <div>{this.renderDetails()}</div>
        <div>{this.renderImage()}</div>
      </ContentLayout>
    );
  }
}
function mapStateToProps({ postsInProject }, ownProps) {
  const { _id, postId } = ownProps.match.params;
  const fetchedProject = postsInProject[_id] || { isFetching: true, items: [] };
  return { currentProject: fetchedProject };
}
export default connect(mapStateToProps, { fetchProjectPostsIfNeeded })(
  PropertyView
);
