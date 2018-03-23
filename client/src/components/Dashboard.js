import React, { Component } from 'react';
import DataChart from './DataChart';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Dashboard extends Component {

  componentDidMount() {
    this.props.fetchCurrentUserData();
  }

  render() {

    return (
      <div className='container'>
        <div id="mapbox"></div>
        <DataChart/>
      </div>
    );
  }
}

export default connect(null, actions)(Dashboard);
