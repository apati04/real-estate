import React, { Component } from 'react';
import ContentLayout from '../components/layout/ContentLayout';
import DataChart from '../components/DataChart';
import { connect } from 'react-redux';
import * as actions from '../actions';
import PropertyList from '../components/properties/PropertyList';

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchCurrentUserData();
  }

  render() {
    return (
      <ContentLayout>
        <div id="mapbox" />
        <PropertyList />
        <DataChart />
      </ContentLayout>
    );
  }
}

export default connect(null, actions)(Dashboard);
