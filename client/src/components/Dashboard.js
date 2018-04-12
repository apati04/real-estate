import React, { Component } from 'react';
import AntLayout from './layout/AntLayout';
import DataChart from './DataChart';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Dashboard extends Component {

  componentDidMount() {
    this.props.fetchCurrentUserData();
  }

  render() {

    return (
      <AntLayout>
        <div id="mapbox"></div>
        <DataChart/>
      </AntLayout>
    );
  }
}

export default connect(null, actions)(Dashboard);
