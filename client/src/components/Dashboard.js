import React, { Component } from 'react';
import ContentLayout from './layout/ContentLayout';
import DataChart from './DataChart';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Dashboard extends Component {

  componentDidMount() {
    this.props.fetchCurrentUserData();
  }

  render() {

    return (
      <ContentLayout>
        <div id="mapbox"></div>
        <DataChart/>
      </ContentLayout>
    );
  }
}

export default connect(null, actions)(Dashboard);
