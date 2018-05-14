import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContentLayout from '../layout/ContentLayout';
import { selectProjectItem, fetchProjectPostsIfNeeded } from '../../actions';
class PropertyView extends Component {
  componentDidMount() {
    console.log(this.props.postState);
  }

  render() {
    return (
      <ContentLayout>
        <div>propertyview</div>
      </ContentLayout>
    );
  }
}

export default connect(state => ({ postState: state }))(PropertyView);
