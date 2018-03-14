import React, { Component } from 'react';
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
        <h1>Dashboard with data-visualization</h1>
      </div>
    );
  }
}

export default connect(null, actions)(Dashboard);
