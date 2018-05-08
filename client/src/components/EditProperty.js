import React, { Component } from 'react';
import ContentLayout from './layout/ContentLayout';
import * as actions from '../actions';
import { connect } from 'react-redux';

class EditProperty extends Component {
  componentDidMount() {
    this.props.fetchCurrentUserData();
  }

  render() {
    return (
      <ContentLayout>
        <h1>Edit Property</h1>
      </ContentLayout>
    );
  }
}

export default connect(null, actions)(EditProperty);
