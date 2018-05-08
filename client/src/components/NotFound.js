import React, { Component } from 'react';
import ContentLayout from './layout/ContentLayout';
import { fetchCurrentUserData } from '../actions';
import { connect } from 'react-redux';

class NotFound extends Component {

  componentDidMount() {
    this.props.fetchCurrentUserData();
  }

  render() {
    return (
      <ContentLayout>
        <h1>PAGE NOT FOUND</h1>
      </ContentLayout>
    );
  }
}

export default connect(null, { fetchCurrentUserData })(NotFound);
