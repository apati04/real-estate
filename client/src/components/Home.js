import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Home extends Component {

  componentDidMount() {
    this.props.fetchCurrentUserData();
  }

  render() {
    return (
      <div className='container'>
        <div id="mapbox"></div>
        <h1>Home</h1>
      </div>
    );
  }
}

export default connect(null, actions)(Home);
