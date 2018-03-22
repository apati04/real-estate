import React, { Component } from 'react';
import DataChart from './DataChart';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Dashboard extends Component {

  componentDidMount() {
    this.props.fetchCurrentUserData();
  }

  render() {
    const style = {
      container: {
        marginTop: '150px'
      }
    }

    return (
      <div className='container' style={style.container}>
        <div id="mapbox"></div>
        <DataChart/>
      </div>
    );
  }
}

export default connect(null, actions)(Dashboard);
