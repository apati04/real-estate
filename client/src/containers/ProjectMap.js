import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import mapboxgl from 'mapbox-gl';
import keys from '../config/keys';
import ContentLayout from '../components/layout/ContentLayout';

mapboxgl.accessToken = keys.mapboxToken;

class ProjectMap extends Component {
  componentDidMount() {
    this.props.fetchCurrentUserData();
    this.props.fetchMapData([ -77.05, 38.889 ]);
  }

  render() {
    const style = {
      map: {
        height: '80vh',
        width: '100%'
      }
    }

    return (
      <ContentLayout>
        <Link to='/projects' className="btn btn-raised btn-danger float-right">BACK</Link>
        <div id='mapbox'
          style={style.map}
        />
      </ContentLayout>
    );
  }
}

export default connect(null, actions)(ProjectMap);
