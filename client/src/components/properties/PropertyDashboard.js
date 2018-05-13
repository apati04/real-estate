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
    console.log('next: ', nextProps);
    // if (nextProps.postsInProject !== this.props.postsInProject) {
    //   const { dispatch, selectedSubreddit } = nextProps
    //   dispatch(fetchPostsIfNeeded(selectedSubreddit))
    // }
  }
  render() {
    console.log('propertyDashboard: ', this.props.userState);
    return (
      <ContentLayout>
        <div>dasdf</div>
        {/* <h2>Project</h2>
        <PropertyList userProperties={this.props.userProperties} />

        <div>
          <Link
            className="btn btn-outline-info"
            to={`/projects/${this.props.match.params._id}/new`}
          >
            <i className="fas fa-plus-circle" /> ADD PROPERTY
          </Link>
        </div> */}
        <div>{this.props.isFetching ? 'loading...' : 'complete'}</div>
      </ContentLayout>
    );
  }
}

function mapStateToProps(state) {
  return { userState: state };
}

export default connect(mapStateToProps, { fetchProjectPostsIfNeeded })(
  PropertyDashboard
);
